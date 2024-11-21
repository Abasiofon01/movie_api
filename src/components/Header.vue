<template>
  <header class="header" :class="{ active: isSticky }" data-header>
    <div class="wrapper">
      <div
        :class="{ active: isOverlayActive }"
        class="overlay"
        data-overlay
      ></div>

      <a href="/" class="logo"> Movies </a>

      <!-- Desktop Navbar -->
      <nav class="navbar desktop-navbar">
        <ul class="desktop-nav-items">
          <li><a href="/" class="navbar-link">Home</a></li>
          <li><a href="#" class="navbar-link">Movie</a></li>
          <li><a href="#" class="navbar-link">Tv Show</a></li>
          <li><a href="#" class="navbar-link">Web Series</a></li>
          <li><a href="#" class="navbar-link">Pricing</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <div class="search-wrapper">
          <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="searchMovies"
            placeholder="Search movies..."
            class="search-input"
          />
          <button class="search-btn" @click="searchMovies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="20"
              width="20"
            >
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </button>
        </div>
      </div>

      <button class="menu-open-btn" @click="toggleNavbar" data-menu-open-btn>
        <i class="las la-bars"></i>
      </button>
    </div>
    <!-- Mobile Navbar -->
    <nav
      class="navbar mobile-navbar"
      :class="{ active: isNavbarActive }"
      data-navbar
    >
      <div class="navbar-top">
        <a href="./" class="logo"> Movies </a>

        <button
          class="menu-close-btn"
          @click="toggleNavbar"
          data-menu-close-btn
        >
          <i class="las la-times"></i>
        </button>
      </div>

      <ul class="navbar-list">
        <li><a href="/" class="navbar-link">Home</a></li>
        <li><a href="#" class="navbar-link">Movie</a></li>
        <li><a href="#" class="navbar-link">Tv Show</a></li>
        <li><a href="#" class="navbar-link">Web Series</a></li>
        <li><a href="#" class="navbar-link">Pricing</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { watch } from "vue";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      isNavbarActive: false,
      isOverlayActive: false,
      isSticky: false,
      searchQuery: "",
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
      this.isOverlayActive = !this.isOverlayActive;
      document.body.classList.toggle("active");
    },
    handleScroll() {
      this.isSticky = window.scrollY >= 10;
    },
    searchMovies() {
      this.$router.push({
        name: "SearchResults",
        query: { q: this.searchQuery },
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    const route = useRoute();
    this.searchQuery = route.query.q || "";

    watch(
      () => route.query.q,
      (newQuery) => {
        this.searchQuery = newQuery || "";
      }
    );
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
