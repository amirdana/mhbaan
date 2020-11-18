<template>
  <div id="app">
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view style="animation-duration: 0.2s" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
