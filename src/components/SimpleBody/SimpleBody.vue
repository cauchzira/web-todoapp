<template>
  <div class="wrapp">
    <Todolist />
    <Donelist />
  </div>
</template>

<script>
import Todolist from "../Todolist/Todolist.vue";
import Donelist from "../Donelist/Donelist.vue";

export default {
  name: "BodyContent",
  components: {
    Todolist,
    Donelist,
  },
};
</script>

<style lang="scss">
.wrapp {
  display: flex;
  justify-content: space-evenly;
  height: 500px;
}
</style>
