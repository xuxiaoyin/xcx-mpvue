<template>
  <div class="styleForm">
    <van-cell v-if="info.title === '自驾'">
      <van-radio-group :value="radio" @change="onChange">
        <van-radio name="1" checked-color="#1BBE8D" icon-size="14px">送车上门</van-radio>
        <van-radio name="2" checked-color="#1BBE8D" icon-size="14px">自提</van-radio>
      </van-radio-group>
    </van-cell>
    <van-cell @click="showPopup">
      <view slot="title">
        <span class="icon-time icon"></span>
        <span class="van-cell-text" :class="{'gray': !currentDate}">
          {{currentDate ? currentDate : '请选择用车时间'}}
        </span>
      </view>
    </van-cell>
    <van-cell v-if="isShow">
      <view slot="title">
        <span class="icon-origin icon"></span>
        <span class="van-cell-text">
          {{info.files.companypalce}}
        </span>
      </view>
    </van-cell>
    <van-cell v-if="isShow" @click="goSearch">
      <view slot="title">
        <span class="icon-last icon"></span>
        <span class="van-cell-text gray">
          {{info.files.placePlaceholder}}
        </span>
      </view>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  computed: {
    currentDate() {
      return this.info.files.currentDate
    },
    radio() {
      return this.info.files.radio ? this.info.files.radio : ''
    },
    isShow() {
      let flag = true
      if (this.info.files.radio && this.info.files.radio ==='2') {
        flag = false
      }
      return flag
    }
  },
  methods: {
    // 点击开始时间
    showPopup() {
      this.$emit('showPopup', this.info.index)
    },
    onChange(e) {
      this.$emit('changeStyle', e.mp.detail, this.info.index)
    },
    // 选择目的地
    goSearch() {
      mpvue.navigateTo({url: '../searchDestination/main'})
    }
  },
}
</script>

<style lang="stylus">
.styleForm
  ._van-radio-group
    display flex
    justify-content space-between
    align-items center
    ._van-radio
      flex 1
</style>
