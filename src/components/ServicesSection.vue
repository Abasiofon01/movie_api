<template>
  <section class="service">
    <div class="container">
      <div class="service-content">
        <SectionTitle
          subtitle="Our Services"
          title="Download Your Shows Watch Offline."
          description="  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour."
          alignment="center"
        />

        <div class="service-list">
          <div class="service-card">
            <div class="card-icon">
              <i class="las la-download"></i>
            </div>

            <div class="card-content">
              <h3 class="h3 card-title">Download Anytime.</h3>

              <p class="card-text">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>

          <div class="service-card">
            <div class="card-icon">
              <i class="las la-tv"></i>
            </div>

            <div class="card-content">
              <h3 class="h3 card-title">Enjoy on Your TV.</h3>

              <p class="card-text">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>

          <div class="service-card">
            <div class="card-icon">
              <i class="las la-video"></i>
            </div>

            <div class="card-content">
              <h3 class="h3 card-title">Watch Everywhere.</h3>

              <p class="card-text">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "ServicesSection",

  components: {
    SectionTitle,
  },
};
</script>
