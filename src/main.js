import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()
export default {
  // 这个字段走 app.json
  config: {
    pages: [
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#00a2ea',
      backgroundColorTop: '#00a2ea',
      navigationBarBackgroundColor: '#00a2ea',
      navigationBarTitleText: '知乎日报',
      navigationBarTextStyle: 'white'
    }
    // tabBar: {
    //   color: '#999',
    //   selectedColor: '#d22222',
    //   backgroundColor: '#fff',
    //   borderStyle: 'black',
      // list: [{
      //   pagePath: 'pages/news/list',
      //   text: '资讯',
      //   iconPath: 'static/assets/news.png',
      //   selectedIconPath: 'static/assets/news-active.png'
      // }, {
      //   pagePath: 'pages/quanzi/list',
      //   text: '圈子',
      //   iconPath: 'static/assets/quanzi.png',
      //   selectedIconPath: 'static/assets/quanzi-active.png'
      // }]
    // }
  }
}
