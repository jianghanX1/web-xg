import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deferredPrompt: null, // PWA是否安装
    deferredPromptType: false, // 安装PWA按钮状态
    fullScreenOrNot: false, // 是否全屏
  },
  getters: {
  },
  mutations: {
    changePWA(state,data) {
      state.deferredPrompt = data.deferredPrompt
      state.deferredPromptType = data.deferredPromptType
    },
    changeScreen(state, data) {
      console.log(data);
      state.fullScreenOrNot = data
    }
  },
  actions: {
  },
  modules: {
  }
})
