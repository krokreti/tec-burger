<template>
    <div>
        <v-container id="desktop-item">
            <div v-for="hamburguer in hamburguerList" :key="hamburguer.id" >
                <HamburguerItem
                :descricao="hamburguer.description" 
                :imagem="hamburguer.image"
                :nome="hamburguer.title"
                :preco="hamburguer.price"
                :id="hamburguer.id"
                />
            </div>
        </v-container>
        <v-container id="mobile-item" >
            <div v-for="hamburguer in hamburguerList" :key="hamburguer.id" >
                <HamburguerItemMobile
                :descricao="hamburguer.description" 
                :imagem="hamburguer.image"
                :nome="hamburguer.title"
                :preco="hamburguer.price"
                :id="hamburguer.id"
                />
            </div>
        </v-container>
    </div>
</template>

<script>
import { getBurgers } from "@/api";
import HamburguerItem from '../items/HamburguerItem.vue'
import HamburguerItemMobile from '../items/HamburguerItemMobile.vue'

export default {
    name: 'HamburguerList',
    data() {
        return {
            hamburguerList: [],
        }
    },
    components: {
        HamburguerItem,
        HamburguerItemMobile
    },
    methods: {
        async getBurgers() {
            // fetch('https://tec-burger-default-rtdb.firebaseio.com/hamburguer.json').then( (response) => {
            // if(response.ok) {
            // return response.json();
            // } else {
            //     alert('Sem conexão com banco de dados!')
            // }
            // }).then((data) => {
            //     console.log(data)
            //     this.hamburguerList = data;
            // })
            getBurgers().then((data) => {
                this.hamburguerList = data
            })
        }
    },
    created() {
        this.getBurgers();
    },
}
</script>

<style>
#mobile-item {
    display: none;
}

@media (max-width:600px) {
    #desktop-item {
        display: none;
    }

    #mobile-item {
    display: block;
    padding: 0 !important;
}
}
</style>