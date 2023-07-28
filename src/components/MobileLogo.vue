<template>
  <div>
    <div class="logo">
      <div class="sc-11jy73d-3 bfQcDW">
        <a :href="'/#/M/homeIndex'+($route.query.channel ? ('?channel='+$route.query.channel): '')"><img :src="logo" alt=""></a>
      </div>
      <div class="sc-jaa1t8-0 bwKNQa">
        <a :href="'/#/M/homeIndex'+($route.query.channel ? ('?channel='+$route.query.channel): '')" class="sc-jaa1t8-1 GKasG"><img :src="home" alt=""></a>
        <button class="sc-c36zwn-0 sc-jaa1t8-3 koyGQc fjlzah" @click="searchClick">
          <img :src="souSuo" alt="">
        </button>
      </div>
    </div>
    <SearchFor :UnfoldAndCollapse="UnfoldAndCollapse" v-if="UnfoldAndCollapse"  @searchClick="searchClick"/>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
import home from '@/assets/home.png'
import souSuo from '@/assets/sousuo.png'

import SearchFor from '@/components/SearchFor.vue';
import {clickSearchLog} from "@/utils/utils";
export default {
  name: "MobileLogo",
  props: ["whereFrom"], // whereFrom 1首页 2详情页 3类型页
  components: {
    SearchFor
  },
  data() {
    return {
      logo,home,souSuo,
      UnfoldAndCollapse: false, // 展开收起
    }
  },
  methods: {
    // 点击搜索
    searchClick() {
      this.UnfoldAndCollapse = !this.UnfoldAndCollapse
      // 点击搜索打点
      let portal = this.whereFrom == 1 ? 'gugoplay_mobile_home' : this.whereFrom == 2 ? 'gugoplay_mobile_detail' : 'gugoplay_mobile_tab'
      clickSearchLog(portal)
    },
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 551px) and (max-width: 660.9px) {
  .logo {
    --offset: -268px !important;
  }
}
@media (min-width: 661px) and (max-width: 880.9px) {
  .logo {
    --offset: -322px !important;
  }
}
@media (min-width: 881px) {
  .logo {
    --offset: -432px !important;
  }
}
.logo{
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
  transform: translate(var(--offset),0);
  --offset: -157px;
  .bfQcDW{
    width: 72px;
    height: 28px;
    margin: 15px auto 11px;
    font-size: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .bfQcDW:hover{
    transform: scale(1.05);
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
    .GKasG {
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      border-right: 1px solid #f0f5fc;
    }
    .GKasG:hover{
      background: #f0f5fc;
    }
    .fjlzah{
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      border-left: 1px solid #f0f5fc;
      text-indent: -200vw;
      font-size: 0px;
      background: white;
      img {
        width: 18px;
        height: 18px;
      }
    }
    .fjlzah:hover{
      background: #f0f5fc;
    }
    .koyGQc {
      font-size: 100%;
      font-family: inherit;
      border: 0px;
      padding: 0px;
      background: none;
      cursor: pointer;
    }
    img {
      width: 20px;
      height: 17px;
    }
  }
}
</style>