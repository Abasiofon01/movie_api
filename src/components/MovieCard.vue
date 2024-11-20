<template>
  <div class="movie-card">
    <div class="card-banner">
      <PosterImage :path="movie.poster_path" />
    </div>

    <div class="details-section">
      <div class="movie-title-wrapper">
        <span class="card-title">{{ movie.title }}</span>
        <time datetime="2022">
          {{ movie?.release_date?.replace(/^(.{7}).*/, "$1") }}
        </time>
      </div>

      <div class="card-meta">
        <div class="badge badge-outline">HD</div>
        <div class="duration">
          <i class="icon-clock"></i>
          <time datetime="PT137M">137 min</time>
        </div>
        <div class="rating">
          <i class="icon-star"></i>
          <data>{{ movie.vote_average }}</data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PosterImage from "./PosterImage.vue";

export default {
  components: {
    PosterImage,
  },
  props: {
    movie: Object,
  },
};
</script>
