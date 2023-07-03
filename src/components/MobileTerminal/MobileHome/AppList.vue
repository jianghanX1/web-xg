<template>
  <div>
    <MobileLogo></MobileLogo>
    <div v-show="clientWidth <= 550.9">
      <div class="app-list eZzVdA" v-for="(item,index) in appGameList" :key="index">
        <div :class="homeAdv && index == 0 ? cTVRlj2 : cTVRlj">
          <div class="adv" v-if="index == 0" v-show="homeAdv" style="grid-area: adv">
            <ins class="adsbygoogle"
                 id="homeAdv"
                 style="display:block;min-height: 314px"
                 data-ad-client="ca-pub-2075998924432436"
                 data-ad-slot="9017774039"
                 data-ad-format="true"
                 data-full-width-responsive="true"></ins>
          </div>
          <a @click="detailsClick(items)" v-for="(items,indexs) in item" :key="indexs" :href="'/#/M/details?gameId='+items.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="indexs == 0 || indexs == 6 ? {gridArea: 'bigIp' + indexs}: null">
            <img v-if="indexs == 0 || indexs == 6" v-lazy="items.iconUrl" alt="" width="204px" height="204px" class="eoBBYj">
            <img v-else v-lazy="items.iconUrl" alt="" width="94px" height="94px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{items.Name}}</span>
          </a>
        </div>
      </div>
    </div>
    <div v-show="clientWidth > 550.9" class="sc-10l37ae-0 irIQZt">
      <div :class="homeAdv ? jMBaZr2 : jMBaZr">
        <div class="adv" v-show="homeAdv" style="grid-area: adv">
          <ins class="adsbygoogle"
               id="homeAdv"
               style="display:block;min-height: 314px"
               data-ad-client="ca-pub-2075998924432436"
               data-ad-slot="9017774039"
               data-ad-format="true"
               data-full-width-responsive="true"></ins>
        </div>
        <div style="display: contents">
          <ul class="sc-al88rd-0 brZJOk">
            <li @click="detailsClick(item)" v-for="(item,index) in bigImg" :key="index">
              <a :href="'/#/M/details?gameId='+item.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="{gridArea: 'bigIp' + index}">
                <img v-lazy="item.iconUrl" alt="" width="314px" height="314px" class="eoBBYj">
                <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div style="display: contents">
          <a @click="detailsClick(item)" v-for="(item,index) in centreImg" :key="index" :href="'/#/M/details?gameId='+item.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq" :style="{gridArea: 'ip' + (index + 3)}">
            <img v-lazy="item.iconUrl" alt="" width="204px" height="204px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
        <div style="display: contents">
          <a @click="detailsClick(item)" v-for="(item,index) in smallImg" :key="index" :href="'/#/M/details?gameId='+item.gameId" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq">
            <img v-lazy="item.iconUrl" alt="" width="94px" height="94px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <BottomList></BottomList>
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
import MobileLogo from '@/components/MobileLogo.vue';
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import {getJson, recentGame} from '@/utils/utils.js';
export default {
  name: "AppList",
  props: ['appGameList'],
  components: {
    BottomList,MobileLogo
  },
  data() {
    return {
      bigImg: [], // 大图片
      centreImg: [], // 中图片
      smallImg: [], // 小图片
      clientWidth: 0, // 屏幕宽度
      homeAdv: false, // 是否展示广告位置
      cTVRlj2: 'cTVRlj2', // 有广告样式
      cTVRlj: 'cTVRlj', // 无广告样式
      jMBaZr2: 'jMBaZr2', // 有广告样式
      jMBaZr: 'jMBaZr', // 无广告样式
    }
  },
  mounted() {
    setTimeout(()=>{
      window.addAds()
      let innerHtml = document.getElementById('homeAdv') && document.getElementById('homeAdv').innerHTML
      if (innerHtml) {
        this.homeAdv = true
      } else {
        this.homeAdv = false
      }
    },1300)
    window.onresize = () => {
      this.clientWidth = document.body.clientWidth
    }
    this.clientWidth = document.body.clientWidth
    this.getJson()
  },
  methods: {
    getJson() {
      let arr = getJson()
      this.bigImg = arr.splice(0,3)
      this.centreImg = arr.splice(0,12)
      this.smallImg = arr
    },
    detailsClick(item) {
      recentGame(item)
      // this.$router.push({
      //   path: '/M/details',
      //   query: {
      //     gameId: item.gameId
      //   }
      // },()=>{})
    }
  }
}
</script>

<style lang="less" scoped>
*{
  box-sizing: border-box;
}
@media (hover: hover){
  .cOWZsC:hover {
    transform: scale(1.01869) translate(0px, -4px)!important;
  }
  .cOWZsC:hover .sc-963fcq-0 {
    opacity: 1!important;
    transform: translate(0px, 0px)!important;
  }
}

@media (min-width: 111px) and (max-width: 550.9px) {
  .eZzVdA, .bottom {
    width: 314px;
  }
  .cTVRlj {
    grid-template-areas:
          ". bigIp0 bigIp0"
          ". bigIp0 bigIp0"
          ". . ."
          "bigIp6 bigIp6 ."
          "bigIp6 bigIp6 ."
          ". . ."
  }
  .cTVRlj2 {
    grid-template-areas:
          ". bigIp0 bigIp0"
          ". bigIp0 bigIp0"
          ". . ."
          "bigIp6 bigIp6 ."
          "bigIp6 bigIp6 ."
          ". . ."
          "adv adv adv"
          "adv adv adv"
          "adv adv adv"
  }
}
@media (min-width: 551px) and (max-width: 660.9px) {
  .irIQZt, .bottom {
    width: 534px;
  }
  .jMBaZr2 {
    --gridTemplateColumns: 5;
    grid-template-areas:
        ". . ip3 ip3 ."
        "ip4 ip4 ip3 ip3 ."
        "ip4 ip4 . . ."
        "bigIp0 bigIp0 bigIp0 . ."
        "bigIp0 bigIp0 bigIp0 ip5 ip5"
        "bigIp0 bigIp0 bigIp0 ip5 ip5"
        "adv adv adv adv adv"
        "adv adv adv adv adv"
        "adv adv adv adv adv"
        ". . ip6 ip6 ."
        ". . ip6 ip6 ."
        "ip7 ip7 bigIp1 bigIp1 bigIp1"
        "ip7 ip7 bigIp1 bigIp1 bigIp1"
        ". . bigIp1 bigIp1 bigIp1"
        ". . ip8 ip8 ."
        "ip9 ip9 ip8 ip8 ."
        "ip9 ip9 . . ."
        "bigIp2 bigIp2 bigIp2 . ."
        "bigIp2 bigIp2 bigIp2 ip10 ip10"
        "bigIp2 bigIp2 bigIp2 ip10 ip10"
        ". . ip11 ip11 ."
        ". . ip11 ip11 ."
        ". . . . ."
        ". . . . ."
        ". ip12 ip12 . ."
        ". ip12 ip12 . ."
        ". . . . ."
        ". . . . ."
        ". . . ip13 ip13"
        ". . . ip13 ip13"
        ". . . . ."
        "ip14 ip14 . . ."
        "ip14 ip14 . . ."
  }
  .jMBaZr {
    --gridTemplateColumns: 5;
    grid-template-areas:
        ". . ip3 ip3 ."
        "ip4 ip4 ip3 ip3 ."
        "ip4 ip4 . . ."
        "bigIp0 bigIp0 bigIp0 . ."
        "bigIp0 bigIp0 bigIp0 ip5 ip5"
        "bigIp0 bigIp0 bigIp0 ip5 ip5"
        ". . ip6 ip6 ."
        ". . ip6 ip6 ."
        "ip7 ip7 bigIp1 bigIp1 bigIp1"
        "ip7 ip7 bigIp1 bigIp1 bigIp1"
        ". . bigIp1 bigIp1 bigIp1"
        ". . ip8 ip8 ."
        "ip9 ip9 ip8 ip8 ."
        "ip9 ip9 . . ."
        "bigIp2 bigIp2 bigIp2 . ."
        "bigIp2 bigIp2 bigIp2 ip10 ip10"
        "bigIp2 bigIp2 bigIp2 ip10 ip10"
        ". . ip11 ip11 ."
        ". . ip11 ip11 ."
        ". . . . ."
        ". . . . ."
        ". ip12 ip12 . ."
        ". ip12 ip12 . ."
        ". . . . ."
        ". . . . ."
        ". . . ip13 ip13"
        ". . . ip13 ip13"
        ". . . . ."
        "ip14 ip14 . . ."
        "ip14 ip14 . . ."
  }
}
@media (min-width: 661px) and (max-width: 880.9px) {
  .irIQZt, .bottom {
    width: 644px;
    .jMBaZr2 {
      --gridTemplateColumns: 6;
      grid-template-areas:
        ". ip3 ip3 . . ."
        ". ip3 ip3 . ip4 ip4"
        "ip5 ip5 . . ip4 ip4"
        "ip5 ip5 . bigIp0 bigIp0 bigIp0"
        ". . . bigIp0 bigIp0 bigIp0"
        ". . . bigIp0 bigIp0 bigIp0"
        "adv adv adv adv adv adv"
        "adv adv adv adv adv adv"
        "adv adv adv adv adv adv"
        ". ip6 ip6 . . ."
        ". ip6 ip6 . ip7 ip7"
        ". . . . ip7 ip7"
        "bigIp1 bigIp1 bigIp1 . . ."
        "bigIp1 bigIp1 bigIp1 . . ."
        "bigIp1 bigIp1 bigIp1 ip8 ip8 ."
        ". . . ip8 ip8 ."
        ". ip9 ip9 . . ."
        ". ip9 ip9 ip10 ip10 ."
        ". . . ip10 ip10 ."
        "ip11 ip11 . . . ."
        "ip11 ip11 . . . ."
        ". bigIp2 bigIp2 bigIp2 . ."
        ". bigIp2 bigIp2 bigIp2 . ."
        ". bigIp2 bigIp2 bigIp2 ip12 ip12"
        ". . . . ip12 ip12"
        ". ip13 ip13 . . ."
        ". ip13 ip13 . . ."
        ". . . . ip14 ip14"
        ". . . . ip14 ip14"
    }
    .jMBaZr {
      --gridTemplateColumns: 6;
      grid-template-areas:
        ". ip3 ip3 . . ."
        ". ip3 ip3 . ip4 ip4"
        "ip5 ip5 . . ip4 ip4"
        "ip5 ip5 . bigIp0 bigIp0 bigIp0"
        ". . . bigIp0 bigIp0 bigIp0"
        ". . . bigIp0 bigIp0 bigIp0"
        ". ip6 ip6 . . ."
        ". ip6 ip6 . ip7 ip7"
        ". . . . ip7 ip7"
        "bigIp1 bigIp1 bigIp1 . . ."
        "bigIp1 bigIp1 bigIp1 . . ."
        "bigIp1 bigIp1 bigIp1 ip8 ip8 ."
        ". . . ip8 ip8 ."
        ". ip9 ip9 . . ."
        ". ip9 ip9 ip10 ip10 ."
        ". . . ip10 ip10 ."
        "ip11 ip11 . . . ."
        "ip11 ip11 . . . ."
        ". bigIp2 bigIp2 bigIp2 . ."
        ". bigIp2 bigIp2 bigIp2 . ."
        ". bigIp2 bigIp2 bigIp2 ip12 ip12"
        ". . . . ip12 ip12"
        ". ip13 ip13 . . ."
        ". ip13 ip13 . . ."
        ". . . . ip14 ip14"
        ". . . . ip14 ip14"
    }
  }
}
@media (min-width: 881px) {
  .irIQZt, .bottom {
    width: 864px;
    .jMBaZr2 {
      --gridTemplateColumns: 8;
      grid-template-areas:
        ". ip3 ip3 . . . . ."
        ". ip3 ip3 . . . ip4 ip4"
        "ip5 ip5 . . . . ip4 ip4"
        "ip5 ip5 . . . bigIp0 bigIp0 bigIp0"
        ". . . ip12 ip12 bigIp0 bigIp0 bigIp0"
        ". . . ip12 ip12 bigIp0 bigIp0 bigIp0"
        "adv adv adv adv adv adv adv adv"
        "adv adv adv adv adv adv adv adv"
        "adv adv adv adv adv adv adv adv"
        ". ip6 ip6 . . . . ."
        ". ip6 ip6 . . . ip7 ip7"
        ". . . . . . ip7 ip7"
        "bigIp1 bigIp1 bigIp1 . . ip13 ip13 ."
        "bigIp1 bigIp1 bigIp1 . . ip13 ip13 ."
        "bigIp1 bigIp1 bigIp1 ip8 ip8 . . ."
        ". . . ip8 ip8 . ip14 ip14"
        ". ip9 ip9 . . . ip14 ip14"
        ". ip9 ip9 ip10 ip10 . . ."
        ". . . ip10 ip10 . . ."
        "ip11 ip11 . . . . . ."
        "ip11 ip11 . bigIp2 bigIp2 bigIp2 . ."
        ". . . bigIp2 bigIp2 bigIp2 . ."
        ". . . bigIp2 bigIp2 bigIp2 . ."

    }
    .jMBaZr {
      --gridTemplateColumns: 8;
      grid-template-areas:
        ". ip3 ip3 . . . . ."
        ". ip3 ip3 . . . ip4 ip4"
        "ip5 ip5 . . . . ip4 ip4"
        "ip5 ip5 . . . bigIp0 bigIp0 bigIp0"
        ". . . ip12 ip12 bigIp0 bigIp0 bigIp0"
        ". . . ip12 ip12 bigIp0 bigIp0 bigIp0"
        ". ip6 ip6 . . . . ."
        ". ip6 ip6 . . . ip7 ip7"
        ". . . . . . ip7 ip7"
        "bigIp1 bigIp1 bigIp1 . . ip13 ip13 ."
        "bigIp1 bigIp1 bigIp1 . . ip13 ip13 ."
        "bigIp1 bigIp1 bigIp1 ip8 ip8 . . ."
        ". . . ip8 ip8 . ip14 ip14"
        ". ip9 ip9 . . . ip14 ip14"
        ". ip9 ip9 ip10 ip10 . . ."
        ". . . ip10 ip10 . . ."
        "ip11 ip11 . . . . . ."
        "ip11 ip11 . bigIp2 bigIp2 bigIp2 . ."
        ". . . bigIp2 bigIp2 bigIp2 . ."
        ". . . bigIp2 bigIp2 bigIp2 . ."

    }
  }
}
.eZzVdA {
  margin: 0px auto;
  flex-grow: 1;
}
.eZzVdA:nth-of-type(1){
  .cTVRlj::before{
    content: "";
    display: block;
  }
  .cTVRlj2::before{
    content: "";
    display: block;
  }
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
.irIQZt {
  margin: 0px auto;
  flex-grow: 1;
  .jMBaZr, .jMBaZr2 {
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
  .jMBaZr2::before {
    content: "";
    display: block;
  }
}
.bottom{
  margin: 0 auto;
  .bottom-text{
    position: relative;
    margin: 24px 0;
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
</style>
