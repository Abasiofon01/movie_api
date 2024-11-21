<template>
  <img :src="imageUrl" :alt="alt" :class="className" />
</template>

<script>
export default {
  name: "ImageRenderer",
  props: {
    path: {
      type: String,
      required: true,
    },
    quality: {
      type: String,
      default: "original", // Default quality
    },
    alt: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageUrl() {
      const baseUrl = "https://image.tmdb.org/t/p/";
      return `${baseUrl}${this.quality}${this.path}`;
    },
  },
};
</script>
