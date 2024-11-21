<template>
  <div
    class="bg-blue text-white text-center p-6 flex flex-center justify-center error-page"
  >
    <div class="flex flex-col">
      <h1 class="text-9xl">404</h1>

      <div class="" style="opacity: 0.4">Oops. Nothing here...</div>

      <router-link
        class="block mt-6 rounded-md self-center text-white bg-green-400 px-2 py-1"
        to="/"
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

<style scoped lang="css">
.error-page {
  margin-top: var(--header-height);
  height: 50dvh;
}
</style>
