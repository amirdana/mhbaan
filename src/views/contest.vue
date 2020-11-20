<template>
  <div class="contest-holder">
    <div class="questions-holder">
      <form @submit.prevent="submit">
        <div>
          <h5 class="color-brown text-right pb-5 pt-5">سوالات مسابقه</h5>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="`width: ${currentQ * 10}%`"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="p-3">
          <div class="text-right mt-4 font-weight-bold">
            کدام حیوان در منطقه بمو بیشتر دیده میشود؟
          </div>
          <div class="mt-4">
            <div class="d-flex justify-content-end align-items-center">
              <p class="m-0 mr-2">آهو</p>
              <input name="amir" type="radio" value="1" />
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <p class="m-0 mr-2">آهو</p>
              <input name="amir" type="radio" value="2" />
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <p class="m-0 mr-2">آهو</p>
              <input name="amir" type="radio" value="2" />
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <p class="m-0 mr-2">آهو</p>
              <input name="amir" type="radio" value="2" />
            </div>
          </div>
        </div>
        <button @click="currentQ++" class="btn btn-success">ثبت</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //question goes here
      question: [],
      currentQ: 1,
    };
  },
  methods: {
    submit() {
      //do something
    },
  },
};
</script>
<style lang="scss" scoped>
.contest-holder {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .questions-holder {
    padding: 20px;
    width: 100%;
    max-width: 500px;
    border-radius: 5px;
    .color-brown {
      color: $brown;
      font-weight: 600;
    }
  }
}
.progress {
  transform: rotate(180deg);
  height: 10px;
}
</style>
