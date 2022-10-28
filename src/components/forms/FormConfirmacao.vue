<template>
  <v-container class="d-flex justify-center">
    
    <div class=" bg-form">

     <h5 class="text-h5 mb-5 d-flex justify-center">Valor Total:</h5>
    <p class="yellow--text text--darken-3 font-weight-bold d-flex justify-center">
        {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.$store.getters.total) }}
    </p>

     <h5 class="text-h5 mb-5 d-flex justify-center">Forma de Pagamento escolhida:</h5>
    <p class="text-h6 yellow--text text--darken-3 font-weight-bold d-flex justify-center">
        {{ usuario.pagamento }}
    </p>

    <v-divider dark class="mb-5"></v-divider>

    <h5 class="text-h5 mb-5">Dados de entrega:</h5>
    <v-row>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.nome" disabled dark label="Nome:"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.cep" disabled dark label="Cep:"></v-text-field>
        </v-col>
    </v-row>
    <v-row dense>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.rua" disabled dark label="Rua:"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.numero" disabled dark label="Número:"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.complemento" disabled dark label="Complemento:"></v-text-field>
        </v-col>
    </v-row>

    <v-row dense>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.bairro" disabled dark label="Bairro:"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.cidade" disabled dark label="Cidade:"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field v-model="usuario.estado" disabled dark label="Estado:"></v-text-field>
        </v-col>
    </v-row>

    <v-divider dark class="mb-5"></v-divider>
    
    <h5 class="text-h5 mb-5">Pedido:</h5>
    <!-- <v-row class="d-flex justify-space-between yellow--text text--darken-3 font-weight-bold">
        <v-col cols="2" md="2" sm="7" class="ml-8"> Burger</v-col>
        <v-col cols="2" md="2" sm="2" class="ml-5"> QTD</v-col>
        <v-col cols="2" md="2" sm="2" class="mr-8"> Preço
        </v-col>
    </v-row>
    <div v-for="item in hamburgueres" :key="item.id" class="imgCinza">
        <v-row class="d-flex align-center">
        <v-col cols="12" md="9" sm="9">
        <CartItem :imagem="item.image" :nome="item.title" :quantidade="item.quantity" :id="item.id" :price="item.price"/> 
        </v-col>
        <v-col cols="12" md="2" sm="2">
             {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity) }}
             </v-col>
        </v-row> -->
        <v-data-table
        dense
        dark
        :headers="headers"
        :items="hamburgueres"
        item-key="title"
        class="elevation-1"
        hide-default-footer
        >

        <template v-slot:body="{items}">
            <tbody>
                <tr v-for="hamburguer in items" :key="hamburguer.title">
                    <td>
                        <div class="img-box1 mt-3">
                            <img :src="require(`@/assets/hamburguer/${hamburguer.image}`)" alt="produto" class="cartao1"/>
                        </div>
                    </td>
                    <td>{{ hamburguer.title }}</td>
                    <td class="text-center">{{ hamburguer.quantity }}</td>
                    <td>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(hamburguer.price * hamburguer.quantity) }}</td>
                </tr>
            </tbody>
        </template>

        </v-data-table>
    <!-- </div>  -->

    <v-divider dark class="mt-5 mb-5" v-if="observacoes!=''"></v-divider>

    <h5 class="text-h5 mb-5" v-if="observacoes!=''">Observações:</h5>
    <span v-if="observacoes!=''">{{ observacoes }}</span>

    <v-divider dark class="mt-5"></v-divider>

    <div class="d-flex justify-space-between px-5 mt-5">
        <v-btn color="error" @click="retornar()">
            <v-icon  >
                mdi-close-thick
            </v-icon>
            Cancelar
        </v-btn>
        <v-btn color="success" @click="finalizar()">
        <v-icon  >
            mdi-moped
        </v-icon>
        Confirmar
    </v-btn>
    </div>
    </div>
  </v-container>
</template>

<script>
import router from '@/router';
import CartItem from '../cart/CartItem.vue';

export default {
    name: 'FormConfirmacao',
    data() {
        return {
        hamburgueres: this.$store.getters.carts,
        usuario: this.$store.getters.user,
        observacoes: this.$store.getters.detalhes,
        headers: [
            {
                text: 'Imagem',
                align: 'center',
                value: 'imagem'
            },
            {
                text: 'Burger',
                value: 'title'
            },
            {
                text: 'Quantidade',
                align: 'center',
                value: 'quantity'
            },
            {
                text: 'Preço',
                align: 'center',
                value: 'price'
            }
        ]
        }
    },
    components: {
        CartItem,
    },
    methods: {
        retornar() {
            router.push({ name: 'menu' })
        },
        finalizar() {
            //this.createPedido();
            router.push({ name: 'pedido-finalizado' })
        },
        async createPedido() {
            var hamburguerPedido=[
                {
                    lanche: null,
                    quantidade: null,
                }
            ]
            for (let index = 0; index <= this.hamburgueres.length; index++) {   
                    //hamburguerPedido.push(this.hamburgueres[index].title, this.hamburgueres[index].quantity  )                
                  hamburguerPedido[index].lanche = this.hamburgueres[index].title 
                  hamburguerPedido[index].quantidade = this.hamburgueres[index].quantity 
            }
            console.log(hamburguerPedido)
            const data = {
                pedido: Array.from(hamburguerPedido),
                cliente: this.usuario.nome,
                detalhes: this.observacoes,
                estado: 'Solicitado'
            }
            const dataJson = JSON.stringify(data);
            const req = await fetch('http://localhost:3000/pedidos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJson,
            });
        }
    },
}
</script>

<style>
.bg-form {
    width: 30em;
    height: fit-content;
    color: white;
}
.imgCinza {
    filter: none;
    -webkit-filter: grayscale(0);
    -webkit-transition: all 0.8s linear;
    -moz-transition: all 0.8s linear;
    transition: all 0.8s linear;
}

</style>