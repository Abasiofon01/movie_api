<template>
  <img :src="url + path" />
</template>
<script>
export default {
  name: "PosterImage",
  props: {
    src: {
      type: String,
    },
    path: {
      type: String,
    },
    url: {
      type: String,
      default: "https://image.tmdb.org/t/p/original",
    },
  },
};
</script>
<style lang=""></style>
