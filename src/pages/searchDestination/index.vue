<template>
  <div class="searchDWrap">
    <nav-bar title="搜索"></nav-bar>
    <div style="margin: 10px; text-align: right;">
      <van-button color="#0AA979" @click="goSureUseCar" size="small">确定</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
export default {
  components: {
    NavBar
  },
  methods: {
    // 跳转确认用车
    goSureUseCar() {
      mpvue.navigateTo({url: '../sureUseCar/main'})
    }
  },
}
</script>
