<template>
   <div class="tab">
      <div :class="['list', justify]" ref="tabList">
         <div class="anchor"
              v-for="(tab, key) in tabs" :key="key" @click="$emit('currentChange', key)"
              :style="`flex-basis: ${100/tabs.length}%`">{{ tab }}</div>
      </div>
      <div class="bar" :style="`--position: ${currentPosition()}%; --tickWidth: ${tickWidth}px;`"></div>
   </div>
</template>

<style lang="scss">
@import "style";
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Tab",
   props: {
      initial: {
         type: Number,
         default: () => 0
      },
      current: {
         type: Number,
         default: () => 0
      },
      tickWidth: {
         type: Number,
         default: () => 89
      },
      tabs: Array,
      justify: {
         type: String,
         default: () => "center",
         validator(val) {
            return ["start", "center", "end", "between", "around"].includes(val)
         }
      }
   },
   model: {
      prop: 'current',
      event: 'currentChange'
   },
   data() {
      return {
         anchorWidth: 0
      }
   },
   mounted() {
     this.anchorWidth = this.$refs.tabList.firstElementChild.clientWidth
   },
   methods: {
      currentPosition() {
         const index = [...Array(this.tabs.length*2).keys()].filter(v => v%2)
         return ((this.anchorWidth / (this.anchorWidth*this.tabs.length) )*100) /2 * index[this.current]
      }
   }
})
</script>
