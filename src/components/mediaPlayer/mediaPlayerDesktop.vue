<template>
  <div class="media-player-div">
    <div class="media-player-content">
      <img class="album-cover-img" src="@/assets/images/cover.jpg" alt="" />
      <div class="song-details">
        <p class="band-title">Jericho Trumpets</p>
        <span class="dash">-</span>
        <p class="song-title">{{ currentSong.name }}</p>
      </div>
      <!-- <div class="controls">
        <v-btn @click="prev" icon>
          <v-icon x-large>mdi-rewind</v-icon>
        </v-btn>
        <v-btn v-if="!playing" @click="playSong" icon>
          <v-icon x-large>mdi-play</v-icon>
        </v-btn>
        <v-btn v-else @click="pause" icon>
          <v-icon x-large>mdi-pause</v-icon>
        </v-btn>
        <v-btn @click="next" icon>
          <v-icon x-large>mdi-fast-forward</v-icon>
        </v-btn>
      </div> -->
      <media-controls />
    </div>
  </div>
</template>

<script>
import MediaControls from "./mediaControls.vue";
export default {
  name: "mediaPlayer",
  props: { MediaControls },
  data() {
    return {
      currentSong: {
        name: undefined,
        audioFile: undefined,
        index: undefined,
      },
      playing: false,
      songArray: [],
      songStartTime: undefined,
    };
  },
  // methods: {
  //   getSongList() {
  //     const songsFolder = require.context("@/assets/Songs");
  //     this.songArray = songsFolder.keys().map((songDir) => {
  //       let songName = songDir.split("/")[1];
  //       songName = songName.split(".")[0];
  //       const AudioFilePath = require("../../assets/Songs/" + songName + ".mp3");
  //       return {
  //         name: songName,
  //         audioFile: new Audio(AudioFilePath),
  //       };
  //     });
  //     this.setCurrentSong(this.songArray[0], 0);
  //   },
  //   playSong() {
  //     this.currentSong.audioFile.play();
  //     this.songStartTime = new Date();
  //     this.playing = true;
  //   },
  //   checkRunTimeUnder5Secs() {
  //     return new Date().getTime() - this.songStartTime.getTime() < 3000;
  //   },
  //   setCurrentSong(song, index) {
  //     this.currentSong.name = song.name;
  //     this.currentSong.audioFile = song.audioFile;
  //     this.currentSong.index = index;
  //   },
  //   restartSong() {
  //     this.currentSong.audioFile.currentTime = 0;
  //     this.playSong();
  //   },
  //   pause() {
  //     this.currentSong.audioFile.pause();
  //     this.playing = false;
  //   },
  //   next() {
  //     if (this.playing) this.pause();
  //     const nextSongIndex = this.currentSong.index + 1;
  //     if (nextSongIndex > this.songArray.length - 1) return;

  //     this.setCurrentSong(this.songArray[nextSongIndex], nextSongIndex);
  //     this.restartSong();
  //   },
  //   prev() {
  //     if (this.playing) this.pause();
  //     if (this.playing && !this.checkRunTimeUnder5Secs()) {
  //       this.restartSong();
  //       return;
  //     }
  //     const prevSongIndex = this.currentSong.index - 1;
  //     if (prevSongIndex < 0) {
  //       this.restartSong();
  //       return;
  //     }
  //     this.setCurrentSong(this.songArray[prevSongIndex], prevSongIndex);
  //     this.restartSong();
  //   },
  // },

  // created() {
  //   this.getSongList();
  // },
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
  font-size: 1.2rem;
}
</style>
