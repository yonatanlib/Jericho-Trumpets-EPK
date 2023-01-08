<template>
  <div class="video-div">
    <p class="media-title">Videos</p>
    <v-carousel
      class="carousel"
      hide-delimiters
      interval="4000"
      :show-arrows-on-hover="!isMobile"
    >
      <v-carousel-item eager v-for="link of links" :key="link" class="carousel-item">
        <iframe
          width="100%"
          height="100%"
          :src="link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "videoCarousel",
  data() {
    return {
      links: [
        "https://www.youtube.com/embed/iZ5mrW9U7n0",
        "https://www.youtube.com/embed/vwod3BNTK-Y",
        "https://www.youtube.com/embed/UaNG8bR5byg"
      ],
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600;
    },
  },
};
</script>

<style>
.video-div {
  height: 100% !important;
  text-align: center;
}
.video {
  border: 1px solid white;
  height: 100%;
  width: 100%;
}
.video-title {
  font-family: "helvetica";
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px !important;
}
.carousel {
  min-height: 10rem;
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
  overflow: hidden;
}
.carousel-item {
  height: 100% !important; 
}
.v-window__prev,
.v-window__next {
  background: none !important;
}
.carousel-item .v-responsive {
  height: 100% !important;
}
</style>
