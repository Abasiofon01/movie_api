<template>
  <!-- <PopularMovies /> -->
  <HeroPage />
  <NowPlaying />
  <UpcomingMovies />
  <ServicesSection />
  <TopRated />
  <TopSeries />
</template>

<script>
import { defineComponent } from "vue";
import HeroPage from "../components/HeroPage.vue";
// import PopularMovies from "src/components/PopularMovies.vue";
import TopRated from "../components/TopRated.vue";
import TopSeries from "../components/TopSeries.vue";
import UpcomingMovies from "../components/UpcomingMovies.vue";
import ServicesSection from "../components/ServicesSection.vue";
import NowPlaying from "../components/NowPlaying.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    HeroPage,
    UpcomingMovies,
    ServicesSection,
    TopRated,
    TopSeries,
    NowPlaying,
    // PopularMovies,
  },
});
</script>
