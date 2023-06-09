<template>
  <div class="big-box">
    <div style="display: contents">
      <nav class="sc-15orno7-0 dDVcIC">WEBH5GAME</nav>
    </div>
    <div class="sc-10l37ae-0 irIQZt">
      <div class="sc-13nflho-1 jMBaZr">
        <div style="display: contents">
          <ul class="sc-al88rd-0 brZJOk">
            <li>
              <a href="" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 zmrOQ global-cq"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="item" @click="iconClick(item)" v-for="(item,index) in gameList" :key="index">
      <div class="item_position">
        <img v-lazy="item.iconUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { getJson, recentGame } from '@/utils/utils.js'
export default {
  name: "contentIndex",
  data() {
    return {
      gameList: [], // 游戏列表
    }
  },
  mounted() {
    this.getJson()
  },
  methods: {
    getJson() {
      let arr = getJson()
      this.gameList = arr
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
  .irIQZt {
    width: 1854px;
    .jMBaZr {
      --gridTemplateColumns: 17;
      grid-template-areas:
        ". . ip0 ip0 ip0 . . . . . . . . ip7 ip7 ip8 ip8"
        ". . ip0 ip0 ip0 ip4 ip4 ip5 ip5 ip2 ip2 ip2 . ip7 ip7 ip8 ip8"
        ". . ip0 ip0 ip0 ip4 ip4 ip5 ip5 ip2 ip2 ip2 ip6 ip6 ip3 ip3 ip3"
        "ip9 ip9 ip10 ip10 ip11 ip11 ip1 ip1 ip1 ip2 ip2 ip2 ip6 ip6 ip3 ip3 ip3"
        "ip9 ip9 ip10 ip10 ip11 ip11 ip1 ip1 ip1 ip12 ip12 ip13 ip13 . ip3 ip3 ip3"
        ". ip14 ip14 ip15 ip15 . ip1 ip1 ip1 ip12 ip12 ip13 ip13 ip16 ip16 ip17 ip17"
        ". ip14 ip14 ip15 ip15 . ip18 ip18 ip19 ip19 ip20 ip20 . ip16 ip16 ip17 ip17"
        ". . . . . . ip18 ip18 ip19 ip19 ip20 ip20 . . . . ."
        ". . . . . . . . . . . . . . . . ."
        "ip22 ip22 . . . . . . . . ip21 ip21 ip21 . . . ."
        "ip22 ip22 . . . . ip24 ip24 . . ip21 ip21 ip21 . . . ."
        ". . ip23 ip23 . . ip24 ip24 . . ip21 ip21 ip21 . . . ."
        ". . ip23 ip23 . . . . . . . . . . . ip25 ip25"
        ". . . . . . . . . . . . . . . ip25 ip25";
    }
  }
}
@media (min-width: 1541px) and (max-width: 1870.9px) {
  .irIQZt {
    width: 1524px;
    .jMBaZr {
      --gridTemplateColumns: 14;
      grid-template-areas:
        ". . ip0 ip0 ip0 ip4 ip4 . . . . . ip5 ip5"
        ". . ip0 ip0 ip0 ip4 ip4 . ip2 ip2 ip2 . ip5 ip5"
        "ip3 ip3 ip0 ip0 ip0 . . . ip2 ip2 ip2 . ip6 ip6"
        "ip3 ip3 . . . ip1 ip1 ip1 ip2 ip2 ip2 . ip6 ip6"
        "ip7 ip7 . ip8 ip8 ip1 ip1 ip1 ip9 ip9 ip10 ip10 . ."
        "ip7 ip7 . ip8 ip8 ip1 ip1 ip1 ip9 ip9 ip10 ip10 . ."
        ". . . . . . . . . . . . . ."
        ". . . . . . . . ip11 ip11 ip11 . . ."
        "ip12 ip12 . . . . . . ip11 ip11 ip11 . . ."
        "ip12 ip12 . . . . . . ip11 ip11 ip11 . . ."
        ". . ip13 ip13 . . . . . . . . . ."
        ". . ip13 ip13 . . . . . . . . . ."
        ". . . . . . ip14 ip14 . . . ip15 ip15 ip15"
        "ip16 ip16 . . . . ip14 ip14 . . . ip15 ip15 ip15"
        "ip16 ip16 . . . . . . . . . ip15 ip15 ip15";
    }
  }
}
@media (min-width: 1321px) and (max-width: 1540.9px) {
  .irIQZt {
    width: 1304px;
    .jMBaZr {
      --gridTemplateColumns: 12;
      grid-template-areas:
        ". . ip0 ip0 ip0 ip3 ip3 ip4 ip4 ip5 ip5 ."
        "ip2 ip2 ip0 ip0 ip0 ip3 ip3 ip4 ip4 ip5 ip5 ."
        "ip2 ip2 ip0 ip0 ip0 ip1 ip1 ip1 . ip6 ip6 ."
        ". . . . . ip1 ip1 ip1 . ip6 ip6 ."
        ". ip7 ip7 ip8 ip8 ip1 ip1 ip1 . ip9 ip9 ."
        ". ip7 ip7 ip8 ip8 . . . . ip9 ip9 ."
        ". . . . . . . . . . . ."
        ". . . . . . . ip10 ip10 . . ."
        "ip11 ip11 . . . . . ip10 ip10 . . ."
        "ip11 ip11 ip12 ip12 . . . . . . . ."
        ". . ip12 ip12 . . . . . . . ."
        ". . . . . . ip13 ip13 . . . ."
        ". . . . . . ip13 ip13 . . . ."
        ". ip14 ip14 . . . . . . . . ."
        ". ip14 ip14 . . . . . . ip15 ip15 ."
        ". . . . . . . . . ip15 ip15 .";
    }
  }
}
@media (min-width: 1211px) and (max-width: 1320.9px) {
  .irIQZt {
    width: 1194px;
    .jMBaZr {
      --gridTemplateColumns: 11;
      grid-template-areas:
        ". . ip0 ip0 ip0 ip3 ip3 ip4 ip4 ip5 ip5"
        "ip2 ip2 ip0 ip0 ip0 ip3 ip3 ip4 ip4 ip5 ip5"
        "ip2 ip2 ip0 ip0 ip0 ip1 ip1 ip1 . ip6 ip6"
        ". . . . . ip1 ip1 ip1 . ip6 ip6"
        ". ip7 ip7 ip8 ip8 ip1 ip1 ip1 . ip9 ip9"
        ". ip7 ip7 ip8 ip8 . . . . ip9 ip9"
        ". . . . . . . . . . ."
        ". . . . . . ip10 ip10 ip10 . ."
        "ip11 ip11 . . . . ip10 ip10 ip10 . ."
        "ip11 ip11 ip12 ip12 . . ip10 ip10 ip10 . ."
        ". . ip12 ip12 . . . . . . ."
        ". . . . . . . . . . ."
        ". . . ip13 ip13 ip13 . . . . ."
        ". . . ip13 ip13 ip13 . ip14 ip14 . ."
        ". . . ip13 ip13 ip13 . ip14 ip14 . ."
        ". . . . . . . . . . ."
        ". ip15 ip15 . . . . . . ip16 ip16"
        ". ip15 ip15 ip17 ip17 . . . . ip16 ip16"
        ". . . ip17 ip17 . . . . . .";
    }
  }
}
@media (min-width: 991px) and (max-width: 1210.9px) {
  .irIQZt {
    width: 980px;
    .jMBaZr {
      --gridTemplateColumns: 9;
      grid-template-areas:
        ". . ip0 ip0 ip0 ip3 ip3 ip4 ip4"
        "ip2 ip2 ip0 ip0 ip0 ip3 ip3 ip4 ip4"
        "ip2 ip2 ip0 ip0 ip0 ip1 ip1 ip1 ."
        ". . . ip6 ip6 ip1 ip1 ip1 ."
        ". ip5 ip5 ip6 ip6 ip1 ip1 ip1 ."
        ". ip5 ip5 ip8 ip8 . ip9 ip9 ."
        ". ip7 ip7 ip8 ip8 . ip9 ip9 ."
        ". ip7 ip7 . . . . . ."
        ". . ip10 ip10 ip10 . ip13 ip13 ."
        ". . ip10 ip10 ip10 . ip13 ip13 ."
        ". . ip10 ip10 ip10 . . . ."
        "ip14 ip14 . . . . . . ."
        "ip14 ip14 . . . . ip11 ip11 ip11"
        ". . . . . . ip11 ip11 ip11"
        ". ip15 ip15 . . . ip11 ip11 ip11"
        ". ip15 ip15 . . . . . ."
        ". . . . . . . . ."
        ". . . . ip12 ip12 ip12 . ."
        ". . . . ip12 ip12 ip12 . ."
        ". ip16 ip16 . ip12 ip12 ip12 . ."
        ". ip16 ip16 ip17 ip17 . . . ."
        ". . . ip17 ip17 . . . ."
        ". . . . . . . ip18 ip18"
        ". . . . . . . ip18 ip18";
    }
  }
}
@media (min-width: 111px) and (max-width: 990.9px) {
  .irIQZt {
    width: 760px;
    .jMBaZr {
      --gridTemplateColumns: 7;
      grid-template-areas:
        ". . ip0 ip0 ip0 ip1 ip1"
        ". . ip0 ip0 ip0 ip1 ip1"
        "ip2 ip2 ip0 ip0 ip0 . ."
        "ip2 ip2 . ip3 ip3 . ."
        ". . . ip3 ip3 ip4 ip4"
        ". . . . . ip4 ip4"
        "ip5 ip5 ip5 . . . ."
        "ip5 ip5 ip5 . ip6 ip6 ."
        "ip5 ip5 ip5 . ip6 ip6 ."
        ". . ip7 ip7 . . ."
        ". . ip7 ip7 . . ."
        ". . . ip8 ip8 ip8 ."
        ". . . ip8 ip8 ip8 ."
        "ip9 ip9 . ip8 ip8 ip8 ."
        "ip9 ip9 . . . ip10 ip10"
        ". . . . . ip10 ip10"
        "ip11 ip11 ip11 . ip13 ip13 ."
        "ip11 ip11 ip11 . ip13 ip13 ."
        "ip11 ip11 ip11 . . . ."
        ". . ip14 ip14 . . ."
        ". . ip14 ip14 ip12 ip12 ip12"
        ". . . . ip12 ip12 ip12"
        ". . . . ip12 ip12 ip12"
        "ip15 ip15 . . . . ."
        "ip15 ip15 . . . . ."
        ". . ip16 ip16 . . ."
        ". . ip16 ip16 . . ."
        ". . . ip17 ip17 . ."
        ". ip18 ip18 ip17 ip17 . ."
        ". ip18 ip18 . . ip19 ip19"
        ". . . . . ip19 ip19";
    }
  }
}
  .big-box {
    .dDVcIC {
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
        --gridTemplateColumns: 3;
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
  }
</style>
