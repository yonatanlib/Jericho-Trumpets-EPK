<template>
  <div class="carousel-wrapper">
    <p class="media-title">Photos</p>
    <div class="photo-carousel-div">
      <v-carousel
        class="carousel"
        hide-delimiters
        interval="4000"
        :show-arrows-on-hover="isMobile"
      >
        <v-carousel-item
          eager
          class="carousel"
          v-for="photoUrl in photosList"
          :key="photoUrl"
        >
          <v-img
            eager
            class="img"
            :src="photoUrl"
            @load="handleLoaded"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "photoCarousel",
  methods: {
    handleLoaded() {
      this.$emit("loaded");
    },
  },
  computed: {
    ...mapGetters(["getPictures"]),
    isMobile() {
      return window.innerWidth > 600;
    },
    photosList() {
      return this.getPictures;
    },
  },
};
</script>

<style>
.photo-carousel-div {
  padding: 1.01rem;
  border: 1px solid white;
}
.img {
  width: 100%;
}
.carousel {
  min-height: 10rem;
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
  overflow: hidden;
}
.v-window__prev,
.v-window__next {
  background: none !important;
}
.v-image {
  height: auto !important;
}
.carousel-wrapper {
  text-align: center;
}
.photos-title {
  font-family: "helvetica";
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px !important;
}
</style>
