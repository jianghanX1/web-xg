<template>
  <div>
<!--    <div class="nav-bar" :style="bottomHide == false ? 'position: relative' : null">-->
<!--      <div><a :href="'/#/M/homeIndex'">H5JOY</a></div>-->
<!--    </div>-->
    <slot></slot>
    <div class="end" v-if="bottomHide == false ? false : true">
      <div class="content">
        <a @click="privacyClick">Privacy</a>
        <a @click="contactClick">Contact us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartAndEnd",
  props: ["bottomHide"],
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.bottomHide);
  },
  methods: {
    game() {
      // this.$router.push({
      //   path: '/M/homeIndex'
      // },()=>{})
    },
    privacyClick() {
      let { channel } = this.$route.query
      let pathInfo = this.$router.resolve({
        path: '/privacy',
        query: {
          routeType: 1, // 不走App.vue文件的判断
          channel
        }
      })
      window.open(pathInfo.href, '_blank')
    },
    contactClick() {
      let { channel } = this.$route.query
      let pathInfo = this.$router.resolve({
        path: '/contactUs',
        query: {
          routeType: 1, // 不走App.vue文件的判断
          channel
        }
      })
      window.open(pathInfo.href, '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar{
  height: 2.8125rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0.125rem 0.1875rem 0 rgba(0,16,63,.4);
  background: linear-gradient(to bottom, #3cf7dc 0%, #15c8d1 100%);
  z-index: 5;
  div{
    font-size: 1.125rem;
    text-align: center;
    line-height: 2.8125rem;
    color: #ffffff;
    font-weight: bold;
    a{
      text-decoration: none;
      color: #ffffff;
    }
  }
}
.end{
  position: relative;
  margin: 64px 0px 0px;
  background: rgb(255, 255, 255);
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .content{
    flex-flow: row nowrap;
    padding: 16px 32px;
    margin: 16px auto 0px;
    text-align: center;
    color: #5d6b84;
    font-size: 16px;
    a:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
@media (min-width: 771px) {
  .end::before{
    height: 26px;
    clip-path: polygon(0% 100%, 30% 0%, 36% 100%, 100% 0%, 100% 100%);
  }
}
.end::before{
  content: "";
  position: absolute;
  right: 0px;
  bottom: 100%;
  margin-bottom: -1px;
  left: 0px;
  height: 16px;
  background: rgb(255, 255, 255);
  clip-path: polygon(0% 100%, 50% 0%, 60% 100%, 100% 0%, 100% 100%);
}
</style>
