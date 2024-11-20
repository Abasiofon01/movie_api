<template>
  <div class="section-title-wrapper">
    <div class="section-text-wrapper" :class="alignmentClass">
      <p class="section-subtitle">{{ subtitle }}</p>
      <h2 class="section-title">{{ title }}</h2>

      <p v-if="description" class="section-description">{{ description }}</p>
    </div>

    <div v-if="buttons && buttons.length" class="buttons-wrapper">
      <button v-for="(button, index) in buttons" :key="index" class="btn">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    buttons: {
      type: Array,
      default: () => [],
    },
    alignment: {
      type: String,
      default: "center",
      validator: (value) => ["left", "center", "right"].includes(value),
    },
  },
  computed: {
    alignmentClass() {
      return `text-${this.alignment}`;
    },
  },
};
</script>
