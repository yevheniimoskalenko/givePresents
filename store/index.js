export const state = () => ({ status: null, trophy: null, user: [] })
export const getters = {
  status: (state) => state.status,
  getuser: (state) => state.user
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setStatus(state, payload) {
    state.status = payload
  },
  clearStatus(state) {
    state.status = null
  },
  trophyData(state, payload) {}
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
