<template>
    <div class="container">
      <!--<ul>
        <li>
          <v-link href="/">主页</v-link>
          <v-link href="/about">关于我们</v-link>
        </li>
      </ul>-->
      <slot></slot>
    </div>

</template>
<script>
    import VLink from '../components/VLink.vue'

    export default {
        components: {
            VLink
        }
    }

</script>
