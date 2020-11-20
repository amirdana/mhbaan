<template>
  <div>
    <div v-for="(item, index) in data" :key="index" class="home-contaner">
      <div class="section-holder">
        <div
          :style="{
            'background-image': `linear-gradient(90deg, ${item.gradient.start} 0%, ${item.gradient.end} 100%)`,
          }"
          class="head-holder d-flex justify-content-end align-items-center mt-5"
        >
          <h6 class="mr-2 mb-0">{{ item.name }}</h6>
          <div
            class="image-holder"
            :style="{
              border: `${item.iconBorderColor} 5px solid`,
            }"
          >
            <img :src="item.icon" />
          </div>
        </div>
        <swiper
          ref="mySwiper"
          class="screenshot-slider"
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="item in item.slides"
            :key="item.description"
            class="avoidInlineStyle"
          >
            <img class="slide-img" src="/img/temp.jpg" />
            <p class="text-right mt-1 mr-2">{{ item.description }}</p>
          </swiper-slide>
        </swiper>
        <div class="btn-holder">
          <router-link :to="item.route">
            <button
              :style="{
                'background-color': `${item.iconBorderColor}`,
              }"
            >
              مشاهده همه
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="home-contaner">
      <div class="section-holder">
        <div
          :style="{
            'background-image': `linear-gradient(90deg, #fbdcb9 0%, #fd9f3f 100%)`,
          }"
          class="head-holder d-flex justify-content-end align-items-center mt-5"
        >
          <h6 class="mr-2 mb-0">عکاسی در طبیعت</h6>
          <div
            class="image-holder"
            :style="{
              border: `#ff7400 5px solid`,
            }"
          >
            <img src="/img/3-akasi.png" />
          </div>
        </div>
        <swiper
          ref="mySwiper"
          class="screenshot-slider"
          :options="swiperOptions"
        >
          <swiper-slide class="avoidInlineStyle d-flex flex-column">
            <img class="slide-img-cs" src="/img/24-akasi.png" />
            <button style="background-color:#ff7400" class="cs-button m-auto">
              ارسال عکس
            </button>
          </swiper-slide>
          <swiper-slide
            v-for="item in customItmes"
            :key="item.description"
            class="avoidInlineStyle"
          >
            <img class="slide-img" src="/img/temp.jpg" />
            <p class="text-right mt-1 mr-2">تست</p>
          </swiper-slide>
        </swiper>
        <div class="btn-holder">
          <router-link to="upload-photo">
            <button
              class="mt-4"
              :style="{
                'background-color': '#ff7400',
              }"
            >
              مشاهده همه
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="home-contaner">
      <div class="section-holder">
        <div
          :style="{
            'background-image': `linear-gradient(90deg, #c0e8fc 0%, #5ab8cd 100%)`,
          }"
          class="head-holder d-flex justify-content-end align-items-center mt-5"
        >
          <h6 class="mr-2 mb-0">خاطره‌ها و تجربه‌ها</h6>
          <div
            class="image-holder"
            :style="{
              border: `#0f89a5 5px solid`,
            }"
          >
            <img src="/img/6-khaterat.png" />
          </div>
        </div>
        <swiper
          ref="mySwiper"
          class="screenshot-slider"
          :options="swiperOptions"
        >
          <swiper-slide class="avoidInlineStyle d-flex flex-column">
            <img class="slide-img-cs mb-2" src="/img/25-khatere.png" />
            <button style="background-color:#0f89a5" class="cs-button m-auto">
              ارسال خاطره
            </button>
          </swiper-slide>
          <swiper-slide
            v-for="item in customItmes"
            :key="item.description"
            class="avoidInlineStyle"
          >
            <img class="slide-img" src="/img/temp.jpg" />
            <p class="text-right mt-1 mr-2">تست</p>
          </swiper-slide>
        </swiper>
        <div class="btn-holder">
          <router-link to="upload-diary">
            <button
              class="mt-4"
              :style="{
                'background-color': '#0f89a5',
              }"
            >
              مشاهده همه
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="home-contaner">
      <div class="section-holder">
        <div
          :style="{
            'background-image': `linear-gradient(90deg, #ffd8d7 0%, #dd806b 100%)`,
          }"
          class="head-holder d-flex justify-content-end align-items-center mt-5"
        >
          <h6 class="mr-2 mb-0">مسابقه با جایزه</h6>
          <div
            class="image-holder"
            :style="{
              border: `#bf4040 5px solid`,
            }"
          >
            <img src="/img/6-khaterat.png" />
          </div>
        </div>
        <div
          :class="{ 'flex-column': $mq === 'sm' }"
          class="screenshot-slider d-flex justify-content-between align-items-center"
        >
          <div
            class="avoidInlineStyle mt-2 d-flex justify-content-center align-items-center flex-column"
          >
            <img class="slide-img-cs mb-2" src="/img/26-mosabeghe.png" />
            <button style="background-color:#bf4040" class="cs-button m-auto">
              پاسخ به سوالات
            </button>
          </div>
          <div class="winners col-8 mt-2 p-4">
            <h6 class="text-right">اسامی نفرات برتر</h6>
            <p class="text-right mr-4">امیر</p>
          </div>
        </div>
        <div class="btn-holder">
          <router-link to="contest">
            <button
              class="mt-4"
              :style="{
                'background-color': '#bf4040',
              }"
            >
              مشاهده همه
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    data: {
      type: Object,
      reqired: true,
    },
  },
  data() {
    return {
      customItmes: [],
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,
        freeModeMomentum: true,
        resistance: false,
        freeMode: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper;
    },
  },
  mounted() {
    console.log(this.$props);
    setTimeout(() => {
      this.mySwiper.slideNext();
    }, 3000);
    // this.swiperOptions.slidesPerView = this.swiperLength;
  },
};
</script>
<style lang="scss" scoped>
.h-jumbotron {
  width: 100%;
  height: 300px;
  object-fit: cover;
  background-position: center center;
}
.avoidInlineStyle,
.avoidInlineStyleFullsc {
  width: auto !important;
}
.section-holder {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .screenshot-slider {
    margin-right: 20px;
    padding-top: 30px;
    display: flex;
    width: 90%;
    max-width: 900px;
    margin: auto;
    p {
      font-size: 15px;
      font-weight: 600;
    }
    .slide-img {
      width: 250px;
      height: 200px;
      border-radius: 10px;
      box-shadow: 0px 0px 3px 0px #000000;
    }
    .slide-img-cs {
      width: 250px;
      height: 200px;
      object-fit: contain;
      border-radius: 10px;
    }
    .cs-button {
      width: 100px;
      min-height: 40px;
      border-radius: 15px;
      color: white;
      border-width: 0;
      box-shadow: 0px 0px 3px 0px #4d4d4d63;
    }
  }
  .head-holder {
    height: 45px;
    width: 95%;
    max-width: 1000px;
    border-radius: 50px 50px 50px 0px;
    .image-holder {
      border-radius: 50%;
      border-width: 5px;
      padding: 5px;
      background: #f1f1f1;
      img {
        object-fit: contain;

        width: 25px;
        height: 25px;
      }
    }
  }
}
.btn-holder {
  width: 95%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-start;
  button {
    border-radius: 15px;
    border-width: 0;
    padding: 8px 16px;
    color: white;
  }
}
.winners {
  width: 500px;
  height: 300px;
  background: #e8f1db;
  border-radius: 15px;
  p {
    color: #333;
  }
  h6 {
    color: #29abe2;
  }
}
</style>
