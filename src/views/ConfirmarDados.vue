<template>
  <v-container class="finalizar-container">
    <h5 class="text-h4 text-center">Confirme seus dados:</h5>
    <Stepper :value="3" :step1="true" :step2="true"/>
    <FormConfirmacao/>
  </v-container>
</template>

<script>
import FormConfirmacao from '../components/forms/FormConfirmacao.vue'
import Stepper from '../components/stepper/Stepper.vue'

export default {
    name: 'ConfirmarDados',
    data() {
        return {
            
        }
    },
    components: {
        FormConfirmacao,
        Stepper
    },
}
</script>

<style>

</style>