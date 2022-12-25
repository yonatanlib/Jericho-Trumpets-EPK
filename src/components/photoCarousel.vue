<template>
  <div class="carousel-div">
    <v-carousel
      class="carousel"
      hide-delimiters
      interval="4000"
      show-arrows-on-hover
    >
      <v-carousel-item
        class="carousel"
        v-for="photoName in photosList"
        :key="photoName"
      >
        <v-img
          class="img"
          :src="require('@/assets/carousel-photos/' + photoName)"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
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
};
</script>

<style>
.carousel-div {
  padding: 1rem;
}
.img {
  width: 100%;
}
.carousel {
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
</style>
