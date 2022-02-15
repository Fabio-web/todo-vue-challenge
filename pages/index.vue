<template>
   <div class="homePage">
      <Tab :tabs="['All', 'Active', 'Completed']" justify="center" v-model="current"/>
      <form class="form" @submit.prevent="postTask" v-if="current !== 2">
         <Input placeholder="add details" full-width label="" v-model="inputDetail"/>
         <Button type="submit" color="primary" end-icon="add">Add</Button>
      </form>
      <div class="taskList" v-if="tasks.length > 0">
         <div class="task" v-for="(task, key) in tasks" :key="key" v-if="showTasks(key)">
            <Checkbox strikethrough v-model="tasks[key].completed" @change.native="updateTask">
               {{ task.task }}
            </Checkbox>
            <span class="delete material-icons-outlined" v-if="current === 2" @click="deleteTask(key)">delete</span>
         </div>
      </div>
      <div class="delAll" v-if="current === 2">
         <Button start-icon="delete" color="danger" size="sm" @click.native="deleteTask(-1)">delete all</Button>
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
         inputDetail: "",
         tasks: []
      }
   },
   mounted() {
      this.tasks = this.getTasks() ?? []
   },
   methods: {
      postTask() {
         if(this.tasks.find(v => v.task === this.inputDetail) || !this.inputDetail) return false
         this.tasks.push({ task: this.inputDetail, completed: false })
         this.inputDetail = ""

         this.updateTask()
      },
      getTasks() {
         return JSON.parse(localStorage.getItem("tasks"))
      },
      updateTask() {
         localStorage.setItem("tasks", JSON.stringify(this.tasks))
      },
      deleteTask(index) {
         if(index === -1) {
            this.tasks = this.tasks.filter(task => !task.completed)
         } else {
            if(!this.tasks[index]) return false
            this.tasks.splice(index, 1)
         }

         this.updateTask()
      },
      showTasks(index) {
         switch (this.current) {
            case 1:
               return !this.tasks[index].completed
            case 2:
               return this.tasks[index].completed
            default:
               return true
         }
      }
   }
}
</script>
