<template>
   <label :class="[
      'input',
      error && 'input-error',
      fullWidth && 'input-fw',
      !!label && 'input-label',
      size
   ]">
      <span class="label">{{ label }}</span>

      <textarea v-if="multiline" :name="label.toLowerCase()"
                class="item"
                :rows="row" :placeholder="placeholder">{{ value }}</textarea>

      <input v-else class="item" type="text" label=""
             :placeholder="placeholder"
             :disabled="disabled" :rows="row"
             :name="label.toLowerCase()" :value="value"/>
   </label>
</template>

<style lang="scss">
@import "style";
</style>

<script>
import Vue from "vue"

export default Vue.extend({
   name: "Input",
   props: {
      error: Boolean,
      disabled: Boolean,
      fullWidth: Boolean,
      multiline: Boolean,
      row: String,
      label: {
         type: String,
         required: true,
      },
      value: {
         type: String,
         required: true,
      },
      placeholder: {
         type: String,
      },
      size: {
         type: String,
         validator(val) {
            return ["sm", "md"].includes(val)
         }
      },
   }
})
</script>
