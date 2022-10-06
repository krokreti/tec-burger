<template>
  <v-toolbar
    dark
    height="80%"
    class="bar"
    >
    <div class="d-xs-flex justify-xs-center align-center" style="width: 100%;  " >      
      <div class="ml-4 " style="width:100%;">
        <router-link to="/"  id="router-link" class="d-flex align-center">
          <v-app-bar-nav-icon >
            <v-img
        src="../../../public/logo.png"
        aspect-ratio="1"
        ></v-img>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="ml-3">Tech Burger</v-toolbar-title>
        </router-link>
      </div>
    </div>
    <a target="_blank" title="Fale Conosco!" href="https://api.whatsapp.com/send?phone=21990942617&text=Olá">
    <v-btn color="green" text fab style="margin-right:1.5em;">
      <v-icon>
        mdi-whatsapp
      </v-icon>
    </v-btn>
    </a>
    <CartVue class="mr-5" :type="'appbar'"/>
    </v-toolbar>
</template>

<script>
import CartVue from '../cart/Cart.vue'

export default {
    name: 'AppBar',
    components: {
      CartVue,
    }
}
</script>

<style>
@media (max-width: 600px) {
    #router-link {
      justify-content: center;
    }

}
</style>