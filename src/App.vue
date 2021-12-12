<template>
  <div id="app">
    <h1 class="main-title">Todo Manager</h1>
    <Todoform />
    <SimpleBody />
  </div>
</template>

<script>
import Todoform from "./components/Todoform/Todoform.vue";
import SimpleBody from "./components/SimpleBody/SimpleBody.vue";

export default {
  name: "App",
  components: {
    Todoform,
    SimpleBody,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bellota+Text:wght@300;400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Bellota Text", cursive;
}
#app {
  height: 100vh;
  background: rgb(252, 157, 255);
  background: linear-gradient(
    54deg,
    rgba(252, 157, 255, 1) 0%,
    rgba(83, 96, 235, 1) 47%,
    rgba(226, 88, 197, 1) 100%
  );
}

.main-title {
  padding-top: 21px;
  font-size: 4rem;
  color: #fff;
  text-align: center;
}
</style>
