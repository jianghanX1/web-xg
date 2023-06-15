<template>
  <div class="bottom-list">
    <div class="item" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)">
      <img v-lazy="item.iconUrl" alt="">
    </div>
  </div>
</template>

<script>
import shooting from '@/assets/01shooting.jpg';
import car from '@/assets/02car.jpg';
import ball from '@/assets/03ball.jpg';
import girls from '@/assets/04girls.jpg';
import casual from '@/assets/05casu.jpg';
import puzzle from '@/assets/06puzzle.jpg';
import action from '@/assets/07action.jpg';
import racing from '@/assets/08racing.jpg';
import parkour from '@/assets/09parkour.jpg';
import sand from '@/assets/093d.jpg';
export default {
  name: "BottomList",
  data() {
    return {
      typeList: [],
      shooting,
      car,
      ball,
      girls,
      casual,
      puzzle,
      action,
      racing,
      parkour,
      sand,
    }
  },
  mounted() {
    let game_type = [{},{},{},{},{},{},{},{},{},{}]
    game_type && game_type.map(()=>{
      game_type[0].iconUrl = this.shooting
      game_type[0].type = "SHOOTING"
      game_type[1].iconUrl = this.car
      game_type[1].type = "CAR"
      game_type[2].iconUrl = this.ball
      game_type[2].type = "BALL"
      game_type[3].iconUrl = this.girls
      game_type[3].type = "GIRLS"
      game_type[4].iconUrl = this.casual
      game_type[4].type = "CASUAL"
      game_type[5].iconUrl = this.puzzle
      game_type[5].type = "PUZZLE"
      game_type[6].iconUrl = this.action
      game_type[6].type = "ACTION"
      game_type[7].iconUrl = this.racing
      game_type[7].type = "RACING"
      game_type[8].iconUrl = this.parkour
      game_type[8].type = "PARKOUR"
      game_type[9].iconUrl = this.sand
      game_type[9].type = "3D"
    })
    this.typeList = game_type || []
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
