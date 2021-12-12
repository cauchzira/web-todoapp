import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    done: [],
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
    getDoneList: (state) => {
      return state.done;
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    delTodoItem(state, id) {
      const index = state.todos.findIndex((item) => item.id == id);
      if (index > -1) state.todos.splice(index, 1);
    },
    delTodoDoneItem(state, id) {
      const index = state.done.findIndex((item) => item.id == id);
      if (index > -1) state.done.splice(index, 1);
    },
    doneTodo(state, todo) {
      state.done.push(todo);
    },
  },
  actions: {
    addTodoInList(ctx, todo) {
      ctx.commit("addTodo", todo);
    },
    deleteTodoItem(ctx, id) {
      ctx.commit("delTodoItem", id);
    },
    deleteDone(ctx, id) {
      ctx.commit("delTodoDoneItem", id);
    },
    doneTodoItem(ctx, todo) {
      ctx.commit("doneTodo", todo);
      ctx.commit("delTodoItem", todo.id);
    },
  },
  modules: {},
});
