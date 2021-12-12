<template>
  <div class="donelist-wrapp">
    <h2 class="donelist-wrapp-title">Выполнено:</h2>
    <div class="donelist-wrapp-line"></div>
    <ul class="donelist-wrapp-list">
      <transition-group name="slide-fade">
        <li v-for="todo in doneList" :key="todo.id" class="donelist-wrapp-item">
          <h2 class="donelist-wrapp-item-title">
            {{ todo.title }}
          </h2>
          <p class="donelist-wrapp-item-body">
            {{ todo.body }}
          </p>
          <button @click="del(todo.id)" class="todos-wrapp-item-btn_del">
            x
          </button>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Donelist",
  computed: {
    ...mapGetters({
      doneList: "getDoneList",
    }),
  },
  methods: {
    ...mapActions({
      delTodo: "deleteDone",
    }),
    del(id) {
      this.delTodo(id);
    },
  },
};
</script>

<style lang="scss">
@import "./Donelist.scss";

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
