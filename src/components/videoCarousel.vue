<template>
  <div class="video-div">
    <p class="media-title">Videos</p>
    <!-- <video class="video" controls>
      <source src="@/assets/carousel-videos/test.mp4" type="video/mp4" />
    </video> -->
    <iframe
      class="video"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/iZ5mrW9U7n0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "videoCarousel",
};
</script>

<style scoped>
.video-div {
  height: fit-content;
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
</style>
