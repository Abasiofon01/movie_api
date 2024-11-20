<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useFetchMedia } from "../stores/store";
const store = useFetchMedia();

const getMovies = computed(() => {
  return store.getPopularMovies;
});
onMounted(() => {
  store.fetchPopularMovies();
});
</script>

<style lang=""></style>
