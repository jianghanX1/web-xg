<template>
  <div id="app">
<!--    <div v-if="determinePcOrMove == 2">-->
<!--      <Navigation v-if="navHide"></Navigation>-->
<!--      <router-view></router-view>-->
<!--&lt;!&ndash;      <BottomNav v-if="navHide"></BottomNav>&ndash;&gt;-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <router-view></router-view>-->
<!--    </div>-->
    <router-view></router-view>
    <div class="sc-1ri0y0w-7 lFKjX">
      <div class="sc-1ri0y0w-2 fzkKCz" :style="svgBg"></div>
    </div>
  </div>
</template>

<script>
// import Navigation from './components/Navigation';
import { determinePcOrMove } from '@/utils/utils.js'
import bg from '@/assets/tile.png'
export default {
  name: 'App',
  components: {
    // Navigation
  },
  data() {
    return {
      determinePcOrMove: determinePcOrMove(),
      navHide: true,
      svgBg: {
        backgroundImage: `url(${bg})`
      },
    }
  },
  mounted() {
    console.log(this.$route);
    const { name } = this.$route
    if (name == 'privacy' || name == 'contactUs') {
      this.navHide = false
    }
  }
}
</script>
<style lang="less">
.el-loading-spinner{
  font-size: 50px;
}
#app{
  height: 100vh;
  overflow-y: auto;
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
