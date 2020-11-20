<template>
  <div class="body-container">
    <top-nav-mobile v-if="$mq === 'sm' || $mq === 'md'" />
    <top-nav v-else />
    <transition name="fade" mode="out-in">
      <router-view class="nav-offset" style="animation-duration: 0.2s" />
    </transition>
    <bottom-nav v-if="$mq === 'sm' || $mq === 'md'" />
  </div>
</template>

<script>
import TopNav from "@/components/topNavigator";
import BottomNav from "@/components/bottomNavigator";
import TopNavMobile from "@/components/topNavigatorMobile";

export default {
  name: "App",
  components: {
    TopNav,
    BottomNav,
    TopNavMobile,
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.nav-offset {
  padding-top: $navbarHeight;
  padding-bottom: $bottomBarHeight + 30px;
}
</style>
