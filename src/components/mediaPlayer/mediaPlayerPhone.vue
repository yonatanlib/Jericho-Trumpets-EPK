<template>
  <div class="media-player-mobile-div">
    <img
      class="album-cover-img-moblie"
      src="@/assets/images/cover.jpg"
      alt=""
    />
    <div class="song-details">
      <p class="song-title">{{currentSongName}}</p>
      <media-controls @setSong="handleSetSong"/>
    </div>
  </div>
</template>

<script>
import MediaControls from "./mediaControls.vue";
export default {
  name: "mediaPlayerPhone",
  components: { MediaControls },
  data() {
    return {
      currentSongName: '',
    }
  },
  methods: {
    handleSetSong(songName) {
      this.currentSongName = songName;
    }
  }
};
</script>

<style scoped>
.media-player-mobile-div {
  position: sticky;
  display: flex;
  bottom: 0;
  z-index: 1;
  height: 6rem;
  width: 108%;
  background-color: lightgray;
  border: 3px solid grey;
  /* border-top-right-radius: 20px; */
}
.album-cover-img-moblie {
  margin-inline-end: 1.5rem;
  height: 100%;
  width: 6rem;
  
}
.song-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
}
.song-title {
  margin-bottom: 0 !important;
  color: black !important;
  font-family: "helvetica";
  font-weight: bold;
}
</style>
