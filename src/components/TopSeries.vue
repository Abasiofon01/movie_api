<template>
  <section class="tv-series">
    <div class="container">
      <section-title
        subtitle="Best TV Serie"
        title="World Best TV Series"
        :buttons="['Movies', 'TV Shows', 'Anime']"
        alignment="center"
      />
      <div class="movies-and-btn">
        <div class="movies-list">
          <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
        <div class="load-more-btn-wrapper">
          <button
            @click="loadMoreMovies"
            class="load-more-btn"
            :disabled="isLoading"
          >
            {{ isLoading ? "Loading..." : "See More" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { useFetchMedia } from "../stores/MoviesStore";
import PosterImage from "./PosterImage.vue";
import MovieCard from "./MovieCard.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  components: {
    PosterImage,
    MovieCard,
    SectionTitle,
  },

  setup() {
    const store = useFetchMedia();
    const movies = ref([]);
    const isLoading = ref(false);

    onMounted(async () => {
      await store.fetchPopularSeries();
      movies.value = store.getPopularSeries;
    });
    const loadMoreMovies = async () => {
      isLoading.value = true;
      store.incrementPage();
      await store.fetchPopularSeries();
      movies.value = store.getPopularSeries;
      isLoading.value = false;
    };
    return { movies, loadMoreMovies, PosterImage, isLoading };
  },
};
</script>
