<template>
  <div :class="from == 1 ? bottomList1 : bottomList">
    <div class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cMEgnO" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)"><img v-lazy="item.iconUrl" alt=""></div>
  </div>
</template>

<script>
import { getGameTypeList } from '@/utils/utils'
export default {
  name: "TypeList",
  props: ["from"],
  data() {
    return {
      typeList: [],
      bottomList: 'bottom-list',
      bottomList1: 'bottom-list1',
    }
  },
  mounted() {
    this.typeList = getGameTypeList() || []
  },
  methods: {
    classClick(type) {
      if (this.from == 1) {
        this.$emit('collapse')
      }
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType: type
        }
      },()=>{})
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-list, .bottom-list1{
  @media (hover: hover){
    .cMEgnO:hover {
      transform: scale(1.01869) translate(0px, -4px)!important;
    }
  }
  .cMEgnO{
    width: 204px;
    height: 95px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    float: left;
    margin-right: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
  }
  .cASSfo{
    transition: transform .6s cubic-bezier(.25, .1, .25, 1);
    border-radius: 16px;
  }
  .cASSfo:hover {
    transform: scale(1.04255) translate(0px, -4px);
    transition-duration: 0.3s;
  }
}
.bottom-list1{
  @media (min-width: 688px) {
    .cMEgnO:nth-of-type(3n){
      margin-right: 0;
    }
  }
  @media (min-width: 265px) and (max-width: 483px) {
    .cMEgnO:nth-of-type(2n){
      margin-right: 0;
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
.bottom-list1:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>