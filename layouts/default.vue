<template>
   <div id="app">
      <Header/>
      <div class="container">
         <Nuxt/>
      </div>
      <Footer/>
   </div>
</template>

<script>
import Vue from "vue"
import Footer from "~/components/layouts/footer"
import Header from "~/components/layouts/header"

export default Vue.extend({
   layout: "default",
   components: { Header, Footer }
})
</script>
