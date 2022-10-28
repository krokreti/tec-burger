<template>
  <v-container class="finalizar-container">
            <h5 class="text-h4 text-center">Informações de Entrega</h5>
        <FormEntrega/>
    </v-container>
</template>

<script>
import FormEntrega from '../components/forms/FormEntrega.vue'


export default {
    name: 'Finalizar',
    components: {
        FormEntrega
    }
}
</script>

<style>
.finalizar-container {
  margin: 1em auto;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 20px;
  color: white;
}
</style>