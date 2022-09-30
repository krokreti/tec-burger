<template>
  <div>
    <v-row style="width:fit-content;">
      <v-dialog v-model="dialog" dark scrollable max-width="400px">
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            :content="cartItemNumber"
            :value="cartItemNumber"
            color="green"
            overlap

          >
            <v-btn
              color="warning"
              dark
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-badge>
          
        </template>
        <v-card>
          <v-card-title>
            <v-icon>mdi-cart</v-icon> 
            Carrinho 
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text style="height: 300px">
            <div v-for="item in cartItems" :key="item.id">
            <CartItem :imagem="item.image" :nome="item.title" :quantidade="item.quantity" :id="item.id" :price="item.price"/>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            Total: 
            {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal) }}
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Fechar
            </v-btn>
            <v-btn color="green darken-1" outlined @click="finalizarPedido()" :disabled="cartItemNumber==0">
              Finalizar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import router from '@/router';
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  props: {
    type: null,
  },
  components: {
    CartItem,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    cartItemNumber() {
      return this.$store.getters.cartItemNumber;
    },
    cartItems() {
      return this.$store.getters.carts;
    },
    valorTotal() {
      var valor = 0;
      var arr = this.$store.getters.carts
      arr.forEach(element => {
        valor += (element.price * element.quantity);
      });
      this.$store.dispatch("addTotal", valor);
      return valor;
    }
  },
  methods: {
    finalizarPedido() {
      router.push({ name: 'finalizar-pedido' })    
      this.dialog = false;
    }
  },
};
</script>

<style>
</style>