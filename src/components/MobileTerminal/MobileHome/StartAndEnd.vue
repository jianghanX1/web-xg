<template>
  <div>
    <div class="nav-bar" :style="bottomHide == false ? 'position: relative' : null" @click="game">
      <a :href="'/#/M/homeIndex'">BIOH5</a>
      <div class="left" @click.stop="positionMenuClick"><i class="el-icon-menu"></i></div>
      <div class="right"></div>
      <div class="position" :style="positionMenu ? 'display: block' : 'display: none'" @mouseleave="mouseleave">
        <div @click.stop="newGamesClick(item.type)" v-for="(item,index) in gameTypeList" :key="index">{{ item.type }}</div>
      </div>
    </div>
    <slot></slot>
    <div class="end" v-if="bottomHide == false ? false : true">
      <a @click="privacyClick">Privacy</a>
      <a @click="contactClick">Contact us</a>
    </div>
  </div>
</template>

<script>
import {getGameTypeList} from "@/utils/utils";

export default {
  name: "StartAndEnd",
  props: ["bottomHide"],
  data() {
    return {
      gameTypeList: getGameTypeList() || [], // 游戏分类
      positionMenu: false, // 菜单展示
    }
  },
  mounted() {
    console.log(this.bottomHide);
  },
  methods: {
    game() {
      this.$router.push({
        path: '/M/homeIndex'
      },()=>{})
    },
    positionMenuClick() {
      this.positionMenu = !this.positionMenu
    },
    mouseleave() {
      this.positionMenu = false
    },
    newGamesClick(gameType) {
      this.positionMenu = false
      this.$router.push({
        path: '/M/gameType',
        query: {
          gameType
        }
      },()=>{})
    },
    privacyClick() {
      let pathInfo = this.$router.resolve({
        path: '/privacy',
        query: {
          routeType: 1, // 不走App.vue文件的判断
        }
      })
      window.open(pathInfo.href, '_blank')
    },
    contactClick() {
      let pathInfo = this.$router.resolve({
        path: '/contactUs',
        query: {
          routeType: 1, // 不走App.vue文件的判断
        }
      })
      window.open(pathInfo.href, '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar{
  height: 2.8125rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0.125rem 0.1875rem 0 rgba(0,16,63,.4);
  background: linear-gradient(to bottom,#48a0c9 0%,#29638b 100%);
  z-index: 5;
  font-size: 1.125rem;
  text-align: center;
  line-height: 2.8125rem;
  color: #ffffff;
  font-weight: bold;
  //overflow: hidden;
  a{
    text-decoration: none;
    color: #ffffff;
  }
  .left{
    float: left;
    padding: 0 10px;
    cursor: pointer;
    font-size: 32px;
    width: 40px;
  }
  .right{
    float: right;
    padding: 0 10px;
    cursor: pointer;
    font-size: 32px;
    width: 40px;
    height: 100%;
  }
  .position{
    position: absolute;
    top: 2.8125rem;
    left: 0;
    background: linear-gradient(to bottom,#48a0c9 0%,#29638b 100%);
    min-width: 185px;
    z-index: 99;
    //text-align: left;
    font-size: 14px;
    font-weight: 400;
    div{
      width: 100%;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      overflow: hidden;
      border-bottom: #427799 1px solid;
      background: #307199;
      padding: 3px 0;
      color: #fff;
      box-sizing: border-box;
    }
    div:hover{
      cursor: pointer;
      background-color: rgba(0,0,0,.1);
    }
  }
}
.end{
  margin-top: 1rem;
  height: 1.75rem;
  background-color: #103455;
  text-align: center;
  color: #fff;
  font-size: .5625rem;
  line-height: 1.75rem;
  overflow: hidden;
  a {
    text-decoration: none;
  }
}
.end>a:not(:last-child) {
  margin-right: 1rem;
}
.end>a {
  color: #fff;
  position: relative;
}
.end>a:not(:last-child):before {
  content: "";
  height: 0.8125rem;
  width: 0.0625rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -0.65rem;
}
</style>
