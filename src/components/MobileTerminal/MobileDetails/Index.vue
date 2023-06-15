<template>
  <div v-title :data-title="gameName + ' - ' + 'Play' + ' ' + gameName + ' Online at gugoplay.com'">
    <div class="mobile-details" :style="playValue ? {display: 'none'} : {display: 'block'}" id="mobile-details">
      <StartAndEnd :bottomHide="false">
<!--        <div class="info-top">-->
<!--          <a :href="'/#/M/homeIndex'">-->
<!--            <div class="logo">-->
<!--              <div class="sc-11jy73d-3 bfQcDW">-->
<!--                <img :src="logo" alt="">-->
<!--              </div>-->
<!--              <div class="sc-jaa1t8-0 bwKNQa">-->
<!--                <img :src="home" alt="">-->
<!--              </div>-->
<!--            </div>-->
<!--          </a>-->
<!--          <div class="occupy"></div>-->
<!--          <div class="game-name">-->
<!--            <div style="margin: auto 0">-->
<!--              <h1>{{ gameName }}</h1>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="game-play">-->
<!--          <div class="game-img-box" @click="playClick">-->
<!--            <div class="svg"><img :src="play" alt=""></div>-->
<!--            <h2>PLAY NOW</h2>-->
<!--            <img class="img" :src="iconUrl" alt="">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="details-recommend-box" :style="playValue1 ? {display: 'none'} : {display: 'block'}">-->
<!--        <p class="recommend-title">Recommendations for similar games</p>-->
<!--        <div class="recommend-list">-->
<!--          <ClassList styleType="1" :gameTypeList="gameTypeList"></ClassList>-->
<!--        </div>-->
<!--      </div>-->


        <a :href="'/#/M/homeIndex'">
          <div class="logo">
            <div class="sc-11jy73d-3 bfQcDW">
              <img :src="logo" alt="">
            </div>
            <div class="sc-jaa1t8-0 bwKNQa">
              <img :src="home" alt="">
            </div>
          </div>
        </a>
        <div class="sc-10l37ae-0 eZzVdA">
          <div class="sc-1o65d6p-0 hZDmFe">
            <div class="game-name" style="grid-area: ibx">
              <h1>{{ gameType }}</h1>
            </div>
            <div class="game-play" style="grid-area: bigIp0">
              <div class="game-img-box" @click="playClick">
                <div class="svg"><img :src="play" alt=""></div>
                <h2>PLAY NOW</h2>
                <img class="img" :src="iconUrl" alt="">
              </div>
            </div>
            <div class="class-item" @click="detailsClick(item)" v-for="(item,index) in gameTypeList" :key="index">
              <a :href="'/#/M/details?gameId='+item.gameId+'&jiaocha=1'">
                <img v-lazy="item.iconUrl" alt="">
                <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="bottom">
          <BottomList></BottomList>
          <div>
            <div class="bottom-text">
              <nav class="sc-1oa7ili-0 gmEuRM">
                <ul>
                  <li><a href="/">GAME</a></li>
                  <li>{{ gameType }}</li>
                </ul>
              </nav>
              <header class="sc-1v3c8lr-2 kGpygg">
                <h2 class="sc-1v3c8lr-3 iBLcO">{{ gameName }}</h2>
              </header>
              <div class="sc-1v3c8lr-6 kXVnFE">
                <span class="sc-1v3c8lr-8 bbPKoC"><i class="el-icon-star-on"></i> {{gameScore}}</span>
              </div>
              <div class="sc-1v3c8lr-9 jXgCKW">
                {{ description ? description : "Play best game on GUGOPLAY!" }}
              </div>
              <ul class="sc-g8xdfn-0 jOvOhG sc-1v3c8lr-4 durvAn">
                <li v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)">{{item.type}}</li>
              </ul>
            </div>
          </div>
        </div>
      </StartAndEnd>
    </div>
    <div class="app-module" :style="playValue ? {display: 'block'} : {display: 'none'}" v-if="playValue">
      <div class="app-iframe">
        <div class="iframe-box">
          <iframe id="gameIframe" :src="playUrl" width="100%" height="100%"></iframe>
        </div>
        <div class="iframe-back" @click="backClick"><img :src="goBack" alt=""></div>
        <a class="tap-game" @click="detailsClick(item)" v-for="(item,index) in tapGameList" :key="index" :href="'/#/M/details?gameId='+item.gameId+'&jiaocha=1'"><img class="img-tap-game" :src="item.iconUrl" alt=""></a>
      </div>
      <div class="app-promote">
        <div class="promote-list">
          <div class="item" @click="detailsClick(item)" v-for="(item,index) in gameShuffleList" :key="index"><a :href="'/#/M/details?gameId='+item.gameId+'&jiaocha=1'"><img :src="item.iconUrl" alt=""></a></div>
        </div>
      </div>
    </div>
    <div class="is-top" :style="isTop ? {display: 'block'} : {display: 'none'}" @click="isTopClick">
      <img :src="topping" alt="">
    </div>
  </div>
</template>
<script>
import goBack from '@/assets/goBack.png';
import topping from '@/assets/topping.png';
import play from '@/assets/play.png';
import logo from '@/assets/logo.png'
import home from '@/assets/home.png'
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
import {shuffle, determinePcOrMove, setMeta, getJson, recentGame} from "@/utils/utils";
import { show_newAfg_preroll } from '../../../../webh5sdk';
export default {
  name: "mobileDetailsIndex",
  components: {
    StartAndEnd, BottomList
  },
  data() {
    return {
      tapGameList: [], // 闪标列表
      gameName: '', // 游戏名称
      gameType: '', // 游戏类型
      iconUrl: '', // 游戏icon
      description: '', // 游戏简介
      playUrl: '', // 游戏url
      typeList: [], // 游戏分类
      gameTypeList: [], // 游戏列表
      gameShuffleList: [], // 随机列表
      playValue: false,
      playValue1: false,
      isTop: false,
      timer: null, // 定时器
      goBack,
      topping,
      play,
      logo,
      home,
      gameScore: "", // 游戏评分
    }
  },
  created() {
    const { query } = this.$route
    const { gameId } = query
    if (determinePcOrMove() == 2) {
      this.$router.push({
        path: '/P/details',
        query: {
          gameId
        }
      },()=>{})
    }
  },
  mounted() {
    // setTimeout(()=>{
    //   window.addAds()
    // },800)
    document.getElementById('mobile-details').addEventListener("scroll",this.handleScroll, true)
    this.getJson()
  },
  methods: {
    getJson() {

      let game_type = [{},{},{},{},{},{},{},{},{},{}]
      game_type && game_type.map(()=>{
        game_type[0].type = "SHOOTING"
        game_type[1].type = "CAR"
        game_type[2].type = "BALL"
        game_type[3].type = "GIRLS"
        game_type[4].type = "CASUAL"
        game_type[5].type = "PUZZLE"
        game_type[6].type = "ACTION"
        game_type[7].type = "RACING"
        game_type[8].type = "PARKOUR"
        game_type[9].type = "3D"
      })
      this.typeList = game_type || []

      // 游戏评分
      let score = Math.random()*0.8 + 4.2
      this.gameScore = score.toFixed(1)




      const { query } = this.$route
      const { gameId } = query || {}
      let arr = getJson() || []
      let newArr = []
      let gameInfo = {}
      arr.map((item)=>{
        if (item.gameId == gameId) {
          gameInfo = item
        }
        newArr.push(item)
      })
      this.gameName = gameInfo.Name
      this.gameType = gameInfo.Type
      this.iconUrl = gameInfo.iconUrl
      this.description = gameInfo.desc
      this.playUrl = gameInfo.Url
      this.gameTypeList = shuffle(newArr).splice(0,30)
      setMeta(`${gameInfo.Name},${gameInfo.Name} Online,${gameInfo.Name} for free`,`${gameInfo.Name} is a Games`)
    },

    // 跳转分类
    classClick(gameType) {
      this.$router.push({
        path: '/M/gameType',
        query: {
          gameType
        }
      },()=>{})
    },
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop = document.getElementById('mobile-details').scrollTop
      // console.log(scrollTop);
      if (scrollTop > 0) {
        this.isTop = true
      } else {
        this.isTop = false
      }
    },
    // 置顶
    isTopClick () {
      document.getElementById('mobile-details').scrollTop = 0
    },
    // 开始游戏
    playClick() {
      // 广告
      show_newAfg_preroll().show_newAfg_preroll()

      this.playValue = true
      let arr = []
      this.gameTypeList.map((item)=>{
        arr.push(item)
      })
      let shuffle30 = shuffle(arr).splice(0,30) || []
      this.gameShuffleList = shuffle30.splice(0,5)
      this.tapGameList = shuffle30.splice(0,1)
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        let newArr = []
        this.gameTypeList.map((item)=>{
          newArr.push(item)
        })
        let shuffleArr = shuffle(newArr).splice(0,30) || []
        this.gameShuffleList = shuffleArr.splice(0,5)
      },10000)
      clearInterval(this.timer2)
      this.timer2 = setInterval(()=>{
        let newArr = []
        this.gameTypeList.map((item)=>{
          newArr.push(item)
        })
        let shuffleArr = shuffle(newArr).splice(0,30) || []
        this.tapGameList = shuffleArr.splice(0,1)
      },6000)
    },
    // 返回
    backClick() {
      this.playValue = false
      clearInterval(this.timer)
      clearInterval(this.timer2)
    },
    // 跳转详情
    detailsClick(item) {
      recentGame(item)
      clearInterval(this.timer)
      clearInterval(this.timer2)
      // this.$router.push({
      //   path: '/M/details',
      //   query: {
      //     gameId: item.gameId
      //   }
      // },()=>{})
      this.playValue = false
    }
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      document.getElementById('mobile-details').scrollTop = 0
      this.getJson()
    }
  }
}
</script>

<style lang="less" scoped>
@media (hover: hover){
  .class-item:hover {
    transform: scale(1.01869) translate(0px, -4px)!important;
  }
  .class-item:hover .sc-963fcq-0 {
    opacity: 1!important;
    transform: translate(0px, 0px)!important;
  }
}
@media (min-width: 111px) and (max-width: 550.9px){
  .eZzVdA, .bottom {
    width: 314px;
  }
  .hZDmFe {
    grid-template-areas:
        ". ibx ibx"
        "bigIp0 bigIp0 bigIp0"
        "bigIp0 bigIp0 bigIp0"
        "bigIp0 bigIp0 bigIp0"
        ". . ."
        ". . .";
  }
}
@media (min-width: 111px) and (max-width: 770.9px) {
  .game-play{
    height: 314px;
  }
}
@media (min-width: 551px) and (max-width: 660.9px) {
  .game-name{
    display: none!important;
  }
  .logo{
    --offset: -268px!important;
  }
  .eZzVdA, .bottom {
    width: 534px;
  }
  .hZDmFe {
    --gridTemplateColumns: 5!important;
    grid-template-areas:
        ". bigIp0 bigIp0 bigIp0 ."
        ". bigIp0 bigIp0 bigIp0 ."
        ". bigIp0 bigIp0 bigIp0 ."
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . ."
  }
}
@media (min-width: 661px) and (max-width: 880.9px) {
  .logo{
    --offset: -322px!important;
  }
  .eZzVdA, .bottom {
    width: 644px;
  }
  .hZDmFe {
    --gridTemplateColumns: 6!important;
    grid-template-areas:
        ". ibx ibx ibx . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . ."
  }
}
@media (min-width: 661px) {
  .game-play {
    height: 424px;
  }
}
@media (min-width: 881px) {
  .logo{
    --offset: -432px!important;
  }
  .eZzVdA, .bottom {
    width: 864px;
    .hZDmFe {
      --gridTemplateColumns: 8!important;
      grid-template-areas:
        ". ibx ibx ibx . . . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . . . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . . . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . . . ."
        "bigIp0 bigIp0 bigIp0 bigIp0 . . . ."
    }
  }
}
.mobile-details{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 3;
  //background-color: #0054ff;
  .eZzVdA {
    margin: 0px auto;
    flex-grow: 1;
  }
  .hZDmFe {
    display: grid;
    grid-template-rows: repeat(auto-fill, 94px);
    grid-gap: 16px;
    grid-auto-flow: dense;
    justify-content: center;
    margin: 16px auto 0px;
    padding: 0px;
    list-style-type: none;
    --gridTemplateColumns: 3;
    grid-template-columns: repeat(var(--gridTemplateColumns),94px);
  }
  .hZDmFe::before {
    content: "";
    display: block;
  }
  .logo{
    position: fixed;
    z-index: 10;
    top: 16px;
    background: rgb(255, 255, 255);
    box-shadow: 0 6px 32px 0 rgba(0, 0, 0, .24);
    border-radius: 16px;
    width: 94px;
    height: 94px;
    flex-direction: column;
    --left: 50%;
    left: var(--left);
    transform: translate(var(--offset),0);
    --offset: -157px;
    .bfQcDW{
      width: 72px;
      height: 28px;
      margin: 15px auto 11px;
      font-size: 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .bwKNQa {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 2px solid #f0f5fc;
      overflow: hidden;
      border-top: 0px;
      flex-direction: column;
      border-top: 2px solid #f0f5fc;
      width: 100%;
      height: 40px;
      border-radius: 0px 0px 16px 16px;
      img{
        width: 25px;
        height: 22px;
      }
    }
  }
  .game-name{
    background: white;
    border-radius: 16px;
    padding: 10px 16px;
    box-sizing: border-box;
    word-break: break-all;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    align-items: flex-start;
    font-size: 21px;
    h1{
      font: 700 1em/1em Torus, sans-serif;
      color: #002b50;
    }
  }
  .game-play{
    display: flex;
    justify-content: center;
    .game-img-box{
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
      position: relative;
      cursor: pointer;
      .svg{
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 50%;
        border-radius: 100px;
        background-color: rgb(255, 255, 255);
        height: 64px;
        width: 64px;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
        transform: translate(-50%, -50%);
        animation: 4s ease-in-out 0s infinite normal both running scaleDelay;
        box-sizing: border-box;
        img{
          width: 24px;
          height: 24px;
        }
      }
      h2{
        color: rgb(255, 255, 255);
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: 40px;
        z-index: 2;
        text-shadow: rgba(0, 0, 0, 0.24) 0px 2px 6px;
        transform: translateX(-50%);
        word-break: break-all;
        font-size: 1.4em;
      }
      .img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0px;
        left: 0px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.5);
        object-fit: contain;
      }
    }
    .game-img-box::after {
      content: "";
      position: absolute;
      z-index: 1;
      right: 0px;
      bottom: 0px;
      left: 0px;
      height: 100%;
      border-radius: 16px;
      background: linear-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.3) 100%);
    }
  }
  .class-item{
    float: left;
    width: 94px;
    height: 94px;
    display: block;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 0;
    img{
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
  }
  .esaxGV {
    position: absolute;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 6px;
    color: rgb(255, 255, 255);
    font: 700 var(--tileFontSize,12px)/1.3 'Proxima Nova',sans-serif;
    text-align: center;
    z-index: 6;
    transition: transform .3s cubic-bezier(.25, .1, .25, 1) .1s,opacity .3s cubic-bezier(.25, .1, .25, 1) .1s;
    transform: translate(0px, 8px);
    opacity: 0;
    -webkit-font-smoothing: antialiased;
    pointer-events: none;
  }
  .adv{
    margin: 0.75rem auto 0;
  }
  .bottom{
    margin: 0 auto;
  }
  .bottom-text{
    position: relative;
    margin: 24px 0px;
    padding: 18px 24px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    .gmEuRM ul {
      overflow: hidden;
      margin: 0px;
      padding: 0px;
      color: var(--grey-1);
      list-style: none;
      text-overflow: ellipsis;
    }
    .gmEuRM li {
      display: inline;
      color: #5d6b84;
      a{
        text-decoration: none;
        color: #5d6b84;
      }
    }
    .gmEuRM li:nth-of-type(2)::before {
      content: "›";
      margin: 0px 4px;
      color: var(--grey-1);
      font-size: 13px;
    }
    .kGpygg {
      margin: 8px 0px 8px;
      h2{
        margin: 0px;
        font: 700 24px Torus, sans-serif;
        color: #002b50;
      }
    }
    .kXVnFE{
      margin: 4px 0px;
      .bbPKoC {
        display: inline-block;
        font-size: 12px;
        line-height: 22px;
        font-weight: bold;
        padding: 0px 8px;
        color: #5d6b84;
        background: #f0f5fc;
        border-radius: 10px;
        text-transform: uppercase;
        height: 20px;
        margin-right: 4px;
      }
    }
    .jXgCKW{
      color: #002b50;
      font: 400 16px/24px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
    }
    .durvAn {
      margin-top: 12px;
      margin-bottom: 8px;
    }
    .jOvOhG li {
      display: inline-block;
      margin: 4px 4px 0px 0px;
      padding: 0px 10px;
      border: 2px solid #bac9de;
      border-radius: 100px;
      color: #bac9de;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
.app-module {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #127DAB;
  overflow: hidden;
  .app-iframe{
    width: 100%;
    height: calc(100vh - 4.375rem);
    .iframe-box{
      width: 100%;
      height: 100%;
      padding: 0 2px 2px 0;
      box-sizing: border-box;
      #gameIframe{
        border: 1px solid #cccccc;
      }
    }
  }
}
.is-top{
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  position: fixed;
  bottom: 5.375rem;
  right: 0.625rem;
  box-shadow: 0.125rem 0 0.3125rem rgb(0 0 0/30%);
  border-radius: 50%;
  //background: #ffffff;
  z-index: 3;
  text-align: center;
  /deep/.el-icon-top{
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
@media screen and (orientation: portrait){
  .app-iframe {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
    .iframe-back{
      position: absolute;
      left: 0;
      top: 1.125rem;
      //box-shadow: 0 0.125rem 0 0.0625rem rgb(52 126 223);
      border-radius: 0 1.125rem 1.125rem 0;
      overflow: hidden;
      width: 3.375rem;
      height: 2.1875rem;
      //background-color: #589df7;
      text-align: center;
      /deep/ .el-icon-arrow-left{
        font-size: 2rem;
        color: #ffffff;
        line-height: 2.1875rem;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .tap-game{
      .img-tap-game{
        left: 0;
        z-index: 110;
        top: 20%;
        height: 50px;
        width: 50px;
        position: fixed;
        -webkit-border-radius: 25px;
        border-radius: 25px;
        opacity: .1;
        overflow: hidden;
        animation-name: breath;
        animation-duration: 1200ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        -webkit-animation-name: breath;
        -webkit-animation-duration: 1200ms;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
      }
    }
    @keyframes breath {
      0%  {opacity: .1;}
      50% {opacity: 1;}
      100% {opacity: .1;}
    }
  }
  .app-promote {
    height: 4.375rem;
    overflow: hidden;
    background-color: #127DAB;
    padding: 0.5rem 0;
  }
  .app-promote .promote-list {
    white-space: nowrap;
    overflow: hidden;
    font-size: 0;
  }
  .app-promote .promote-list .item{
    display: inline-block;
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 0.42rem;
    border-radius: 0.875rem;
    color: #333;
    overflow: hidden;
    background-color: #e4e4e4;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (orientation: landscape){
  .app-module{
    display: flex!important;
    flex-direction: row-reverse;
  }
  .app-iframe {
    width: calc(100vw - 4.375rem);
    height: 100%!important;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
    .iframe-back{
      text-align: center;
      position: absolute;
      left: 0;
      top: 0.633803rem;
      //box-shadow: 0 0.0714rem 0 0.0357rem rgb(52 126 223);
      border-radius: 0 0.6429rem 0.6429rem 0;
      overflow: hidden;
      width: 1.9286rem;
      height: 1.25rem;
      //background-color: #589df7;
      /deep/ .el-icon-arrow-left{
        font-size: 1rem;
        color: #ffffff;
        line-height: 1rem;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .tap-game{
      .img-tap-game{
        left: 2.171831rem;
        z-index: 110;
        top: 2.333803rem;
        height: 50px;
        width: 50px;
        position: fixed;
        -webkit-border-radius: 25px;
        border-radius: 25px;
        opacity: .1;
        overflow: hidden;
        animation-name: breath;
        animation-duration: 1200ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        -webkit-animation-name: breath;
        -webkit-animation-duration: 1200ms;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
      }
    }
    @keyframes breath {
      0%  {opacity: .1;}
      50% {opacity: 1;}
      100% {opacity: .1;}
    }
  }
  .app-promote {
    height: 100%;
    width: 2.353521rem;
    overflow: hidden;
    background-color: #127DAB;
  }
  .app-promote .promote-list {
    height: 100%;
    overflow: hidden;
  }
  .app-promote .promote-list .item{
    width: 1.971831rem;
    height: 1.971831rem;
    margin: 0.23rem auto 0;
    display: block;
    border-radius: 0.492958rem;
    overflow: hidden;
    font-size: .422535rem;
    color: #333;
    background-color: #e4e4e4;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
