<template>
  <div class="container" style="border-radius: 30px !important;">
    <div class="row">
      <div style="margin: 0 auto">
        <app-header></app-header>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'
import List from "./List.vue";
import Header from "./Header.vue";

export default {
  data() {
    return {
    }
  },
  components: {
    appList: List,
    appHeader: Header
  },
};
</script>

<style lang="scss">

</style>
