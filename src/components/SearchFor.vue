<template>
  <div>
    <section role="search" :class="UnfoldAndCollapse ? gBGPWM : iYQTqc">
      <div class="sc-jkuq4p-0 bjFQNg">
        <button class="sc-c36zwn-0 sc-jkuq4p-1 koyGQc gpJxFx" @click="collapse">
          <img :src="logos" alt="">
        </button>
        <div class="sc-jkuq4p-4 ildPAc">
          <input placeholder="你今天要玩什么呢？" type="search" class="sc-jkuq4p-5 cpmosI" @input="inputChange($event.target.value)">
          <div class="sc-jkuq4p-6 jVuRgK">
            <img :src="souSuo2" alt="">
          </div>
        </div>
      </div>
      <section v-if="!screenList.length" class="sc-746tnx-3 dikVfD">
        <div v-if="screenType" class="sc-1tnpzxm-3 bMdTkk">
          <h1>Hmm, nothing’s coming up for that.</h1>
          <p>Try searching for something else?</p>
        </div>
        <div v-else class="sc-1nio9ia-0 dMifeo">
          <nav class="sc-1nio9ia-1 jmIBMY" id="nav">
            <div class="sc-1nio9ia-2 iWVJzN" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)">{{item.type}}</div>
          </nav>
        </div>
        <h2 class="sc-1tnpzxm-4 MMWDF">本周热门</h2>
        <div class="sc-1tnpzxm-1 gA-dJmQ">
          <div class="app-item" v-for="(item,index) in popularGame" :key="index" @click="switchGame(item)">
            <img :src="item.iconUrl" alt="">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
            <div class="sc-wr3rvk-1 chTXCW" v-if="index == 0">
              <div class="sc-wr3rvk-2 dtnyBS">
                <img :src="huore" alt="">
              </div>
            </div>
          </div>
        </div>
        <h2 class="sc-1tnpzxm-4 MMWDF">最近玩过</h2>
        <div class="sc-1tnpzxm-1 gA-dJmQ">
          <div class="app-item" v-for="(item,index) in topGameList" :key="index" @click="switchGame(item)">
            <img :src="item.iconUrl" alt="">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
            <div class="sc-wr3rvk-1 chTXCW">
              <div class="sc-wr3rvk-2 dtnyBS">
                <img :src="shuaXin" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-else class="sc-746tnx-3 izRAmK">
        <div class="sc-1tnpzxm-0 hSivpy">
          <div class="sc-1tnpzxm-2 cndJnf">
            <div class="app-item" v-for="(item,index) in screenList" :key="index" @click="switchGame(item)">
              <img :src="item.iconUrl" alt="">
              <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
            </div>
          </div>
        </div>
      </section>
      <button class="sc-n58opj-0 gwKjum sc-746tnx-2 kSNKUJ" @click="collapse">
        <img :src="fanHui2" alt="">
      </button>
    </section>
    <div class="sc-746tnx-0 diLFOL" v-if="UnfoldAndCollapse" @click="collapse"></div>
  </div>
</template>

<script>
import logos from '@/assets/logos.png';
import souSuo2 from '@/assets/sousuo2.png';
import fanHui2 from '@/assets/fanhui2.png';
import shuaXin from '@/assets/shuaxin.png';
import huore from '@/assets/huore.png';
import {getGameTypeList, getJson, recentGame} from '@/utils/utils'
export default {
  name: "SearchFor",
  props: ['UnfoldAndCollapse'],
  data() {
    return {
      gBGPWM: 'gBGPWM',
      iYQTqc: 'iYQTqc',
      logos, souSuo2, fanHui2, shuaXin, huore,
      typeList: getGameTypeList() || [], // 类型
      popularGame: [], // 热门游戏
      screenList: [], // 筛选数据
      screenType: false, // 搜索状态
      topGameList: [], // 常玩游戏
    }
  },
  mounted() {
    this.navSlide()
    this.getAllJson()
    this.topGameList = localStorage.getItem('recentGame') && JSON.parse(localStorage.getItem('recentGame'))
  },
  methods: {
    // 收起
    collapse() {
      this.$emit('searchClick')
    },
    // 导航滑动
    navSlide() {
      let flag; // 鼠标按下
      let downX; // 鼠标点击的x下标
      let scrollLeft; // 当前元素滚动条的偏移量
      let nav = document.getElementById('nav')
      if (nav) {
        nav.addEventListener("mousedown", function (event) {
          flag = true;
          downX = event.clientX; // 获取到点击的x下标
          scrollLeft = this.scrollLeft; // 获取当前元素滚动条的偏移量
        });
        nav.addEventListener("mousemove", function (event) {
          if (flag) { // 判断是否是鼠标按下滚动元素区域
            // 获取移动的x轴
            let moveX = event.clientX;
            // 当前移动的x轴下标减去刚点击下去的x轴下标得到鼠标滑动距离
            let scrollX = moveX - downX;
            // 鼠标按下的滚动条偏移量减去当前鼠标的滑动距离
            this.scrollLeft = scrollLeft - scrollX;
          }
        });
        // 鼠标抬起停止拖动
        nav.addEventListener("mouseup", function () {
          flag = false;
        });
        // 鼠标离开元素停止拖动
        nav.addEventListener("mouseleave", function () {
          flag = false;
        });
      }
    },
    // 获取全部游戏
    getAllJson() {
      let allJson = getJson()
      this.popularGame = allJson.splice(0,6)
    },
    classClick(type) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType: type
        }
      },()=>{})
    },
    // 搜索框
    inputChange(value) {
      let inputValue = value.toLowerCase()
      if (inputValue == '') {
        this.screenType = false
      } else {
        this.screenType = true
      }
      if (inputValue.trim()) {
        let arr = []
        let allJson = getJson()
        allJson && allJson.map((item)=>{
          if (item.Name.toLowerCase().includes(`${inputValue}`)) {
            arr.push(item)
          }
        })
        this.screenList = arr
      } else {
        this.screenList = []
      }
    },
    // 切换游戏
    switchGame (item) {
      recentGame(item)
      this.$router.push({
        path: '/P/details',
        query: {
          gameId: item.gameId
        }
      },()=>{})
    },
  }
}
</script>

<style lang="less" scoped>
.gBGPWM {
  position: fixed;
  z-index: 100003;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #83ffe7;
  width: 688px;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 12px 16px 0px;
  display: flex;
  flex-direction: column;
  padding: 32px 29px 0px;
  box-sizing: border-box;
}
.iYQTqc {
  position: fixed;
  z-index: 100003;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #83ffe7;
  width: 688px;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 12px 16px 0px;
  display: flex;
  flex-direction: column;
  padding: 32px 29px 0px;
  transform: translateX(calc(-100% - 32px));
  pointer-events: none;
}
.diLFOL {
  position: fixed;
  z-index: 100002;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.bjFQNg {
  display: flex;
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  width: 612px;
  height: 64px;
  flex-direction: row;
  box-shadow: rgba(9, 30, 66, 0.07) 0px 4px 8px, rgba(9, 30, 66, 0.07) 0px 0px 2px;
  position: relative;
  z-index: 2;
}
.gpJxFx:hover {
  background: #f0f5fc;
}
.gpJxFx.gpJxFx {
  border-right: 2px solid #f0f5fc;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 24px 0px 16px;
  border-radius: 16px 0px 0px 16px;
}
.koyGQc {
  font-size: 100%;
  font-family: inherit;
  border: 0px;
  padding: 0px;
  background: none;
  cursor: pointer;
  img{
    width: 24px;
    height: 24px;
  }
}
.ildPAc {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.cpmosI {
  outline: 0px;
  width: 100%;
  height: 100%;
  margin: 0px 0px 0px 16px;
  border: none;
  font-family: Torus, sans-serif;
  font-size: 21px;
  color: #002b50;
  min-width: 0px;
  background: transparent;
}
.jVuRgK {
  height: 100%;
  display: flex;
  align-items: center;
  img{
    width: 24px;
    height: 24px;
    margin: 0 16px;
  }
}
input::placeholder{
  color: #bac9de;
}
.kSNKUJ {
  position: absolute;
  top: 32px;
  right: -32px;
  margin: 0px;
  transition: opacity 0.3s ease-out 0s, transform 0.2s ease 0s;
  img{
    width: 25px;
    height: 25px;
  }
}
.gwKjum {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px 0px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  cursor: pointer;
  transition: border-color 0.2s ease-out 0s, box-shadow 0.2s ease-out 0s, transform 0.2s ease-out 0s;
}
.gwKjum:hover{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
  transform: translateY(-2px);
}
.dikVfD {
  transition: transform 0.1s ease-out 0s;
  transform: translateY(0px);
  overflow: hidden scroll;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 108px 21px 0px;
  box-sizing: border-box;
}
.dikVfD::-webkit-scrollbar {
  display: none;
}
.dMifeo {
  margin: 0px -21px;
  position: relative;
  z-index: 2;
  transition: opacity 0.1s ease-out 0s;
  will-change: opacity;
}
.dMifeo::before {
   content: "";
   position: absolute;
   top: 0px;
   left: 0px;
   width: 20px;
   height: 72px;
   background: linear-gradient(270deg, rgba(131, 255, 231, 0) 0%, rgb(131, 255, 231) 100%);
   pointer-events: none;
   z-index: 1;
  box-sizing: border-box;
 }
.dMifeo::after {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 120px;
  height: 72px;
  background: linear-gradient(270deg, rgb(131, 255, 231) 20%, rgba(131, 255, 231, 0) 50%);
  pointer-events: none;
  box-sizing: border-box;
}
.jmIBMY {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: scroll;
  height: 64px;
  padding: 0px 32px 0px 29px;
  margin: 0px 0px -22px;
}
.iWVJzN {
  display: inline-block;
  background: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.07) 0px 4px 8px, rgba(9, 30, 66, 0.07) 0px 0px 2px;
  border-radius: 20px;
  color: #002b50;
  padding: 8px 20px;
  font: 700 12px/22px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
  text-transform: uppercase;
  margin: 0px 10px 10px 0px;
  -webkit-tap-highlight-color: transparent;
  height: 36px;
  user-select: none;
  box-sizing: border-box;
  cursor: pointer;
}
.jmIBMY::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.iWVJzN:hover{
  background: #009cff;
  color: rgb(255, 255, 255);
}
.MMWDF {
  margin: 24px 8px 0px;
  font: 700 24px Torus, sans-serif;
}
.gA-dJmQ {
  margin-top: 16px;
  .chTXCW {
    position: absolute;
    z-index: 5;
    left: -6px;
    right: 0px;
    height: 28px;
    top: 8px;
    font: 700 11px/28px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
    color: #009cff;
    text-transform: uppercase;
    padding: 0px 8px 0px 6px;
    pointer-events: none;
    .dtnyBS {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      background: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px;
      border-radius: 3px 14px 14px 0px;
      padding: 0px 8px 0px 3px;
      img{
        width: 23px;
        height: 23px;
        padding: 5px 0px 0px 5px;
        z-index: 2;
        box-sizing: border-box;
      }
    }
  }
}
.app-item {
  width: 94px;
  height: 94px;
  display: block;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  float: left;
  margin-right: 16px;
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
.app-item:nth-of-type(6n){
  margin-right: 0;
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
  .app-item:hover .sc-963fcq-0 {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
.izRAmK {
  transition: transform 0.1s ease-out 0s;
  transform: translateY(-62px);
  overflow: hidden scroll;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  bottom: -62px;
  left: 0px;
  width: 100%;
  padding: 150px 21px 0px;
  box-sizing: border-box;
}
.hSivpy {
  position: relative;
  width: calc(100% + 20px);
  flex-grow: 1;
  margin: 0px 0px 10px;
  height: 100%;
}
.izRAmK::-webkit-scrollbar {
  display: none;
}
.cndJnf{
  margin: 48px 21px 0px 0px;
}
.cndJnf:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.bMdTkk {
  margin: 24px 0px 0px 8px;
  max-width: 612px;
  background: rgb(255, 255, 255);
  padding: 18px 24px;
  h1{
    margin: 0px;
    font: 700 24px Torus, sans-serif;
  }
}
</style>