<template>
  <v-container class="hamburguer-detalhado-container">
    <div class="btn-voltar">
      <router-link to="/menu">
      <v-btn class="mx-2" fab dark small color="warning" >
        <v-icon dark> mdi-menu-left </v-icon>
      </v-btn>
      </router-link>

      <span class="text-h6">Detalhes</span>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> mdi-heart </v-icon>
      </v-btn>
    </div>

    <div class="hamburguer-img">
      <img :src="require(`@/assets/hamburguer/` + hamburguer.image)" alt="produto" />
    </div>

    <div class="avaliacao">
      <v-icon color="warning">mdi-star</v-icon>
      {{ hamburguer.ranked }}
    </div>

    <div class="hamburguer-container-name-value">
      <div class="hamburguer-name text-h4"> {{ hamburguer.title }} </div>

      <div class="hamburguer-value" >
        <v-row class="d-flex justify-center">
          Quantidade:
        </v-row>
        <v-row>
          <v-col>
          <v-text-field dark readonly v-model="quantidade" rounded  style="width:10em;">
            <v-icon  
          slot="append" 
          color="warning" 
          @click="quantidade++">
            mdi-plus
          </v-icon>
          <v-icon
            slot="prepend"
            color="red"
            :disabled="quantidade==0"
            @click="quantidade--"
          >
            mdi-minus
          </v-icon>
        </v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pa-3" v-if="hamburguer.description">
      <span class="text-h5" >Descrição</span>
      <p class=" font-weight-light"> {{ hamburguer.description }}</p>
    </div>

    <div class="mb-3 mt-3">
      <div class="d-flex justify-center">
      <span class="text-sm-h5 text-md-h6 titulo-cart" > Deseja remover algum ingrediente? </span>
      </div>
      <v-row class="mt-3 d-flex justify-center" >
        <v-col cols="12" md="10" sm="12" >
          <v-textarea
            label="Digite os ingredientes que não deseja"
            v-model="detalhesPedido"
            dark
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
        ></v-textarea>
        </v-col>
      </v-row>
    </div>

    <div class="add-cart mb-5">
      <div class="carrinho">
       <span class="green--text text--lighten-2" > 
        {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(hamburguer.price) }}
        </span>
            <v-btn
              color="warning"
              dark
              raised
              style="height: 4em"
              @click="addToCart()"
            >
              <v-icon left> mdi-cart-outline </v-icon>
              Adicionar ao Carrinho
            </v-btn>
      </div>
    </div>
      <Snackbar :snackbar="snackbar" :text="texto"/>
  </v-container>
</template>

<script>
import { getDetailedBurger } from "@/api";
import Cart from '../cart/Cart.vue';
import Snackbar from '../layout/Snackbar.vue';

export default {
    data() {
        return {
            id: null,
            hamburguer: [],
            image: '',
            detalhesPedido: '',
            quantidade: 0,
            cart: null,
            snackbar: false,
            texto: '',
        };
    },
    computed: {
      cartItemNumber() {
        return this.$store.getters.cartItemNumber
      },
      productQuantity() {
        if(this.$store.getters.carts=='') {
        
        return 0;
        } else {
        var arr = this.$store.getters.carts
        var produto = arr.find(o => o.id == this.id)
        if(produto==null) {
          return 0;
        } else {
        return produto.quantity;
        }
        }
      },
      
    },
    created() {
      this.id = this.$route.params.id;
      this.getHamburgerById();
      this.checarQuantidade();
      this.detalhesPedido = this.$store.getters.detalhes
    },
    methods: {
        async getHamburgerById() {
          getDetailedBurger(this.id).then(data => {
            this.hamburguer = data;
          })
        },
        addToCart() {
          if(this.quantidade == 0 ) {
            alert("A quantidade está em 0. Por favor, o valor mínimo é 1.")
          } else {
            
            const data = {
              id: this.hamburguer.id,
                title: this.hamburguer.title,
                price: this.hamburguer.price,
                image: this.hamburguer.image,
                quantity: this.quantidade,
            };
            this.texto = `${this.hamburguer.title} foi adicionado com sucesso!`;
            this.snackbar = true;
            setTimeout(() => {
              this.texto = '',
              this.snackbar=false;
            }, "2000")
            this.$store.dispatch("addToCartQuantity", data);
            this.$store.dispatch("addDetalhesPedido", this.detalhesPedido);
          }
        },
        checarQuantidade() {
          var carrinho = this.$store.getters.carts;
          const burgerObj = carrinho.find(o => o.id == this.id);
          if(burgerObj!=null) {
            this.quantidade = burgerObj.quantity
          } 
        },
    },
    components: { 
      Snackbar,
      Cart,
    }
};
</script>

<style>
a {
    text-decoration: none;
}

.hamburguer-detalhado-container {
  margin: 1em auto;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 20px;
  width: 100%;
  color: white;
}
.btn-voltar {
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-voltar span {
  color: white;
}
.hamburguer-img {
  display: flex;
  justify-content: center;
}
.hamburguer-img img {
  width: 20em;
  height: 20em;
}
.avaliacao {
  display: flex;
  align-items: center;
  background: black;
  padding: 0.5em 1em;
  border-radius: 20px;
  width: fit-content;
}
.hamburguer-container-name-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hamburguer-value {
  background: black;
  border-radius: 20px;
  padding: 1em 1em;
}
.add-cart{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  border-radius: 20px;
}
.titulo-cart {
  background: #fb8c00;
  padding: 0.7em;
  border-radius: 30px;
  width: fit-content;
}
.carrinho {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}

@media (min-width:900px) {
  .hamburguer-detalhado-container {
  margin: 1em auto;
  width: 40em;
}
}

</style>