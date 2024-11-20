<template lang="">
  <section class="cta">
    <div class="container">
      <div class="title-wrapper">
        <span class="cta-title">Trial start first 30 days.</span>

        <p class="cta-text">
          Enter your email to create or restart your membership.
        </p>
      </div>

      <form action="" class="cta-form">
        <q-input
          label="Email"
          required
          color="black"
          bg-color="white"
          filled
          placeholder="Enter your email"
          class="email-field"
        >
          <template #after>
            <q-btn class="cta-form-btn">Get started</q-btn>
          </template>
        </q-input>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "CTA",
};
</script>
