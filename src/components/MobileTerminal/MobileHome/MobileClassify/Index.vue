<template>
  <div id="mobile_classify" v-title data-title="BIOH5">
    <StartAndEnd>
      <div>
        <ClassList :gameTypeList="gameTypeList"></ClassList>
        <BottomList></BottomList>
        <BottomText></BottomText>
      </div>
    </StartAndEnd>
  </div>
</template>

<script>
import StartAndEnd from "@/components/MobileTerminal/MobileHome/StartAndEnd";
import BottomList from "@/components/MobileTerminal/MobileHome/BottomList";
import BottomText from "@/components/MobileTerminal/MobileHome/BottomText";
import ClassList from "@/components/MobileTerminal/MobileHome/ClassList";
import {determinePcOrMove, getJson, shuffle} from '@/utils/utils.js'
export default {
  name: "mobileClassifyIndex",
  components: {
    BottomList,BottomText,StartAndEnd,ClassList
  },
  data() {
    return {
      gameTypeList: [],
    }
  },
  created() {
    const { query } = this.$route
    const { gameType } = query || {}
    if (determinePcOrMove() == 2) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType
        }
      },()=>{})
    }
  },
  mounted() {
    this.getJson()
  },
  methods: {
    getJson() {
      document.getElementById('mobile_classify').scrollTop = 0
      const { query } = this.$route
      const { gameType } = query || {}
      let arr = []
      if (gameType) {
        getJson() && getJson().map((item)=>{
          if (item[gameType] == 1) {
            arr.push(item)
          }
        })
        if (!arr.length) {
          let newArr = []
          getJson() && getJson().map((item)=>{
            newArr.push(item)
          })
          arr = shuffle(newArr).splice(0, 30)
        }
      } else {
        arr = []
      }
      this.gameTypeList = arr
    },
  },
  watch: {
    '$route'(val) {
      console.log(val,'数据更新了');
      this.getJson()
    }
  }
}
</script>

<style lang="less" scoped>
#mobile_classify{
  height: 100vh;
  overflow-y: auto;
}
</style>
