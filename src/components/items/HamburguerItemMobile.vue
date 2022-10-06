<template>
    <v-container>
        <div class="grid-border" @click="verDetalhes">
            <div class="grid-container">
                <div class="img-box">
                    <img :src="require(`@/assets/hamburguer/${imagem}`)" alt="produto" class="cartao"/>
                </div>
                <div>
                    <p class="font-weight-bold yellow--text text--darken-3" > {{ nome }} </p>
                </div>
                <div>
                    <p class="font-weight-bold green--text text--lighten-2">
                            {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco) }}
                    </p>
                </div>
                <div class="grid-descricao" v-if="descricao">
                    <p class="font-weight-light"> {{ descricao }} </p>
                </div>
            </div>
        </div>
    </v-container>

</template>

<script>
import router from '@/router'
export default {
    name: 'HamburguerItemMobile',
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
.grid-border {
    color: black;
    padding:1em;
    background-color: white;
    border-radius: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    text-align: center;
    align-items: center;
    gap: 15px;
}

.grid-descricao{
    grid-column: 1/4;
    text-align: justify;
}

/* .container-hamburguer{
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
} */

.cartao {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}

.img-box{
    width: 7em;
    height: 7em;
    overflow: hidden;
    margin: 0 auto;
    filter: drop-shadow(0 0 1px #333);
}

/* @media (max-width:600px) {
    
    .container-hamburguer {
        width: 100%;
    }

} */
</style>