<template>
  <div id="mobile_classify" v-title data-title="GUGOPLAY">
    <div class="info-top">
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
      <div class="occupy"></div>
      <div class="game-name">
        <h1>{{ gameType }}</h1>
      </div>
    </div>
    <div class="content">
      <div class="app-list" v-for="(item,index) in gameList" :key="index">
        <div class="app-list-content">
          <div class="content-middle" v-if="(index + 1) % 2 !== 0">
            <div class="middle-left" v-if="item[0] && item[0].iconUrl">
              <div class="item"><a :href="'/#/M/details?gameId='+item[0].gameId"><img v-lazy="item[0] && item[0].iconUrl" alt=""></a></div>
            </div>
            <div class="middle-right">
              <div class="item-box" v-if="item[1] && item[1].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[1].gameId"><img v-lazy="item[1] && item[1].iconUrl" alt=""></a></div></div>
              <div class="item-box" v-if="item[2] && item[2].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[2].gameId"><img v-lazy="item[2] && item[2].iconUrl" alt=""></a></div></div>
            </div>
            <div></div>
          </div>
          <div class="content-middle" v-if="(index + 1) % 2 === 0">
            <div class="middle-right">
              <div class="item-box" v-if="item[0] && item[0].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[0].gameId"><img v-lazy="item[0] && item[0].iconUrl" alt=""></a></div></div>
              <div class="item-box" v-if="item[1] && item[1].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[1].gameId"><img v-lazy="item[1] && item[1].iconUrl" alt=""></a></div></div>
            </div>
            <div class="middle-left2" v-if="item[2] && item[2].iconUrl">
              <div class="item"><a :href="'/#/M/details?gameId='+item[2].gameId"><img v-lazy="item[2] && item[2].iconUrl" alt=""></a></div>
            </div>
            <div></div>
          </div>
          <div class="content-top" style="margin-top: 0.5625rem">
            <div class="item-box" v-if="item[3] && item[3].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[3].gameId"><img v-lazy="item[3] && item[3].iconUrl" alt=""></a></div></div>
            <div class="item-box" v-if="item[4] && item[4].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[4].gameId"><img v-lazy="item[4] && item[4].iconUrl" alt=""></a></div></div>
              <div class="item-box" v-if="item[5] && item[5].iconUrl"><div class="item"><a :href="'/#/M/details?gameId='+item[5].gameId"><img v-lazy="item[5] && item[5].iconUrl" alt=""></a></div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <ClassList :gameTypeList="recommend" :styleType="true"></ClassList>
    </div>
    <BottomList></BottomList>
  </div>
</template>

<script>
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import ClassList from "@/components/MobileTerminal/MobileHome/ClassList";
import {determinePcOrMove, getJson, shuffle} from '@/utils/utils.js'
import logo from '@/assets/logo.png'
import home from '@/assets/home.png'
export default {
  name: "mobileClassifyIndex",
  components: {
    BottomList, ClassList
  },
  data() {
    return {
      gameList: [],
      recommend: [],
      gameType: "", // title
      logo,
      home
    }
  },
  created() {

  },
  mounted() {
    const { query } = this.$route
    const { gameType } = query || {}
    if (determinePcOrMove() == 2) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType
        }
      },()=>{})
    }
    this.getGameList()
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
      let newArr = [] // 新数组
      let num = Math.ceil(gameList.length / 6)
      for ( let i = 1; i <= num; i++ ) {
        newArr[i - 1] = gameList.splice(0,6)
      }
      this.gameList = newArr

      let arr = []
      getJson().map((item)=>{
        arr.push(item)
      })
      this.recommend = shuffle(arr).splice(0,30)
    }
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      document.getElementById('mobile_classify').scrollTop = 0
      this.getGameList()
    }
  }
}
</script>

<style lang="less" scoped>
#mobile_classify{
  height: 100vh;
  overflow-y: auto;
  .info-top{
    display: flex;
    padding: 0 0.625rem;
    margin-top: 0.5625rem;
    .logo{
      position: fixed;
      z-index: 10;
      top: 0.5625rem;
      background: rgb(255, 255, 255);
      box-shadow: 0 6px 32px 0 rgba(0, 0, 0, .24);
      border-radius: 16px;
      width: 5.875rem;
      height: 5.875rem;
      flex-direction: column;
      --left: 50%;
      left: var(--left);
      transform: translate(var(--offset),0);
      --offset: -9.3333rem;
      .bfQcDW{
        width: 92px;
        height: 35px;
        margin: 15px auto 11px;
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
        border-left: 2px solid #f0f5fc;
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
    .occupy{
      width: 5.875rem;
      height: 5.875rem;
      margin-right: 0.561rem;
    }
    .game-name{
      width: 12.311rem;
      height: 5.875rem;
      background: white;
      border-radius: 16px;
      padding: 10px 16px;
      box-sizing: border-box;
      h1{
        font: 700 1em/1em Torus, sans-serif;
        color: #002b50;
      }
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
      align-items: center;
      font-size: 21px;
    }
  }
  .content{
    .app-list{
      margin-top: 0.5625rem;
      .app-list-content{
        padding: 0 0.625rem;
        .content-top{
          width: 100%;
          box-sizing: border-box;
          .item-box{
            float: left;
            width: 5.875rem;
            height: 5.875rem;
            display: block;
            position: relative;
            background-color: #fff;
            box-shadow: 0 0.125rem 0.375rem 0 rgba(0,0,0,.6);
            border-radius: 0.875rem;
            .item{
              width: 100%;
              height: 100%;
              border-radius: 0.875rem;
              overflow: hidden;
              border: 2px solid #fff;
              img{
                width: 100%;
                height: 100%;
                background: white;
              }
            }
          }
          .item-box:not(:last-child){
            margin-right: 0.561rem;
          }
        }
        .content-top:after{
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        .content-middle{
          margin-top: 0.5625rem;
          margin-bottom: 0.5625rem;
          .middle-left{
            float: left;
            margin-right: 0.561rem;
            width: 12.3125rem;
            height: 12.3125rem;
            .item{
              width: 100%;
              height: 100%;
              border-radius: 0.875rem;
              overflow: hidden;
              border: 2px solid #fff;
              img{
                width: 100%;
                height: 100%;
                background: white;
              }
            }
          }
          .middle-left2{
            float: left;
            margin-left: 0.561rem;
            width: 12.3125rem;
            height: 12.3125rem;
            .item{
              width: 100%;
              height: 100%;
              border-radius: 0.875rem;
              overflow: hidden;
              border: 2px solid #fff;
              img{
                width: 100%;
                height: 100%;
                background: white;
              }
            }
          }
          .middle-right{
            float: left;
            .item-box{
              width: 5.875rem;
              height: 5.875rem;
              display: block;
              position: relative;
              background-color: #fff;
              box-shadow: 0 0.125rem 0.375rem 0 rgba(0,0,0,.6);
              border-radius: 0.875rem;
              .item{
                width: 100%;
                height: 100%;
                border-radius: 0.875rem;
                overflow: hidden;
                border: 2px solid #fff;
                img{
                  width: 100%;
                  height: 100%;
                  background: white;
                }
              }
            }
            .item-box:not(:first-child){
              margin-top: 0.5625rem;
            }
          }
        }
        .content-middle:after{
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
      }
      .adv{
        margin-top: 0.5625rem;
        .adv-title{
          background-color: #f7f7f7;
          line-height: 1.4375rem;
          font-size: .8125rem;
          color: #333;
          text-align: center;
          margin: 0 -0.625rem;
        }
      }
    }
  }
  .recommend{
    margin-top: 16px;
    padding: 0 0.625rem;
  }
}
</style>
