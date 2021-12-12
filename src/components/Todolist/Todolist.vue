<template>
  <div class="todos-wrapp">
    <h2 class="todos-wrapp-title">Задачи:</h2>
    <div class="todos-wrapp-line"></div>
    <ul v-show="todoList" class="todos-wrapp-list">
      <transition-group name="slide-fade">
        <li v-for="todo in todoList" :key="todo.id" class="todos-wrapp-item">
          <h2 class="todos-wrapp-item-title">
            {{ todo.title }}
          </h2>
          <p class="todos-wrapp-item-body">
            {{ todo.body }}
          </p>
          <button class="todos-wrapp-item-btn_done" @click="doneTodo(todo)">
            D
          </button>
          <button @click="del(todo.id)" class="todos-wrapp-item-btn_del">
            x
          </button>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todolist",
  computed: {
    ...mapGetters({
      todoList: "getTodos",
    }),
  },
  methods: {
    ...mapActions({
      delTodo: "deleteTodoItem",
      done: "doneTodoItem",
    }),
    del(id) {
      this.delTodo(id);
    },
    doneTodo(todo) {
      this.done(todo);
    },
  },
};
</script>

<style lang="scss">
@import "./Todolist.scss";

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
