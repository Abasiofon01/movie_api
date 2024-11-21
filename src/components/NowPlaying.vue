<template>
  <section class="now-playing">
    <div class="container">
      <SectionTitle subtitle="Now Playing" title="Movies" alignment="left" />

      <div class="movies-and-btn">
        <div class="movies-list">
          <MovieCard
            v-for="(movie, index) in nowPlayingMovies"
            :key="`index_${index}`"
            :movie="movie"
            :showBookingButton="true"
            :showtimes="showtimes"
            @book="openBookingModal"
          />
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
import MovieCard from "./MovieCard.vue";
import SectionTitle from "./SectionTitle.vue";
import { useFetchMedia } from "../stores/MoviesStore";

export default {
  components: {
    MovieCard,
    SectionTitle,
  },
  setup() {
    const store = useFetchMedia();
    const nowPlayingMovies = ref([]);
    const isLoading = ref(false);

    // Fetch movies on mount
    onMounted(async () => {
      await store.fetchNowPlayingMovies();
      nowPlayingMovies.value = store.getNowPlayingMovies;
    });

    // Load more movies
    const loadMoreMovies = async () => {
      isLoading.value = true;
      store.incrementPage();
      await store.fetchNowPlayingMovies();
      nowPlayingMovies.value = store.getNowPlayingMovies;
      isLoading.value = false;
    };

    return {
      nowPlayingMovies,
      loadMoreMovies,
      isLoading,
    };
  },
};
</script>
