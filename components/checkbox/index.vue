<template>
   <label :class="['checkbox', (strikethrough && checked) && 'strikethrough']">
      <input type="checkbox" :value="checked" ref="checkbox" @change="onChange">
      <span class="checkbox-text"><slot/></span>
   </label>
</template>

<style lang="scss">
@import "style";
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Checkbox",
   props: {
      checked: Boolean,
      strikethrough: Boolean,
   },
   model: {
      prop: 'checked',
      event: 'changeCheck'
   },
   mounted() {
      this.$refs.checkbox.checked = this.checked
   },
   methods: {
      onChange(event) {
         this.$emit('changeCheck', event.target.checked);
      }
   }
})
</script>
