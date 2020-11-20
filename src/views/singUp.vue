<template>
  <div>
    <div v-if="$mq === 'sm' || 'md'" class="login-container">
      <div class="cmp-container" :class="$mq">
        <h5 class="sing-up">ثبت نام</h5>
        <form
          class="text-right mt-3 text-black-50 w-100"
          @submit.prevent="submit"
        >
          <div class="form-group">
            <label for="formGroupExampleInput">نام</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">نام خانوادگی</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3">شماره همراه</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput3"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput4">آدرس</label>
            <input
              type="text"
              class="form-control larg-input"
              id="formGroupExampleInput4"
            />
          </div>
          <div
            class="d-flex justify-content-between align-items-center flex-row-reverse"
          >
            <p class="text-dark m-0">آیا محیط‌ بان هستید؟</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                value="yes"
                name="same"
              />
              <label class="form-check-label" for="inlineCheckbox1">بله</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                value="no"
                name="same"
              />
              <label class="form-check-label" for="inlineCheckbox2">خیر</label>
            </div>
          </div>
          <div class="my-4">
            <p class="text-dark m-0 mb-2">
              استان محل خدمت خود (به عنوان محیط بان) را انتخاب نمایید
            </p>
            <select class="custom-select">
              <option selected>انتخاب</option>
              <option v-for="item in ostan" :key="item.id" :value="item.name">{{
                item.name
              }}</option>
            </select>
          </div>
          <div
            class="d-flex justify-content-between align-items-center flex-row-reverse"
          >
            <p class="text-dark m-0">قوانین فصل نامه را تایید میکنم</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="yes"
              />
              <label class="form-check-label" for="inlineCheckbox1">بله</label>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-success btn-sm mr-auto">
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-else class="login-container ">
      <div class="cmp-container" :class="$mq">
        <h5 class="sing-up">ثبت نام</h5>
        <form
          class="text-right mt-3 text-black-50 w-100"
          @submit.prevent="submit"
        >
          <div class="form-group">
            <label for="formGroupExampleInput">نام</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">نام خانوادگی</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3">شماره همراه</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput3"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput4">آدرس</label>
            <input
              type="text"
              class="form-control larg-input"
              id="formGroupExampleInput4"
            />
          </div>
          <div
            class="d-flex justify-content-between align-items-center flex-row-reverse"
          >
            <p class="text-dark m-0">آیا محیط‌ بان هستید؟</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                value="yes"
                name="same"
              />
              <label class="form-check-label" for="inlineCheckbox1">بله</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                value="no"
                name="same"
              />
              <label class="form-check-label" for="inlineCheckbox2">خیر</label>
            </div>
          </div>
          <div class="my-4">
            <p class="text-dark m-0 mb-2">
              استان محل خدمت خود (به عنوان محیط بان) را انتخاب نمایید
            </p>
            <select class="custom-select">
              <option selected>انتخاب</option>
              <option v-for="item in ostan" :key="item.id" :value="item.name">{{
                item.name
              }}</option>
            </select>
          </div>
          <div
            class="d-flex justify-content-between align-items-center flex-row-reverse"
          >
            <p class="text-dark m-0">قوانین فصل نامه را تایید میکنم</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="yes"
              />
              <label class="form-check-label" for="inlineCheckbox1">بله</label>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-success btn-sm mr-auto">
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ostan from "../mixins/ostan";

export default {
  mixins: [ostan],
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      console.log(ostan);
    }, 2000);
  },
  methods: {
    submit() {},
  },
};
</script>
<style lang="scss" scoped>
.btn {
  margin-top: 20px;
  width: 90px;
  height: 30px;
  font-size: 15px;
}
.sing-up {
  color: $brown;
}
.login-container {
  padding: 0 10px;
  .cmp-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    margin: auto;
    &.lg,
    &.xl,
    &.xx,
    &.infinity {
      background: #fcfcfc;
      padding: 50px;
      border-radius: 10px;
      box-shadow: 0px 0px 32px -15px #000000;
    }
    &.sm,
    &.md {
      width: 250px;
    }
  }
  .larg-input {
    height: 100px;
  }
  .text-dark {
    color: rgb(70, 70, 70);
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
