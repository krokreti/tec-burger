<template>
  <v-container class="finalizar-container">
    <p class="text-h4 text-center">Muito Obrigado!</p>
    <v-row>

    <v-col cols="12" md="4" sm="12" class="img-box2">
    <img src="../assets/delivery.png" alt="delivery" class="cartao2 mb-5">
    </v-col>
    <v-col cols="12" md="6" sm="12">
        <p class="text-h5"> O seu pedido está sendo <strong class="yellow--text text--darken-3 text-decoration-underline">preparado</strong> e logo será entregue.</p>
        <p>
            O pedido demora em média 30 minutos para ser preparado.
        </p>
        <p>
            A entrega é realizada de 10 a 30 minutos por nossos <span class="yellow--text text--darken-3 text-decoration-underline"> próprios entregadores.</span>
        </p>
        <p>
            O pagamento será realizado na <span class="yellow--text text--darken-3 text-decoration-underline font-weight-bold"> entrega</span> 
            por meio de modo escolhido pelo cliente, que foi o 
            <span class="yellow--text text--darken-3 text-decoration-underline font-weight-bold">
                {{ pagamento }}</span>.
        </p>
        <p class="text-center">
            😃😋🍔🍟🥤🛵✅
        </p>
    </v-col>
    
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            pagamento: this.$store.getters.user.pagamento
        }
    },
}
</script>

<style>
.cartao2 {
    width: 100%;
    height: 100%;
    background-color: lightgray;
    border-radius: 30px;
}

.img-box2{
    width: 10em;
    height: 100%;
    margin: 0 auto;
    filter: drop-shadow(0 0 1px #333);
    
}
</style>