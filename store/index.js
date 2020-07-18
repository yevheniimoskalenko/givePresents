export const state = () => ({ status: null, trophy: null })
export const getters = {
  status: (state) => state.status
}
export const mutations = {
  setStatus(state, payload) {
    state.status = payload
  },
  clearStatus(state) {
    state.status = null
  }
}
export const actions = {
  async fetchAll({ commit }) {
    try {
      return await this.$axios.$post('/api/all')
    } catch (e) {
      commit('setStatus', e)
    }
  }
}
