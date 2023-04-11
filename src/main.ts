import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

// 全局引入
import mUI from 'imooc-element-components-dang'
import 'imooc-element-components-dang/style.css'

// 单独引入
// import  chooseIcon from 'imooc-element-components-dang/chooseIcon'
// import 'imooc-element-components-dang/chooseIcon/style.css'

const app = createApp(App)
app.use(ElementPlus)
.use(mUI)
// .use(chooseIcon)

// for( let i in Icons) {
//     app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
    
// }
app.mount('#app')