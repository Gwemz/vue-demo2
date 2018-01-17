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

### 动态路由匹配
把某种模式匹配到的路由映射到同一个组件。我们可以在vue-router的路由路径中使用[动态路径参数]达到这个效果。
```
const User = {
  template : '<div></div>'
}

const router = new VueRouter({
  router: [
    // 动态路径参数 以冒号开头
    {path:'/user/:id',componet:User}
  ]
})

const User = {
  template: '<div>User {{$route.params.id}}</div>'
}
```
现在`/user/foo` 和 `/user/bar` 都将映射到相同的路由

#### 响应路由参数的变化
复用组件时，想对路由参数的变化做出响应的话，可以简单地watch(监测变化) `$route`对象：
```
const User = {
  template: '...',
  watch: {
    '$route' (to, from){
      // 对路由变化做出响应

    }
  }
}

2.2中`beforeRouteUpdate` 守卫:
const User = {
  template: '...',
  beforeRouteUpdate (to ,from ,next){

  }
}
```
#### 高级匹配模式
vue-router支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配; https://github.com/vuejs/vue-router/blob/next/examples/route-matching/app.js

#### 匹配优先级
同一路径匹配多个路由的情况时，匹配的优先级按照路由的定义顺序：谁先定义，谁的优先级就最高。

### 嵌套路由
实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：
```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

```
<div id = "app">
  <router-view></router-view>
</div>

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes : [
    {path:'/user/:id',component: User}
  ]
})
```
这里的<router-view>是最顶层的出口，渲染最高级路由匹配到的组件。同样的，一个被渲染的组件可以包含自己的嵌套<router-view>。例如：
```
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
```
要在嵌套的出口中渲染组件，需要在vueRouter的参数中使用children配置
```
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```
以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

### 编程式的导航
