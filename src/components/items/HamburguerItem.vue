<template>
    <v-container class="container-hamburguer rounded-xl mb-5" @click="verDetalhes" >
    <v-row  class="d-flex justify-start">

    <v-col cols="12" sm="3" md="3" >
        <v-row dense class="img-box">
            <img :src="require(`@/assets/hamburguer/${imagem}`)" alt="produto" class="cartao"/>
        </v-row>
    </v-col>
    <v-col cols="12" sm="9" md="9" >
        <v-row dense class="d-flex justify-space-between px-3 pt-1">
            <p class="font-weight-bold yellow--text text--darken-3" > {{ nome }} </p>
            
            
            <p class="font-weight-bold green--text text--lighten-2">
                {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco) }}
            </p>
        </v-row>
        <v-row dense>
            <p class="font-weight-light"> {{ descricao }} </p>
        </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '@/router'
export default {
    name: 'HamburguerItem',
    props: {
        id: null,
        nome: null,
        preco: null,
        descricao: null,
        imagem: null,
    },
    
    methods: {
        verDetalhes() {
        router.push({ name: 'hamburguer-detalhado', params: { id: this.id } })      
        },
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
.container-hamburguer{
    color: black;
    background-color: white;
    width: 50em;
    height: fit-content;
    padding: 10px;
    transition: .5s;
    user-select: none;
    border:1px solid #677381
}

.container-hamburguer:hover {
    background-color: #677381;
    color: white;
    cursor: pointer;
}

.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}

.img-box{
    width: 7em;
    height: 7em;
    margin: 0 auto;
    filter: drop-shadow(0 0 1px #333);
}

@media (max-width:600px) {
    .container-hamburguer {
        width: 100%;
    }
}
</style>