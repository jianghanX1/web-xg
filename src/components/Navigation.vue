<template>
    <div>
      <div class="bj">
        <div class="bj_left">
          <div class="title" @click="vigooGamesClick"><i class="el-icon-menu" @click.stop="positionMenuClick"></i> BIOH5</div>
          <div class="nav-list">
            <div @click="newGamesClick(item.type)" v-for="(item,index) in gameTypeList" :key="index">{{ item.type }}</div>
          </div>
        </div>
        <div class="position" :style="positionMenu ? 'display: block' : 'display: none'" @mouseleave="mouseleave">
          <div @click.stop="newGamesClick(item.type)" v-for="(item,index) in gameTypeList" :key="index">{{ item.type }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import { getGameTypeList } from '@/utils/utils'
export default {
  name: 'navigationIndex',
  data () {
    return {
      gameTypeList: getGameTypeList() || [], // 游戏分类
      positionMenu: false, // 菜单展示
    }
  },
  mounted() {

  },
  methods: {
    positionMenuClick() {
      this.positionMenu = !this.positionMenu
    },
    mouseleave() {
      this.positionMenu = false
    },
    vigooGamesClick() {
      this.$router.push({
        path: '/'
      },()=>{})
    },
    newGamesClick(gameType) {
      this.$router.push({
        path: '/P/gameType',
        query: {
          gameType
        }
      },()=>{})
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@media screen and (max-width: 1650px){
  .bj_left{
    .title{
      /deep/ .el-icon-menu{
        display: inline-block!important;
      }
    }
  }
}
  .bj{
    cursor: pointer;
    height: 56px;
    background: linear-gradient(to bottom,#48a0c9 0%,#29638b 100%);
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    position: relative;
    .position{
      position: absolute;
      top: 51px;
      left: 0;
      background: linear-gradient(to bottom,#48a0c9 0%,#29638b 100%);
      padding: 6px 0;
      min-width: 184px;
      z-index: 99;
      div{
        height: 48px;
        line-height: 48px;
        padding: 0 12px;
      }
      div:hover{
        cursor: pointer;
        background-color: rgba(0,0,0,.1);
      }
    }
    .bj_left{
      margin: 0 auto;
      display: flex;
      .title{
        min-width: 166px;
        line-height: 56px;
        font-size: 22px;
        font-weight: bold;
        margin-left: 36px;
        cursor: pointer;
        .el-icon-menu{
          display: none;
        }
      }
      .nav-list{
        overflow: hidden;
        line-height: 56px;
        font-size: 18px;
        div{
          float: left;
          margin-left: 15px;
          padding: 0 15px;
        }
        div:hover{
          background-color: rgba(0,0,0,.1);
          border-top: 4px solid #fff81a;
          cursor: pointer;
        }
      }
    }
    .search{
      margin-right: 15px;
    }
  }

  /deep/ .el-input {
    width: 327px;
    margin-top: 7px;
  }
  /deep/ .el-input--prefix .el-input__inner{
    background: rgba(0,0,0,.3);
    border: 0;
    color: #f4d0ce;
    font-size: 16px;
  }
  /deep/ .el-input--prefix .el-input__inner:focus{
    background: #ffffff;
    border: 0;
    color: #333;
    font-size: 16px;
  }
</style>
