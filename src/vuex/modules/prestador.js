import Vue from 'vue'

export default {
  state: {
    prestadorList: []
  },
  mutations: {
    updatePrestadorList (state, data) {
      state.prestadorList = data
    }
  },
  actions: {
    getPrestadores (context) {
      Vue.http.get('prestador').then(response => {
        context.commit('updatePrestadorList', response.data)
      })
    }
  }
}
