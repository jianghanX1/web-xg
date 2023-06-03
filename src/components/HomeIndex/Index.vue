<template>
  <div class="big" v-title data-title="YIYGAMES">
    <div>
      <div class="top-text">
        <h1>Play Free Online Games On Mobile & Tablet</h1>
      </div>
      <Content></Content>
      <div class="bottom-text">
        Hi! Welcome to yiygames.com! You can enjoy the best free online games which are playable on mobile, tablets and PC every day. Our editors choose the most addicing games developed by our partners, such as car games, 3d games, cartoon games, skill games, arcade game, sport games, racing games and many other kinds of fashion games often. You can play all our games on your mobile phone, tablet, pad without download or installation, just visit yad.com in your browser such as safari, chrome, firefox, etc, and then enjoy playing the games.
        <br>
        So, what are you waiting for? If you feel happy when playing our games, remember to bookmark yiygames.com and share it to your friends. Have fun!
      </div>
<!--      <Bottom />-->
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
import Content from '@/components/HomeIndex/Content';
import BottomNav from '@/components/BottomNav';
import { getGameList, determinePcOrMove, getJson } from '@/utils/utils.js'
export default {
  name: "HomeIndex",
  components: {
    Content,
    BottomNav
  },
  data() {
    return {
      recentGameList: []
    }
  },
  created() {
    if (determinePcOrMove() == 1) {
      this.$router.push({
        path: '/M/homeIndex'
      },()=>{})
    }
  },
  mounted() {
    this.getJson()
    // this.getList()
  },
  methods: {
    getJson() {
      let arr = getJson().splice(0,4)
      this.recentGameList = arr
    },
    getList() {
      getGameList(1).then((res)=>{
        console.log(res);
        const { data } = res || {}
        const { code, data:dataObj } = data || {}
        if (code == 1) {
          let arr = dataObj.splice(0,4)
          this.recentGameList = arr
        } else {
          this.$message.error('数据加载失败')
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    // 点击跳转详情
    iconClick(item) {
      this.$router.push({
        path: '/P/details',
        query: {
          gameId: item.gameId
        }
      },()=>{})
    }
  }
}
</script>

<style lang="less" scoped>
.big{
  //display: flex;
  //min-width: 730px;
  //height: calc(100vh - 85px);
  height: calc(100vh - 56px);
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
    padding: 5px 10px 10px 10px;
    color: #fff;
    width: 100%;
    min-width: 240px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
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
