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
          v-for="photoName in photosList"
          :key="photoName"
        >
          <v-img
            eager
            class="img"
            :src="require('@/assets/carousel-photos/' + photoName)"
            loading="eager"
            @load="handleLoaded"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "photoCarousel",
  props: {
    photosList: {
      required: true,
    },
  },
  methods: {
    handleLoaded() {
      console.log("loaded");
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth > 600;
    },
  },
};
</script>

<style>
.photo-carousel-div {
  padding: 1rem;
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
