<template>
    <v-container>
        <div v-for="hamburguer in hamburguerList" :key="hamburguer.id">
            <HamburguerItem
            :descricao="hamburguer.description" 
            :imagem="hamburguer.image"
            :nome="hamburguer.title"
            :preco="hamburguer.price"
            :id="hamburguer.id"
            />
        </div>
    </v-container>
</template>

<script>
import { getBurgers } from "@/api";
import HamburguerItem from '../items/HamburguerItem.vue'

export default {
    name: 'HamburguerList',
    data() {
        return {
            hamburguerList: [],
        }
    },
    components: {
        HamburguerItem
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

</style>