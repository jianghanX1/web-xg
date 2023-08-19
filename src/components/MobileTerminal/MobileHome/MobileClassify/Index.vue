<template>
  <div id="mobile_classify" v-title :data-title="`Online Games on ${this.$headToUpperCase} ——Let's play`">
    <div class="content">
      <MobileLogo whereFrom="3"></MobileLogo>
      <div v-if="clientWidth < 550.9">
        <div class="eZzVdA" :class="index == 0 ? eZzVdABef : null" v-for="(item,index) in gameList" :key="index">
          <div class="cTVRlj">
            <div class="game-name" v-if="index == 0" style="grid-area: ibx">
              <h1>{{ gameType }}</h1>
            </div>
            <a @click="switchGame(items)" v-for="(items,indexs) in item" :key="indexs" :href="'/#/M/details/'+items.Name.replace(/\s+/g, '')+'?gameId='+items.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="(indexs == 0 && item.length >4) || (indexs == 6 && item.length > 9) ? {gridArea: 'bigIp' + indexs}: null">
              <img v-if="(indexs == 0 && item.length >4) || (indexs == 6 && item.length > 9)" v-lazy="items.iconUrl" alt="" width="204px" height="204px" class="eoBBYj">
              <img v-else v-lazy="items.iconUrl" alt="" width="94px" height="94px" class="eoBBYj">
              <span class="sc-963fcq-0 esaxGV global-cq-title">{{items.Name}}</span>
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="eZzVdA" :class="eZzVdABef">
          <div class="cTVRlj">
            <div class="game-name" style="grid-area: ibx">
              <h1>{{ gameType }}</h1>
            </div>
            <a @click="switchGame(item)" v-for="(item,index) in gameList" :key="index" :href="'/#/M/details/'+item.Name.replace(/\s+/g, '')+'?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="(index == 0 && gameList.length > 5) || (index == 1 && gameList.length > 5) ? {gridArea: 'bigIp' + index}: null">
              <img v-if="(index == 0 && gameList.length > 5) || (index == 1 && gameList.length > 5)" v-lazy="item.iconUrl" alt="" width="204px" height="204px" class="eoBBYj">
              <img v-else v-lazy="item.iconUrl" alt="" width="94px" height="94px" class="eoBBYj">
              <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="eZzVdA2" v-if="!gameList.length">
        <div class="cTVRlj2">
          <div class="game-name" style="grid-area: ibx">
            <h1>{{ gameType }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ClassList :gameTypeList="recommend" :styleType="true" fromWhere="1"></ClassList>
      <BottomList whereFrom="3"></BottomList>
    </div>
  </div>
</template>

<script>
import MobileLogo from '@/components/MobileLogo.vue';
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import ClassList from "@/components/MobileTerminal/MobileHome/ClassList";
import {
  clickGameLog,
  determinePcOrMove,
  Observer,
  pageInitLog,
  pageOutLog,
  recentGame,
  shuffle
} from '@/utils/utils.js'
import { getJson } from "/public/gameList";
export default {
  name: "mobileClassifyIndex",
  components: {
    BottomList, ClassList, MobileLogo
  },
  data() {
    return {
      gameList: [],
      recommend: [],
      gameType: "", // title
      eZzVdABef: 'eZzVdABef',
      clientWidth: 0, // 屏幕宽度
    }
  },
  created() {

  },
  mounted() {
    const { query } = this.$route
    const { gameType } = query || {}
    if (determinePcOrMove() == 2) {
      let { channel } = this.$route.query
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType,
          channel
        }
      },()=>{})
    } else {
      // 获取需要曝光的item
      setTimeout(()=>{
        let itemArr = [...document.getElementsByClassName("sc-wr3rvk-0")]
        itemArr && Array.from(itemArr).map((item)=>{
          Observer('mobile_tab').observe(item)
        })
      })
      // 进入页面埋点
      pageInitLog('mobile_tab')
      window.onresize = () => {
        this.clientWidth = document.body.clientWidth
        this.getGameList()
      }
      this.clientWidth = document.body.clientWidth
      this.getGameList()
      let arr = []
      getJson().map((item)=>{
        arr.push(item)
      })
      this.recommend = shuffle(arr).splice(0,30)
    }
  },
  methods: {
    getGameList() {
      const { query } = this.$route
      const { gameType } = query || {}
      this.gameType = gameType
      let gameArr = getJson()
      let gameList = []
      gameArr && gameArr.map((item)=>{
        if (item[gameType] == 1) {
          gameList.push(item)
        }
      })
      if (this.clientWidth < 550.9) {
        let newArr = [] // 新数组
        let num = Math.ceil(gameList.length / 12)
        for ( let i = 1; i <= num; i++ ) {
          newArr[i - 1] = gameList.splice(0,12)
        }
        this.gameList = newArr
      } else {
        this.gameList = gameList
      }
    },
    // 切换游戏
    switchGame (item) {
      // 打点
      clickGameLog('mobile_tab', item)
      recentGame(item)
    },
  },
  beforeDestroy() {
    // 离开页面埋点
    pageOutLog('mobile_tab')
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      document.getElementById('mobile_classify').scrollTop = 0
      this.getGameList()
      let arr = []
      getJson().map((item)=>{
        arr.push(item)
      })
      this.recommend = shuffle(arr).splice(0,30)
    }
  }
}
</script>

<style lang="less" scoped>
@media (hover: hover){
  .cOWZsC:hover {
    transform: scale(1.01869) translate(0px, -4px)!important;
  }
  .cOWZsC:hover::after {
    opacity: 1!important;
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.3) 100%)!important;
  }
  .cOWZsC:hover .sc-963fcq-0 {
    opacity: 1!important;
    transform: translate(0px, 0px)!important;
  }
}
@media (min-width: 111px) and (max-width: 550.9px) {
  .eZzVdA, .eZzVdA2, .bottom {
    width: 314px;
  }
  .cTVRlj {
    grid-template-areas:
          ". ibx ibx"
          ". bigIp0 bigIp0"
          ". bigIp0 bigIp0"
          ". . ."
          "bigIp6 bigIp6 ."
          "bigIp6 bigIp6 ."
  }
  .cTVRlj2 {
    grid-template-areas:
          ". ibx ibx"
          ". . ."
  }
}
@media (min-width: 551px) and (max-width: 660.9px) {
  .eZzVdA, .eZzVdA2, .bottom {
    width: 534px;
  }
  .cTVRlj {
    --gridTemplateColumns: 5!important;
    grid-template-areas:
        ". ibx ibx bigIp0 bigIp0"
        ". . . bigIp0 bigIp0"
        "bigIp1 bigIp1 . . ."
        "bigIp1 bigIp1 . . ."
  }
  .cTVRlj2 {
    --gridTemplateColumns: 5!important;
    grid-template-areas:
          ". ibx ibx . ."
          ". . . . ."
  }
}
@media (min-width: 661px) and (max-width: 880.9px) {
  .eZzVdA, .eZzVdA2, .bottom {
    width: 644px;
  }
  .cTVRlj {
    --gridTemplateColumns: 6!important;
    grid-template-areas:
        ". ibx ibx . bigIp0 bigIp0"
        "bigIp1 bigIp1 . . bigIp0 bigIp0"
        "bigIp1 bigIp1 . . . ."
  }
  .cTVRlj2 {
    --gridTemplateColumns: 6!important;
    grid-template-areas:
          ". ibx ibx . . ."
          ". . . . . ."
  }
}
@media (min-width: 881px) {
  .eZzVdA, .eZzVdA2, .bottom {
    width: 864px;
    .cTVRlj {
      --gridTemplateColumns: 8!important;
      grid-template-areas:
        ". ibx ibx . . . bigIp0 bigIp0"
        "bigIp1 bigIp1 . . . . bigIp0 bigIp0"
        "bigIp1 bigIp1 . . . . . ."
    }
    .cTVRlj2 {
      --gridTemplateColumns: 8!important;
      grid-template-areas:
          ". ibx ibx . . . . ."
          ". . . . . . . ."
    }
  }
}
#mobile_classify{
  height: 100vh;
  overflow-y: auto;
  .game-name{
    background: white;
    border-radius: 16px;
    padding: 10px 16px;
    box-sizing: border-box;
    h1{
      font: 500 20px/24px Torus, sans-serif;
      color: #002b50;
      margin: 0px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    align-items: center;
    font-size: 21px;
  }
  .content{
    .eZzVdA, .eZzVdA2{
      margin: 0px auto;
      flex-grow: 1;
    }
    .eZzVdABef .cTVRlj::before{
      content: "";
      display: block;
    }
    .eZzVdA2 .cTVRlj2::before{
      content: "";
      display: block;
    }
    .cTVRlj, .cTVRlj2 {
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
    .eoBBYj {
      display: block;
      --minSize: 94px;
      min-width: var(--minSize);
      min-height: var(--minSize);
      border-radius: inherit;
      aspect-ratio: 1 / 1;
    }
    .global-cq {
      container-type: inline-size;
      container-name: tilecq;
    }
    .cOWZsC {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
      user-select: none;
      aspect-ratio: 1 / 1;
    }
    .cASSfo {
      display: block;
      transition: transform .6s cubic-bezier(.25, .1, .25, 1);
      border-radius: 16px;
      position: relative;
    }
    .cASSfo:hover {
      transform: scale(1.04255) translate(0px, -4px);
      transition-duration: 0.3s;
    }
    .cASSfo::after {
      content: "";
      opacity: 0;
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      background: linear-gradient(transparent 25%, rgba(0, 0, 0, 0.3) 100%);
      z-index: 4;
      transition: box-shadow .6s cubic-bezier(.25, .1, .25, 1),opacity .3s cubic-bezier(.25, .1, .25, 1);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
      border-radius: 16px;
      contain: strict;
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
  }
  .bottom{
    margin: 32px auto 0;
  }
}
</style>
