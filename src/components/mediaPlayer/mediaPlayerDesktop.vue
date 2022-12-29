<template>
  <div class="media-player-desktop-div">
    <div class="media-player-desktop-content">
      <img class="album-cover-img" src="@/assets/images/cover.jpg" alt="" />
      <div class="song-details">
        <p class="band-title">Jericho Trumpets</p>
        <span class="dash">-</span>
        <p class="song-title">{{ currentSongName }}</p>
      </div>
      <media-controls @setSong="handleSetSong" />
    </div>
  </div>
</template>

<script>
import MediaControls from "./mediaControls.vue";
export default {
  name: "mediaPlayerDesktop",
  components: { MediaControls },
  data() {
    return {
      currentSongName: '',
    };
  },
  methods: {
    handleSetSong(songName) {
      this.currentSongName = songName;
    }
  }
};
</script>

<style scoped>
.media-player-desktop-div {
  height: 7rem;
  width: 55%;
  background-color: lightgray;
  border: 3px solid grey;
  border-top-right-radius: 20px;
}
.song-details {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.song-details p {
  margin-bottom: 0 !important;
  color: black !important;
  font-family: "helvetica";
}
.media-player-desktop-content {
  /* width: 90%; */
  height: 7rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.album-cover-img {
  margin-inline-end: 1.5rem;
  height: 100%;
  width: 7rem;
}
.band-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.dash {
  font-size: 2rem;
}
.song-title {
  font-size: 1.2rem;
}
</style>
