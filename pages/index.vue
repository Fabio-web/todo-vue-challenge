<template>
   <div class="homePage">
      <Tab :tabs="['All', 'Active', 'Completed']" justify="center" v-model="current"/>
      <div class="form">
         <Input placeholder="add details" full-width label="" v-model="inputDetail"/>
         <Button color="primary" end-icon="add">Add</Button>
      </div>
      <div class="taskList">
         <Checkbox v-model="checked[key]" strikethrough v-for="(_, key) in checked" :key="key">
            <span class="taskText">Do coding challenges</span>
         </Checkbox>
      </div>
   </div>
</template>

<style lang="scss">
@import "~/assets/scss/pages/home";
</style>

<script>
import Input from "../components/input"
import Button from "../components/button"
import Tab from "../components/tab"
import Checkbox from "../components/checkbox"

export default {
   components: { Checkbox, Tab, Button, Input },
   data() {
      return {
         current: 0,
         checked: [true, false, true, false, false],
         inputDetail: ""
      }
   }
}
</script>
