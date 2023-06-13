<template>
  <div class="bottom-list">
    <div class="sc-wr3rvk-0 cASSfo sc-963fcq-2 cMEgnO" v-for="(item,index) in typeList" :key="index" @click="classClick(item.type)"><img v-lazy="item.iconUrl" alt=""></div>
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
  name: "TypeList",
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
    classClick(type) {
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
.bottom-list{
  overflow: hidden;
  @media (hover: hover){
    .cMEgnO:hover {
      transform: scale(1.01869) translate(0px, -4px)!important;
    }
  }
  @media (min-width: 1321px) and (max-width: 1540.9px) {
    .cMEgnO:nth-of-type(6){
      margin-right: 0;
    }
  }
  @media (min-width: 1541px) and (max-width: 1870.9px) {
    .cMEgnO:nth-of-type(7){
      margin-right: 0;
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
</style>