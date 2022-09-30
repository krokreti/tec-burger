<template>
    <v-container >
        <v-row class="d-flex justify-start align-center"  >
            <v-col cols="12" sm="2" md="3"  style="height:7em;">
                <v-row dense class="img-box1" >
                    <img :src="require(`@/assets/hamburguer/${imagem}`)" alt="produto" class="cartao1"/>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" md="9" class="pr-5 d-flex align-center" style="height: 7em;">
                <v-row dense class="d-flex align-center justify-space-between ml-5 pl-2" style="height:1.5em;">
                    <span class="font-weight-bold yellow--text text--darken-3" > {{ nome }} </span>
                    <span class="font-weight-bold yellow--text text--darken-3" > 
                        <v-row>
                            <v-btn small text @click="removerCarrinho()" v-if="$route.name!='confirmar-dados'" >
                                <v-icon color="warning" >
                                    mdi-minus-thick
                                </v-icon>
                            </v-btn>
                            <div  class="d-flex align-center px-2"> {{ quantidade }} </div>
                            <v-btn small text @click="adicionarCarrinho()" v-if="$route.name!='confirmar-dados'">
                                <v-icon color="warning" >
                                    mdi-plus-thick
                                </v-icon>
                            </v-btn>
                        </v-row>
                    </span>
                </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Snackbar from '../layout/Snackbar.vue';

export default {
    name: 'CartItem',
    props: {
        quantidade: null,
        nome: null,
        imagem: null,
        price: null,
        id: null,
    },
    data() {
        return {
            
        }
    },
    methods: {
        adicionarCarrinho() {
            const data = {
                id: this.id,
                title: this.title,
                price: this.price,
                image: this.image,
                quantity: this.quantidade,
            };
            this.texto = 'O Item foi adicionado com sucesso!';
            this.snackbar = true;
            this.$store.dispatch("addToCart", data);
            this.quantidade = this.$store.getters.cartItemNumber
        },
        removerCarrinho() {
            const data = {
                id: this.id,
                title: this.title,
                price: this.price,
                image: this.image,
                quantity: this.quantidade,
            };
            this.texto = 'O Item foi removido com sucesso!';
            this.snackbar = true;
            this.$store.dispatch("removeFromCart", data);
            this.quantidade = this.$store.getters.cartItemNumber
        }
    },
    components: { 
      Snackbar,
    }
}
</script>

<style>
.cartao1 {
    width: 80%;
    height: 80%;
    border: 1px solid grey;
    border-radius: 20px
}

.img-box1{
    width: 7em;
    height: 7em;
    margin: 0 auto;
    filter: drop-shadow(0 0 1px #333);
}
</style>