

import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from 'vue'
// 路由懒加载
const _import = (path: string) => defineAsyncComponent(() => import(`../${path}.vue`))
const routes: Array<RouteRecordRaw> = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    meta: {
      title: "首页",
      keepAlive: false,
    },
    component: () => _import('views/HelloWorld')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: "home",
      keepAlive: false,
    },
    component: () => _import('views/home'),
    children:[
      {
        path:'/Add',
        name:'Add',
        component:() => _import('components/Add'),
      },
      {
        path:'/Delete',
        name:'Delete',
        component:() => _import('components/Delete'),
      },
      {
        path:'/Done',
        name:'Done',
        component:() => _import('components/Done'),
      },
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass:'active',
})
router.beforeEach((to: any, from, next) => {
  document.title = to.meta.title;
  let timer: any;
  document.addEventListener('visibilitychange', function () {
    // 用户息屏、或者切到后台运行 （离开页面） 
    if (document.visibilityState === 'hidden') {
      clearTimeout(timer)
      const arr: Array<string> = [
        'ヾ(￣▽￣)Bye~Bye~',
        '=͟͟͞͞(꒪⌓꒪*)你咋走了',
        '(；′⌒`)记得回来',
        '‎(,,•́ . •̀,,)记得回来',
        '‎(●︎˘͈ ᵕ˘͈)在等你哦',
        '(づ ●─● )づ你别走呀',
        '(ง •̀_•́)ง我在这里',
        '<(｀^´)快点回来',
      ]
      document.title = arr[Math.ceil(Math.random() * 7)]
    }
    // 用户打开或回到页面 
    if (document.visibilityState === 'visible') {
      clearTimeout(timer)
      const arr: Array<string> = [
        '⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄你回来辣',
        '(✿◡‿◡)你回来辣',
        '✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧你回来辣',
        '‎₍˄·͈༝·͈˄₎◞你回来辣',
        '(๑>؂<๑)你回来辣',
        '(づ ●─● )づ你回来辣',
        '(ง •̀_•́)ง你回来辣',
        'ᴗ͈ˬᴗ͈ෆ你回来辣',
        '꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱你回来辣',
      ]
      document.title = arr[Math.ceil(Math.random() * 8)]
      timer = setTimeout(() => {
        document.title = to.meta.title
      }, 5000)
    }
  })

  next();
});
export default router
