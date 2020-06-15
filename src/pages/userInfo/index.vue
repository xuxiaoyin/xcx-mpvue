<template>
  <div class="userInfo">
    <nav-bar title="个人中心"></nav-bar>
    <div class="mainWrap">
      <div class="card nameInfo">
        <van-image
          round
          width="60px"
          height="60px"
          :src="src"
          class="img"
        />
        <div class="textInfo">
          <h2 class="name">雷子</h2>
          <p class="company">星橙技术服务有限公司</p>
        </div>
      </div>

      <div class="card">
        <van-cell is-link icon="todo-list-o" title="我的订单"></van-cell>
        <van-cell is-link icon="comment-o" title="我的评价"></van-cell>
        <van-cell is-link icon="closed-eye" title="密码设置"></van-cell>
        <van-cell is-link icon="question-o" title="法律条款"></van-cell>
        <van-cell is-link icon="shrink" title="分享" :border="false"></van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import src from '../../../static/images/userInfo.png'
export default {
  components: { NavBar },
  data() {
    return {
      src: src
    }
  }
}
</script>

<style lang="stylus">
  .userInfo
    .mainWrap
      padding 0 10px
      .card
        overflow hidden
        margin 12px 0
        background #fff
        border-radius 10px
        &.nameInfo
          display flex
          padding 30px
          align-items center
          .img
            margin-right 18px
          .textInfo
            .name
              margin-bottom 5px
              font-size 18px
              color rgba(51,51,51,1)
            .company
              line-height 24px
              font-size 14px
              color rgba(102,102,102,1)
        .van-cell
          padding-top 20px
          padding-bottom 20px
</style>
