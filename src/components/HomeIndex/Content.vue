<template>
  <div class="big-box">
    <PCLogo></PCLogo>
    <div class="sc-10l37ae-0 irIQZt">
      <div class="sc-13nflho-1 jMBaZr">
        <div style="display: contents">
          <ul class="sc-al88rd-0 brZJOk">
            <li v-for="(item,index) in bigImg" :key="index">
              <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" @click="iconClick(item)" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq"
                 :style="{gridArea: 'bigIp' + index}">
                <img :src="item.iconUrl" alt="" width="314px" height="314px" class="eoBBYj">
                <span class="sc-963fcq-0 esaxGV global-cq-title">{{ item.Name }}</span>
                <div class="sc-963fcq-1 jpSxzz" @mouseenter="playVid(index)" @mouseleave="pauseVid(index)">
                  <video preload="none" loop class="sc-1s4z03m-0 evwDGU">
                    <source :src="item.VideoUrl" type="video/mp4">
                  </video>
                </div>
                <div class="sc-15wj1kq-0 ggWjbY" v-if="item.Flash == 1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="sc-15wj1kq-1 cYmAAh">
                    <defs>
                      <linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color: rgb(255, 255, 255); stop-opacity: 0;"></stop>
                        <stop offset="25%" style="stop-color: rgb(255, 255, 255); stop-opacity: 0;"></stop>
                        <stop offset="50%" style="stop-color: rgb(255, 255, 255); stop-opacity: 1;"></stop>
                        <stop offset="75%" style="stop-color: rgb(255, 255, 255); stop-opacity: 0;"></stop>
                        <stop offset="100%" style="stop-color: rgb(238, 130, 238); stop-opacity: 0;"></stop>
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"></rect>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div style="display: contents">
          <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" v-for="(item,index) in centreImg" :key="index" @click="iconClick(item)"
             class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq"
             :style="{gridArea: 'ip' + (index + 3)}">
            <img :src="item.iconUrl" alt="" width="204px" height="204px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{ item.Name }}</span>
            <div class="sc-963fcq-1 jpSxzz" @mouseenter="playVid(index + 3)" @mouseleave="pauseVid(index + 3)">
              <video preload="none" loop class="sc-1s4z03m-0 evwDGU">
                <source :src="item.VideoUrl" type="video/mp4">
              </video>
            </div>
          </a>
        </div>
        <div style="display: contents">
          <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')" v-for="(item,index) in smallImg" :key="index" @click="iconClick(item)"
             class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-1 global-cq">
            <img v-lazy="item.iconUrl" alt="" width="94px" height="94px" class="eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{ item.Name }}</span>
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
          Our editors choose the most addicing games developed by our partners, such as car games, 3d games, cartoon
          games, skill games, arcade game, sport games, racing games and many other kinds of fashion games often.
          You can play all our games on your mobile phone, tablet, pad without download or installation, just visit
          GUGOPLAY.com in your browser such as safari, chrome, firefox, etc, and then enjoy playing the games.
          <br><br>
          So, what are you waiting for? If you feel happy when playing our games, remember to bookmark GUGOPLAY.com and
          share it to your friends. Have fun!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeList from '@/components/TypeList.vue';
import {clickGameLog, getJson, recentGame, Observer} from '@/utils/utils.js';
import logo from '@/assets/logo.png';
import home from '@/assets/home.png';
import souSuo from '@/assets/sousuo.png';

import PCLogo from "@/components/PCLogo.vue";
export default {
  name: "contentIndex",
  components: {
    TypeList, PCLogo
  },
  data() {
    return {
      bigImg: [], // 大图片
      centreImg: [], // 中图片
      smallImg: [], // 小图片
      logo,
      home,
      souSuo,
      videoDiv: null,
      UnfoldAndCollapse: false, // 展开收起
    }
  },
  mounted() {
    this.getJson()
    this.videoDiv = document.getElementsByClassName('sc-1s4z03m-0')
    // 获取需要曝光的item
    setTimeout(()=>{
      let itemArr = [...document.getElementsByClassName("sc-wr3rvk-0")]
      itemArr && Array.from(itemArr).map((item)=>{
        Observer('gugoplay_pc_home').observe(item)
      })
    })
  },
  methods: {
    getJson() {
      let bigImg = []
      let centreImg = []
      let smallImg = []
      getJson() && getJson().map((item)=>{
        if (item.ImgSize == 1) {
          bigImg.push(item)
        } else if (item.ImgSize == 2) {
          centreImg.push(item)
        } else {
          smallImg.push(item)
        }
      })
      this.bigImg = bigImg
      this.centreImg = centreImg
      this.smallImg = smallImg
    },
    // 点击跳转详情
    iconClick(item) {
      clickGameLog('gugoplay_pc_home', item)
      recentGame(item)
      // this.$router.push({
      //   path: '/P/details',
      //   query: {
      //     gameId: item.gameId
      //   }
      // }, () => {
      // })
    },
    // 鼠标移入播放视频
    playVid(index) {
      this.videoDiv[index].muted = true
      let playPromise = this.videoDiv[index].play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // // 这个时候可以安全的暂停
          // this.videoDiv[index].pause();
        })
            .catch(() => {

            });
      }
    },
    // 鼠标移入播放视频
    pauseVid(index) {
      this.videoDiv[index].muted = false
      this.videoDiv[index].load()
      this.videoDiv[index].pause()
    }
  },
  watch: {
    '$route'(val) {
      console.log(val, '数据更新了');
      this.getJson()
      // this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 1871px) {
  .type-list {
    width: 1854px;
  }

  .irIQZt {
    width: 1854px;

    .jMBaZr {
      --gridTemplateColumns: 17;
      grid-template-areas:
        ". . bigIp0 bigIp0 bigIp0 . . . . . . . . ip3 ip3 ip4 ip4"
        ". . bigIp0 bigIp0 bigIp0 ip5 ip5 ip6 ip6 bigIp1 bigIp1 bigIp1 . ip3 ip3 ip4 ip4"
        ". . bigIp0 bigIp0 bigIp0 ip5 ip5 ip6 ip6 bigIp1 bigIp1 bigIp1 ip7 ip7 . ip8 ip8"
        "ip9 ip9 bigIp2 bigIp2 bigIp2 . . . . bigIp1 bigIp1 bigIp1 ip7 ip7 . ip8 ip8"
        "ip9 ip9 bigIp2 bigIp2 bigIp2 . . ip10 ip10 . ip11 ip11 . . . . ."
        ". . bigIp2 bigIp2 bigIp2 . . ip10 ip10 . ip11 ip11 . ip12 ip12 . ."
        ". ip13 ip13 . . . . . . . . . . ip12 ip12 . ."
        ". ip13 ip13 . . . ip14 ip14 . . . . . . . . ."
        ". . . . . . ip14 ip14 . . . . . . . . ."
        ". . . . . . . . . . . ip15 ip15 . . . ."
        ". . . . ip16 ip16 . . . . . ip15 ip15 . . . ."
        ". . . . ip16 ip16 . . . . . . . . . . .";
    }

    .jMBaZr::before {
      grid-column-start: span 2;
    }
  }
}

@media (min-width: 1541px) and (max-width: 1870.9px) {
  .type-list {
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
        ". . . . ip10 ip10 . . . . . . ip11 ip11"
        "ip12 ip12 . . ip10 ip10 . . . . . . ip11 ip11"
        "ip12 ip12 . . . . . . ip13 ip13 . . . ."
        ". . . ip14 ip14 . . . ip13 ip13 . . . ."
        ". . . ip14 ip14 . . . . . . . . ."
        ". ip15 ip15 . . . . . . . . . . ."
        ". ip15 ip15 . . . . . . ip16 ip16 . . ."
        ". . . . . . . . . ip16 ip16 . . ."
    }
  }
}

@media (min-width: 1321px) and (max-width: 1540.9px) {
  .type-list {
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
        ". ip7 ip7 . . bigIp1 bigIp1 bigIp1 . ip8 ip8 ."
        ". ip7 ip7 . . bigIp2 bigIp2 bigIp2 . ip8 ip8 ."
        ". . ip9 ip9 . bigIp2 bigIp2 bigIp2 . . . ."
        ". . ip9 ip9 . bigIp2 bigIp2 bigIp2 ip10 ip10 . ."
        "ip11 ip11 . . . . . . ip10 ip10 . ."
        "ip11 ip11 . . ip12 ip12 . . . . . ."
        ". . . . ip12 ip12 . . . . ip13 ip13"
        ". ip14 ip14 . . . . . . . ip13 ip13"
        ". ip14 ip14 . . . . . . . . ."
        ". . . . . . ip15 ip15 . . . ."
        ". . . . . . ip15 ip15 . . . ."
        ". . ip16 ip16 . . . . . . . ."
        ". . ip16 ip16 . . . . . . . ."
    }
  }
}

@media (min-width: 1211px) and (max-width: 1320.9px) {
  .type-list {
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
        ". ip7 ip7 . . bigIp1 bigIp1 bigIp1 . ip8 ip8"
        ". ip7 ip7 . . bigIp2 bigIp2 bigIp2 . ip8 ip8"
        ". . ip9 ip9 . bigIp2 bigIp2 bigIp2 . . ."
        ". . ip9 ip9 . bigIp2 bigIp2 bigIp2 ip10 ip10 ."
        "ip11 ip11 . . . . . . ip10 ip10 ."
        "ip11 ip11 . . ip12 ip12 . . . . ."
        ". . . . ip12 ip12 . . . . ."
        ". ip13 ip13 . . . . . . . ."
        ". ip13 ip13 . . . . ip14 ip14 . ."
        ". . . . . . . ip14 ip14 . ."
        "ip15 ip15 . . . . . . . . ."
        "ip15 ip15 . . . . . . . . ."
        ". . . . . . ip16 ip16 . . ."
        ". . . . . . ip16 ip16 . . ."
    }
  }
}

@media (min-width: 991px) and (max-width: 1210.9px) {
  .type-list {
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
        ". ip6 ip6 . . bigIp1 bigIp1 bigIp1 ."
        ". ip6 ip6 ip7 ip7 . ip8 ip8 ."
        ". . . ip7 ip7 . ip8 ip8 ."
        ". . . . . . . . ."
        ". . bigIp2 bigIp2 bigIp2 . ip9 ip9 ."
        ". . bigIp2 bigIp2 bigIp2 . ip9 ip9 ."
        ". . bigIp2 bigIp2 bigIp2 . . . ."
        "ip10 ip10 . . . . . ip11 ip11"
        "ip10 ip10 ip12 ip12 . . . ip11 ip11"
        ". . ip12 ip12 . . . . ."
        ". . . . . ip13 ip13 . ."
        ". ip14 ip14 . . ip13 ip13 . ."
        ". ip14 ip14 . . . . . ."
        ". . . . . . . ip15 ip15"
        ". . . . . . . ip15 ip15"
        ". . . . . . . . ."
        ". . ip16 ip16 . . . . ."
        ". . ip16 ip16 . . . . ."
    }
  }
}

@media (min-width: 111px) and (max-width: 990.9px) {
  .type-list {
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
        "ip15 ip15 . . . . ."
        "ip15 ip15 . . . . ."
        ". . . . . . ."
        ". . . ip16 ip16 . ."
        ". . . ip16 ip16 . ."
    }
  }
}

@media (hover: hover) {
  .cOWZsC:hover {
    transform: scale(1.01869) translate(0px, -4px) !important;
  }

  .cOWZsC:hover {
    .sc-963fcq-0 {
      opacity: 1;
      transform: translate(0px, 0px);
    }

    .sc-963fcq-1 {
      visibility: visible;
    }
  }
}

.big-box {
  display: flex;
  flex-direction: column;
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
      grid-template-columns: repeat(var(--gridTemplateColumns), 94px);

      .brZJOk {
        display: contents;

        li {
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
    cursor: pointer;
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
    transition: box-shadow .6s cubic-bezier(.25, .1, .25, 1), opacity .3s cubic-bezier(.25, .1, .25, 1);
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
    font: 700 var(--tileFontSize,12px)/1.3 'Proxima Nova', sans-serif;
    text-align: center;
    z-index: 6;
    transition: transform .3s cubic-bezier(.25, .1, .25, 1) .1s, opacity .3s cubic-bezier(.25, .1, .25, 1) .1s;
    transform: translate(0px, 8px);
    opacity: 0;
    -webkit-font-smoothing: antialiased;
    pointer-events: none;
  }
  .ggWjbY {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
  }
  .cYmAAh {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate3d(-50%, 0%, 0px);
    will-change: transform, opacity;
    pointer-events: none;
    opacity: 0;
    z-index: 3;
    animation: 6s linear 6s infinite normal none running jygSil;
    width: 200%;
    height: 200%;
  }
  .jpSxzz {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    visibility: hidden;
    z-index: 5;

    .evwDGU {
      height: 100%;
      position: absolute;
      left: 50%;
      top: 0px;
      transform: translate(-50%, 0px);
    }
  }

  .type-list {
    margin: 16px auto 0;

    .bottom-text {
      position: relative;
      margin: 30px 0 0;
      padding: 18px 24px;
      background: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;

      p {
        font-weight: bold;
        font-size: 9px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 3px 0px 0px;
      }

      h1 {
        font-size: 20px;
        margin: 0px 0px 8px;
        color: #002b50;
      }

      .jXgCKW {
        color: #002b50;
        font: 400 16px/24px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
      }
    }
  }
}
@keyframes jygSil {
  0% {
    transform: translate3d(-55%, -5%, 0px);
    opacity: 0;
  }
  1% {
    transform: translate3d(-50%, 0%, 0px);
    opacity: 1;
  }

  10% {
    transform: translate3d(0%, -50%, 0px);
    opacity: 1;
  }
  15% {
    transform: translate3d(0%, -50%, 0px);
    opacity: 0;
  }
  39.99% {
    transform: translate3d(-55%, -5%, 0px);
    opacity: 0;
  }
  40% {
    transform: translate3d(-50%, 0%, 0px);
    opacity: 1;
  }
  50% {
    transform: translate3d(0%, -50%, 0px);
    opacity: 1;
  }
  66% {
    transform: translate3d(0%, -50%, 0px);
    opacity: 0;
  }
  100% {
    transform: translate3d(0%, -50%, 0px);
    opacity: 0;
  }
}
</style>
