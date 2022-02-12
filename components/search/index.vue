<template>
   <div class="searchComponent">
      <div class="background" @click="toggle" v-show="isSearch"></div>
      <div ref="search" class="inner">
         <div class="container">
            <div class="content">
               <div class="form">
                  <div>
                     <Input placeholder="Search location" label="Location" full-width start-icon="settings" value=""/>
                  </div>
                  <div>
                     <Input placeholder="Add guests" label="Guests" full-width start-icon="settings" value=""/>
                  </div>
                  <div>
                     <Button start-icon="search" color="primary">Search</Button>
                  </div>
               </div>
               <div class="settings">
                  <div class="locationList">
                     <div class="location">
                        <span class="material-icons">location_on</span>
                        Helsinki, Finland
                     </div>
                     <div class="location">
                        <span class="material-icons">location_on</span>
                        Helsinki, Finland
                     </div>
                     <div class="location">
                        <span class="material-icons">location_on</span>
                        Helsinki, Finland
                     </div>
                     <div class="location">
                        <span class="material-icons">location_on</span>
                        Helsinki, Finland
                     </div>
                  </div>
                  <div class="guestSetting">
                     <div class="quantity">
                        <div class="title">Adults</div>
                        <div class="helper">Ages 13 or above</div>
                        <div class="counter">
                           <div class="symbol">-</div>
                           <div class="number">0</div>
                           <div class="symbol">+</div>
                        </div>
                     </div>
                     <div class="quantity">
                        <div class="title">Children</div>
                        <div class="helper">Ages 2-12</div>
                        <div class="counter">
                           <div class="symbol">-</div>
                           <div class="number">0</div>
                           <div class="symbol">+</div>
                        </div>
                     </div>
                  </div>
                  <div class="spaces"></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
@import "style";
</style>

<script>
import Vue from "vue"
import Input from "~/components/input"
import Button from "~/components/button"

export default Vue.extend({
   name: "Search",
   components: { Button, Input },
   data() {
      return {
         isSearch: false
      }
   },
   mounted() {
      this.$nuxt.$on("search", this.toggle)
      this.setTransform()
   },
   methods: {
      toggle() {
         this.isSearch = !this.isSearch
         this.setTransform()
      },
      async setOverflowY() {
         await new Promise(resolve => setTimeout(resolve, this.isSearch ? 0 : 500))
         document.body.style.overflowY = this.isSearch ? "hidden" : ""
      },
      async setTransform() {
         this.$refs.search.style.transform = `translateY(${this.isSearch ? "0" : "-750"}px)`
         await this.setOverflowY()
      }
   }
})
</script>
