import { createApp } from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VConsole from 'vconsole'
import installMaxerStore, { Maxer } from './store/maxer.mixin'
// 声明全局组件 防止需要this调用时不能识别类型
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $m: Maxer;  // 声明全局方法
    }
}
var vConsole = new VConsole()
const app=createApp(App)
installMaxerStore(app)
app.use(router)
app.use(store)
app.mount('#app')
