<template>
  <div class="home-contaner">
    <img class="h-jumbotron" :class="$mq" src="/img/temp.jpg" />
    <slider :data="sectionData" />
  </div>
</template>
<script>
import Slider from "@/components/homeSections";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      //this is dummy data
      //fetched data goes right here in sectionData
      sectionData: [
        {
          name: "مناطق محیط زیست",
          route: "/eco-regions",
          gradient: {
            start: "#f1e7d7",
            end: "#e1c5a5",
          },
          icon: "/img/1-manategh.png",
          iconBorderColor: "#ba7833",
          slides: [
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
          ],
        },
        {
          name: "قوانین و مقررات",
          route: "/rules",
          gradient: {
            start: "#fdf5c6",
            end: "#fde073",
          },
          icon: "/img/2-ghavanin.png",
          iconBorderColor: "#fec500",
          slides: [
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
          ],
        },
        {
          name: "حیات وحش",
          route: "/wild-life",
          gradient: {
            start: "#e6bf9a",
            end: "#a76d58",
          },
          icon: "/img/4-hayatvahsh.png",
          iconBorderColor: "#773910",
          slides: [
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
          ],
        },
        {
          name: "دانش محیط زیستی",
          route: "/eco-info",
          gradient: {
            start: "#eff9d4",
            end: "#a7d370",
          },
          icon: "/img/5-danestaniha.png",
          iconBorderColor: "#69a33d",
          slides: [
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
          ],
        },
        {
          name: "آلاینده محیط زیست",
          route: "/eco-pollutant",
          gradient: {
            start: "#d5dede",
            end: "#a0a6ab",
          },
          icon: "/img/7-alayande.png",
          iconBorderColor: "#606b72",
          slides: [
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
            { img: "/img/temp.jpg", description: "منطقه بمو" },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.h-jumbotron {
  width: 100%;
  height: 500px;
  object-fit: cover;
  background-position: center center;
  &.sm,
  &.md {
    height: 300px;
  }
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
    width: 95%;
    max-width: 1000px;
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
  }
  .head-holder {
    height: 45px;
    width: 95%;
    max-width: 1000px;
    background: linear-gradient(
      90deg,
      rgba(241, 231, 215, 1) 0%,
      rgba(225, 197, 165, 1) 100%
    );
    border-radius: 50px 50px 50px 0px;
    .image-holder {
      border-radius: 50%;
      border-width: 5px;
      padding: 5px;
      border: 5px #d7ab78 solid;
      background: #f1f1f1;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
