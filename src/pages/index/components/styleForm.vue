<template>
  <div class="styleForm" @click="ceshi">
    {{info}}
    <van-cell @click="showPopup">
      <view slot="title">
        <span class="icon-time icon"></span>
        <span class="van-cell-text" :class="{'gray': !currentDate}">
          {{currentDate ? currentDate : '请选择用车时间'}}
        </span>
      </view>
    </van-cell>
    <van-cell @click=ceshi>
      <view slot="title">
        <span class="icon-origin icon"></span>
        <span class="van-cell-text">
          {{info.files.companypalce}}
        </span>
      </view>
    </van-cell>
    <van-cell>
      <view slot="title">
        <span class="icon-last icon"></span>
        <span class="van-cell-text gray">
          请选择目的地
        </span>
      </view>
    </van-cell>

    <van-popup :show="show" position="bottom" @close="close">
      <van-datetime-picker
        type="datetime"
        :value="info.files.oldDate"
        :min-date="info.files.minDate"
        :max-date="info.files.maxDate"
        title="选择用车时间"
        @confirm="confirmTime"
        @cancel="close"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      show: false,
      currentDate: ''
    }
  },
  methods: {
    // 点击开始时间
    showPopup() {
      console.log(123)
      this.show = true
    },
    close() {
      this.show = false
    },
    confirmTime(value) {
      this.currentDate = new Date(value.mp.detail).format("yyyy-MM-dd hh:mm:ss")
      this.close()
    },
    ceshi() {
      console.log(this.info)
    }
  },
}
</script>

<style lang="stylus">

</style>
