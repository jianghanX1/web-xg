<template>
  <div v-title data-title="WEBH5GAME" id="homeId">
    <StartAndEnd>
<!--      <div class="top-text">-->
<!--        <h1>Play Free Online Games On Mobile & Tablet</h1>-->
<!--      </div>-->
      <div>
<!--        <TopBox :topGameList="topGameList"></TopBox>-->
        <AppList :appGameList="appGameList"></AppList>
        <div class="bottom-text">
          <p>关于webh5game</p>
          <h1>免费在线游戏</h1>
          <div class="jXgCKW">
            webh5game是个性化的免费在线游戏探索平台。我们每天都会为您精心挑选最新颖的游戏，保证您玩得尽兴！在这里，您不会感到无聊，因为我们将根据您喜好的游戏为您推荐适合您的兴趣的游戏。如果您是运动爱好者，智能化的运算法则将确保您永远不会错过最新的运动系列游戏；如果您热爱赛车，您将第一时间看到最精彩的赛车游戏。我们的游戏在支持各种设备，这样您随时随地都可以玩！打造最好的网页游戏是我们的使命！
            <br>
            <br>
            在webh5game游戏网站，您可以免费玩高达2万个游戏！我们为您提供在所有设备上都可以玩的最好的免费游戏。每一天您都可以在Poki找到在您的电脑，智能手机和平板电脑上可以玩的最新游戏。使用您的键盘，鼠标或者触屏来控制游戏中的角色，甚至惊险刺激的赛车！感受游戏过程中肾上腺素上升的快感。用您的大脑来解决谜题，用您的时尚直觉来打扮人偶和女孩！我们将精彩的游戏呈现给所有人。这其中有些游戏是由Poki自主开发。
            <br>
            <br>
            webh5game游戏只为您提供所有的好玩免费游戏，最有人气的游戏系列，比如烹饪游戏，足球游戏和打扮游戏，以及根据您最喜爱的电影，电视节目改编的游戏，比如Adventure Time游戏，Inside Out游戏和Descendants游戏。在我们的广泛的游戏集锦中，你还可以找到一些经典的游戏，比如Mahjong, Bubble Shooter和Bejeweled，还有一些新游戏比如Agario,，Uphill Rush 7和 Grindcraft。您可以玩3D游戏，超级好玩的街机游戏以及所有的人气解谜游戏！不管您有什么样的游戏品味，我们都能满足您的胃口。webh5game是适合全家人一起玩的游戏网站。
          </div>
        </div>
      </div>
    </StartAndEnd>
    <div class="smegma" :style="bg" v-if="!smegmaHide">
      <div class="btn" :style="btnBg" @click="smegmaHideClick(count == 0 ? true : false)">
        {{ count == 0 ? countText : count }}
      </div>
      <div :style="advBg">
        <div class="adv">

        </div>
      </div>
      <div class="desc"><img :src="wz" alt=""></div>
    </div>
  </div>
</template>

<script>
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
import TopBox from "@/components/MobileTerminal/MobileHome/TopBox";
import AppList from "@/components/MobileTerminal/MobileHome/AppList";

import shooting from '@/assets/01shooting.jpg';
import car from '@/assets/02car.jpg';
import ball from '@/assets/03ball.jpg';
import girls from '@/assets/04girls.jpg';
import casual from '@/assets/05casu.jpg';
import puzzle from '@/assets/06puzzle.jpg';
import action from '@/assets/07action.jpg';
import racing from '@/assets/08racing.jpg';
import parkour from '@/assets/09parkour.jpg';
import sand from '@/assets/093d.jpg';

import { determinePcOrMove, getJson, shuffle, recentGame } from '@/utils/utils.js'
import bgImg from '@/assets/advertisement/bg.jpg';
import btnBg from '@/assets/advertisement/btn_anniu.png';
import wz from '@/assets/advertisement/wz.png';
import bg2 from '@/assets/advertisement/bg2.png';
export default {
  name: "mobileIndex",
  data() {
    return {
      allGameList: [], // 全部游戏
      topGameList: [], // 移动端头部游戏列表
      appGameList: [], // 中间游戏列表
      gameTypeList: [], // 底部游戏类型
      shooting,
      car,
      ball,
      girls,
      casual,
      puzzle,
      action,
      racing,
      parkour,
      sand,
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
    TopBox,
    AppList,
    // BottomList,
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
      let enterType = sessionStorage.getItem('enterType')
      if (enterType) {
        this.smegmaHide = true
      } else {
        sessionStorage.setItem('enterType', '1')
        this.smegmaHide = false
        this.countdown()
      }

      let jsonArr = getJson() || [] // 原数组

      let allGameList = []
      jsonArr && jsonArr.map((item)=>{
        allGameList.push(item)
      })
      this.allGameList = allGameList
      clearInterval(this.timerDate)
      this.timer(allGameList)
      let arr = jsonArr || [] // 原数组
      let recentGame = []
      if (localStorage.getItem('recentGame')) {
        this.topGameList = JSON.parse(localStorage.getItem('recentGame'))
      } else {
        arr.map((item)=>{
          if (recentGame.length < 5) {
            item.filterStatus = 0 // 筛选状态用来判断点击游戏时替换数组中的位置元素
            recentGame.push(item)
          }
        })
        this.topGameList = recentGame
        localStorage.setItem('recentGame',JSON.stringify(recentGame))
      }
      let newArr = [] // 新数组
      let num = Math.ceil(arr.length / 11)
      for ( let i = 1; i <= num; i++ ) {
        if (i == 1) {
          newArr[i - 1] = arr.splice(0,10)
        } else {
          newArr[i - 1] = arr.splice(0,11)
        }
      }
      console.log(newArr);
      this.appGameList = newArr

      // 监听鼠标
      document.getElementById('homeId').onmousemove = () => {
        this.logoutCount = 0
        this.timer(allGameList)
      }
      // 监听键盘
      document.getElementById('homeId').onkeydown = () => {
        this.logoutCount = 0
        this.timer(allGameList)
      }
      // 监听Scroll
      document.getElementById('homeId').onscroll = () => {
        this.logoutCount = 0
        this.timer(allGameList)
      }
    }
  },
  methods: {
    smegmaHideClick(type) {
      this.smegmaHide = type
      if (type) {
        clearInterval(this.timerCountdown2)
        this.timer(this.allGameList)
      }
    },
    timer(allGameList) {
      if (this.smegmaHide) {
        let arr = []
        allGameList && allGameList.map((item)=>{
          arr.push(item)
        })
        let newArr = shuffle(arr.splice(0,30))
        clearInterval(this.timerDate)
        this.timerDate = setInterval(()=>{
          this.logoutCount++
          console.log(this.logoutCount);
          if (this.logoutCount >= 10) {
            recentGame(newArr[0])
            // window.location.href = '/#/M/details?gameId=' + newArr[0].gameId
          }
        },1000)
      }
    },
    countdown() {
      clearInterval(this.timerCountdown)
      this.timerCountdown = setInterval(()=>{
        this.count -= 1
        console.log(this.count);
        if (this.count <= 0) {
          clearInterval(this.timerCountdown)
          clearInterval(this.timerCountdown2)
          this.countdown2()
        }
      },1000)
    },
    countdown2() {
      // 倒计时结束后5s关闭推荐
      clearInterval(this.timerCountdown2)
      this.timerCountdown2 = setInterval(()=>{
        this.count2 -= 1
        console.log(this.count2);
        if (this.count2 <= 0) {
          clearInterval(this.timerCountdown2)
          this.smegmaHideClick(true)
        }
      },1000)
    }
  },
  beforeDestroy() {
    clearInterval(this.timerDate);
    clearInterval(this.timerCountdown)
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
.bottom-text{
  position: relative;
  margin: 30px;
  padding: 18px 24px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
  p{
    font-weight: bold;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 3px 0px 0px;
  }
  h1{
    font-size: 20px;
    margin: 0px 0px 8px;
    color: #002b50;
  }
  .jXgCKW{
    color: #002b50;
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
