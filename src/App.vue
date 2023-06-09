<template>
  <div id="app">
    <router-view></router-view>
    <div class="sc-1ri0y0w-7 lFKjX">
      <div class="sc-1ri0y0w-2 fzkKCz" :style="svgBg"></div>
    </div>
  </div>
</template>

<script>
import svgBg from '@/assets/bg-diamante.svg'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      svgBg: {
        backgroundImage: `url(${svgBg})`
      }
    }
  },
  mounted() {

  }
}
</script>
<style lang="less">
.el-loading-spinner{
  font-size: 50px;
}
@media (hover: hover) and (pointer: fine){
  .fzkKCz {
    background-size: 40%;
  }
}
.lFKjX{
  position: absolute;
  inset: -50vh 0px 0px;
  overflow: hidden;
  z-index: -2;
  //transform: translateY(50vh);
  .fzkKCz{
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    left: 0px;
    height: 100%;
  }
}
</style>
<style>

</style>
