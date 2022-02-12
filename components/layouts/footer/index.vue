<template>
   <footer>
      created by <a href="https://github.com/Fabio-web/">Fabio</a> - devChallenges.io
   </footer>
</template>

<style scoped lang="scss">
   footer {
      text-align: center;
      margin: 75px 0 25px;

      a {
         text-decoration: underline;
      }
   }
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Footer"
})
</script>
