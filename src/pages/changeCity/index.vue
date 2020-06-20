<template>
  <div class="changeCity">
    <div class="topBar" ref="topBar">
      <nav-bar title="切换城市"></nav-bar>
    </div>
    <div class="indexList">
      <van-index-bar :indexList="indexList" :sticky-offset-top="navHeight+4" highlight-color="#0AA979">
        <view v-for="(item, index) in placeList" :key="index">
          <van-index-anchor :index="item.title" />
          <van-cell :title="place" v-for="(place, _index) in item.list" :key="_index"/>
        </view>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import area from '@/common/data/area.js'
import pinyin from 'pinyin';
export default {
  components: { NavBar },
  data() {
    return {
      placeObject: {},
      placeList: [],
      indexList: [],
      navHeight: ''
    }
  },
  mounted() {
    this.getInfo()
    this.getList()
  },
  methods: {
    getInfo () {
      let menuButtonObject = wx.getMenuButtonBoundingClientRect()
      wx.getSystemInfo({
        success: res => {
          let statusBarHeight = res.statusBarHeight
          // 导航高度
          let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2
          this.navHeight = navHeight
          console.log(this.navHeight)
        }
      })
    },
    getList() {
      Object.values(area.city_list).forEach(item => {
        const pinyinArr = pinyin(item, { style: pinyin.STYLE_FIRST_LETTER })
        const key = pinyinArr[0].join('').toUpperCase()
        if (!this.placeObject[key]) {
          this.placeObject[key] = []
        }
        this.placeObject[key].push(item)
      })

      this.indexList = Object.keys(this.placeObject).sort()

      this.indexList.forEach(item => {
        this.placeList.push({ title:item, list: this.placeObject[item] })
      })
      console.log(this.placeList)
      this.$nextTick(() => {
        setTimeout(() => {
          console.log(this.$refs.topBaroffsetHeight)
        }, 1000)
      })
    }
  }
}
</script>

<style lang="stylus">
.changeCity
  .topBar
    position relative
    z-index 10
    padding-bottom 5px
    position fixed
    top 0
    left 0
    right 0
    background rgba(243,245,246,1)
  .van-index-bar__index
    font-weight normal
    line-height 1.6
    font-size 14px
</style>
