import { defineStore } from "pinia";
import { http } from "../services/axios";

export const useFetchMedia = defineStore("fetch_media", {
  state: () => ({
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    popularSeries: [],
    upcomingSeries: [],
    topRatedSeries: [],
    currentPage: 1,
    movieDetails: null, // Add state for movie details
  }),
  getters: {
    getPopularMovies: (state) => state.popularMovies,
    getUpcomingMovies: (state) => state.upcomingMovies,
    getTopRatedMovies: (state) => state.topRatedMovies,
    getPopularSeries: (state) => state.popularSeries,
    getUpcomingSeries: (state) => state.upcomingSeries,
    getTopRatedSeries: (state) => state.topRatedSeries,
    getMovieDetails: (state) => state.movieDetails, // Add getter for movie details
  },
  actions: {
    async fetchPopularMovies() {
      try {
        const response = await http.get("movie/popular", {
          params: { page: this.currentPage },
        });
        this.popularMovies = [...this.popularMovies, ...response.data.results];
      } catch (error) {
        return error;
      }
    },
    async fetchUpcomingMovies() {
      try {
        const response = await http.get("movie/upcoming", {
          params: { page: this.currentPage },
        });

        this.upcomingMovies = [
          ...this.upcomingMovies,
          ...response.data.results,
        ];
      } catch (error) {
        return error;
      }
    },
    async fetchTopRatedMovies() {
      try {
        const response = await http.get("movie/top_rated", {
          params: { page: this.currentPage },
        });
        this.topRatedMovies = [
          ...this.topRatedMovies,
          ...response.data.results,
        ];
      } catch (error) {
        return error;
      }
    },
    async fetchPopularSeries() {
      try {
        const response = await http.get("tv/popular", {
          params: { page: this.currentPage },
        });
        this.popularSeries = [...this.popularSeries, ...response.data.results];
      } catch (error) {
        return error;
      }
    },
    async fetchUpcomingSeries() {
      try {
        const response = await http.get("tv/upcoming", {
          params: { page: this.currentPage },
        });
        this.upcomingSeries = [
          ...this.upcomingSeries,
          ...response.data.results,
        ];
      } catch (error) {
        return error;
      }
    },
    async fetchTopRatedSeries() {
      try {
        const response = await http.get("tv/top_rated", {
          params: { page: this.currentPage },
        });

        this.topRatedSeries = [
          ...this.topRatedSeries,
          ...response.data.results,
        ];
      } catch (error) {
        return error;
      }
    },
    async fetchMovieDetails(movieId) {
      try {
        this.movieDetails = null;
        const response = await http.get(`movie/${movieId}`);

        this.movieDetails = response.data;
      } catch (error) {
        return error;
      }
    },
    incrementPage() {
      this.currentPage++;
    },
  },
});
