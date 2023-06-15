<template>
  <div class="bottom-list">
    <div class="item" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)">
      <img v-lazy="item.iconUrl" alt="">
    </div>
  </div>
</template>

<script>
import { getGameTypeList } from '@/utils/utils'
export default {
  name: "BottomList",
  data() {
    return {
      typeList: []
    }
  },
  mounted() {
    this.typeList = getGameTypeList() || []
  },
  methods: {
    classClick(gameType) {
      this.$router.push({
        path: '/M/gameType',
        query: {
          gameType
        }
      },()=>{})
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 551px) and (max-width: 660.9px) {
  .item:not(:nth-child(2n)){
    margin-right: 16px!important;
  }
}
@media (min-width: 661px) and (max-width: 880.9px) {
  .item:not(:nth-child(3n)){
    margin-right: 16px!important;
  }
}
@media (min-width: 881px) {
  .item:not(:nth-child(4n)){
    margin-right: 16px!important;
  }
}
.bottom-list{
  margin-top: 16px;
  .item{
    width: 204px;
    height: 94px;
    border-radius: 16px;
    margin-bottom: 16px;
    float: left;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin-right: 0;
    //border: 2px solid #fff;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.bottom-list:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
