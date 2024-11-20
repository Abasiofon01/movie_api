<template>
  <header>
    <nav class="navbar container">
      <div class="logo">
        <h1>Movies</h1>
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul :class="{ active: menuOpen }" class="nav-links">
        <li v-for="(link, index) in navLinks" :key="index">
          <a :href="link.route">{{ link.title }}</a>
        </li>

        <li v-if="menuOpen" class="dismiss-btn">
          <button @click="closeMenu" class="dismiss-btn-icon">X</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      navLinks: [
        { title: "Home", route: "#" },
        { title: "Movie", route: "#" },
        { title: "Tv Show", route: "#" },
        { title: "Popular", route: "#" },
        { title: "Genre", route: "#" },
        { title: "Upcoming", route: "#" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false; // Close the menu
    },
  },
};
</script>
