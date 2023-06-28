<template>
  <div v-title :data-title="gameInfo.Name + ' - ' + 'Play' + ' ' + gameInfo.Name + ' Online at gugoplay.com'">
    <PCLogo offsetName="2"></PCLogo>
    <div class="details">
      <div class="gpagqS">
        <div class="dsgWHA">
          <div class="main-game">
            <div class="game-part">
              <div class="game-container" :style="full">
                <iframe :src="gameInfo.Url ? gameInfo.Url : null" width="100%" height="100%" id="iframe"></iframe>
                <!--            <iframe :src="gameInfo.playUrl ? gameInfo.playUrl : null" width="100%" height="100%" id="iframe"></iframe>-->
                <div class="close" :style="closeStyle" @click="closeClick"><i class="el-icon-close" /></div>
                <div class="flex-games" v-show="isBlock" :style="leftHideStyle">
                  <div class="btns">
                    <a href="javascript: void(0)" class="btn-left" @click="leftClick"><i class="el-icon-arrow-left" v-show="leftBtnType"></i><i class="el-icon-arrow-right" v-show="!leftBtnType"></i></a>
                    <a href="javascript: void(0)" class="btn-top" v-show="topBtnType" @click="topClick"><i class="el-icon-arrow-up"></i></a>
                    <a href="javascript: void(0)" class="btn-bottom" v-show="bottomBtnType" @click="bottomClick"><i class="el-icon-arrow-down"></i></a>
                  </div>
                  <div class="game-warp">
                    <div class="game-list" :style="{transform: `translateY(${heightType}px)`}" id="game-list">
                      <div class="app-item" v-for="(item,index) in theSame" :key="index" @click="switchGame(item)">
                        <img v-lazy="item.iconUrl" alt="">
                        <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="game-bar">
                <div class="bar-app-icon">
                  <img :src="gameInfo.iconUrl" alt="">
                  <div class="kZbSoa">
                    <div><h1>{{ gameInfo.Name }}</h1></div>
                    <span>{{ gameInfo.Type }}</span>
                  </div>
                </div>
                <div class="bar-btns">
                  <div class="full-btn" @click="amplifyClick"><i class="el-icon-rank"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: contents">
          <div v-for="(item,index) in bigImgList" :key="index" @click="switchGame(item)" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-3 ftkfX global-cq" :style="innerWidth >= 1321 ? {gridArea: 'bigIp' + index} : null">
            <img :src="item.iconUrl" alt="" class="sc-18mcksl-1 eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </div>
        </div>
        <div style="display: contents">
          <div v-for="(item,index) in smallImgList" :key="index" @click="switchGame(item)" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-3 global-cq">
            <img :src="item.iconUrl" alt="" style="width: 94px;height: 94px" class="sc-18mcksl-1 eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </div>
        </div>
        <div class="gqnFJQ pAock">
          <div class="bioerJ">
            <div class="eDhvMX" style="height: 90px;width: 728px;overflow: hidden"></div>
            <div class="keJcxs">广告</div>
          </div>
        </div>
        <div class="gqnFJQ jxmECU">
          <div class="iFmTCx">
            <div class="eDhvMX" style="height: 250px; width: 300px; overflow: hidden;"></div>
            <div class="iZJgLq">广告</div>
          </div>
        </div>
        <div class="gqnFJQ SpDdJ">
          <div class="iFmTCx">
            <div style="width: 160px;height: 600px;overflow: hidden" class="eDhvMX">

            </div>
            <div class="iZJgLq">
              广告
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 16px">
        <TypeList></TypeList>
      </div>
      <div class="bottom-text">
        <nav class="sc-1oa7ili-0 gmEuRM">
          <ul>
            <li><a href="/">GAME</a></li>
            <li>{{ gameInfo.Type }}</li>
          </ul>
        </nav>
        <header class="sc-1v3c8lr-2 kGpygg">
          <h2 class="sc-1v3c8lr-3 iBLcO">{{ gameInfo.Name }}</h2>
        </header>
        <div class="sc-1v3c8lr-6 kXVnFE">
          <span class="sc-1v3c8lr-8 bbPKoC"><i class="el-icon-star-on"></i> {{gameScore}}</span>
        </div>
        <div class="sc-1v3c8lr-9 jXgCKW">
          {{ gameInfo.desc ? gameInfo.desc : "Play best game on GUGOPLAY!" }}
        </div>
        <ul class="sc-g8xdfn-0 jOvOhG sc-1v3c8lr-4 durvAn">
          <li v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)">{{item.type}}</li>
        </ul>
      </div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from '../BottomNav';
import TypeList from '@/components/TypeList.vue';
import PCLogo from "@/components/PCLogo.vue";
import {determinePcOrMove, shuffle, setMeta, getJson, recentGame, getGameTypeList} from '@/utils/utils.js';
export default {
  name: "detailsIndex",
  components: {
    BottomNav, TypeList, PCLogo
  },
  data() {
    return {
      gameInfo: {}, // 游戏详情数据
      theSame: [], // 同详情游戏类型相同的游戏，大屏用到
      full: null,
      fullStyle: {
        position: "fixed",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        zIndex: 999,
        background: '#0054ff'
      },
      closeStyle: null,
      isBlock: false, // 展示大屏广告状态
      leftHideType: false, // 大屏广告隐藏状态
      leftHideStyle: null, // 大屏广告隐藏样式
      heightType: 0, // 偏移量
      gameListValue: 0, // 滚动区域高度
      leftBtnType: true, // 侧按钮
      topBtnType: false, // 顶部按钮
      bottomBtnType: true, // 底部按钮
      typeList: [], // 游戏类型
      gameScore: "", // 游戏评分
      UnfoldAndCollapse: false, // 展开收起
      bigImgList: [], // 大图片列表
      smallImgList: [], // 小图片列表
      innerWidth: 0, // 屏幕宽度
    }
  },
  created() {
    const { query } = this.$route
    const { gameId } = query || {}
    if (determinePcOrMove() == 1) {
      this.$router.push({
        path: '/M/details',
        query: {
          gameId
        }
      },()=>{})
    }
  },
  mounted() {
    window.onresize = () => {
      this.innerWidth = window.innerWidth
    }
    this.innerWidth = window.innerWidth
    this.getJson()
  },
  methods: {
    // 去首页
    goHome() {
      this.$router.push({
        path: '/'
      },()=>{})
    },
    // 点击搜索
    searchClick() {
      this.UnfoldAndCollapse = !this.UnfoldAndCollapse
    },
    getJson() {
      this.typeList = getGameTypeList() || []

      // 游戏评分
      let score = Math.random()*0.8 + 4.2
      this.gameScore = score.toFixed(1)


      const { query } = this.$route
      const { gameId } = query || {}
      let jsonArr = getJson()
      // 随机打乱数组
      let shuffleArr = shuffle(jsonArr)
      let gameInfo = {}
      let bigImgList = [] // 大图片列表
      let smallImgList = [] // 小图列表
      let theSame = [] // 同类型游戏(大屏用)
      shuffleArr && shuffleArr.map((item)=>{
        if (item.gameId == gameId) {
          gameInfo = item
        }
      })
      shuffleArr && shuffleArr.map((item)=>{
        if (item.ImgSize == 1 || item.ImgSize == 2) {
          if (bigImgList.length < 2) {
            bigImgList.push(item)
          }
        } else {
          smallImgList.push(item)
        }
        theSame.push(item)
      })
      this.theSame = shuffle(theSame).splice(0,30)
      this.gameInfo = gameInfo
      this.bigImgList = bigImgList
      this.smallImgList = smallImgList



      setMeta(`${gameInfo.Name},${gameInfo.Name} Online,${gameInfo.Name} for free`,`${gameInfo.Name} is a ${gameInfo.gameType} Games`)
    },
    // 切换游戏
    switchGame (item) {
      recentGame(item)
      this.full = null
      this.closeStyle = null
      this.isBlock = false
      this.$router.push({
        path: '/P/details',
        query: {
          gameId: item.gameId
        }
      },()=>{})
    },
     // 点击放大游戏
    amplifyClick() {
      this.full = this.fullStyle
      this.closeStyle = {
        display: 'block',
        position: "absolute",
        right: "12px",
        top: "10px",
        zIndex: 50,
        fontSize: "32px",
        color: '#ffffff',
        cursor: 'pointer',
        background: '#FF9900',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px'
      }
      this.isBlock = true
      this.bottomBtnType = this.theSame.length > 8
      setTimeout(() => {
        this.gameListValue = document.getElementById('game-list').offsetHeight
        console.log(this.gameListValue);
      })
    },
    // 大屏点击关闭
    closeClick() {
      this.full = null
      this.closeStyle = null
      this.isBlock = false
    },
    // 大屏广告点击左侧隐藏
    leftClick() {
      this.leftBtnType = !this.leftBtnType
      this.leftHideType = !this.leftHideType
      this.leftHideStyle = this.leftHideType ? {
        left: '-110px'
      } : null
    },
    // 大屏广告点击顶部按键
    topClick() {
      this.heightType = this.heightType + 880
      if (this.heightType == 0) {
        this.topBtnType = false
        this.bottomBtnType = true
      }
    },
    // 大屏广告点击底部按键
    bottomClick() {
      this.heightType = this.heightType - 880
      if ((Math.abs(this.heightType) + 880) > this.gameListValue) {
        this.bottomBtnType = false
        this.topBtnType = true
      }
    },
    classClick(type) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType: type
        }
      },()=>{})
    }
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      this.getJson()
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 1871px) {
  .details {
    width: 1854px;
  }
  .gpagqS {
    --gridTemplateColumns: 17!important;
    grid-template-areas:
        ". . igc igc igc igc igc igc igc igc igc igc bigIp0 bigIp0 adv3 adv3 adv3"
        "adv1 adv1 igc igc igc igc igc igc igc igc igc igc bigIp0 bigIp0 adv3 adv3 adv3"
        "adv1 adv1 igc igc igc igc igc igc igc igc igc igc bigIp1 bigIp1 adv3 adv3 adv3"
        "adv1 adv1 igc igc igc igc igc igc igc igc igc igc bigIp1 bigIp1 . . ."
        "adv1 adv1 igc igc igc igc igc igc igc igc igc igc . . . . ."
        "adv1 adv1 igc igc igc igc igc igc igc igc igc igc . . . . ."
        "adv1 adv1 . . . adv2 adv2 adv2 adv2 adv2 adv2 adv2 . . . . .";
    .game-part {
      width: 1031px!important;
      height: 644px!important;
    }
    .SpDdJ {
      display: flex;
    }
  }
  .gpagqS::before {
    grid-column-start: span 2;
  }
}
@media (min-width: 1541px) and (max-width: 1870.9px) {
  .details {
    width: 1524px;
  }
  .gpagqS {
    --gridTemplateColumns: 14!important;
    grid-template-areas:
        ". igc igc igc igc igc igc igc igc igc igc adv3 adv3 adv3"
        ". igc igc igc igc igc igc igc igc igc igc adv3 adv3 adv3"
        ". igc igc igc igc igc igc igc igc igc igc adv3 adv3 adv3"
        ". igc igc igc igc igc igc igc igc igc igc bigIp0 bigIp0 ."
        ". igc igc igc igc igc igc igc igc igc igc bigIp0 bigIp0 ."
        ". igc igc igc igc igc igc igc igc igc igc bigIp1 bigIp1 ."
        ". . . . adv2 adv2 adv2 adv2 adv2 adv2 adv2 bigIp1 bigIp1 .";
    .game-part {
      width: 1031px!important;
      height: 644px!important;
    }
    .SpDdJ {
      display: none!important;
    }
  }
}
@media (min-width: 1321px) and (max-width: 1540.9px) {
  .details {
    width: 1304px;
  }
  .gpagqS {
    --gridTemplateColumns: 12!important;
    grid-template-areas:
        ". igc igc igc igc igc igc igc igc adv3 adv3 adv3"
        ". igc igc igc igc igc igc igc igc adv3 adv3 adv3"
        ". igc igc igc igc igc igc igc igc adv3 adv3 adv3"
        ". igc igc igc igc igc igc igc igc bigIp0 bigIp0 ."
        ". igc igc igc igc igc igc igc igc bigIp0 bigIp0 ."
        ". . adv2 adv2 adv2 adv2 adv2 adv2 adv2 bigIp1 bigIp1 ."
        ". . . . . . . . . bigIp1 bigIp1 .";
    .game-part {
      width: 836px!important;
      height: 534px!important;
    }
    .SpDdJ {
      display: none!important;
    }
  }
}
@media (min-width: 1211px) and (max-width: 1320.9px) {
  .details {
    width: 1194px;
  }
  .gpagqS {
    --gridTemplateColumns: 11;
    grid-template-areas:
        ". igc igc igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc igc igc adv1 adv1"
        ". . adv2 adv2 adv2 adv2 adv2 adv2 adv2 adv1 adv1";
    .game-part {
      width: 836px!important;
      height: 534px!important;
    }
    .SpDdJ {
      display: flex;
    }
    .jxmECU {
      display: none!important;
    }
  }
}
@media (min-width: 991px) and (max-width: 1210.9px) {
  .details {
    width: 980px;
  }
  .gpagqS {
    --gridTemplateColumns: 9!important;
    grid-template-areas:
        ". igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc adv1 adv1"
        ". igc igc igc igc igc igc adv1 adv1"
        "adv2 adv2 adv2 adv2 adv2 adv2 adv2 adv1 adv1"
        ". . . . . . . adv1 adv1";
    .game-part {
      width: 640px!important;
      height: 424px!important;
    }
    .SpDdJ {
      display: flex;
    }
    .jxmECU {
      display: none!important;
    }
  }
}
@media (min-width: 111px) and (max-width: 990.9px) {
  .details {
    width: 760px;
  }
  .gpagqS {
    --gridTemplateColumns: 7!important;
    grid-template-areas:
        ". igc igc igc igc igc igc"
        ". igc igc igc igc igc igc"
        ". igc igc igc igc igc igc"
        ". igc igc igc igc igc igc"
        "adv2 adv2 adv2 adv2 adv2 adv2 adv2";
    .SpDdJ {
      display: none!important;
    }
    .jxmECU {
      display: none!important;
    }
  }
}
@media (min-width: 1321px) {
  .jxmECU {
    display: flex;
  }
  .ftkfX{
    img{
      width: 204px!important;
      height: 204px!important;
    }
  }
}
.details{
  margin: 0px auto;
  flex-grow: 1;
  .gpagqS {
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
    .dsgWHA {
      grid-area: igc;
      display: flex;
      justify-content: center;
    }
    .SpDdJ {
      display: none;
      grid-area: adv1;
      .iFmTCx {
        display: inline-flex;
        flex-direction: column;
        .eDhvMX {
          background: rgba(255, 255, 255, 0.5);
        }
        .iZJgLq {
          font: 400 9px / 2 Arial, sans-serif;
          text-transform: uppercase;
          text-align: center;
          opacity: 0.7;
          height: 20px;
          letter-spacing: 1px;
          color: #002b50;
        }
      }
    }
    .pAock {
      grid-area: adv2;
      .bioerJ {
        display: inline-flex;
        flex-direction: row;
        padding-right: 26px;
        position: relative;
        .eDhvMX {
          background: rgba(255, 255, 255, 0.5);
        }
        .keJcxs {
          font: 400 8px / 1 Arial, sans-serif;
          text-transform: uppercase;
          text-align: center;
          opacity: 0.7;
          height: 20px;
          letter-spacing: 1px;
          color: #002b50;
          position: absolute;
          right: 0px;
          top: 50%;
          transform: rotate3d(0, 0, 1, 90deg) translateX(50%) translate(-10px, 24px);
          transform-origin: right center;
        }
      }
    }
    .jxmECU {
      display: none;
      grid-area: adv3;
      height: 314px;
      .iFmTCx {
        display: inline-flex;
        flex-direction: column;
        .eDhvMX {
          background: rgba(255, 255, 255, 0.5);
        }
        .iZJgLq{
          font: 400 9px / 2 Arial, sans-serif;
          text-transform: uppercase;
          text-align: center;
          opacity: 0.7;
          height: 20px;
          letter-spacing: 1px;
          color: #002b50;
        }
      }
    }
    .gqnFJQ {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
  .gpagqS::before {
    content: "";
    display: block;
  }
  #iframe{
    border: 1px solid #cccccc;
  }
  .main-game {
    width: 100%;
    height: 100%;
    .game-part {
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-grow: 0;
      width: 100%;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
      .game-container {
        padding: 0 2px 2px 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        .close{
          display: none;
        }
        .flex-games{
          background-color: #9cd3ff;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          box-shadow: 6px 0 8px 0 rgba(0,0,0,.4);
          transition: all 1s;
          .btns{
            a{
              text-decoration: none;
            }
            .btn-left{
              width: 34px;
              height: 50px;
              background-color: #fc5632;
              top: 50%;
              transform: translateY(-50%);
              left: 100%;
              position: absolute;
              text-align: center;
              line-height: 50px;
              .el-icon-arrow-left,.el-icon-arrow-right{
                color: white;
                font-size: 20px;
              }
            }
            .btn-top{
              position: absolute;
              width: 100%;
              height: 30px;
              background-color: #fc5632;
              z-index: 2;
              text-align: center;
              line-height: 30px;
              .el-icon-arrow-up{
                color: white;
                font-size: 20px;
              }
            }
            .btn-bottom{
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 30px;
              background-color: #fc5632;
              z-index: 2;
              text-align: center;
              line-height: 30px;
              .el-icon-arrow-down{
                color: white;
                font-size: 20px;
              }
            }
          }
          .game-warp{
            height: 876px;
            padding: 10px 0;
            width: 110px;
            overflow: hidden;
            .game-list{
              transition: all 1s;
              .app-item{
                width: 94px;
                height: 94px;
                margin: 0 auto 16px;
                box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
                display: block;
                border-radius: 12px;
                overflow: hidden;
                position: relative;
                img{
                  width: 100%;
                  height: 100%;
                  border-radius: 12px;
                  //border: 2px solid #fff;
                  overflow: hidden;
                  //background: white;
                }
              }
            }
          }
        }
      }
      .game-bar{
        width: 100%;
        overflow: hidden;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        height: 64px;
        align-self: stretch;
        background: rgb(255, 255, 255);
        position: relative;
        z-index: 3;
        padding: 0px 16px 0px 0px;
        box-sizing: border-box;
        .bar-app-icon {
          font-size: 21px;
          display: flex;
          margin: 12px;
          .kZbSoa{
            margin: auto 0px;
            h1{
              margin: 0px;
              font: 700 1em/1em Torus, sans-serif;
              padding: 0px 10px 0px 0px;
              color: #002b50;
            }
            span{
              display: block;
              color: #5d6b84;
              font-size: 12px;
              line-height: 16px;
              margin: 4px 0px 0px;
              letter-spacing: 0.3px;
            }
          }
          img{
            width: 40px;
            height: 40px;
            border-radius: 8px;
            margin: 0px 8px 0px 0px;
            background: #bac9de;
          }
        }
        .bar-btns{
          margin-right: 10px;
          display: flex;
          .download {
            height: 40px;
            background-color: #3be6a2;
            border-radius: 8px;
            margin-top: 10px;
            margin-left: 12px;
            padding: 0 10px 0 8px;
            cursor: pointer;
            span{
              line-height: 40px;
              font-size: 16px;
              color: #fff;
            }
          }
          .play-tag{
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0 12px;
            margin-top: 10px;
            border-radius: 8px;
            background-color: hsla(0,0%,100%,.2);
            margin-left: 12px;
            font-size: 13px;
            color: #fff;
            cursor: pointer;
          }
          .full-btn{
            width: 30px;
            height: 30px;
            display: block;
            background-color: transparent;
            margin-top: 15px;
            float: left;
            margin-left: 8px;
            position: relative;
            transform: rotate(45deg);
            cursor: pointer;
            /deep/ .el-icon-rank{
              font-size: 36px;
              color: #009cff;
            }
          }
        }
      }
    }
  }
  .cOWZsC {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    user-select: none;
    aspect-ratio: 1 / 1;
  }
  .ftkfX{
    img{
      width: 94px;
      height: 94px;
    }
  }
  .cASSfo {
    display: block;
    transition: transform .6s cubic-bezier(.25, .1, .25, 1);
    border-radius: 16px;
    position: relative;
    cursor: pointer;
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
    transition: box-shadow .6s var(--bezier),opacity .3s var(--bezier);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    border-radius: 16px;
    contain: strict;
  }
  .cASSfo:hover {
    transform: scale(1.04255) translate(0px, -4px);
    transition-duration: 0.3s;
  }
  .eoBBYj {
    display: block;
    --minSize: 94px;
    min-width: var(--minSize);
    min-height: var(--minSize);
    border-radius: inherit;
    aspect-ratio: 1 / 1;
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
    .cOWZsC:hover {
      transform: scale(1.01869) translate(0px, -4px);
    }
    .cOWZsC:hover .sc-963fcq-0 {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
  .bottom-text{
    position: relative;
    margin: 24px 0px;
    padding: 18px 24px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    .gmEuRM ul {
      overflow: hidden;
      margin: 0px;
      padding: 0px;
      color: var(--grey-1);
      list-style: none;
      text-overflow: ellipsis;
    }
    .gmEuRM li {
      display: inline;
      color: #5d6b84;
      a{
        text-decoration: none;
        color: #5d6b84;
      }
    }
    .gmEuRM li:nth-of-type(2)::before {
      content: "›";
      margin: 0px 4px;
      color: var(--grey-1);
      font-size: 13px;
    }
    .kGpygg {
      margin: 8px 0px 8px;
      h2{
        margin: 0px;
        font: 700 24px Torus, sans-serif;
        color: #002b50;
      }
    }
    .kXVnFE{
      margin: 4px 0px;
      .bbPKoC {
        display: inline-block;
        font-size: 12px;
        line-height: 22px;
        font-weight: bold;
        padding: 0px 8px;
        color: #5d6b84;
        background: #f0f5fc;
        border-radius: 10px;
        text-transform: uppercase;
        height: 20px;
        margin-right: 4px;
      }
    }
    .jXgCKW{
      color: #002b50;
      font: 400 16px/24px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
    }
    .durvAn {
      margin-top: 12px;
      margin-bottom: 8px;
    }
    .jOvOhG li {
      display: inline-block;
      margin: 4px 4px 0px 0px;
      padding: 0px 10px;
      border: 2px solid #bac9de;
      border-radius: 100px;
      color: #bac9de;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
</style>
