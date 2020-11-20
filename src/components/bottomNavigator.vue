<template>
  <div class="bottom-tab d-flex justify-content-around align-items-center">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <fa
        fa
        class="mb-2"
        icon="home"
        :class="{ 'active-route': currentRoute === 'home' }"
      />
      <p class="m-0" :class="{ 'active-route': currentRoute === 'home' }">
        خانه
      </p>
    </div>
    <div class="d-flex justify-content-center align-items-center flex-column">
      <fa
        fa
        class="mb-2"
        icon="search"
        :class="{ 'active-route': currentRoute === 'search' }"
      />
      <p class="m-0" :class="{ 'active-route': currentRoute === 'search' }">
        جستوجو
      </p>
    </div>
    <div class="d-flex justify-content-center align-items-center flex-column">
      <fa
        fa
        class="mb-2"
        icon="users"
        :class="{ 'active-route': currentRoute === 'editorial' }"
      />
      <p class="m-0" :class="{ 'active-route': currentRoute === 'editorial' }">
        هیات تحریریه
      </p>
    </div>
    <div class="d-flex justify-content-center align-items-center flex-column">
      <fa
        fa
        class="mb-2"
        icon="archive"
        :class="{ 'active-route': currentRoute === 'archive' }"
      />
      <p class="m-0" :class="{ 'active-route': currentRoute === 'archive' }">
        آرشیو
      </p>
    </div>
    <router-link class="no-link" :to="isAuthenticated ? '/profile' : '/login'">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <fa
          fa
          class="mb-2"
          icon="user"
          :class="{ 'active-route': currentRoute === 'profile' }"
        />
        <p class="m-0" :class="{ 'active-route': currentRoute === 'profile' }">
          پروفایل
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
[fa] {
  font-size: 17px;
}
.bottom-tab {
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  box-shadow: 0px -2px 19px -10px #000000;
  &:hover {
    cursor: pointer;
  }
  color: $lightDark;
  font-size: 12px;
  height: $navbarHeight;
  width: 100%;
}
.active-route {
  color: $brown;
}
.no-link {
  color: $lightDark;
  text-decoration: none;
  &:active {
    color: $lightDark;
  }
}
</style>
