<template>
  <div class="top-tab bg-white">
    <div class="w-100 px-4 d-flex justify-content-between align-items-center ">
      <div class="d-flex justify-content-between align-items-center ">
        <div
          class="icon-cnt"
          :class="{ 'is-active': $route.name === 'profile' }"
        >
          <router-link
            class="no-link"
            :to="isAuthenticated ? '/profile' : '/login'"
          >
            <fa icon="user" />
          </router-link>
        </div>
        <div
          class="icon-cnt"
          :class="{ 'is-active': $route.name === 'archive' }"
        >
          <router-link
            class="no-link"
            :to="isAuthenticated ? '/archive' : '/login'"
          >
            <fa icon="archive" />
          </router-link>
        </div>
        <div class="icon-cnt" :class="{ 'is-active': $route.name === 'users' }">
          <router-link
            class="no-link"
            :to="isAuthenticated ? '/users' : '/login'"
          >
            <fa icon="users" />
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center ">
        <div class="search-bar">
          <input class="custom-input" type="text" />
          <fa class="search-icon" icon="search" />
        </div>
        <img width="80" src="/img/main-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
.top-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: $navbarHeight;
  width: 100%;
  .icon-cnt {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}
.search-bar {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .custom-input {
    border-radius: 20px;
    border-width: 0;
    background: rgb(243, 203, 124);
    background: linear-gradient(
      90deg,
      rgba(243, 203, 124, 1) 0%,
      rgba(233, 181, 98, 1) 100%
    );
    height: 35px;
    outline: none;
    padding: 15px;
    margin-right: 55px;
  }
  .search-icon {
    position: relative;
    right: 85px;
  }
}
.is-active {
  background: #f3cb7c;
}
.no-link {
  color: $lightDark;
}
</style>
