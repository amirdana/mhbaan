<template>
  <div>
    <div v-if="$mq === 'sm' || $mq === 'md'" class="login-container">
      <div class="cmp-container">
        <div class="image-holder">
          <img class="pl-5" width="200" src="/img/22-mohitban.png" />
          <img class="mt-2" width="150" src="/img/main-logo.png" />
        </div>
        <button
          @click="register"
          class="btn btn-outline-success bg-success text-white"
        >
          عضویت
        </button>
        <button @click="login" class="btn btn-outline-success">
          ورود
        </button>
        <button class="btn btn-outline-success">
          ورود به عنوان مهمان
        </button>
        <div class="t1 d-flex justify-content-between">
          <router-link class="no-link" to="/">
            درباره‌ما
          </router-link>
          <router-link class="no-link" to="/">
            راهنما
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="login-container">
      <div class="cmp-container flex-row justify-content-around">
        <div class="d-flex justify-content-between flex-column">
          <div class="image-holder">
            <img class="pl-5" width="200" src="/img/22-mohitban.png" />
            <img class="mt-2" width="150" src="/img/main-logo.png" />
          </div>
          <div class="d-flex justify-content-between mt-4">
            <img width="100" src="/img/temp.jpg" />
            <img width="100" src="/img/temp.jpg" />
          </div>
        </div>
        <div class="d-flex flex-column">
          <img width="140" class="m-auto" src="/img/main-logo.png" />
          <button
            @click="register"
            class="btn btn-outline-success bg-success text-white mt-5"
          >
            عضویت
          </button>
          <button @click="login" class="btn btn-outline-success mt-4">
            ورود
          </button>
          <button class="btn btn-outline-success mt-4">
            ورود به عنوان مهمان
          </button>
          <div class="t1 d-flex justify-content-between">
            <router-link class="no-link" to="/">
              درباره‌ما
            </router-link>
            <router-link class="no-link" to="/">
              راهنما
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$store.commit("login");
    },
    register() {
      this.$router.push({ name: "sign-up" });
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  width: 300px;
  height: 50px;
  font-size: 18px;
  margin-top: 15px;
  border-radius: 8px;
}
.login-container {
  padding: 0 10px;
  .cmp-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .image-holder {
      width: 300px;
      height: 400px;
      background: #e9b562;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .t1 {
    padding: 15px;
    width: 300px;
  }
  .no-link {
    color: $lightDark;
  }
}
</style>
