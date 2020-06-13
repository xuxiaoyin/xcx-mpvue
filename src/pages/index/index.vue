<template>
  <div class="appWrap">
    <nav-bar :showIcon="true"></nav-bar>
    <van-tabs class="seatList">
      <van-tab
        v-for="(item, index) in seatList"
        :key="index"
        :title="item"
      >
      </van-tab>
    </van-tabs>
    <!-- <scroll-view scroll-x="true" class="tab-box" :scroll-left="left">
        <block v-for="(item, index) in seatList" :key="item">
            <div class="tab-item" :class="{'active': currentTab === index}" :data-current="index" @click="swichNav(item, index)">{{ item }}</div>
        </block>
    </scroll-view> -->
    <map
      id="myMap"
      style="width: 100%;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      show-location
    ></map>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import location from '../../../static/images/location.png'
export default {
  data () {
    return {
      latitude: 23.099994,
      longitude: 113.32452,
      seatList: ['5座', '7座', '9-12座', '15-18座', '20-29座', '33-45座'],
      // left: 0,
      // index: 0,
      // currentTab: 0,
      window: {}
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
  components: {
    NavBar
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
    // swichNav(item, index) {
    //   this.currentTab = index
    //   this.setLeft()
    // },
    // setLeft() {
    //   const windowWidth = this.window.windowWidth
    //   const pre = windowWidth / this.seatList.length
    //   const left = (this.currentTab - 2) * pre
    //   this.left = left < 0 ? 0 : left
    // }
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
  .seatList
    box-shadow 0px 2px 10px 0px rgba(0, 0, 0, 0.1)
    overflow auto
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
    .van-tabs__scroll
      box-shadow 0px 2px 10px 0px rgba(0, 0, 0, 0.1)
  // .tab-box
  //   position relative
  //   left 0
  //   top 0
  //   z-index 2
  //   width 100%
  //   height 44px
  //   line-height 44px
  //   overflow hidden
  //   white-space nowrap
  //   color #666
  // .tab-item
  //   padding 0 8px
  //   text-align center
  //   display inline-block
  // .active
  //   color: yellow
</style>
<style scoped lang="stylus">
.appWrap
  position relative
  #myMap
    height: 100vh;
</style>
