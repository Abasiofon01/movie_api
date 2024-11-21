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

  <section class="category" id="category">
    <h2 class="section-heading">Category</h2>

    <div class="category-grid">
      <div class="category-card">
        <img src="./assets/images/action.jpg" alt="" class="card-img" />
        <div class="name">Action</div>
        <div class="total">100</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/comedy.jpg" alt="" class="card-img" />
        <div class="name">Comedy</div>
        <div class="total">50</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/thriller.webp" alt="" class="card-img" />
        <div class="name">Thriller</div>
        <div class="total">20</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/horror.jpg" alt="" class="card-img" />
        <div class="name">Horror</div>
        <div class="total">80</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/adventure.jpg" alt="" class="card-img" />
        <div class="name">Adventure</div>
        <div class="total">100</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/animated.jpg" alt="" class="card-img" />
        <div class="name">Animated</div>
        <div class="total">50</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/crime.jpg" alt="" class="card-img" />
        <div class="name">Crime</div>
        <div class="total">20</div>
      </div>

      <div class="category-card">
        <img src="./assets/images/sci-fi.jpg" alt="" class="card-img" />
        <div class="name">SCI-FI</div>
        <div class="total">80</div>
      </div>
    </div>
  </section>
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
<style scoped>
.category {
  margin-bottom: 60px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.category-card {
  position: relative;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
}

.category-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 20%, #000a);
}

.category-card:hover .card-img {
  transform: scale(1.1);
}

.category-card .name,
.category-card .total {
  position: absolute;
  bottom: 20px;
  color: var(--white);
  z-index: 20;
}

.category-card .name {
  left: 20px;
  font-size: 20px;
}

.category-card .total {
  right: 20px;
  font-size: 18px;
  background: var(--oxford-blue-50);
  padding: 5px 8px;
  border-radius: 8px;
}

.category-card:hover .name {
  color: var(--light-azure);
}
</style>
