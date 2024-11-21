<template>
  <div class="movie-details container" v-if="movieDetails">
    <div
      class="backdrop"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
      }"
    >
      <div class="overlay"></div>
      <div class="movie-header">
        <ImageRenderer
          :path="movieDetails.poster_path"
          quality="w500"
          alt="Poster"
          class="movie-poster"
        />
        <div class="movie-info">
          <h1>{{ movieDetails.title }}</h1>
          <p class="release-date">
            Release Date: {{ movieDetails.release_date }}
          </p>
          <p class="rating">Rating: {{ movieDetails.vote_average }}</p>
        </div>
      </div>
    </div>
    <div class="movie-overview">
      <h2>Overview</h2>
      <p>{{ movieDetails.overview }}</p>
    </div>
  </div>
  <div v-else><p>Loading...</p></div>
</template>
<script>
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import ImageRenderer from "../components/PosterImage.vue";
import { useFetchMedia } from "../stores/MoviesStore";
export default {
  components: { ImageRenderer },
  setup() {
    const fetchMediaStore = useFetchMedia();
    const route = useRoute();
    const movieId = route.params.id;
    onMounted(() => {
      fetchMediaStore.fetchMovieDetails(movieId);
    });
    watch(
      () => route.params.id,
      (newId) => {
        fetchMediaStore.fetchMovieDetails(newId);
      }
    );
    const movieDetails = computed(() => fetchMediaStore.movieDetails);
    return { movieDetails };
  },
};
</script>
