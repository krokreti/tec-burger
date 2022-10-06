const state = {
    cart: [], 
    carts: [],
    total: null,
    //      { id: 'p1', title: 'Gaming Mouse', price: 29.99, quantity: 1 }
  }
  const mutations = {
    ADD_CART(state, produto) {
      const carts = [ ...state.carts]
      const index = carts.findIndex(cart => cart.id === produto.id)
      if(index !== -1) {
        carts[index].quantity++
      } else {
        carts.push({...produto, quantity: 1})
      }
      state.carts = [ ...carts ]
    },
    ADD_CART_QUANTITY(state, produto) {
      const carts = [ ...state.carts]
      const index = carts.findIndex(cart => cart.id === produto.id)
      if(index !== -1) {
        carts[index].quantity++
      } else {
        carts.push({...produto, quantity: produto.quantity})
      }
      state.carts = [ ...carts ]
    },
    REMOVE_CART(state, produto) {
      const carts = [ ...state.carts ]
      const index = carts.findIndex(cart => cart.id === produto.id)
      if(index !== -1) {
        const item = carts[index]
        if(item.quantity === 0) {
          carts.splice(index, 1)
        } else {
          carts[index].quantity--
        }
      }
      state.carts = [ ...carts ]
    },
    ADD_TOTAL(state, valor) {
      state.total = valor;
    }
  }
  const actions = {
    addToCart({commit}, produto) {
      commit('ADD_CART', produto)
    },
    addToCartQuantity({commit}, produto) {
      commit('ADD_CART_QUANTITY', produto)
    },
    removeFromCart({commit}, produto) {
      commit('REMOVE_CART', produto)
    },
    addTotal({commit},valor) {
      commit('ADD_TOTAL', valor)
    }
  }
  const getters = {
    carts: (state) => state.carts,
    total: (state) => state.total,
    cartItemNumber: (state) => {
      return state.carts.reduce((count, curItem) => {
        return count + curItem.quantity
      }, 0) 
    }
  }

  const cartModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default cartModule;