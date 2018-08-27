<template>
  <div class="container">
    <div class="form-group">
      <input type="text" class="form-control" style="margin-top: 20px;" v-model="inputText">
      <button class="btn btn-success" @click="addTask">Add task</button>
      <button class="btn btn-success" @click="goBack">Go back to Task list</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main';

export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    addTask() {
      const newTask = {index: eventBus.index, task: this.inputText }
      eventBus.list.push(newTask);
      //eventBus.index = eventBus.index + 1;
      this.inputText = "";
    }
  }
};
</script>

<style>
  button {
    margin-top: 8px;
  }
</style>
