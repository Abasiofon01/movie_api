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

      <!-- Booking Modal -->
      <BookingModal
        v-if="selectedMovie"
        :movie="selectedMovie"
        :showtimes="showtimes"
        @close="selectedMovie = null"
        @confirm="ticketDetails = $event"
      />
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import MovieCard from "./MovieCard.vue";
import SectionTitle from "./SectionTitle.vue";
import BookingModal from "./BookingModal.vue";
import { useFetchMedia } from "../stores/MoviesStore";

export default {
  components: {
    MovieCard,
    SectionTitle,
    BookingModal,
  },
  setup() {
    const store = useFetchMedia();
    const nowPlayingMovies = ref([]);
    const isLoading = ref(false);
    const selectedMovie = ref(null);
    const ticketDetails = ref(null);
    const showtimes = ref(["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"]);

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

    const openBookingModal = (movie) => {
      selectedMovie.value = movie;
    };

    return {
      nowPlayingMovies,
      loadMoreMovies,
      isLoading,
      selectedMovie,
      openBookingModal,
      ticketDetails,
      showtimes,
    };
  },
};
</script>
