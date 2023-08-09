import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/font/theFont.css'
import { Button, Select, Input, Message, Form, FormItem } from 'element-ui'

Vue.prototype.$axios = axios
Vue.prototype.$message = Message
Vue.config.productionTip = false

// 引入插件
import VueLazyload from 'vue-lazyload'
import {clickInstallLog, determinePcOrMove, followShortcutsLog, getJson, getUrlParams} from "@/utils/utils";
// 注册插件
Vue.use(VueLazyload,{
  loading:'' // 懒加载默认图片
})


window.addEventListener('beforeinstallprompt', (e) => {
  // 防止 Chrome 67 及更早版本自动显示安装提示
  e.preventDefault();
  console.log(e);
  /**直接触发浏览器安装保存数据通过监听appinstalled事件删除数据*/
  window.deferredPrompt = e;
  /**通过页面按钮触发安装*/
  // // 稍后再触发此事件
  // store.commit("changePWA",{deferredPrompt: e,deferredPromptType: true})
  // setTimeout(()=>{
  //   store.state.deferredPrompt.userChoice.then((choiceResult) => {
  //     console.log(choiceResult.outcome);
  //     if (choiceResult.outcome === 'dismissed') {
  //       console.log('用户取消了安装');
  //     }
  //     else {
  //       console.log('用户已安装程序');
  //
  //       store.commit("changePWA",{deferredPrompt: store.state.deferredPrompt,deferredPromptType: false})
  //     }
  //   });
  // })
});



// 浏览器监听pwa点击安装后事件
window.addEventListener('appinstalled',()=>{
  let page = null
  if (window.location.href.indexOf('/homeIndex/') > -1) {
    page = 'home'
  } else if (window.location.href.indexOf('/details/') > -1) {
    page = 'detail'
  } else if (window.location.href.indexOf('/gameType/') > -1) {
    page = 'tab'
  } else {
    page = 'home'
  }
  if (determinePcOrMove() == 2) {
    // clickInstallLog(`gugoplay_pc_${page}`)
  } else {
    // clickInstallLog(`gugoplay_mobile_${page}`)
  }
  window.deferredPrompt = null;
})

// 判断是通过网页启动还是通过主屏幕图标启动
if(window.location.href.match('pwa=client')){
  if (determinePcOrMove() == 2) {
    // followShortcutsLog('gugoplay_pc_home')
  } else {
    // followShortcutsLog('gugoplay_mobile_home')
  }
}


// 监听横屏竖屏切换
window.addEventListener('orientationchange', function() {
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    setTimeout(()=>{
      //fontsize计算
      document.documentElement.style.fontSize = document.documentElement.clientWidth/320 * 16 +'px'
    },100)
  }
});

// 修改title
Vue.directive('title', {
  // 单个修改标题
  update: function (el) {
    console.log(el.dataset.title);
    if (el.dataset.title) {
      setTimeout(()=>{
        document.title = el.dataset.title
      })
    }
  }
})

// 默认常玩游戏
let arr = getJson() || [] // 原数组
let recentGame = []
if (!localStorage.getItem('recentGame')) {
  arr.map((item)=>{
    if (recentGame.length < 6) {
      item.filterStatus = 0 // 筛选状态用来判断点击游戏时替换数组中的位置元素
      recentGame.push(item)
    }
  })
  localStorage.setItem('recentGame',JSON.stringify(recentGame))
}

// 清除浏览器 localStorage 缓存(只在重新打开页面时起作用)
const VUE_APP_VERSION = require('../package.json').version
const vers = window.localStorage.getItem('appVersion')
if(VUE_APP_VERSION != vers){
    localStorage.clear()
    window.localStorage.setItem('appVersion', VUE_APP_VERSION)
    location.reload()
}

// 解决地址栏参数在/#前面问题
let b = new URL(window.location.href);
if (b.hash === '#/') {
  if (determinePcOrMove() == 2) {
    if (b.search) {
      history.replaceState(null,null,`${b.origin + b.pathname}#/P/homeIndex${b.search}`)
    } else if (getUrlParams('channel')){
      history.replaceState(null,null,`${b.origin + b.pathname}#/P/homeIndex?channel=${getUrlParams('channel')}`)
    } else {
      history.replaceState(null,null,`${b.origin + b.pathname}#/P/homeIndex`)
    }
  } else {
    if (b.search) {
      history.replaceState(null,null,`${b.origin + b.pathname}#/M/homeIndex${b.search}`)
    } else if (getUrlParams('channel')){
      history.replaceState(null,null,`${b.origin + b.pathname}#/M/homeIndex?channel=${getUrlParams('channel')}`)
    } else {
      history.replaceState(null,null,`${b.origin + b.pathname}#/M/homeIndex`)
    }
  }
}

Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
