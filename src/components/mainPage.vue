<template>
  <div class="page">
    <div class="main-title-div">
      <main-title />
    </div>
    <div class="icons">
      <v-tooltip v-for="icon of icons" :key="icon.name" bottom>
        <template v-slot:activator="{ on, attrs }">
          <a :href="icon.link">
            <v-icon v-bind="attrs" v-on="on" color="white">{{
              icon.name
            }}</v-icon>
          </a>
        </template>
        <span>{{ icon.tooltip }}</span>
      </v-tooltip>
    </div>
    <div class="media-div">
      <photo-carousel class="media-item photo-carousel" @loaded="handleLoaded"/>
      <video-carousel class="media-item" />
    </div>
    <bio />
    <media-player-desktop v-if="!isMobile" class="media-player" />
    <media-player-phone v-else />
  </div>
</template>

<script>
import mainTitle from "./mainTitle.vue";
import MediaPlayerDesktop from "./mediaPlayer/mediaPlayerDesktop.vue";
import MediaPlayerPhone from "./mediaPlayer/mediaPlayerPhone.vue";
import PhotoCarousel from "./photoCarousel.vue";
import VideoCarousel from "./videoCarousel.vue";
import Bio from "./Bio.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    mainTitle,
    PhotoCarousel,
    VideoCarousel,
    MediaPlayerDesktop,
    MediaPlayerPhone,
    Bio,
  },
  name: "mainPage",
  data() {
    return {
      firstLoad: true,
      icons: [
        {
          name: "mdi-instagram",
          link: "https://www.instagram.com/jerichotrumpets/",
          tooltip: "Instagram",
        },
        {
          name: "mdi-facebook",
          link: "https://www.facebook.com/JerichoTrumpets",
          tooltip: "Facebook",
        },
        {
          name: "mdi-youtube",
          link: "https://www.youtube.com/@jerichotrumpets846",
          tooltip: "Youtube",
        },
        {
          name: "mdi-spotify",
          link: "https://open.spotify.com/artist/0YtZ6bwiUFoW5QUwtqo11Z",
          tooltip: "Spotify",
        },
        {
          name: "mdi-apple",
          link: "https://music.apple.com/us/artist/jericho-trumpets/1559074152",
          tooltip: "Apple Music",
        },
      ],
    };
  },
  methods: {
    getHeight() {
      if(this.isMobile) return;
      const photoCarouselElement = document.querySelector(
        ".photo-carousel-div"
      );
      const height = photoCarouselElement.offsetHeight;
      document.querySelector(".video-div .carousel").style.cssText = `height:${height}px !important;`;
    },
    handleLoaded() {
        if(this.firstLoad) {
          this.getHeight()
          this.firstLoad = false;
        }
    }
  },
  computed: {
    ...mapGetters(["getAppLoader"]),
    isMobile() {
      return window.innerWidth < 600;
    },
    appLoader() {
      return this.getAppLoader;
    },
  },
  created() {
    addEventListener("resize", () => {
      this.getHeight();
    });
  },
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
.main-title-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icons {
  display: flex;
  gap: 0.5rem;
}
@media only screen and (min-width: 600px) {
  .media-div {
    display: flex;
    width: 80%;
    height: fit-content;
    justify-content: space-between;
    margin-block-end: 1rem;
  }
  .media-item {
    width: 45%;
  }
}
.media-title {
  font-family: "helvetica";
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px !important;
}

.photo-carousel {
  height: fit-content;
}
a {
  color: inherit !important;
}
</style>
<style>
@media only screen and (max-width: 600px) {
  body {
    padding-inline: 1rem !important;
    background-color: black;
    height: 100vh !important;
  }
  .page {
    min-height: 100vh !important;
  }
  .main-title {
    font-size: 2rem;
    line-height: 3rem;
  }
  .media-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
    width: 100%;
    flex-grow: 1;
    margin-block-end: 4rem;
  }
  .icons {
    margin-block-end: 1rem;
  }
}
</style>
