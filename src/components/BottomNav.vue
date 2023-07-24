<template>
  <div class="end">
    <div class="content">
      <a @click="privacyClick">Privacy</a>
      <a @click="contactClick">Contact us</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  methods: {
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
    font: 400 16px/24px Proxima Nova, Open Sans, Gill Sans MT, Gill Sans, Arial, sans-serif;
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
