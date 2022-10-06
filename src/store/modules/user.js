const state = {
    user: [],
    detalhes: [],
}

const mutations = {
    ADD_DADOS(state, dadosEntrega) {
        state.user = dadosEntrega;
    },
    ADD_DETALHES_PEDIDO(state, detalhes) {
        state.detalhes = detalhes;
    }
}

const actions = {
    addDados({commit}, dadosEntrega) {
        commit('ADD_DADOS', dadosEntrega)
      },
    addDetalhesPedido({commit}, detalhesPedido) {
    commit('ADD_DETALHES_PEDIDO', detalhesPedido)
    },
}

const getters = {
    user: (state) => state.user,
    detalhes: (state) => state.detalhes,
}

const userModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default userModule;