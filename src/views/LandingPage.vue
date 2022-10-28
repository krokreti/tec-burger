<template>
  <div class="banner-box">
    <Banner/>
  </div>
</template>

<script>
import Banner from '@/components/layout/Banner.vue';


export default {
  name: 'LandingPage',
  components: {
    Banner
  },
}
</script>

<style>
.banner-box {
    width: 50%;
    height: fit-content;
    padding: 3em;
}

@media (max-width: 600px) {
    .banner-box {
        width: 100%;
        height: fit-content;
        padding: 0;
    }
}
</style>
