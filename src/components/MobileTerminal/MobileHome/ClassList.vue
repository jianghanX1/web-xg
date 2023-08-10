<template>
  <div class="class-box" :style="styleType ? {marginTop: 0} : null">
    <div class="class-list" :style="styleType ? {padding: 0} : null">
      <div class="sc-wr3rvk-01 class-item" @click="detailsClick(item)" v-for="(item,index) in gameTypeList" :key="index">
        <a :href="'/#/M/details/'+item.Name.replace(/\s+/g, '')+'?gameId='+item.gameId+($route.query.channel ? ('&channel='+$route.query.channel): '')">
          <img v-lazy="item.iconUrl" alt="">
          <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {clickGameLog, Observer, recentGame} from '@/utils/utils.js';
export default {
  name: "ClassList",
  props: ["styleType",'gameTypeList','fromWhere'],
  data() {
    return {

    }
  },
  mounted() {
    if (this.fromWhere == 1) {
      // 获取需要曝光的item
      setTimeout(()=>{
        let itemArr = [...document.getElementsByClassName("sc-wr3rvk-01")]
        itemArr && Array.from(itemArr).map((item)=>{
          Observer('mobile_tab').observe(item)
        })
      })
    }
  },
  methods: {
    detailsClick(item) {
      if (this.fromWhere == 1) {
        // 打点
        clickGameLog('mobile_tab', item)
      }
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
  .class-item:hover {
    transform: scale(1.01869) translate(0px, -4px)!important;
  }
  .class-item:hover::after {
    opacity: 1!important;
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.3) 100%)!important;
  }
  .class-item:hover .sc-963fcq-0 {
    opacity: 1!important;
    transform: translate(0px, 0px)!important;
  }
}
@media (min-width: 111px) and (max-width: 550.9px) {
  .class-item:not(:nth-child(3n)){
    margin-right: 16px!important;
  }
}
@media (min-width: 551px) and (max-width: 660.9px) {
  .class-item:not(:nth-child(5n)){
    margin-right: 16px!important;
  }
}
@media (min-width: 661px) and (max-width: 880.9px) {
  .class-item:not(:nth-child(6n)){
    margin-right: 16px!important;
  }
}
@media (min-width: 881px) {
  .class-item:not(:nth-child(8n)){
    margin-right: 16px!important;
  }
}
.class-box{
  margin-top: 3.7375rem;
  .class-list{
    padding: 0 0.625rem;
    .class-item{
      float: left;
      width: 94px;
      height: 94px;
      display: block;
      overflow: hidden;
      margin-bottom: 10px;
      position: relative;
      box-sizing: border-box;
      cursor: pointer;
      border-radius: 16px;
      margin-right: 0;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
      }
    }
    .class-item::after{
      content: "";
      opacity: 0;
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      background: linear-gradient(transparent 25%, rgba(0, 0, 0, 0.3) 100%);
      z-index: 4;
      transition: box-shadow 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
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
  }
  .class-list:after{
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>
