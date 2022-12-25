<template>
  <div class="page">
    <div class="main-title-div">
      <main-title />
    </div>
    <div class="media-div">
      <photo-carousel
        class="media-item photo-carousel"
        :photosList="photosList"
      />
      <video-carousel class="media-item" />
    </div>
    <media-player class="media-player" />
    <!-- <bio /> -->
  </div>
</template>

<script>
import mainTitle from "./mainTitle.vue";
import MediaPlayer from "./mediaPlayer.vue";
// import Bio from "./Bio.vue";
import PhotoCarousel from "./photoCarousel.vue";
import VideoCarousel from "./videoCarousel.vue";
export default {
  components: { mainTitle, PhotoCarousel, VideoCarousel, MediaPlayer },
  name: "mainPage",
  data() {
    return {
      photosList: [],
    };
  },
  methods: {
    getPhotosNames() {
      const result = require.context("@/assets/carousel-photos");
      this.photosList = result.keys();
      this.photosList = this.photosList.map((element) => {
        return element.split("/")[1];
      });
    },
  },
  created() {
    this.getPhotosNames();
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.main-title-div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.media-div {
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-grow: 1;
}
.media-div * {
  border: 1px solid white;
}
.media-item {
  width: 45%;
}
.photo-carousel {
  height: fit-content;
}

</style>
