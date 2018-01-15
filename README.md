# Vue 2.0 简易路由示例

> 参考来源：(https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs).

## Build Setup

``` bash
# 安装依赖
npm install

# 启动本地服务器(热加载) localhost:8080
npm run dev

# 代码编译
npm run build
```

```
vs-code打开本地服务器
1、安装npm install -g live-server或者cnpm install live-server -gf 
2、再运行live-server就可以在http://127.0.0.1:8080访问 
```
For a detailed explanation of the build process, read the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 关于Vue构建单页面应用

### 安装
#### CDN
https://unpkg.com/vue-router/dist/vue-router.js

#### NPM 
```
npm install vue-router
```

```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

#### 构建开发版
```
git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
cd node_modules/vue-router
npm install
npm run build
```
### 开始
将组件(components)映射到路由(routes)，然后告诉vue-router在哪里渲染他们

> HTML
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```
> JavaScript
```
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```


