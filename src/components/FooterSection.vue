<template lang="">
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand-wrapper">
          <a href="/" class="logo"> FilmFolio </a>

          <div class="footer-links-wrapper">
            <span>
              <a href="/" class="footer-link">Home</a>
            </span>

            <span>
              <a href="#" class="footer-link">Movie</a>
            </span>

            <span>
              <a href="#" class="footer-link">TV Show</a>
            </span>

            <span>
              <a href="#" class="footer-link">Web Series</a>
            </span>

            <span>
              <a href="#" class="footer-link">Pricing</a>
            </span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="quick-links-and-socials-wrapper">
          <div class="quicklinks-wrapper">
            <span>
              <a href="#" class="quicklink">Faq</a>
            </span>

            <span>
              <a href="#" class="quicklink">Help center</a>
            </span>

            <span>
              <a href="#" class="quicklink">Terms of use</a>
            </span>

            <span>
              <a href="#" class="quicklink">Privacy</a>
            </span>
          </div>

          <div class="socials-wrapper">
            <span>
              <a href="#" class="social-link">
                <i class="lab la-facebook-f"></i>
              </a>
            </span>

            <span>
              <a href="#" class="social-link">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </span>

            <span>
              <a href="#" class="social-link">
                <i class="lab la-instagram"></i>
              </a>
            </span>

            <span>
              <a href="#" class="social-link">
                <i class="lab la-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; <a href="#">Movies</a> {{ currentYear }} . All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSection",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style lang=""></style>
