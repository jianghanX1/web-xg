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
      bg:{
        backgroundImage: bg
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
