<template>
  <section class="search-results">
    <div class="container">
      <SectionTitle
        subtitle="Search Results"
        :title="`Results for '${searchQuery}'`"
        alignment="left"
      />

      <div class="movies-and-btn">
        <div class="movies-list">
          <MovieCard
            v-for="movie in searchResults"
            :key="movie.id"
            :movie="movie"
          />
        </div>
        <div class="load-more-btn-wrapper" v-if="searchResults.length">
          <button @click="loadMore" class="load-more-btn" :disabled="isLoading">
            {{ isLoading ? "Loading..." : "Load More" }}
          </button>
        </div>
        <div v-else class="empty-state-discription">
          <p>No results found.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useFetchMedia } from "../stores/MoviesStore";
import { computed, onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "../components/MovieCard.vue";
import SectionTitle from "../components/SectionTitle.vue";

export default {
  components: {
    MovieCard,
    SectionTitle,
  },
  setup() {
    const fetchMediaStore = useFetchMedia();
    const route = useRoute();
    const searchResults = computed(() => fetchMediaStore.searchResults);
    const searchQuery = ref(route.query.q || "");
    const isLoading = ref(false);

    const performSearch = async (query) => {
      isLoading.value = true;
      await fetchMediaStore.searchMovies(query);
      isLoading.value = false;
    };

    onMounted(() => {
      const query = route.query.q;
      if (query) {
        performSearch(query);
      }
    });

    watch(
      () => route.query.q,
      (newQuery) => {
        if (newQuery) {
          searchQuery.value = newQuery;
          performSearch(newQuery);
        }
      }
    );

    const loadMore = async () => {
      isLoading.value = true;
      await fetchMediaStore.loadMoreSearchResults();
      isLoading.value = false;
    };

    return {
      searchResults,
      searchQuery,
      loadMore,
      isLoading,
    };
  },
};
</script>
