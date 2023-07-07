<template>
  <div v-title :data-title="gameInfo.Name + ' - ' + 'Play' + ' ' + gameInfo.Name + ' Online at gugoplay.com'">
    <PCLogo offsetName="2"></PCLogo>
    <div class="details">
      <div class="gpagqS">
        <div class="dsgWHA">
          <div class="main-game">
            <div class="game-part" :style="full">
              <div class="game-container">
                <iframe :src="gameInfo.Url ? gameInfo.Url : null" width="100%" height="100%" id="iframe"></iframe>
              </div>
              <div class="game-bar">
                <div class="bar-app-icon">
                  <img :src="gameInfo.iconUrl" alt="">
                  <div class="kZbSoa">
                    <div><h1>{{ gameInfo.Name }}</h1></div>
                    <span>{{ gameInfo.Type }}</span>
                  </div>
                </div>
                <div class="evgOqe dTwGvC" v-if="isBlock">
                  <img :src="logo" alt="">
                </div>
                <div class="bar-btns" v-if="isBlock">
                  <div class="lcJldi" @click="closeClick">
                    <div class="iAzhvC">
                      <div class="sc-1wag0ht-0 ehxUGv">
                        <img :src="reduce" alt="">
                      </div>
                    </div>
                    <div class="iUqdTV">
                      <span class="hEtgR faTlWW">Minimize</span>
                      <span class="hEtgR jWGbzI">Minimize</span>
                    </div>
                  </div>
                </div>
                <div class="bar-btns" v-else>
                  <div class="hGklVU">
                    <div :class="likeStyle ? 'lcJldi' : 'jwXhHc'" @click="btnClick(1)">
                      <div class="sc-1wag0ht-5" :class="likeStyle ? 'iAzhvC' : 'cwcbpr'">
                        <div class="sc-1wag0ht-0" :class="likeStyle ? 'ehxUGv' : 'iqLrJG'">
                          <img v-if="!likeStyle" :src="like" alt="">
                          <img v-if="likeStyle" :src="likeWhite" alt="">
                        </div>
                      </div>
                      <div class="iUqdTV">
                        <span class="hEtgR jhrTfi">{{likeScore}}k</span>
                        <span class="hEtgR jWGbzI">{{likeStyle ? 'remove' : 'like'}}</span>
                      </div>
                    </div>
                    <div :class="dislikeStyle ? 'cxjzJO' : 'jwXhHc'" @click="btnClick(2)">
                      <div class="sc-1wag0ht-5" :class="dislikeStyle ? 'dmtEVG' : 'gaptrT'">
                        <div :class="dislikeStyle ? 'eukeXb' : 'kBtgKC'">
                          <img v-if="!dislikeStyle" :src="dislike" alt="">
                          <img v-if="dislikeStyle" :src="dislikeWhite" alt="" style="margin-left: 1px">
                        </div>
                      </div>
                      <div class="iUqdTV">
                        <span class="hEtgR jhrTfi">{{dislikeScore}}k</span>
                        <span class="hEtgR jWGbzI">{{dislikeStyle ? 'remove' : 'dislike'}}</span>
                      </div>
                    </div>
                  </div>
                  <div :class="flagStyle ? 'lcJldi' : 'full-btn'" @click="btnClick(3)">
                    <div class="sc-1wag0ht-5" :class="flagStyle ? 'iAzhvC' : 'cwcbpr'" :style="flagStyle ? {lineHeight: '30px'} : null">
                      <div class="sc-1wag0ht-0" :class="flagStyle ? 'ehxUGv' : 'iqLrJG'" :style="flagStyle ? {textAlign: 'center'} : null">
                        <img v-if="!flagStyle" :src="flag" alt="">
                        <img v-if="flagStyle" :src="flagWhite" alt="" style="width: 17px;height: 17px; margin-left: 1px">
                      </div>
                    </div>
                    <div class="iUqdTV">
                      <span class="hEtgR jhrTfi"></span>
                      <span class="hEtgR jWGbzI">{{flagStyle ? '' : 'Report an error'}}</span>
                    </div>
                  </div>
                  <div class="full-btn" @click="amplifyClick">
                    <div class="sc-1wag0ht-5 cwcbpr">
                      <div class="iqLrJG">
                        <img :src="amplify" alt="">
                      </div>
                    </div>
                    <div class="iUqdTV">
                      <span class="hEtgR jhrTfi"></span>
                      <span class="hEtgR jWGbzI">maximize</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: contents">
          <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId" v-for="(item,index) in bigImgList" :key="index" @click="switchGame(item)" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-3 ftkfX global-cq" :style="innerWidth >= 1321 ? {gridArea: 'bigIp' + index} : null">
            <img :src="item.iconUrl" alt="" class="sc-18mcksl-1 eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
        <div style="display: contents">
          <a :href="'/#/P/details/'+item.Name.replace(/\s+/g, '') + '?gameId='+item.gameId" v-for="(item,index) in smallImgList" :key="index" @click="switchGame(item)" class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cOWZsC sc-al88rd-3 global-cq">
            <img :src="item.iconUrl" alt="" style="width: 94px;height: 94px" class="sc-18mcksl-1 eoBBYj">
            <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
          </a>
        </div>
        <div class="gqnFJQ pAock">
          <div class="bioerJ">
            <div class="eDhvMX" style="height: 90px;width: 728px;overflow: hidden">
              <div id='div-gpt-ad-1688371917521-0' ref="bottomAdv"></div>
            </div>
            <div class="keJcxs"></div>
          </div>
        </div>
        <div class="gqnFJQ jxmECU">
          <div class="iFmTCx">
            <div class="eDhvMX" style="height: 250px; width: 300px; overflow: hidden;">
              <div id='div-gpt-ad-1688371871810-0' ref="rightAdv"></div>
            </div>
            <div class="iZJgLq">advertisement</div>
          </div>
        </div>
        <div class="gqnFJQ SpDdJ">
          <div class="iFmTCx">
            <div style="width: 160px;height: 600px;overflow: hidden" class="eDhvMX">
              <div id='div-gpt-ad-1688371803760-0' ref="leftAdv"></div>
            </div>
            <div class="iZJgLq">
              advertisement
            </div>
          </div>
        </div>
      </div>
      <div style="display: contents">
        <aside class="hotNyV">
          <div class="lbpyEn" v-if="feedbackType1">
            <header class="iYUdDw">
              <div class="jSEhHX">
                <div class="hYpEdi">
                  <div class="hBmUwV">
                    <img v-if="btnClickStatus == 1" :src="likeBlack" alt="">
                    <img v-if="btnClickStatus == 2" :src="dislikeBlack" alt="">
                    <img v-if="btnClickStatus == 3" :src="flagBlack" alt="">
                  </div>
                  <div class="desc">
                    {{btnClickStatus == 1 ? 'What do you like' : btnClickStatus == 2 ? 'What do you dislike' : 'You are'}}
                    <strong>{{gameInfo.Name}}?</strong>
                    {{btnClickStatus == 3 ? 'What vulnerabilities were found in' : ''}}
                  </div>
                </div>
              </div>
              <button class="kWUen" @click="feedbackClose">
                <span class="sc-1219584-5 kzfNHa"></span>
                <div class="gJmbLa">
                  <i class="el-icon-close"></i>
                </div>
              </button>
            </header>
            <div class="AwRjN">
              <el-form ref="form" :model="formData">
                <el-form-item>
                  <el-input
                      v-model="formData.message"
                      name="message"
                      type="textarea"
                      :rows="5"
                      :placeholder="messagePlaceholder"
                  ></el-input>
                </el-form-item>
              </el-form>
              <img :src="star_feedback_v2" alt="" class="chqjsI">
            </div>
            <div class="eyffgn">
              <button class="cLNPVX" @click="sendMessage('form')">sending</button>
            </div>
          </div>
          <div :class="feedbackStyle ? 'lbpyEn' : 'cJsJca'" v-if="feedbackType">
            <header class="iYUdDw">
              <div class="jSEhHX">
                <div class="hYpEdi">
                  <div class="hBmUwV">
                    <img v-if="btnClickStatus == 1" :src="likeBlack" alt="">
                    <img v-if="btnClickStatus == 2" :src="dislikeBlack" alt="">
                    <img v-if="btnClickStatus == 3" :src="flagBlack" alt="">
                  </div>
                  <div class="desc">
                    {{btnClickStatus == 1 ? 'What do you like' : btnClickStatus == 2 ? 'What do you dislike' : 'You are'}}
                    <strong>{{gameInfo.Name}}?</strong>
                    {{btnClickStatus == 3 ? 'What vulnerabilities were found in' : ''}}
                  </div>
                </div>
              </div>
              <button class="kWUen" @click="feedbackClose">
                <span class="sc-1219584-5 kzfNHa"></span>
                <div class="gJmbLa">
                  <i class="el-icon-close"></i>
                </div>
              </button>
            </header>
            <div class="AwRjN">
              <el-form ref="form" :model="formData">
                <el-form-item>
                  <el-input
                      v-model="formData.message"
                      name="message"
                      type="textarea"
                      :rows="5"
                      :placeholder="messagePlaceholder"
                  ></el-input>
                </el-form-item>
              </el-form>
              <img :src="star_feedback_v2" alt="" class="chqjsI">
            </div>
            <div class="eyffgn">
              <button class="cLNPVX" @click="sendMessage('form')">sending</button>
            </div>
          </div>
          <div class="kiYWjT" :style="messageBg" v-if="thankType">
            Thank you
          </div>
        </aside>
      </div>
      <div style="display: contents" v-if="smegmaType">
        <div class="AFSJx dgmlwU" style="background-color: #83ffe7">
          <div></div>
          <div></div>
          <div></div>
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
import {
  determinePcOrMove,
  shuffle,
  setMeta,
  getJson,
  recentGame,
  getGameTypeList,
  pageInitLog,
  pageOutLog, clickGameLog, Observer
} from '@/utils/utils.js';
import amplify from '@/assets/amplify.png';
import reduce from '@/assets/reduce.png';
import logo from '@/assets/logo.png';
import like from '@/assets/like.png';
import dislike from '@/assets/dislike.png';
import flag from '@/assets/flag.png';
import likeBlack from '@/assets/likeBlack.png';
import dislikeBlack from '@/assets/dislikeBlack.png';
import flagBlack from '@/assets/flagBlack.png';
import star_feedback_v2 from '@/assets/star_feedback_v2.svg';
import message from '@/assets/message.png';
import likeWhite from '@/assets/likeWhite.png';
import dislikeWhite from '@/assets/dislikeWhite.png';
import flagWhite from '@/assets/flagWhite.png';
import request from "@/utils/request";
export default {
  name: "detailsIndex",
  components: {
    BottomNav, TypeList, PCLogo
  },
  data() {
    return {
      gameInfo: {}, // 游戏详情数据
      full: null,
      fullStyle: {
        position: "fixed",
        width: "100%!important",
        height: "100%!important",
        left: 0,
        top: 0,
        zIndex: 999,
        background: '#002b50'
      },
      isBlock: false, // 展示大屏广告状态
      typeList: [], // 游戏类型
      gameScore: "", // 游戏评分
      UnfoldAndCollapse: false, // 展开收起
      bigImgList: [], // 大图片列表
      smallImgList: [], // 小图片列表
      innerWidth: 0, // 屏幕宽度
      amplify,
      reduce,
      logo,
      like,
      dislike,
      flag,
      likeBlack,
      dislikeBlack,
      flagBlack,
      star_feedback_v2,
      likeWhite,
      dislikeWhite,
      flagWhite,
      messageBg: {
        backgroundImage: `url(${message})`,
        backgroundSize: '100% 100%'
      },
      likeScore: "", // 喜欢
      dislikeScore: "", // 不喜欢
      formData: {
        message: '',
      },
      messagePlaceholder: '', //
      btnClickStatus: 1, // 1喜欢/2不喜欢/3反馈
      feedbackType: false, // 反馈框状态
      feedbackType1: false, // 反馈框状态
      feedbackStyle: false, // 反馈框状态
      thankType: false, // 发送成功提示
      likeStyle: false, // 喜欢样式
      dislikeStyle: false, // 不喜欢样式
      flagStyle: false, // 反馈样式
      smegmaType: false, // 蒙层状态
    }
  },
  created() {

  },
  mounted() {
    const { query, params } = this.$route
    const { gameId } = query || {}
    const { gameName } = params || {}
    if (determinePcOrMove() == 1) {
      this.$router.push({
        path: `/M/details${gameName ? '/'+gameName : ''}`,
        query: {
          gameId
        }
      },()=>{})
    } else {
      // 获取需要曝光的item
      setTimeout(()=>{
        let itemArr = [...document.getElementsByClassName("sc-wr3rvk-0")]
        itemArr && Array.from(itemArr).map((item)=>{
          Observer('gugoplay_pc_detail').observe(item)
        })
      })
      // 进入页面埋点
      pageInitLog('gugoplay_pc_detail')
      // 蒙层状态
      this.smegmaType = true
      setTimeout(()=>{
        this.smegmaType = false
      },800)

      document.documentElement.scrollTop = 0
      window.onresize = () => {
        this.innerWidth = window.innerWidth
        if (!this.checkFull()) {
          // 退出全屏后要执行的动作
          this.closeClick()
        }
      }
      this.innerWidth = window.innerWidth
      this.getJson()
      this.$store.commit('changeScreen', false)

      // 加载广告

      console.log(window.isDisplay);
      if (window.isDisplay) {
        googletag.cmd.push(function() { googletag.pubads().refresh(); });
      }

      let leftAdv = document.createElement("script")
      leftAdv.innerHTML = "googletag.cmd.push(function() { if(!window.isDisplay){googletag.display('div-gpt-ad-1688371803760-0');};});"
      this.$refs.leftAdv.append(leftAdv)

      let rightAdv = document.createElement("script")
      rightAdv.innerHTML = "googletag.cmd.push(function() { if(!window.isDisplay){googletag.display('div-gpt-ad-1688371871810-0');};});"
      this.$refs.rightAdv.append(rightAdv)

      let bottomAdv = document.createElement("script")
      bottomAdv.innerHTML = "googletag.cmd.push(function() { if(!window.isDisplay){googletag.display('div-gpt-ad-1688371917521-0'); window.isDisplay = true};});"
      this.$refs.bottomAdv.append(bottomAdv)
    }
  },
  methods: {
    checkFull() {
      //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
      //火狐浏览器
      let isFull =
          document.mozFullScreen ||
          document.fullScreen ||
          //谷歌浏览器及Webkit内核浏览器
          document.webkitIsFullScreen ||
          document.webkitRequestFullScreen ||
          document.mozRequestFullScreen ||
          document.msFullscreenEnabled;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },
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

      document.documentElement.scrollTop = 0

      this.typeList = getGameTypeList() || []

      // 游戏评分
      let score = Math.random()*0.8 + 4.2
      this.gameScore = score.toFixed(1)

      // 喜欢
      let likeScore = Math.random()*1900 + 100
      this.likeScore = likeScore.toFixed(1)

      // 不喜欢
      let dislikeScore = Math.random()*99 + 1
      this.dislikeScore = dislikeScore.toFixed(1)

      const { query } = this.$route
      const { gameId } = query || {}
      let jsonArr = getJson()
      // 随机打乱数组
      let shuffleArr = shuffle(jsonArr)
      let gameInfo = {}
      let bigImgList = [] // 大图片列表
      let smallImgList = [] // 小图列表
      shuffleArr && shuffleArr.map((item)=>{
        if (item.gameId == gameId) {
          gameInfo = item
        }
      })
      shuffleArr && shuffleArr.map((item)=>{
        if (item.ImgSize == 1 || item.ImgSize == 2) {
          if (bigImgList.length < 2) {
            bigImgList.push(item)
          } else {
            smallImgList.push(item)
          }
        } else {
          smallImgList.push(item)
        }
      })
      this.gameInfo = gameInfo
      this.bigImgList = bigImgList
      this.smallImgList = smallImgList



      setMeta(`${gameInfo.Name},${gameInfo.Name} Online,${gameInfo.Name} for free`,`${gameInfo.Name} is a ${gameInfo.Type} Games`)
    },
    // 切换游戏
    switchGame (item) {
      // 刷新广告
      googletag.cmd.push(function() { googletag.pubads().refresh(); });
      // 打点
      clickGameLog('gugoplay_pc_detail', item)
      recentGame(item)
      this.full = null
      this.isBlock = false
      // this.$router.push({
      //   path: '/P/details',
      //   query: {
      //     gameId: item.gameId
      //   }
      // },()=>{})
    },
     // 点击放大游戏
    amplifyClick() {
      // 放大全屏
      this.$store.commit('changeScreen', true)
      document.documentElement.webkitRequestFullscreen()
      this.full = this.fullStyle
      this.isBlock = true
    },
    // 大屏点击关闭
    closeClick() {
      this.$store.commit('changeScreen', false)
      document.webkitExitFullscreen()
      this.full = null
      this.isBlock = false
    },
    classClick(type) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType: type
        }
      },()=>{})
    },
    // 点击喜欢/不喜欢/反馈
    btnClick(status) {
      if (status == 1) {
        this.likeStyle = !this.likeStyle
        if (this.likeStyle) {
          if (this.dislikeStyle || this.flagStyle) {
            this.feedbackType1 = true
            setTimeout(()=>{
              this.feedbackType1 = false
            },500)
          }
          this.dislikeStyle = false
          this.flagStyle = false
          this.feedbackType = false
          this.feedbackStyle = false
          setTimeout(()=>{
            this.btnClickStatus = 1
            this.feedbackType = true
            this.messagePlaceholder = 'please specify......'
          })
        } else {
          this.flagStyle = false
          this.feedbackStyle = true
          setTimeout(()=>{
            this.feedbackType = false
          },500)
        }
      } else if (status == 2) {
        this.dislikeStyle = !this.dislikeStyle
        if (this.dislikeStyle) {
          if (this.likeStyle || this.flagStyle) {
            this.feedbackType1 = true
            setTimeout(()=>{
              this.feedbackType1 = false
            },500)
          }
          this.likeStyle = false
          this.flagStyle = false
          this.feedbackType = false
          this.feedbackStyle = false
          setTimeout(()=>{
            this.btnClickStatus = 2
            this.feedbackType = true
            this.messagePlaceholder = 'please specify......'
          })
        } else {
          this.flagStyle = false
          this.feedbackStyle = true
          setTimeout(()=>{
            this.feedbackType = false
          },500)
        }
      } else {
        this.flagStyle = !this.flagStyle
        if (this.flagStyle) {
          if (this.likeStyle || this.dislikeStyle) {
            this.feedbackType1 = true
            setTimeout(()=>{
              this.feedbackType1 = false
            },500)
          }
          this.feedbackType = false
          setTimeout(()=>{
            this.btnClickStatus = 3
            this.feedbackType = true
            this.feedbackStyle = false
            this.messagePlaceholder = 'Help us understand the vulnerabilities you have discovered......'
          })
        } else {
          this.feedbackStyle = true
          setTimeout(()=>{
            this.feedbackType = false
          },500)
        }
      }
    },
    // 关闭反馈窗
    feedbackClose() {
      this.feedbackType = false
    },
    // 发送
    sendMessage(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          request({
            url: 'https://formspree.io/f/xrgvjyay',
            method: 'post',
            data: {
              name: this.gameInfo.Name,
              message: this.formData.message
            }
          }).then((res)=>{
            console.log(res);
            if (res.status == 200 && res.data.ok) {
              // this.$message.success("发送成功")
              this.feedbackType = false
              this.thankType = true
              setTimeout(()=>{
                this.thankType = false
              },3000)
            }
          }).catch((err)=>{
            console.log(err);
          })
        }
      })
    },
  },
  beforeDestroy() {
    // 离开页面埋点
    pageOutLog('gugoplay_pc_detail')
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      document.documentElement.scrollTop = 0
      // 蒙层状态
      this.smegmaType = true
      setTimeout(()=>{
        this.smegmaType = false
      },800)
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
          //text-transform: uppercase;
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
          //text-transform: uppercase;
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
          //text-transform: uppercase;
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
              font: 500 20px/24px Torus;
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
        .dTwGvC.dTwGvC {
          position: absolute;
          width: auto;
          height: 28px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .evgOqe {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0px auto;
        }
        .bar-btns{
          margin-right: 10px;
          display: flex;
          position: relative;
          .hGklVU {
            margin-left: auto;
            display: flex;
            align-items: center;
            .jwXhHc {
              position: relative;
              width: 40px;
              height: 40px;
              margin: 8px 8px auto;
              border: none;
              outline: none;
              background: none;
              padding: 0px;
              cursor: pointer;
              .cwcbpr {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: var(--gameBarLabelBackgroundColor,#FFFFFF);
                transition: background-color 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                padding: 8px;
                box-sizing: border-box;
                .iqLrJG {
                  transform: rotate(var(--gameBarIconRotation,0deg)) translateY(var(--gameBarIconY,0px));
                  transition: fill 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s, transform 0.2s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                  overflow: visible;
                  text-align: center;
                  img{
                    width: 16px;
                    height: 16px;
                  }
                }
              }
              .gaptrT {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: var(--gameBarLabelBackgroundColor,#FFFFFF);
                transition: background-color 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                padding: 8px;
                --gameBarButtonAnimationBackgroundColor: #ff99b1;
                box-sizing: border-box;
                .kBtgKC {
                  transform: rotate(var(--gameBarIconRotation,0deg)) translateY(var(--gameBarIconY,0px));
                  transition: fill 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s, transform 0.2s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                  overflow: visible;
                  text-align: center;
                  img{
                    width: 16px;
                    height: 16px;
                  }
                }
              }
              .iUqdTV {
                position: absolute;
                left: 50%;
                bottom: 4px;
                font: 700 10px / 12px "Proxima Nova", sans-serif;
                .jhrTfi {
                  opacity: var(--gameBarLabelOpacity,1);
                  color: #5d6b84;
                  background-color: var(--gameBarLabelBackgroundColor,#FFFFFF00);
                }
                .jWGbzI {
                  opacity: var(--gameBarHoverLabelOpacity,0);
                  color: rgb(255, 255, 255);
                  background-color: #009cff;
                }
                .hEtgR {
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  transform: translate(-50%);
                  border-radius: 16px;
                  padding: 0px 4px;
                  white-space: nowrap;
                  transition: opacity 350ms cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                }
              }
            }
            .jwXhHc:hover {
              --gameBarIconRotation: -5deg;
              --gameBarLabelOpacity: 0;
              --gameBarHoverLabelOpacity: 1;
              .sc-1wag0ht-5{
                background: var(--gameBarButtonBackgroundHoverColor,#f0f5fc);
              }
            }
            .lcJldi, .cxjzJO {
              .iAzhvC, .dmtEVG {
                line-height: 30px;
                .ehxUGv, .eukeXb {
                  text-align: center;
                  img{
                    width: 17px;
                    height: 17px;
                  }
                }
              }
              .dmtEVG{
                --gameBarButtonAnimationBackgroundColor: #ff99b1;
              }
              .iUqdTV {
                .jhrTfi {
                  background-color: var(--gameBarLabelBackgroundColor,#FFFFFF00);
                  --gameBarLabelBackgroundColor: #f0f5fc;
                }
                .jWGbzI {
                  opacity: var(--gameBarHoverLabelOpacity,0);
                  color: rgb(255, 255, 255);
                  background-color: #009cff;
                }
                .hEtgR {
                  padding: 0px 4px 2px;
                }
              }
            }
          }
          .full-btn{
            position: relative;
            width: 40px;
            height: 40px;
            margin: 8px 8px auto;
            border: none;
            outline: none;
            background: none;
            padding: 0px;
            cursor: pointer;
            .cwcbpr {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: var(--gameBarLabelBackgroundColor,#FFFFFF);
              transition: background-color 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
              padding: 8px;
              box-sizing: border-box;
              .iqLrJG {
                transform: rotate(var(--gameBarIconRotation,0deg)) translateY(var(--gameBarIconY,0px));
                transition: fill 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s, transform 0.2s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                overflow: visible;
                text-align: center;
                img{
                  width: 17px;
                  height: 17px;
                }
              }
            }
            .iUqdTV {
              position: absolute;
              left: 50%;
              bottom: 4px;
              font: 700 10px / 12px "Proxima Nova", sans-serif;
              .jhrTfi {
                opacity: var(--gameBarLabelOpacity,1);
                color: #5d6b84;
                background-color: var(--gameBarLabelBackgroundColor,#FFFFFF00);
              }
              .jWGbzI {
                opacity: var(--gameBarHoverLabelOpacity,0);
                color: rgb(255, 255, 255);
                background-color: #009cff;
              }
              .hEtgR {
                position: absolute;
                left: 0px;
                top: 0px;
                transform: translate(-50%);
                border-radius: 16px;
                padding: 0px 4px 2px;
                white-space: nowrap;
                transition: opacity 350ms cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
              }
            }
          }
          .full-btn:hover {
            --gameBarIconRotation: -5deg;
            --gameBarLabelOpacity: 0;
            --gameBarHoverLabelOpacity: 1;
            .sc-1wag0ht-5{
              background: var(--gameBarButtonBackgroundHoverColor,#f0f5fc);
            }
          }
          .lcJldi, .cxjzJO {
            position: relative;
            width: 40px;
            height: 40px;
            margin: 8px 8px auto;
            border: none;
            outline: none;
            background: none;
            padding: 0px;
            cursor: pointer;
            --gameBarIconRotation: -5deg;
            --gameBarIconY: -2px;
            @keyframes jtWJDL{
              0% {
                transform: scale(1);
              }
              40% {
                transform: scale(1.1);
                background-color: var(--gameBarButtonAnimationBackgroundColor,var(--green-3));
              }
              43% {
                transform: scale(1.2);
              }
              60% {
                transform: scale(0.9);
              }
              70% {
                transform: scale(1.05);
              }
              80% {
                transform: scale(1.01);
              }
              85% {
                transform: scale(1);
              }
              100% {
                transform: scale(1);
                background-color: var(--gameBarLabelBackgroundColor);
              }
            }
            .iAzhvC, .dmtEVG {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: var(--gameBarLabelBackgroundColor,#FFFFFF);
              transition: background-color 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
              padding: 8px;
              animation: 1s ease 0s 1 normal forwards running jtWJDL;
              --gameBarLabelBackgroundColor: #009cff;
              --gameBarButtonBackgroundHoverColor: #0097f5;
              box-sizing: border-box;
              @keyframes comMCG{
                0% {
                  transform: rotate(0deg) translateY(var(--gameBarIconY,0px));
                }
                40% {
                  transform: rotate(20deg) translateY(var(--gameBarIconY,0px));
                }
                43% {
                  transform: rotate(25deg) translateY(var(--gameBarIconY,0px));
                }
                60% {
                  transform: rotate(-15deg) translateY(var(--gameBarIconY,0px));
                }
                70% {
                  transform: rotate(3deg) translateY(var(--gameBarIconY,0px));
                }
                80% {
                  transform: rotate(-1deg) translateY(var(--gameBarIconY,0px));
                }
                85% {
                  transform: rotate(-5deg) translateY(var(--gameBarIconY,0px));
                }
                100% {
                  transform: rotate(-5deg) translateY(var(--gameBarIconY,0px));
                }
              }
              .sc-1wag0ht-0 {
                animation: 1s ease 0s 1 normal none running comMCG;
              }
              .ehxUGv, .eukeXb {
                --gameBarIconFill: #FFFFFF;
                transform: rotate(var(--gameBarIconRotation,0deg)) translateY(var(--gameBarIconY,0px));
                transition: fill 0.6s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s, transform 0.2s cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
                overflow: visible;
                img{
                  width: 36px;
                  height: 36px;
                  margin-top: -5px;
                  margin-left: -6px;
                }
              }
            }
            .iUqdTV {
              position: absolute;
              left: 50%;
              bottom: 4px;
              font: 700 10px / 12px "Proxima Nova", sans-serif;
              .faTlWW {
                opacity: var(--gameBarLabelOpacity,1);
                color: #5d6b84;
                background-color: var(--gameBarLabelBackgroundColor,#FFFFFF00);
                --gameBarLabelBackgroundColor: #f0f5fc;
              }
              .jWGbzI {
                opacity: var(--gameBarHoverLabelOpacity,0);
                color: rgb(255, 255, 255);
                background-color: #009cff;
              }
              .hEtgR {
                position: absolute;
                left: 0px;
                top: 0px;
                transform: translate(-50%);
                border-radius: 16px;
                padding: 0px 4px;
                white-space: nowrap;
                transition: opacity 350ms cubic-bezier(0.32, 1.2, 0.54, 1.17) 0s;
              }
            }
          }
          .lcJldi:hover {
            --gameBarLabelOpacity: 0;
            --gameBarIconRotation: 0deg;
            --gameBarHoverLabelOpacity: 1;
          }
          .cxjzJO:hover {
            --gameBarLabelOpacity: 0;
            --gameBarIconRotation: 0deg;
            --gameBarHoverLabelOpacity: 1;
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
  @keyframes djqRmU{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @keyframes etkMLf{
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  .dgmlwU{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: djqRmU .2s cubic-bezier(.25, .1, .25, 1) both;
    z-index: 100001;
  }
  .AFSJx{
    display: flex;
    align-items: center;
    justify-content: center;
    div{
      width: 18px;
      height: 18px;
      margin: 0 2px;
      border-radius: 100%;
      background: white;
      animation: 1.4s ease-in-out 0s infinite normal both running etkMLf;
    }
    div:nth-child(2){
      animation-delay: -0.16s;
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
      font: 400 16px/24px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
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
        font: 500 24px Torus, sans-serif;
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
  .hotNyV {
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 3;
    width: 100%;
    max-width: 352px;
    @keyframes ireoXe{
      0% {
        transform: translate(130%, 0px) scale(0.9);
      }
      60% {
        transform: translate(0px, 0px) scale(0.9);
      }
      75% {
        transform: translate(0px, 0px) scale(1.05);
      }
      85% {
        transform: translate(0px, 0px) scale(0.97);
      }
      95%, 100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    @keyframes iRsYLL{
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      10% {
        transform: translate(0px, 0px) scale(1);
      }
      35% {
        transform: translate(0px, 0px) scale(0.9);
      }
      45% {
        transform: translate(130%, 0px) scale(0.9);
      }
      100% {
        transform: translate(130%, 0px) scale(0.9);
      }
    }
    .cJsJca, .lbpyEn {
      max-width: 352px;
      width: 100%;
      color: #5d6b84;
      background: rgb(255, 255, 255);
      box-shadow: rgba(9, 30, 66, 0.07) 0px 16px 16px, rgba(9, 30, 66, 0.07) 0px 0px 8px, rgba(9, 30, 66, 0.07) 0px 16px 32px;
      border-radius: 12px;
      margin: 16px auto 0px;
      padding: 0px 0px 8px;
      transform: translate(110%, 0px);
      animation: 1000ms ease-in-out 0s 1 normal forwards running ireoXe;
      .iYUdDw {
        padding: 0px 40px 0px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .jSEhHX {
          font-family: Torus, sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
          padding: 14px 0px;
          color: #002b50;
          max-width: 90%;
          display: flex;
          align-items: center;
          position: relative;
          box-sizing: border-box;
          .hYpEdi {
            display: flex;
            align-items: center;
            padding: 4px 0px 0px;
            font: 700 12px / 1 "Proxima Nova", sans-serif;
            //text-transform: uppercase;
            color: #5d6b84;
            box-sizing: border-box;
            .hBmUwV {
              margin: 0px 13px 0px 0px;
              flex-shrink: 0;
              box-sizing: border-box;
              img{
                width: 17px;
                height: 17px;
              }
            }
            .desc{
              line-height: 18px;
            }
            strong {
              display: block;
              color: #002b50;
              font-size: 18px;
              text-transform: none;
            }
          }
        }
        .kWUen {
          width: 32px;
          height: 46px;
          padding: 3px 0px 0px;
          background: rgb(255, 255, 255);
          border: none;
          overflow: hidden;
          cursor: pointer;
          position: absolute;
          top: 0px;
          right: 8px;
          .kzfNHa {
            position: absolute;
            top: 8px;
            left: 0px;
            width: 32px;
            height: 32px;
            background: #ffc9dd;
            border-radius: 16px;
            transform: translate(0px, -140%);
            transition: transform 0.25s cubic-bezier(0.19, 2.13, 0.73, 0.61) 0s;
          }
          .gJmbLa {
            color: #009cff;
            position: relative;
            z-index: 2;
            font-size: 20px;
            /deep/.el-icon-close{
              font-weight: bold;
            }
          }
        }
        .kWUen:hover .sc-1219584-5, .kWUen:active .sc-1219584-5, .kWUen:focus .sc-1219584-5 {
          transform: translate(0px, 0px);
        }
      }
      .AwRjN {
        border-top: 2px solid #f0f5fc;
        padding: 8px 16px 16px;
        font-size: 14px;
        line-height: 20px;
        /deep/.el-form-item{
          margin-bottom: 0;
        }
        /deep/.el-textarea__inner{
          resize: none;
          height: 86px;
          color: #5d6b84;
          background: #f0f5fc;
          border: 2px solid #bac9de;
          font-size: 14px;
        }
        .chqjsI {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 176px;
          height: 88px;
          border-radius: 8px;
          z-index: -1;
        }
        img {
          color: transparent;
        }
      }
      .eyffgn {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 4px 16px;
        .cLNPVX {
          font: 500 16px/1.5 Torus, sans-serif;
          color: rgb(255, 255, 255);
          padding: 6px 24px;
          border-radius: 30px;
          background: #009cff;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out 0s;
        }
      }
    }
    .lbpyEn {
      animation: 1000ms ease-in-out 0s 1 normal forwards running iRsYLL;
    }
    .kiYWjT {
      max-width: 352px;
      width: 100%;
      box-shadow: rgba(9,30,66,0.07) 0 16px 16px,rgba(9,30,66,0.07) 0 0 8px,rgba(9,30,66,0.07) 0 16px 32px;
      border-radius: 12px;
      margin: 16px auto 0;
      transform: translate(110%, 0px);
      animation: 1000ms ease-in-out 0s 1 normal forwards running ireoXe;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 144px;
      padding: 10px 28px;
      background-color: #009cff;
      font: 500 28px/1.1 Torus, sans-serif;
      color: white;
      box-sizing: border-box;
    }
  }
}
</style>
