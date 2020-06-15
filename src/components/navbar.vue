<template>
  <div class="navbar" :style="{height: globalData.navHeight + 'px'}" :class="{'shadow': shadow}">
    <div class="navbar-action-wrap" :style="{top: globalData.navTop + 'px'}" v-if="showIcon">
      <span class="icon-company"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
      <div class="selected">
        <van-dropdown-menu active-color="#09BA85">
          <van-dropdown-item :value="active" :options="companyList" />
        </van-dropdown-menu>
      </div>
    </div>
    <div class='navbar-title' :style="{top: globalData.navTop + 'px'}" v-if="!showIcon">
      <van-icon name="arrow-left" @click="back"></van-icon>
      <span>{{title}}</span>
    </div>
    <van-popup :show="showPopup" round position="bottom" custom-style="height: 20%" bind:close="hideRound">
      <ul>
        <li v-for="item in companyList" :key="item">{{item}}</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '双意租车'
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      globalData: {
        navHeight: 0,
        navTop: 0,
        windowHeight: 0
      },
      active: 0,
      companyList: [
        { text: '双意租车', value: 0 },
        { text: '其他租车1', value: 1 },
        { text: '双意租车2', value: 2 },
        { text: '双意租车3', value: 3 },
        { text: '双意租车4', value: 4 },
        { text: '双意租车5', value: 5 }
      ],
      showPopup: false
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      let menuButtonObject = wx.getMenuButtonBoundingClientRect()
      wx.getSystemInfo({
        success: res => {
          console.log(res)
          let statusBarHeight = res.statusBarHeight
          // 胶囊按钮与顶部的距离
          let navTop = menuButtonObject.top
          // 导航高度
          let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2
          this.globalData.navHeight = navHeight
          this.globalData.navTop = navTop
          console.log(this.globalData.navTop)
          console.log(this.globalData.navHeight)
          console.log(666)
          this.globalData.windowHeight = res.windowHeight
        }
      })
    },
    // 选择公司
    clickPopup() {
      console.log(123)
      this.showPopup = true
    },
    // 返回
    back() {
      mpvue.navigateBack()
    }
  }
}
</script>

<style lang="stylus">
.navbar {
  width: 100%;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  flex-shrink: 0;
  background: #fff;
}
.shadow {
  box-shadow: 0px 1rpx 5rpx 0px rgba(0, 0, 0, 0.1);
}

.navbar-title {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 115px;
  padding-right: 115px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: absolute;
  left: 0;
  z-index: 10;
  color: #333;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  .van-icon-arrow-left {
    position: absolute;
    left: 0;
    top: 0;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    font-size: 20px;
  }
}

.textLeft {
  padding-left: 40px;
  text-align: left;
}

.navbar-action-wrap {
  position: absolute;
  height: 32px;
  line-height: 32px;
  display: flex
  align-items: center
  left: 10px;
  z-index: 11;
  vertical-align: top;
  .icon-company {
    position: absolute;
    top: 9px;
  }
}
.selected {
  position relative;
  margin-left: 5px;
  padding-left: 16px;
  .icon {
    position: absolute
    top: 10px
    right: 0
  }

}

</style>
