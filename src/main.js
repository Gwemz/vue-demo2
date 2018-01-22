import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/main.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'


// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
// const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo }, 
    { path: '/bar', component: Bar },
    { path: '/main', component: Main }
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router
}).$mount('#app')