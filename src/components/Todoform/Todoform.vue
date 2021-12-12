<template>
  <div class="todo">
    <form class="todo-form">
      <input
        v-model="todoForm.title"
        type="text"
        class="todo-form-input"
        placeholder="Название"
      />
      <input
        v-model="todoForm.body"
        type="text"
        class="todo-form-input"
        placeholder="Задача"
      />
      <button @click.prevent="getTodo" class="todo-form-add_btn">
        Добавить
      </button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";

export default {
  name: "Todoform",
  data() {
    return {
      todoForm: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions({
      addTodo: "addTodoInList",
    }),
    getTodo() {
      if (this.todoForm.title && this.todoForm.body) {
        const todo = {
          id: uuidv4(),
          title: this.todoForm.title,
          body: this.todoForm.body,
        };
        this.addTodo(todo);
      } else alert("Заполните все поля!");
      this.todoForm.title = this.todoForm.body = "";
    },
  },
};
</script>

<style scoped lang="scss">
@import "./Todoform.scss";
</style>
