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
    <div :style="svgBg"></div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Navigation from './components/Navigation';
import { determinePcOrMove } from '@/utils/utils.js'
import svgBg from '@/assets/bg-diamante.svg'
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
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: '100%',
        backgroundImage: `url(${svgBg})`,
        zIndex: -1
      }
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
</style>
<style>

</style>
