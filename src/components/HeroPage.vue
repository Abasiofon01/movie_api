<template>
  <section class="hero">
    <div class="video-wrapper">
      <video
        muted
        autoplay
        loop
        id="myVideo"
        @canplay="updatePaused"
        @playing="updatePaused"
        @pause="updatePaused"
        ref="video_player"
      >
        <source src="../assets/the-equaliser.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
      <!-- <div class="hero-content">
        <div class="title-and-btn-wrapper">
          <span class="h1 hero-title">
            Unlimited <strong>Movies</strong>, TVs Shows, & More.
          </span>

          <div class="meta-wrapper">
            <div class="badge-wrapper">
              <div class="badge badge-fill">PG 18</div>
              <div class="badge badge-outline">HD</div>
            </div>

            <div class="genre-wrapper">
              <a href="#">Romance,</a>
              <a href="#">Drama</a>
            </div>

            <div class="date-time">
              <div>
                <i class="las la-calendar"></i>
                <time datetime="2022">2022</time>
              </div>
              <div>
                <i class="las la-clock"></i>
                <time datetime="PT128M">128 min</time>
              </div>
            </div>
          </div>

          <button class="btn btn-primary">
            <i class="las la-play"></i>
            <span>Watch now</span>
          </button>
        </div>
      </div> -->

      <div class="video-controls-wrapper">
        <!-- Play/Pause Buttons -->
        <button class="control-btn" v-show="paused" @click="play">
          <i class="las la-play"></i>
        </button>
        <button class="control-btn" v-show="playing" @click="pause">
          <i class="las la-pause"></i>
        </button>

        <!-- Mute/Unmute Buttons -->
        <button class="control-btn" v-show="!muted" @click="mute">
          <i class="las la-volume-up"></i>
        </button>
        <button class="control-btn" v-show="muted" @click="unmute">
          <i class="las la-volume-mute"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroPage",
  data() {
    return {
      videoElement: null,
      paused: false,
      muted: true, // Default video starts muted
    };
  },
  methods: {
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    play() {
      this.$refs.video_player.play();
    },
    pause() {
      this.$refs.video_player.pause();
    },
    mute() {
      this.$refs.video_player.muted = true;
      this.muted = true;
    },
    unmute() {
      this.$refs.video_player.muted = false;
      this.muted = false;
    },
  },
  computed: {
    playing() {
      return !this.paused;
    },
  },
};
</script>
