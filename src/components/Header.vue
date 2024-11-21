<template>
  <header class="header" :class="{ active: isSticky }" data-header>
    <div class="wrapper">
      <div
        :class="{ active: isOverlayActive }"
        class="overlay"
        data-overlay
      ></div>

      <a href="./index.html" class="logo"> Movies </a>

      <!-- Desktop Navbar -->
      <nav class="navbar desktop-navbar">
        <div class="header-actions">
          <button class="search-btn">
            <!-- <ion-icon name="search-outline"></ion-icon> -->
          </button>
        </div>

        <ul class="desktop-nav-items">
          <li><a href="./index.html" class="navbar-link">Home</a></li>
          <li><a href="#" class="navbar-link">Movie</a></li>
          <li><a href="#" class="navbar-link">Tv Show</a></li>
          <li><a href="#" class="navbar-link">Web Series</a></li>
          <li><a href="#" class="navbar-link">Pricing</a></li>
        </ul>
      </nav>

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
export default {
  data() {
    return {
      isNavbarActive: false,
      isOverlayActive: false,
      isSticky: false,
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
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
