<template>
   <label :class="[
      'input',
      !!error && 'input-error',
      fullWidth && 'input-fw'
   ]">
      <textarea v-if="multiline" :name="label.toLowerCase()"
                class="item"
                :rows="row" :placeholder="placeholder">{{ value }}</textarea>

      <input v-else class="item" type="text" label=""
             :placeholder="placeholder"
             :disabled="disabled" :rows="row"
             :name="label.toLowerCase()" :value="value" @input="onInput" @change="onChange"/>
      <span v-if="error" class="text-error">{{ error }}</span>
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
      }
   },
   data() {
      return {
         error: '',
      };
   },
   watch: {
      value: {
         handler(value) {
            if(value) this.error = ""
         },
      },
   },
   methods: {
      onInput(event) {
         const value = event.target.value
         if(!value) this.error = "Value should not be empty"
         this.$emit('input', value);
      },
      onChange(event) {
         this.$emit('change', event.target.value);
      },
   },
})
</script>
