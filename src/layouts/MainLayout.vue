<template>
  <div class="main-layout">
    <!-- Header Section -->
    <Header />

    <!-- Main Content -->
    <main class="content-wrapper">
      <slot name="default" />
    </main>

    <!-- Footer Section -->
    <FooterSection />

    <!-- Scroll-to-Top Button -->
    <button
      v-if="showScrollToTop"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Scroll to Top"
    >
      <i class="las la-angle-up"></i>
    </button>
  </div>
</template>

<script>
import FooterSection from "../components/FooterSection.vue";
import Header from "../components/Header.vue";
// import HeaderSection from "../components/HeaderSection.vue";
// import FooterSection from "../components/FooterSection.vue";

export default {
  name: "MainLayout",
  components: {
    FooterSection,
    Header,
  },
  data() {
    return {
      showScrollToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.showScrollToTop = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
