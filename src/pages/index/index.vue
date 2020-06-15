<template>
  <div class="appWrap home">
    <nav-bar :showIcon="true"></nav-bar>
    <div class="shadow">
      <van-tabs class="seatList">
        <van-tab
          v-for="(item, index) in seatList"
          :key="index"
          :title="item"
        >
        </van-tab>
      </van-tabs>
    </div>
    <van-button round class="userInfo" @click="goUserInfo">
      <span class="icon-user"></span>
    </van-button>
    <van-tabs animated class="btome-tab">
      <van-tab :title="item.title" :class="item.class" v-for="(item, index) in styleFormList" :key="index">
        <style-form :info="item" @showPopup="showPopup" ref="styleForm" @changeStyle="changeStyle"></style-form>
      </van-tab>
    </van-tabs>
    <map
      id="myMap"
      style="width: 100%;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      show-location
    ></map>
    <van-popup :show="show" position="bottom" @close="close">
      <van-datetime-picker
        type="datetime"
        :value="styleFormList[formIndex].files.oldDate"
        :min-date="styleFormList[formIndex].files.minDate"
        :max-date="styleFormList[formIndex].files.maxDate"
        title="选择用车时间"
        @confirm="confirmTime"
        @cancel="close"
      />
    </van-popup>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import location from '../../../static/images/location.png'
import StyleForm from './components/styleForm'
export default {
  components: {
    StyleForm,
    NavBar
  },
  data () {
    return {
      latitude: 23.099994,
      longitude: 113.32452,
      seatList: ['5座', '7座', '9-12座', '15-18座', '20-29座', '33-45座'],
      window: {},
      styleFormList: [
        {
          title: '日租',
          index: 0,
          class: 'dayUser',
          files: {
            minHour: 10,
            maxHour: 20,
            minDate: new Date().getTime(),
            maxDate: new Date(2090, 10, 1).getTime(),
            oldDate: '',
            companypalce: '广州南站',
            currentDate: '',
            placePlaceholder: '请选择目的地'
          }
        },
        {
          title: '自驾',
          index: 1,
          class: 'selfUser',
          files: {
            minHour: 10,
            maxHour: 20,
            minDate: new Date().getTime(),
            maxDate: new Date(2090, 10, 1).getTime(),
            oldDate: '',
            companypalce: '广州南站',
            currentDate: '',
            radio: '1',
            placePlaceholder: '请选择接车地点'
          }
        },
        {
          title: '单接/送',
           index: 2,
          class: 'sendUser',
          files: {
            minHour: 10,
            maxHour: 20,
            minDate: new Date().getTime(),
            maxDate: new Date(2090, 10, 1).getTime(),
            oldDate: '',
            companypalce: '广州南站',
            currentDate: '',
            placePlaceholder: '请选择目的地'
          }
        }
      ],
      show: false,
      formIndex: 0
    }
  },
  computed: {
    markers() {
      return [{
        id: 1,
        latitude: this.latitude,
        longitude: this.longitude,
        iconPath: location,
        width: 25,
        height: 49,
        name: 'T.I.T 创意园'
      }]
    }
  },

  methods: {
    regionchange (e) {
      console.log(e.type)
    },
    markertap (e) {
      console.log(e.detail.markerId)
    },
    controltap (e) {
      console.log(e.detail.controlId)
    },
    getLocation () {
      const _this = this
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          _this.latitude = res.latitude
          _this.longitude = res.longitude
        }
      })
    },
    close() {
      this.show = false
    },
    showPopup(index) {
      this.formIndex = index
      this.show = true
    },
    confirmTime(value) {
      this.styleFormList[this.formIndex].files.currentDate = new Date(value.mp.detail).format("yyyy-MM-dd hh:mm:ss")
      this.close()
    },
    // 改变自驾的送车方式
    changeStyle(val, index) {
      this.styleFormList[index].files.radio = val
    },
    // 跳转个人中心
    goUserInfo() {
      mpvue.navigateTo({url: '../userInfo/main'})
    }
  },
  created () {
    this.getLocation()
    // let app = getApp()
    const that = this;
    wx.getSystemInfo({
      success: function(res){
        that.window = res
      }
    })
  }
}
</script>

<style lang="stylus">
.home
  position relative
  .shadow
    position relative
    z-index 4
    box-shadow 0px 2px 15px 0px rgba(88,88,88,0.28)
  .seatList
    .van-tabs__wrap
      overflow auto
    .van-tabs__line
      z-index 0
      bottom 17px
      width 20px !important
      left 2%
      height 6px
      background #FFFBBE
      border-radius 0
    .van-tab--active
      color #00AF7A
    .van-hairline--top-bottom:after
      border 0
    .van-tabs__scroll--line
      height 100%
  #myMap
    height calc(100vh - 150px)
  .userInfo
    position fixed
    left 20px
    bottom 320px
    z-index 2
    .van-button--normal
      width 45px
      height 45px
      line-height 45px
      box-sizing border-box
      font-size 28px
      box-shadow 0px 2px 10px 0px rgba(89,89,89,0.2)
      border none
  .btome-tab
    position fixed
    width 100%
    height 300px
    overflow hidden
    left 0
    bottom 0
    background #fff
    z-index 3
    box-shadow 0px 2px 15px 0px rgba(88,88,88,0.18);
    border-radius 15px 15px 0px 0px
    .van-tabs__line
      background #09BA85
      height 5px
    .van-tab--active
      color #000
      font-size 16px
    .dayUser
      .van-cell
        padding-top 20px
        padding-bottom 20px
    .icon
      display inline-block
      width 27px
      height 27px
      text-align center
      line-height 27px
      border-radius 50%
    .icon-time
      color #00A0E9
      background rgba(233,248,255,1)
    .icon-origin
      color #1BBE8D
      background rgba(230,255,244,1)
    .icon-last
      color #FF8E42
      background rgba(255,241,235,1)
    .gray
      color #aaa
</style>
