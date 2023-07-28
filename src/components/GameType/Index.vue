<template>
  <div v-title data-title="Online Games on Gugo ——Let's play">
    <div class="irIQZt">
      <div class="sc-1bi8huj-0 iRQTOz">
        <div style="display: contents">
          <nav class="sc-15orno7-0 dDVcIC">
            <div class="sc-11jy73d-3 bfQcDW" @click="goHome">
              <img :src="logo" alt="">
            </div>
            <div class="sc-jaa1t8-0 bwKNQa">
              <a :href="'/#/P/homeIndex'+($route.query.channel ? ('?channel='+$route.query.channel): '')" class="sc-jaa1t8-1 GKasG"><img :src="home" alt=""></a>
              <button class="sc-c36zwn-0 sc-jaa1t8-3 koyGQc fjlzah" @click="searchClick">
                <img :src="souSuo" alt="">
              </button>
            </div>
          </nav>
          <SearchFor :UnfoldAndCollapse="UnfoldAndCollapse" v-if="UnfoldAndCollapse"  @searchClick="searchClick"/>
        </div>
        <div class="top">
          <div class="title">
            <h1>{{gameType}}</h1>
          </div>
        </div>
        <div class="content">
          <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" class="sc-wr3rvk-0 app-item" v-for="(item,index) in gameList" :key="index" @click="switchGame(item)">
            <img :src="item.iconUrl" alt="">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
        <div class="recommend">
          <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" class="sc-wr3rvk-0 app-item" v-for="(item,index) in recommend" :key="index" @click="switchGame(item)">
            <img :src="item.iconUrl" alt="">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="type-list">
      <TypeList whereFrom="4"></TypeList>
    </div>
  </div>
</template>

<script>
import TypeList from '@/components/TypeList.vue';
import SearchFor from '@/components/SearchFor.vue';
import {
  clickGameLog, clickSearchLog,
  determinePcOrMove,
  getJson,
  Observer,
  pageInitLog,
  pageOutLog,
  recentGame,
  shuffle
} from '@/utils/utils.js'
import logo from '@/assets/logo.png'
import home from '@/assets/home.png'
import souSuo from '@/assets/sousuo.png'
export default {
  name: "gameIndex",
  components: {
    TypeList, SearchFor
  },
  data() {
    return {
      logo,home,souSuo,
      gameType: "", // title
      gameList: [], //
      recommend: [], // 推荐
      UnfoldAndCollapse: false, // 展开收起
    }
  },
  created() {

  },
  mounted() {
    document.documentElement.scrollTop = 0
    const { query } = this.$route
    const { gameType } = query || {}
    if (determinePcOrMove() == 1) {
      let { channel } = this.$route.query
      this.$router.push({
        path: '/M/gameType',
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
          Observer('gugoplay_pc_tab').observe(item)
        })
      })
      // 进入页面埋点
      pageInitLog('gugoplay_pc_tab')
      this.getGameList()
    }
  },
  methods:{
    goHome() {
      let { channel } = this.$route.query
      this.$router.push({
        path: '/P/homeIndex',
        query: {
          channel
        }
      },()=>{})
    },
    // 点击搜索
    searchClick() {
      this.UnfoldAndCollapse = !this.UnfoldAndCollapse
      // 点击搜索打点
      clickSearchLog('gugoplay_pc_tab')
    },
    // 获取游戏列表
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
      this.gameList = gameList
      let arr = []
      getJson().map((item)=>{
        arr.push(item)
      })
      this.recommend = shuffle(arr).splice(0,50)
    },
    // 切换游戏
    switchGame (item) {
      clickGameLog('gugoplay_pc_tab', item)
      recentGame(item)
      // this.$router.push({
      //   path: '/P/details',
      //   query: {
      //     gameId: item.gameId
      //   }
      // },()=>{})
    },
  },
  beforeDestroy() {
    // 离开页面埋点
    pageOutLog('gugoplay_pc_tab')
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      document.documentElement.scrollTop = 0
      this.getGameList()
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 1871px) {
  .dDVcIC {
    --offset: -927px !important;
  }
  .type-list{
    width: 1854px!important;
  }
  .irIQZt {
    width: 1854px!important;
    .title{
      width: 424px!important;
    }
  }
}
@media (min-width: 1541px) and (max-width: 1870.9px) {
  .dDVcIC {
    --offset: -762px !important;
  }
  .type-list{
    width: 1524px;
  }
  .irIQZt {
    width: 1524px;
  }
}
@media (min-width: 1321px) and (max-width: 1540.9px) {
  .dDVcIC {
    --offset: -652px !important;
  }
  .type-list{
    width: 1304px;
  }
  .irIQZt {
    width: 1304px;
  }
}
@media (min-width: 1211px) and (max-width: 1320.9px) {
  .dDVcIC {
    --offset: -597px !important;
  }
  .type-list{
    width: 1194px;
  }
  .irIQZt {
    width: 1194px;
  }
}
@media (min-width: 991px) and (max-width: 1210.9px) {
  .dDVcIC {
    --offset: -489px !important;
  }
  .type-list{
    width: 980px;
  }
  .irIQZt {
    width: 980px;
  }
}
@media (min-width: 111px) and (max-width: 990.9px) {
  .dDVcIC {
    --offset: -380px !important;
  }
  .type-list{
    width: 760px;
  }
  .irIQZt {
    width: 760px;
  }
}
@media (max-width: 775px) {
  .dDVcIC {
    --offset: 3px !important;
    left: 0!important;
  }
}
.dDVcIC {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 16px;
  background: rgb(255, 255, 255);
  box-shadow: 0 6px 32px 0 rgba(0, 0, 0, .24);
  border-radius: 16px;
  width: 204px;
  height: 94px;
  flex-direction: row;
  --left: 50%;
  left: var(--left);
  --offset: -487px;
  transform: translate(var(--offset),0);
  .bfQcDW{
    width: 94px;
    height: 42px;
    margin: -2px auto 0px;
    font-size: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .bfQcDW:hover{
    transform: scale(1.05);
  }
  .bwKNQa {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f0f5fc;
    overflow: hidden;
    border-top: 0px;
    border-left: 2px solid #f0f5fc;
    flex-direction: column;
    height: 100%;
    width: 46px;
    border-radius: 0px 16px 16px 0px;
    .GKasG {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #f0f5fc;
      height: 50%;
      width: 100%;
    }
    .GKasG:hover{
      background: #f0f5fc;
    }
    .fjlzah{
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      width: 100%;
      border-top: 1px solid #f0f5fc;
      text-indent: -200vw;
      font-size: 0px;
      background: white;
      img {
        width: 18px;
        height: 18px;
      }
    }
    .fjlzah:hover{
      background: #f0f5fc;
    }
    .koyGQc {
      font-size: 100%;
      font-family: inherit;
      border: 0px;
      padding: 0px;
      background: none;
      cursor: pointer;
    }
    img{
      width: 20px;
      height: 17px;
    }
  }
}
.irIQZt {
  margin: 0 auto;
  flex-grow: 1;
  .iRQTOz {
    justify-content: center;
    margin: 16px auto 0px;
    padding: 0px;
    list-style-type: none;
    .top{
      display: grid;
      grid-template-rows: repeat(auto-fill, 94px);
      grid-gap: 16px;
      grid-auto-flow: dense;
      //justify-content: center;
      grid-template-columns: repeat(6, 94px);
      grid-template-areas: ". . ip0 ip0 ip0 ip0";
    }
    .top::before {
      content: "";
      display: block;
      grid-column-start: span 2;
    }
  }
  .title{
    grid-area: ip0;
    width: 424px;
    height: 94px;
    display: flex;
    border-radius: 16px;
    justify-content: center;
    flex-direction: column;
    background: rgb(255, 255, 255);
    padding: 10px 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    align-items: center;
    box-sizing: border-box;
    h1{
      margin: 0px;
      font: 500 20px/24px Torus, sans-serif;
      color: #002b50;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    //margin-left: 220px;
  }
}
.content, .recommend{
  //overflow: hidden;
  margin-top: 16px;
  .app-item {
    width: 204px;
    height: 204px;
    display: block;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    float: left;
    margin-right: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    border-radius: 16px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 16px;
      //background: white;
    }
  }
  .app-item::after {
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
  .app-item:hover {
    transform: scale(1.04255) translate(0px, -4px);
    transition-duration: 0.3s;
  }
  .app-item:hover::after {
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 12px 0px;
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
  @media (hover: hover) {
    .app-item:hover {
      transform: scale(1.01869) translate(0px, -4px)!important;
    }
    .app-item:hover::after {
      opacity: 1;
      background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.3) 100%);
    }
    .app-item:hover .sc-963fcq-0 {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
}
.content{
  @media (min-width: 1541px) and (max-width: 1870.9px) {
    .app-item:nth-child(7n) {
      margin-right: 0;
    }
  }
  @media (min-width: 1321px) and (max-width: 1540.9px) {
    .app-item:nth-child(6n) {
      margin-right: 0;
    }
  }
}
.recommend{
  margin-top: 32px;
  .app-item {
    width: 94px;
    height: 94px;
  }
  @media (min-width: 1871px) {
    .app-item:nth-child(17n) {
      margin-right: 0;
    }
  }
  @media (min-width: 1541px) and (max-width: 1870.9px) {
    .app-item:nth-child(14n) {
      margin-right: 0;
    }
  }
  @media (min-width: 1321px) and (max-width: 1540.9px) {
    .app-item:nth-child(12n) {
      margin-right: 0;
    }
  }
  @media (min-width: 1211px) and (max-width: 1320.9px) {
    .app-item:nth-child(11n) {
      margin-right: 0;
    }
  }
  @media (min-width: 991px) and (max-width: 1210.9px) {
    .app-item:nth-child(9n) {
      margin-right: 0;
    }
  }
  @media (min-width: 111px) and (max-width: 990.9px) {
    .app-item:nth-child(7n) {
      margin-right: 0;
    }
  }
}
.content:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.recommend:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.type-list{
  margin: 0 auto 0;
}
</style>
