<template>
  <div class="big-box">
    <div style="display: contents" @click="goHome">
      <nav class="sc-15orno7-0 dDVcIC">
        <div class="sc-11jy73d-3 bfQcDW">
          <img :src="logo" alt="">
        </div>
        <div class="sc-jaa1t8-0 bwKNQa">
          <img :src="home" alt="">
        </div>
      </nav>
    </div>
    <div class="sc-10l37ae-0 irIQZt">
      <div class="sc-13nflho-1 jMBaZr">
        <div style="display: contents">
          <ul class="sc-al88rd-0 brZJOk">
            <li v-for="(item,index) in bigImg" :key="index">
              <a :href="'/#/M/details?gameId='+item.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="{gridArea: 'bigIp' + index}">
                <img :src="item.iconUrl" alt="" width="314px" height="314px" class="eoBBYj">
                <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div style="display: contents">
          <a v-for="(item,index) in centreImg" :key="index" :href="'/#/M/details?gameId='+item.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="{gridArea: 'ip' + (index + 3)}">
            <img :src="item.iconUrl" alt="" width="204px" height="204px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
        <div style="display: contents">
          <a v-for="(item,index) in smallImg" :key="index" :href="'/#/M/details?gameId='+item.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq">
            <img v-lazy="item.iconUrl" alt="" width="94px" height="94px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="type-list">
      <TypeList></TypeList>
      <div class="bottom-text">
        <div class="jXgCKW">
          Hi! Welcome to GUGOPLAY.com!
          <br><br>
          You can enjoy the best free online games which are playable on mobile, tablets and PC every day.
          <br><br>
          Our editors choose the most addicing games developed by our partners, such as car games, 3d games, cartoon games, skill games, arcade game, sport games, racing games and many other kinds of fashion games often.
          You can play all our games on your mobile phone, tablet, pad without download or installation, just visit GUGOPLAY.com in your browser such as safari, chrome, firefox, etc, and then enjoy playing the games.
          <br><br>
          So, what are you waiting for? If you feel happy when playing our games, remember to bookmark GUGOPLAY.com and share it to your friends. Have fun!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeList from '@/components/TypeList.vue';
import { getJson, recentGame } from '@/utils/utils.js'
import logo from '@/assets/logo.png'
import home from '@/assets/home.png'
export default {
  name: "contentIndex",
  components: {
    TypeList
  },
  data() {
    return {
      bigImg: [], // 大图片
      centreImg: [], // 中图片
      smallImg: [], // 小图片
      logo,
      home
    }
  },
  mounted() {
    this.getJson()
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      },()=>{})
    },
    getJson() {
      let arr = getJson()
      this.bigImg = arr.splice(0,3)
      this.centreImg = arr.splice(0,12)
      this.smallImg = arr
    },
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
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      this.getJson()
      // this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 1871px) {
  .dDVcIC {
    --offset: -936px!important;
    width: 204px!important;
    flex-direction: row!important;
  }
  .bfQcDW {
    width: 94px!important;
    height: 42px!important;
    margin: -2px auto 0px!important;
  }
  .bwKNQa {
    border-top: 0px!important;
    border-left: 2px solid #f0f5fc!important;
    flex-direction: column!important;
    height: 100%!important;
    width: 46px!important;
    border-radius: 0px 16px 16px 0px!important;
  }
  .type-list{
    width: 1854px;
  }
  .irIQZt {
    width: 1854px;
    .jMBaZr {
      --gridTemplateColumns: 17;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 . . . . . . . . ip5 ip5 ip6 ip6"
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4 bigIp1 bigIp1 bigIp1 . ip5 ip5 ip6 ip6"
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4 bigIp1 bigIp1 bigIp1 ip7 ip7 . ip8 ip8"
        "ip9 ip9 bigIp2 bigIp2 bigIp2 . . . . bigIp1 bigIp1 bigIp1 ip7 ip7 . ip8 ip8"
        "ip9 ip9 bigIp2 bigIp2 bigIp2 . . ip14 ip14 . ip10 ip10 . . . . ."
        ". . bigIp2 bigIp2 bigIp2 . . ip14 ip14 . ip10 ip10 . ip12 ip12 . ."
        ". ip11 ip11 . . . . . . . . . . ip12 ip12 . ."
        ". ip11 ip11 . . . ip13 ip13 . . . . . . . . ."
        ". . . . . . ip13 ip13 . . . . . . . . .";
    }
    .jMBaZr::before {
      grid-column-start: span 2;
    }
  }
}
@media (min-width: 1541px) and (max-width: 1870.9px) {
  .dDVcIC {
    --offset: -771px!important;
  }
  .type-list{
    width: 1524px;
  }
  .irIQZt {
    width: 1524px;
    .jMBaZr {
      --gridTemplateColumns: 14;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 . . . . . ip4 ip4"
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 . bigIp1 bigIp1 bigIp1 . ip4 ip4"
        "ip5 ip5 bigIp0 bigIp0 bigIp0 . . . bigIp1 bigIp1 bigIp1 . ip6 ip6"
        "ip5 ip5 . . . bigIp2 bigIp2 bigIp2 bigIp1 bigIp1 bigIp1 . ip6 ip6"
        "ip7 ip7 . ip8 ip8 bigIp2 bigIp2 bigIp2 . . ip9 ip9 . ."
        "ip7 ip7 . ip8 ip8 bigIp2 bigIp2 bigIp2 . . ip9 ip9 . ."
        ". . . . ip11 ip11 . . . . . . ip13 ip13"
        "ip14 ip14 . . ip11 ip11 . . . . . . ip13 ip13"
        "ip14 ip14 . . . . . . ip12 ip12 . . . ."
        ". . . ip10 ip10 . . . ip12 ip12 . . . ."
        ". . . ip10 ip10 . . . . . . . . ."
    }
  }
}
@media (min-width: 1321px) and (max-width: 1540.9px) {
  .dDVcIC {
    --offset: -661px!important;
  }
  .type-list{
    width: 1304px;
  }
  .irIQZt {
    width: 1304px;
    .jMBaZr {
      --gridTemplateColumns: 12;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4 ip5 ip5 ."
        "ip6 ip6 bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4 ip5 ip5 ."
        "ip6 ip6 bigIp0 bigIp0 bigIp0 bigIp1 bigIp1 bigIp1 . . . ."
        ". . . . . bigIp1 bigIp1 bigIp1 . . . ."
        ". ip8 ip8 . . bigIp1 bigIp1 bigIp1 . ip10 ip10 ."
        ". ip8 ip8 . . bigIp2 bigIp2 bigIp2 . ip10 ip10 ."
        ". . ip13 ip13 . bigIp2 bigIp2 bigIp2 . . . ."
        ". . ip13 ip13 . bigIp2 bigIp2 bigIp2 ip11 ip11 . ."
        "ip12 ip12 . . . . . . ip11 ip11 . ."
        "ip12 ip12 . . ip9 ip9 . . . . . ."
        ". . . . ip9 ip9 . . . . ip14 ip14"
        ". ip7 ip7 . . . . . . . ip14 ip14"
        ". ip7 ip7 . . . . . . . . ."
    }
  }
}
@media (min-width: 1211px) and (max-width: 1320.9px) {
  .dDVcIC {
    --offset: -605px!important;
  }
  .type-list{
    width: 1194px;
  }
  .irIQZt {
    width: 1194px;
    .jMBaZr {
      --gridTemplateColumns: 11;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4 ip5 ip5"
        "ip6 ip6 bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4 ip5 ip5"
        "ip6 ip6 bigIp0 bigIp0 bigIp0 bigIp1 bigIp1 bigIp1 . . ."
        ". . . . . bigIp1 bigIp1 bigIp1 . . ."
        ". ip8 ip8 . . bigIp1 bigIp1 bigIp1 . ip10 ip10"
        ". ip8 ip8 . . bigIp2 bigIp2 bigIp2 . ip10 ip10"
        ". . ip13 ip13 . bigIp2 bigIp2 bigIp2 . . ."
        ". . ip13 ip13 . bigIp2 bigIp2 bigIp2 ip11 ip11 ."
        "ip12 ip12 . . . . . . ip11 ip11 ."
        "ip12 ip12 . . ip14 ip14 . . . . ."
        ". . . . ip14 ip14 . . . . ."
        ". ip7 ip7 . . . . . . . ."
        ". ip7 ip7 . . . . ip9 ip9 . ."
        ". . . . . . . ip9 ip9 . ."
    }
  }
}
@media (min-width: 991px) and (max-width: 1210.9px) {
  .dDVcIC {
    --offset: -496px!important;
  }
  .type-list{
    width: 980px;
  }
  .irIQZt {
    width: 980px;
    .jMBaZr {
      --gridTemplateColumns: 9;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4"
        "ip5 ip5 bigIp0 bigIp0 bigIp0 ip3 ip3 ip4 ip4"
        "ip5 ip5 bigIp0 bigIp0 bigIp0 bigIp1 bigIp1 bigIp1 ."
        ". . . . . bigIp1 bigIp1 bigIp1 ."
        ". ip7 ip7 . . bigIp1 bigIp1 bigIp1 ."
        ". ip7 ip7 ip8 ip8 . ip9 ip9 ."
        ". . . ip8 ip8 . ip9 ip9 ."
        ". . . . . . . . ."
        ". . bigIp2 bigIp2 bigIp2 . ip11 ip11 ."
        ". . bigIp2 bigIp2 bigIp2 . ip11 ip11 ."
        ". . bigIp2 bigIp2 bigIp2 . . . ."
        "ip12 ip12 . . . . . ip13 ip13"
        "ip12 ip12 ip14 ip14 . . . ip13 ip13"
        ". . ip14 ip14 . . . . ."
        ". . . . . ip10 ip10 . ."
        ". ip6 ip6 . . ip10 ip10 . ."
        ". ip6 ip6 . . . . . ."
    }
  }
}
@media (min-width: 111px) and (max-width: 990.9px) {
  .dDVcIC {
    --offset: -386px!important;
  }
  .type-list{
    width: 760px;
  }
  .irIQZt {
    width: 760px;
    .jMBaZr {
      --gridTemplateColumns: 7;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3"
        ". . bigIp0 bigIp0 bigIp0 ip3 ip3"
        "ip4 ip4 bigIp0 bigIp0 bigIp0 . ."
        "ip4 ip4 . ip5 ip5 . ."
        ". . . ip5 ip5 ip6 ip6"
        ". . . . . ip6 ip6"
        "bigIp1 bigIp1 bigIp1 . . . ."
        "bigIp1 bigIp1 bigIp1 . ip7 ip7 ."
        "bigIp1 bigIp1 bigIp1 . ip7 ip7 ."
        ". . ip8 ip8 . ip9 ip9"
        ". . ip8 ip8 . ip9 ip9"
        ". ip10 ip10 . . . ."
        ". ip10 ip10 bigIp2 bigIp2 bigIp2 ."
        ". . . bigIp2 bigIp2 bigIp2 ."
        ". . . bigIp2 bigIp2 bigIp2 ."
        "ip11 ip11 . . . . ."
        "ip11 ip11 . . . ip12 ip12"
        ". . . . . ip12 ip12"
        ". ip13 ip13 . . . ."
        ". ip13 ip13 . . . ."
        ". . . . ip14 ip14 ."
        ". . . . ip14 ip14 ."
    }
  }
}
@media (max-width: 775px) {
  .dDVcIC {
    --offset: 3px !important;
    left: 0!important;
  }
}
@media (hover: hover) {
  .cOWZsC:hover {
    transform: scale(1.01869) translate(0px, -4px)!important;
  }
  .cOWZsC:hover .sc-963fcq-0 {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
  .big-box {
    display: flex;
    flex-direction: column;
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
      width: 94px;
      height: 94px;
      flex-direction: column;
      --left: 50%;
      left: var(--left);
      --offset: -487px;
      transform: translate(var(--offset),0);
      .bfQcDW{
        width: 80px;
        height: 30px;
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
        width: 100%;
        height: 40px;
        border-radius: 0px 0px 16px 16px;
        overflow: hidden;
        img{
          width: 20px;
          height: 17px;
        }
      }
    }

    .irIQZt {
      margin: 0px auto;
      flex-grow: 1;
      .jMBaZr {
        display: grid;
        grid-template-rows: repeat(auto-fill, 94px);
        grid-gap: 16px;
        grid-auto-flow: dense;
        justify-content: center;
        margin: 16px auto 0px;
        padding: 0px;
        list-style-type: none;
        //--gridTemplateColumns: 3;
        grid-template-columns: repeat(var(--gridTemplateColumns),94px);
        .brZJOk {
          display: contents;
          li{
            display: contents;
            a {
              text-decoration: none;
              color: #009cff;
            }
          }
        }
      }
      .jMBaZr::before {
        content: "";
        display: block;
      }
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

    .type-list{
      margin: 32px auto 0;
      .bottom-text{
        position: relative;
        margin: 30px 0 0;
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
          font: 400 16px/24px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
        }
      }
    }
  }
</style>
