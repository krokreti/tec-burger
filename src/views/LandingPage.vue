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
  created() {
    this.getHamburguer();
  },
  methods: {
    async getHamburguer() {
      fetch('https://tec-burger-default-rtdb.firebaseio.com/hamburguer.json').then( (response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        console.log(data)
      })
    }
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
