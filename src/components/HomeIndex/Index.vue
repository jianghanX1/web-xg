<template>
  <div class="big" v-title data-title="GUGOPLAY">
    <div>
      <Content></Content>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Content from '@/components/HomeIndex/Content';
import BottomNav from '@/components/BottomNav';
import { determinePcOrMove, getJson } from '@/utils/utils.js'
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
      this.$router.push({
        path: '/M/homeIndex'
      },()=>{})
    } else {
      this.getJson()
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
}
</script>

<style lang="less" scoped>
.big{
  height: 100vh;
  overflow-y: auto;
}
</style>
