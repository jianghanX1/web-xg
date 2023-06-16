<template>
  <a :href="'/#/M/homeIndex'">
    <div class="logo">
      <div class="sc-11jy73d-3 bfQcDW">
        <img :src="logo" alt="">
      </div>
      <div class="sc-jaa1t8-0 bwKNQa">
        <img :src="home" alt="">
      </div>
    </div>
  </a>
</template>

<script>
import logo from '@/assets/logo.png'
import home from '@/assets/home.png'
export default {
  name: "MobileLogo",
  data() {
    return {
      logo,home
    }
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
  .bwKNQa {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #f0f5fc;
    overflow: hidden;
    border-top: 0px;
    border-left: 2px solid #f0f5fc;
    flex-direction: column;
    border-top: 2px solid #f0f5fc;
    width: 100%;
    height: 40px;
    border-radius: 0px 0px 16px 16px;
    img{
      width: 25px;
      height: 22px;
    }
  }
}
</style>