<template>
   <header>
      <div class="container">
         <h2>#todo</h2>
      </div>
   </header>
</template>

<style lang="scss">
header {
   height: 100px;
   display: flex;
   align-items: center;
   h2 {
      text-align: center;
   }
}
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Header"
})
</script>
