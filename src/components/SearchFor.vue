<template>
  <div>
    <section role="search" :class="determinePcOrMove == 1 ? UnfoldAndCollapse ? gfDODf : cBtLbj  : UnfoldAndCollapse ? gBGPWM : iYQTqc">
      <div class="sc-jkuq4p-0 bjFQNg">
        <button class="koyGQc gpJxFx" @click="collapse">
          <img v-if="determinePcOrMove == 1" class="lnRyAU" :src="fanHui" alt="">
          <img :src="logos" class="logos" alt="">
        </button>
        <div class="ildPAc">
          <input :placeholder="determinePcOrMove == 1 ? 'search result' : 'What are you going to play today？'" type="search" v-model="screenValue" class="cpmosI" @input="inputChange($event.target.value)">
          <div class="jVuRgK">
            <div v-if="screenType" @click="emptyClick">
              <div class="koyGQc iJOQIM">
                <img :src="guanBi" alt="">清空
              </div>
            </div>
            <img v-else :src="souSuo2" alt="">
          </div>
        </div>
      </div>
      <section v-show="!screenList.length" class="dikVfD">
        <div v-show="screenType" class="bMdTkk">
          <h1>Hmm, nothing’s coming up for that.</h1>
          <p>Try searching for something else?</p>
        </div>
        <div v-show="!screenType" class="dMifeo">
          <nav class="jmIBMY" id="nav">
            <div class="iWVJzN" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)">{{item.type}}</div>
          </nav>
        </div>
        <h2 class="MMWDF">本周热门</h2>
        <div class="gA-dJmQ">
          <div class="app-item" v-for="(item,index) in popularGame" :key="index" @click="switchGame(item)">
            <img :src="item.iconUrl" alt="">
            <span class="esaxGV">{{item.Name}}</span>
            <div class="chTXCW" v-if="index == 0">
              <div class="dtnyBS">
                <img :src="huore" alt="">
              </div>
            </div>
          </div>
        </div>
        <h2 class="MMWDF">最近玩过</h2>
        <div class="gA-dJmQ">
          <div class="app-item" v-for="(item,index) in topGameList" :key="index" @click="switchGame(item)">
            <img :src="item.iconUrl" alt="">
            <span class="esaxGV">{{item.Name}}</span>
            <div class="chTXCW">
              <div class="dtnyBS">
                <img :src="shuaXin" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-show="screenList.length" class="izRAmK">
        <div class="hSivpy">
          <div class="fYlIeu" v-if="determinePcOrMove == 1">
            <a @click="switchGame(item)" v-for="(item,index) in screenList" :key="index" :href="'/#/M/details?gameId='+item.gameId" class="fcDjQV">
              <img :src="item.iconUrl" class="dYqVqC" alt="">
              <div class="kZbSoa">
                <div class="hQIsLG">
                  <div class="UVa-dc">{{item.Name}}</div>
                </div>
                <span class="eyfKaw"></span>
              </div>
            </a>
          </div>
          <div class="cndJnf" v-else>
            <div class="app-item" v-for="(item,index) in screenList" :key="index" @click="switchGame(item)">
              <img :src="item.iconUrl" alt="">
              <span class="esaxGV">{{item.Name}}</span>
            </div>
          </div>
        </div>
        <div>
          <TypeList from="1"></TypeList>
        </div>
      </section>
      <button class="gwKjum kSNKUJ" @click="collapse">
        <img :src="fanHui2" alt="">
      </button>
    </section>
    <div class="diLFOL" v-if="UnfoldAndCollapse" @click="collapse"></div>
  </div>
</template>

<script>
import logos from '@/assets/logos.png';
import souSuo2 from '@/assets/sousuo2.png';
import fanHui2 from '@/assets/fanhui2.png';
import shuaXin from '@/assets/shuaxin.png';
import huore from '@/assets/huore.png';
import fanHui from '@/assets/fanhui.png';
import guanBi from '@/assets/guanbi.png';
import TypeList from '@/components/TypeList.vue'
import {getGameTypeList, getJson, recentGame, determinePcOrMove} from '@/utils/utils'
export default {
  name: "SearchFor",
  props: ['UnfoldAndCollapse'],
  components: {
    TypeList
  },
  data() {
    return {
      gBGPWM: 'gBGPWM', // pc展开样式
      iYQTqc: 'iYQTqc', // pc收起样式
      gfDODf: 'gfDODf', // 移动端展开样式
      cBtLbj: 'cBtLbj', // 移动端收起样式
      logos, souSuo2, fanHui2, shuaXin, huore, fanHui, guanBi,
      typeList: getGameTypeList() || [], // 类型
      popularGame: [], // 热门游戏
      screenList: [], // 筛选数据
      screenType: false, // 搜索状态
      topGameList: [], // 常玩游戏
      determinePcOrMove: null,
      screenValue: '', // 搜索框值
    }
  },
  mounted() {
    if (determinePcOrMove() == 1) {
      this.determinePcOrMove = 1
      // setTimeout(()=>{
      //   window.addAds()
      // },1300)
    } else {
      this.determinePcOrMove = 2
    }
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
      console.log(nav);
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
    classClick(value) {
      this.screenValue = value
      this.inputChange(value,1)
    },
    // 搜索框
    inputChange(value,type) {
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
          if (type) {
            if (item[value] == 1) {
              arr.push(item)
            }
          } else {
            if (item.Name.toLowerCase().includes(`${inputValue}`)) {
              arr.push(item)
            }
          }
        })
        this.screenList = arr
      } else {
        this.screenList = []
      }
    },
    // 清空input
    emptyClick() {
      this.screenValue = ''
      this.screenList = []
      this.screenType = false
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
@media (min-width: 111px) and (max-width: 770.9px) {
  .gfDODf {
    padding: 0px 15px 0px 29px!important;
    width: 100%!important;
    overflow: hidden!important;
    .dikVfD {
      padding: 84px 21px 0px!important;
    }
    .cBtLbj {
      padding: 0px 15px 0px 29px!important;
      width: 100%!important;
      overflow: hidden!important;
    }
    .bjFQNg {
      height: 60px!important;
      border-radius: 0px 12px 12px 0px!important;
      top: 16px!important;
      left: -29px!important;
      width: 96vw!important;
    }
  }
  .kSNKUJ {
    display: none!important;
  }
}
@media (min-width: 111px) and (max-width: 359px) {
  .app-item{
    margin-right: 16px;
  }
}
@media (min-width: 359px) and (max-width: 465px) {
  .app-item:not(:nth-child(3n)){
    margin-right: 16px;
  }
}
@media (min-width: 465px) and (max-width: 576px) {
  .app-item:not(:nth-child(4n)){
    margin-right: 16px;
  }
}
@media (min-width: 576px) and (max-width: 685px) {
  .app-item:not(:nth-child(5n)){
    margin-right: 16px;
  }
}
@media (min-width: 685px) {
  .app-item:not(:nth-child(6n)){
    margin-right: 16px;
  }
}

.gBGPWM, .gfDODf{
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
  .lnRyAU{
    width: 8px;
    height: 10px;
    margin: 0 8px 0 0;
  }
  .logos{
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
  .iJOQIM {
    background: #f0f5fc;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    margin: 0px 14px;
    font: 700 12px/22px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
    text-transform: uppercase;
    color: #5d6b84;
    overflow: hidden;
    will-change: width;
    transition: width 0.1s ease-in 0s;
    img{
      width: 16px;
      height: 16px;
      margin: 0 10px;
    }
  }
  .iJOQIM:hover {
    width: 88px;
  }
}
input::placeholder{
  color: #bac9de;
}

input::-webkit-search-cancel-button {
  display: none;
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
  .app-item:hover .sc-963fcq-0 {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
.izRAmK {
  transition: transform 0.1s ease-out 0s;
  transform: translateY(-62px);
  overflow: hidden scroll;
  //display: flex;
  //flex-direction: column;
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
  //flex-grow: 1;
  margin: 0px 0px 10px;
  //height: 100%;
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
.fYlIeu {
  margin: 48px 21px 0px 0px;
  a{
    text-decoration: none;
  }
}
.fcDjQV {
  font-size: 18px;
  margin: 16px 0;
  display: flex;
}
.dYqVqC {
  border-radius: var(--borderRadius,8px);
  box-shadow: var(--boxShadow,0 4px 8px 0 rgba(0,0,0,.24));
  background: #bac9de;
  margin: 0px 16px 0px 0px;
  width: 64px;
  height: 64px;
}
.kZbSoa {
  margin: auto 0px;
}
.UVa-dc {
  margin: 0px;
  font: 700 1em/1em Torus, sans-serif;
  padding: 0px 10px 0px 0px;
  color: #002b50;
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