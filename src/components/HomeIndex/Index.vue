<template>
  <div class="big" v-title data-title="Online Games on h5joy ——Let's play">
    <div>
      <Content></Content>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Content from '@/components/HomeIndex/Content';
import BottomNav from '@/components/BottomNav';
import {determinePcOrMove, getJson, pageInitLog, pageOutLog} from '@/utils/utils.js'
export default {
  name: "HomeIndex",
  components: {
    Content,
    BottomNav
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    if (determinePcOrMove() == 1) {
      let { channel } = this.$route.query
      this.$router.push({
        path: '/M/homeIndex',
        query: {
          channel
        }
      },()=>{})
    } else {
      // 进入页面埋点
      pageInitLog('pc_home')
      this.getJson()
      document.title = 'Online Games on h5joy ——Let\'s play'
    }
  },
  methods: {
    getJson() {
      let jsonArr = getJson()
      let allGameList = []
      jsonArr && jsonArr.map((item)=>{
        allGameList.push(item)
      })
    }
  },
  beforeDestroy() {
    // 离开页面埋点
    pageOutLog('pc_home')
  }
}
</script>

<style lang="less" scoped>
.big{
  height: 100vh;
  overflow-y: auto;
}
</style>
