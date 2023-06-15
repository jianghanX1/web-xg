<template>
  <div class="class-box" :style="styleType ? {marginTop: 0} : null">
    <div class="class-list" :style="styleType ? {padding: 0} : null">
      <div class="class-item" @click="detailsClick(item)" v-for="(item,index) in gameTypeList" :key="index">
        <a :href="'/#/M/details?gameId='+item.gameId+'&jiaocha=1'">
          <img v-lazy="item.iconUrl" alt="">
          <span class="sc-963fcq-0 esaxGV global-cq-title">{{item.Name}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { recentGame } from '@/utils/utils.js';
export default {
  name: "ClassList",
  props: ["styleType",'gameTypeList'],
  data() {
    return {

    }
  },
  methods: {
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
  .class-item:hover {
    transform: scale(1.01869) translate(0px, -4px)!important;
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
      margin-right: 0;
      img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
      }
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
