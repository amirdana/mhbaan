<template>
  <div class="top-nav">
    <fa
      v-if="$route.name !== 'home'"
      @click="popRoute()"
      icon="arrow-left"
      class="pop"
    />
    <img width="80" src="/img/main-logo.png" />
  </div>
</template>
<script>
export default {
  methods: {
    popRoute() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.top-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $navbarHeight;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pop {
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: $brown;
}
</style>
