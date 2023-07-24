<template>
  <div :class="from == 1 ? bottomList1 : bottomList">
    <div class="cASSfo sc-963fcq-2 cMEgnO" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)"><img :src="item.iconUrl" alt=""></div>
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
      let { channel } = this.$route.query
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType: type,
          channel
        }
      },()=>{})
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 1541px) and (max-width: 1870.9px) {
  .bottom-list{
    .cMEgnO:nth-child(7n) {
      margin-right: 0!important;
    }
  }
}
@media (min-width: 1321px) and (max-width: 1540.9px) {
  .bottom-list{
    .cMEgnO:nth-child(6n) {
      margin-right: 0!important;
    }
  }
}
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
    position: relative;
    img{
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
  }
  .cMEgnO::after{
    content: "";
    opacity: 0;
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 25%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 4;
    transition: box-shadow 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    border-radius: 16px;
    contain: strict;
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