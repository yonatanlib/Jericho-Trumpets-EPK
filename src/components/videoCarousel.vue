<template>
  <div class="video-div">
    <video class="video" controls>
      <source src="@/assets/carousel-videos/test.mp4" type="video/mp4" />
    </video>
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
}
.video {
  height: 100%;
  width: 100%;
}
</style>
