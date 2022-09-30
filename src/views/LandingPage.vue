<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
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
