<template>
      <v-stepper dark v-model="value" class="mb-5">
        <v-stepper-header>
            <v-stepper-step step="1" :complete="step1">Escolha seu Burger</v-stepper-step>
            <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step2">Confirmar Endereço</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="step3">Confirmar os Dados</v-stepper-step>
        </v-stepper-header>
    </v-stepper>
</template>

<script>
export default {
    name: 'Stepper',
    props: {
        value: null,
        step1: false,
        step2: false,
        step3: false,
    }
}
</script>