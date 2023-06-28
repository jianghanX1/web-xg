<template>
  <div style="display: contents">
    <nav :class="offsetName == 2 ? dDVcIC1 : dDVcIC">
      <div class="sc-11jy73d-3 bfQcDW" @click="goHome">
        <img :src="logo" alt="">
      </div>
      <div class="sc-jaa1t8-0 bwKNQa">
        <a href="/" class="sc-jaa1t8-1 GKasG"><img :src="home" alt=""></a>
        <button class="sc-c36zwn-0 sc-jaa1t8-3 koyGQc fjlzah" @click="searchClick">
          <img :src="souSuo" alt="">
        </button>
      </div>
    </nav>
    <SearchFor :UnfoldAndCollapse="UnfoldAndCollapse" v-if="UnfoldAndCollapse"  @searchClick="searchClick"/>
  </div>
</template>

<script>
import logo from '@/assets/logo.png';
import home from '@/assets/home.png';
import souSuo from '@/assets/sousuo.png';

import SearchFor from '@/components/SearchFor.vue';
export default {
  name: "PCLogo",
  props: ["offsetName"],
  components: {
    SearchFor
  },
  data() {
    return {
      logo,
      home,
      souSuo,
      UnfoldAndCollapse: false, // 展开收起
      dDVcIC: 'dDVcIC',
      dDVcIC1: 'dDVcIC1',
    }
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      }, () => {
      })
    },
    // 点击搜索
    searchClick() {
      this.UnfoldAndCollapse = !this.UnfoldAndCollapse
    },
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 1871px) {
  .dDVcIC {
    --offset: -936px !important;
    width: 204px !important;
    flex-direction: row !important;
  }
  .dDVcIC1 {
    --offset: -927px !important;
    width: 204px !important;
    flex-direction: row !important;
  }

  .bfQcDW {
    width: 94px !important;
    height: 42px !important;
    margin: -2px auto 0px !important;
  }

  .bwKNQa {
    border-top: 0px !important;
    border-left: 2px solid #f0f5fc !important;
    flex-direction: column !important;
    height: 100% !important;
    width: 46px !important;
    border-radius: 0px 16px 16px 0px !important;
    .GKasG {
      border-right: 0px !important;
      border-bottom: 1px solid #f0f5fc !important;
      height: 50%!important;
      width: 100%!important;
    }
    .fjlzah {
      border-left: 0px!important;
      border-top: 1px solid #f0f5fc!important;
      height: 50%!important;
      width: 100%!important;
    }
  }
}

@media (min-width: 1541px) and (max-width: 1870.9px) {
  .dDVcIC {
    --offset: -771px !important;
  }
  .dDVcIC1 {
    --offset: -762px !important;
  }
}

@media (min-width: 1321px) and (max-width: 1540.9px) {
  .dDVcIC {
    --offset: -661px !important;
  }
  .dDVcIC1 {
    --offset: -652px !important;
  }
}

@media (min-width: 1211px) and (max-width: 1320.9px) {
  .dDVcIC {
    --offset: -605px !important;
  }
  .dDVcIC1 {
    --offset: -597px !important;
  }
}

@media (min-width: 991px) and (max-width: 1210.9px) {
  .dDVcIC {
    --offset: -496px !important;
  }
  .dDVcIC1 {
    --offset: -490px !important;
  }
}

@media (min-width: 111px) and (max-width: 990.9px) {
  .dDVcIC {
    --offset: -386px !important;
  }
  .dDVcIC1 {
    --offset: -380px !important;
  }
}

@media (max-width: 775px) {
  .dDVcIC, .dDVcIC1 {
    --offset: 3px !important;
    left: 0 !important;
  }
}
.dDVcIC, .dDVcIC1 {
  cursor: pointer;
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
  --offset: -487px;
  transform: translate(var(--offset), 0);

  .bfQcDW {
    width: 80px;
    height: 30px;
    margin: 15px auto 11px;
    img {
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