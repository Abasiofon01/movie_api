<template>
  <section class="upcoming">
    <div class="container">
      <SectionTitle
        subtitle="Online Streaming"
        title="Upcoming Movies"
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
      await store.fetchUpcomingMovies();
      movies.value = store.getUpcomingMovies;
    });
    const loadMoreMovies = async () => {
      isLoading.value = true;
      store.incrementPage();
      await store.fetchUpcomingMovies();
      movies.value = store.getUpcomingMovies;
      isLoading.value = false;
    };
    return { movies, loadMoreMovies, PosterImage, isLoading };
  },
};
</script>
