<template>
  <div class="searchDWrap">
    <nav-bar title="搜索"></nav-bar>
    <div class="searchTop">
      <van-search
        :value="value"
        placeholder="您要去哪"
        show-action
        @cancel="onCancel"
      >
        <view slot="label" class="leftLabel van-hairline--right" @click="goChangeCity">
          <span class="city">{{currentCity}}</span>
          <van-icon name="arrow-down" />
        </view>
      </van-search>
    </div>
    <div class="scrollWrap">
      <scroll-view
        scroll-y
        style="width: 100%; height: 100%"
      >
      <van-cell @click="goSureUseCar" :title="item.title" :label="item.detail" v-for="(item, index) in list" icon="clock" :key="index"/>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      currentCity: '广州',
      list: [
        { title: '广州南站', detail: '广东省广州市番禺区'},
        { title: '番禺广场', detail: '广东省广州市番禺区'},
        { title: '奥园城市', detail: '广东省广州市番禺区'},
        { title: '大石', detail: '广东省广州市番禺区'},
        { title: '市桥', detail: '广东省广州市番禺区'},
        { title: '广州塔', detail: '广东省广州市番禺区'},
        { title: '珠江新城', detail: '广东省广州市番禺区'},
        { title: '体育中心', detail: '广东省广州市番禺区'},
        { title: '广州北站', detail: '广东省广州市番禺区'},
        { title: '广州站', detail: '广东省广州市番禺区'},
        { title: '广州东站', detail: '广东省广州市番禺区'},
      ],
      value: ''
    }
  },
  methods: {
    // 跳转确认用车
    goSureUseCar() {
      mpvue.navigateTo({url: '../sureUseCar/main'})
    },
    // 跳转城市搜索
    goChangeCity() {
      mpvue.navigateTo({url: '../changeCity/main'})
    },
    onCancel() {
      mpvue.navigateBack()
    }
  },
  mounted() {
  },
}
</script>

<style lang="stylus">
  .searchDWrap
    background #fff
    .searchTop
      position relative
      box-shadow 0 5px 5px -5px rgba(0, 0, 0, 0.1)
      z-index 10
      .leftLabel
        display flex
        align-items center
        font-size 14px
        padding-right 5px
        .city
          margin-right 5px
      .van-cell__left-icon-wrap
        margin-left 5px
    .scrollWrap
      position fixed
      top 130px
      bottom 0
      left 0
      right 0
      .van-cell
        align-items center
        .cell-index--van-cell__left-icon
          color #ccc
          font-size 14px
</style>
