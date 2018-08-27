<template>
  <div class="list-container">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(el, index) in list"
        :key="el.id"
        :class="{'cross': el.enabled}"
        @click="crossOut(el)"
      >
        {{ index }} | {{ el.task }}
        <button class="but btn btn-danger" @click="removeTask(index)">Remove</button>
        <button class="but btn btn-info" @click="editTask(index, el)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    data() {
      return {
        list: eventBus.list,
        enabled: false,
        show: false
      }
    },
    methods: {
      removeTask(index) {
        eventBus.list.splice(index, 1);
      },
      editTask(index, el) {
        eventBus.editedTask = eventBus.list[index].task;
        eventBus.editedIndex = index;

        //el[index].focus();

        // console.log(el.id)

        //setAttribute("contenteditable", "true")
        // var editText =  document.createElement('input');
        // editText.value = 'djkaskjdasjkdakjads';
        //
        // var element  = document.getElementById('edit');
        // element.appendChild(editText);

        //this.$router.push('/add');
      },
      crossOut(el) {
        this.$set(el, 'enabled', !el.enabled);
      }

      //eventBus.list[index].task = inputValue;

    }
  };
</script>

<style>
  .list-container {
    width: 500px;
    min-height: 200px;
    border: solid black 1px;
  }

  a {
    color: black;
    font-weight: bold;
  }

  .cross {
    text-decoration: line-through !important;
  }

  li:hover {
    cursor: pointer;
    background-color: #ffa;
  }

  .but {
    float: right;
    margin: 5px;
  }


</style>
