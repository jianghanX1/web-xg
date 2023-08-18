<template>
  <div class="big" v-title data-title="HAHAMINI" id="homeId">
    <Navigation></Navigation>
    <div>
      <div class="top-text">
        <h1>Play Free Online Games On Mobile & Tablet</h1>
      </div>
      <Content></Content>
      <div style="padding: 30px 60px">
        <div class="bottom-text">
          Have you ever heard about new generation gaming?Html5 games online are exactly designed for this purpose. You should get to know these fantastic gaming opportunities we propose you at hahamini.com !
          <br>
          Let us introduce you something you always wanted to try. Games html5 for any taste are so different and entertaining that you will never forget about this gaming experience.
          <br>
          New strategy games and fancy arcade no download - whatever you will find online. If you want to leave the stress and to feel a free source of energy, then you should definitely try one of new html5 online games.
          <br>
          You are always free to switch to another game or to play differently. It depends on your taste and manners in online games.
        </div>
      </div>
    </div>
    <BottomNav></BottomNav>
<!--    <div class="recent-game">-->
<!--      <div class="title">Recent game</div>-->
<!--      <div class="content">-->
<!--        <div class="item" v-for="(item,index) in recentGameList" :key="index" @click="iconClick(item)"><img v-lazy="item.iconUrl" alt=""></div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import Content from '@/components/HomeIndex/Content';
import BottomNav from '@/components/BottomNav';
import { determinePcOrMove, recentGame } from '@/utils/utils.js'
import { getJson } from '/public/gameList'
export default {
  name: "HomeIndex",
  components: {
    Navigation,
    Content,
    BottomNav
  },
  data() {
    return {
      recentGameList: [],
      logoutCount: 0, // 长时间未操作
      timerDatePC: null, // 定时器
    }
  },
  created() {

  },
  mounted() {
    if (determinePcOrMove() == 1) {
      this.$router.push({
        path: '/M/homeIndex'
      },()=>{})
    } else {
      this.getJson()
    }
  },
  methods: {
    getJson() {
      let jsonArr = getJson()

      // 随机跳转
      // let allGameList = []
      // jsonArr && jsonArr.map((item)=>{
      //   allGameList.push(item)
      // })
      // clearInterval(this.timerDatePC)
      // this.timer(allGameList)

      let arr = jsonArr || [] // 原数组
      let recentGame = []
      let recentGamePc = []
      if (localStorage.getItem('recentGame')) {
        JSON.parse(localStorage.getItem('recentGame')) && JSON.parse(localStorage.getItem('recentGame')).map((item)=>{
          if (recentGamePc.length < 4) {
            recentGamePc.push(item)
          }
        })
        this.recentGameList = recentGamePc
      } else {
        // 移动端展示五条
        arr.map((item)=>{
          if (recentGame.length < 5) {
            item.filterStatus = 0 // 筛选状态用来判断点击游戏时替换数组中的位置元素
            recentGame.push(item)
          }
        })

        // pc端展示四条
        recentGame && recentGame.map((item)=>{
          if (recentGamePc.length < 4) {
            recentGamePc.push(item)
          }
        })
        this.recentGameList = recentGamePc
        localStorage.setItem('recentGame',JSON.stringify(recentGame))
      }
      // // 监听鼠标
      // document.getElementById('homeId').onmousedown = () => {
      //   this.logoutCount = 0
      //   this.timer(allGameList)
      // }
      // // 监听键盘
      // document.getElementById('homeId').onkeydown = () => {
      //   this.logoutCount = 0
      //   this.timer(allGameList)
      // }
      // console.log(document.getElementById('homeId'));
      // // 监听Scroll
      // document.getElementById('homeId').onscroll = () => {
      //   this.logoutCount = 0
      //   this.timer(allGameList)
      // }
    },
    // timer(allGameList) {
    //   let arr = []
    //   allGameList && allGameList.map((item)=>{
    //     arr.push(item)
    //   })
    //   let newArr = shuffle(arr.splice(0,30))
    //   clearInterval(this.timerDatePC)
    //   this.timerDatePC = setInterval(()=>{
    //     this.logoutCount++
    //     console.log(this.logoutCount);
    //     if (this.logoutCount >= 10) {
    //       recentGame(newArr[0])
    //       window.location.href = '/#/P/details?gameId=' + newArr[0].gameId
    //     }
    //   },1000)
    // },
    // 点击跳转详情
    iconClick(item) {
      recentGame(item)
      this.$router.push({
        path: '/P/details',
        query: {
          gameId: item.gameId
        }
      },()=>{})
    }
  },
  beforeDestroy() {
    // clearInterval(this.timerDatePC);
    this.timerDatePC = null
  }
}
</script>

<style lang="less" scoped>
.big{
  height: 100vh;
  overflow-y: auto;
  .top-text{
    text-align: center;
    padding: 10px 5px 5px;
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
    clear: both;
    padding: 30px;
    color: #fff;
    width: 100%;
    min-width: 240px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-size: 14px;
    line-height: 35px;
    border-radius: 10px;
    background-color: #024ee8;
    position: relative;
  }
}
@media screen and (max-width: 840px){
  .recent-game {
    display: none;
  }
}
.recent-game{
  width: 200px;
  margin-top: 20px;
  margin-right: 10px;
  .title{
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    background: #F83123;
  }
  .content{
    width: 200px;
    .item{
      cursor: pointer;
      width: 92px;
      height: 92px;
      display: block;
      float: left;
      border-radius: 6px;
      overflow: hidden;
      border: 2px solid #fff;
      box-shadow: 0 4px 8px rgba(34, 62, 89, .5);
      margin: 3px 0 0 3px;
      img{
        width: 100%;
        height: 100%;
        background: white;
      }
    }
  }
}
</style>
