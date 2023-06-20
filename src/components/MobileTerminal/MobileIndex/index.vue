<template>
  <div v-title data-title="Online Games on Gugo ——Let's play" id="homeId">
    <StartAndEnd>
      <div>
        <AppList :appGameList="appGameList"></AppList>
      </div>
    </StartAndEnd>
<!--    <div class="smegma" :style="bg" v-if="!smegmaHide">-->
<!--      <div class="btn" :style="btnBg" @click="smegmaHideClick(count == 0 ? true : false)">-->
<!--        {{ count == 0 ? countText : count }}-->
<!--      </div>-->
<!--      <div :style="advBg">-->
<!--        <div class="adv">-->

<!--        </div>-->
<!--      </div>-->
<!--      <div class="desc"><img :src="wz" alt=""></div>-->
<!--    </div>-->
  </div>
</template>

<script>
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
// import TopBox from "@/components/MobileTerminal/MobileHome/TopBox";
import AppList from "@/components/MobileTerminal/MobileHome/AppList";

import { determinePcOrMove, getJson } from '@/utils/utils.js'
import bgImg from '@/assets/advertisement/bg.jpg';
import btnBg from '@/assets/advertisement/btn_anniu.png';
import wz from '@/assets/advertisement/wz.png';
import bg2 from '@/assets/advertisement/bg2.png';
export default {
  name: "mobileIndex",
  data() {
    return {
      allGameList: [], // 全部游戏
      appGameList: [], // 中间游戏列表
      gameTypeList: [], // 底部游戏类型
      logoutCount: 0, // 长时间未操作
      timerDate: null, // 定时器
      advBg: {
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: '300px'
      },
      bg: {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      btnBg: {
        backgroundImage: `url(${btnBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      count: 5, // 倒计时按钮
      countText: 'CLOSE', // 倒计时按钮
      timerCountdown: null, // 倒计时
      count2: 5, // 倒计时按钮
      timerCountdown2: null, // 倒计时
      wz,
      smegmaHide: false, // 隐藏蒙层
    }
  },
  components: {
    StartAndEnd,
    // TopBox,
    AppList,
    // BottomText
  },
  created() {

  },
  mounted() {
    if (determinePcOrMove() == 2) {
      this.$router.push({
        path: '/P/homeIndex'
      },()=>{})
    } else {
      // let enterType = sessionStorage.getItem('enterType')
      // if (enterType) {
      //   this.smegmaHide = true
      // } else {
      //   sessionStorage.setItem('enterType', '1')
      //   this.smegmaHide = false
      //   this.countdown()
      // }

      let jsonArr = getJson() || [] // 原数组

      let allGameList = []
      jsonArr && jsonArr.map((item)=>{
        allGameList.push(item)
      })
      this.allGameList = allGameList
      // clearInterval(this.timerDate)
      // this.timer(allGameList)
      let arr = jsonArr || [] // 原数组
      let newArr = [] // 新数组
      let num = Math.ceil(arr.length / 12)
      console.log(num);
      for ( let i = 1; i <= num; i++ ) {
        if (i == 1) {
          newArr[i - 1] = arr.splice(0,11)
        } else {
          newArr[i - 1] = arr.splice(0,12)
        }
      }
      console.log(newArr);
      this.appGameList = newArr

      // // 监听鼠标
      // document.getElementById('homeId').onmousemove = () => {
      //   this.logoutCount = 0
      //   this.timer(allGameList)
      // }
      // // 监听键盘
      // document.getElementById('homeId').onkeydown = () => {
      //   this.logoutCount = 0
      //   this.timer(allGameList)
      // }
      // // 监听Scroll
      // document.getElementById('homeId').onscroll = () => {
      //   this.logoutCount = 0
      //   this.timer(allGameList)
      // }
    }
  },
  methods: {
    // smegmaHideClick(type) {
    //   this.smegmaHide = type
    //   if (type) {
    //     clearInterval(this.timerCountdown2)
    //     this.timer(this.allGameList)
    //   }
    // },
    // timer(allGameList) {
    //   if (this.smegmaHide) {
    //     let arr = []
    //     allGameList && allGameList.map((item)=>{
    //       arr.push(item)
    //     })
    //     let newArr = shuffle(arr.splice(0,30))
    //     clearInterval(this.timerDate)
    //     this.timerDate = setInterval(()=>{
    //       this.logoutCount++
    //       console.log(this.logoutCount);
    //       if (this.logoutCount >= 10) {
    //         recentGame(newArr[0])
    //         // window.location.href = '/#/M/details?gameId=' + newArr[0].gameId
    //       }
    //     },1000)
    //   }
    // },
    // countdown() {
    //   clearInterval(this.timerCountdown)
    //   this.timerCountdown = setInterval(()=>{
    //     this.count -= 1
    //     console.log(this.count);
    //     if (this.count <= 0) {
    //       clearInterval(this.timerCountdown)
    //       clearInterval(this.timerCountdown2)
    //       this.countdown2()
    //     }
    //   },1000)
    // },
    // countdown2() {
    //   // 倒计时结束后5s关闭推荐
    //   clearInterval(this.timerCountdown2)
    //   this.timerCountdown2 = setInterval(()=>{
    //     this.count2 -= 1
    //     console.log(this.count2);
    //     if (this.count2 <= 0) {
    //       clearInterval(this.timerCountdown2)
    //       this.smegmaHideClick(true)
    //     }
    //   },1000)
    // }
  },
  beforeDestroy() {
    // clearInterval(this.timerDate);
    // clearInterval(this.timerCountdown)
  }
}
</script>

<style lang="less" scoped>
.top-text{
  text-align: center;
  padding: 10px 5px 5px;
  margin-top: 2.5555rem;
  h1{
    width: 100%;
    font-size: 14px;
    color: #fff;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
  }
}
#homeId{
  height: 100vh;
  overflow-y: auto;
  position: relative;
  .smegma{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .btn{
      width: 10.3888rem;
      height: 3.5rem;
      margin: 42% auto 0;
      text-align: center;
      line-height: 3.3rem;
      font-size: 2rem;
      color: #874000;
    }
    .adv-bg{
      margin-top: 1rem;
    }
    .desc{
      padding: 0.5rem 0.8rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
