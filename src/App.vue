<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import { defineComponent } from "vue";
import MainLayout from "./layouts/MainLayout.vue";

export default defineComponent({
  components: { MainLayout },
  name: "App",
});
</script>
