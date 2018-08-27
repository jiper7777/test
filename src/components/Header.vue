<template>
  <div>
    <div class="task-counter">
      <div>
        <p>TASKS DONE</p>
        <p>{{doneTasks}}/{{ allTasks }}</p>
        <button class="add-button" @click="updateList">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      doneTasks: 0
    };
  },
  methods: {
    updateList() {
      this.$router.push("/add");
    }
  },
  computed: {
    allTasks() {
      return eventBus.list.length;
    }
  }
 };
</script>

<style>
.task-counter {
  margin-top: 20px;
  width: 500px;
  height: 130px;
  background-color: #b3b7ff;
  color: white;
  font-weight: bold;
  font-size: 25px;
}

.task-counter > div {
  padding-top: 10px;
  margin-left: 30px;
}

.add-button {
  background-color: #138496;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 22px;
  font-weight: 800;
  margin: 4px 2px;
  border-radius: 50%;
  position: relative;
  top: -85px;
  left: 350px;
  z-index: 999;
  width: 75px;
}

button:hover {
  cursor: pointer;
}
</style>
