<template>
  <div class="big" v-title data-title="GUGOPLAY">
    <div>
      <Content></Content>
      <div class="bottom-text">
        <p>gugoplay</p>
        <h1>免费在线游戏</h1>
        <div class="jXgCKW">
          gugoplay是个性化的免费在线游戏探索平台。我们每天都会为您精心挑选最新颖的游戏，保证您玩得尽兴！在这里，您不会感到无聊，因为我们将根据您喜好的游戏为您推荐适合您的兴趣的游戏。如果您是运动爱好者，智能化的运算法则将确保您永远不会错过最新的运动系列游戏；如果您热爱赛车，您将第一时间看到最精彩的赛车游戏。我们的游戏在支持各种设备，这样您随时随地都可以玩！打造最好的网页游戏是我们的使命！
          <br>
          <br>
          在gugoplay游戏网站，您可以免费玩高达2万个游戏！我们为您提供在所有设备上都可以玩的最好的免费游戏。每一天您都可以在gugoplay找到在您的电脑，智能手机和平板电脑上可以玩的最新游戏。使用您的键盘，鼠标或者触屏来控制游戏中的角色，甚至惊险刺激的赛车！感受游戏过程中肾上腺素上升的快感。用您的大脑来解决谜题，用您的时尚直觉来打扮人偶和女孩！我们将精彩的游戏呈现给所有人。这其中有些游戏是由gugoplay自主开发。
          <br>
          <br>
          gugoplay游戏只为您提供所有的好玩免费游戏，最有人气的游戏系列，比如烹饪游戏，足球游戏和打扮游戏，以及根据您最喜爱的电影，电视节目改编的游戏，比如Adventure Time游戏，Inside Out游戏和Descendants游戏。在我们的广泛的游戏集锦中，你还可以找到一些经典的游戏，比如Mahjong, Bubble Shooter和Bejeweled，还有一些新游戏比如Agario,，Uphill Rush 7和 Grindcraft。您可以玩3D游戏，超级好玩的街机游戏以及所有的人气解谜游戏！不管您有什么样的游戏品味，我们都能满足您的胃口。gugoplay是适合全家人一起玩的游戏网站。
        </div>
      </div>
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
  .bottom-text{
    position: relative;
    margin: 30px;
    padding: 18px 24px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px 0px;
    p{
      font-weight: bold;
      font-size: 9px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 3px 0px 0px;
    }
    h1{
      font-size: 20px;
      margin: 0px 0px 8px;
      color: #002b50;
    }
    .jXgCKW{
      color: #002b50;
    }
  }
}
</style>
