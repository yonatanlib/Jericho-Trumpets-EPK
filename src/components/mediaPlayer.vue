<template>
  <div class="media-player-div">
    <div class="media-player-content">
      <img class="album-cover-img" src="@/assets/images/cover.jpg" alt="" />
      <div class="song-details">
        <p class="band-title">Jericho Trumpets</p>
        <span class="dash">-</span>
        <p class="song-title">The Fool</p>
      </div>
      <div class="controls">
        <v-btn icon>
          <v-icon x-large>mdi-rewind</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon x-large>mdi-pause</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon x-large>mdi-fast-forward</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaPlayer",
};
</script>

<style>
.media-player-div {
  height: 7rem;
  width: 55%;
  background-color: lightgray;
  border: 3px solid grey;
  /* border-top-left-radius: 20px; */
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
.media-player-content {
  /* width: 90%; */
  height: 7rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.album-cover-img {
  margin-inline-end: 1.5rem;
  height: 7rem;
  width: 7rem;
}
.band-title {
  font-size: 1.5rem;

  font-weight: bold;
  /* margin-inline-end: 1rem; */
}
.dash {
  font-size: 2rem;
  /* margin-inline-end: 1rem; */
}
.song-title {
  font-size: 1.25rem;
}
.controls {
  width: 10rem;
  margin-inline-end: 2rem;
  display: flex;
  gap: 1rem;
}
</style>
