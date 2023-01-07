<template>
  <div>
    <div class="controls">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaControls",
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
  methods: {
    getSongList() {
      const songsFolder = require.context("../../assets/Songs");
      this.songArray = songsFolder.keys().map((songDir) => {
        let songName = songDir.split("/")[1];
        songName = songName.replace(".mp3", '');
        const AudioFilePath = require("../../assets/Songs/" +
          songName +
          ".mp3");
        return {
          name: songName,
          audioFile: new Audio(AudioFilePath),
        };
      });
      this.setCurrentSong(this.songArray[0], 0);
    },
    playSong() {
      console.log(this.currentSong);
      this.currentSong.audioFile.play();
      this.songStartTime = new Date();
      this.playing = true;
    },
    checkRunTimeUnder5Secs() {
      return new Date().getTime() - this.songStartTime.getTime() < 3000;
    },
    setCurrentSong(song, index) {
      this.currentSong.name = song.name;
      this.currentSong.audioFile = song.audioFile;
      this.currentSong.index = index;
      this.$emit("setSong", this.currentSong.name);
    },
    restartSong() {
      this.currentSong.audioFile.currentTime = 0;
      this.playSong();
    },
    pause() {
      this.currentSong.audioFile.pause();
      this.playing = false;
    },
    next() {
      if (this.playing) this.pause();
      const nextSongIndex = this.currentSong.index + 1;
      if (nextSongIndex > this.songArray.length - 1) return;

      this.setCurrentSong(this.songArray[nextSongIndex], nextSongIndex);
      this.restartSong();
    },
    prev() {
      if (this.playing) this.pause();
      if (this.playing && !this.checkRunTimeUnder5Secs()) {
        this.restartSong();
        return;
      }
      const prevSongIndex = this.currentSong.index - 1;
      if (prevSongIndex < 0) {
        this.restartSong();
        return;
      }
      this.setCurrentSong(this.songArray[prevSongIndex], prevSongIndex);
      this.restartSong();
    },
  },

  created() {
    this.getSongList();
  },
};
</script>

<style>
.controls {
  display: flex;
  gap: 1rem;
}
@media only screen and (min-width: 600px) {
  .controls {
    width: 10rem;
    margin-inline-end: 1rem;
  }
}
</style>
