<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Main from "./components/main.vue";
export default {
  name: "app",
  components: {
    Home,
    About,
    Main
  }
};
</script>
