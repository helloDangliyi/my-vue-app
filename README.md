# Vue 3 + TypeScript + Vite

## 测试发布的组件库

1. 创建新项目

   ```javascript
   npm init vite@latest my-vue-app -- -- template vue-ts
   ```

2. 安装依赖

   ```javascript
   npm i 
   
   npm i -D element-plus @element-plus/icons-vue
   
   npm i imooc-element-components-dang -s
   ```

   在`package.json`中可以看到

   ```javascript
   {
   ...
   "dependencies": {
       "imooc-element-components-dang": "^1.0.0",
     },
   }
   ```

   `main.ts`中引入:

   ```typescript
   ...
   
   import ElementPlus from 'element-plus'
   import 'element-plus/dist/index.css'
   //全部引入
   import mUI from 'imooc-element-components-dang'
   import 'imooc-element-components-dang/style.css'
   
   // 单独引入
   //import  chooseIcon from 'imooc-element-components-dang/chooseIcon'
   //import 'imooc-element-components-dang/chooseIcon/style.css'
   
   const app = createApp(App)
   app.use(ElementPlus)
   .use(mUI)
   //.use(chooseIcon)
   app.mount('#app')
   ```

   
