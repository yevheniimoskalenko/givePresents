export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  async addOrder({ commit }, payload) {
    try {
      await this.$axios.$post('/api/order/create', payload)
    } catch (e) {
      commit('setStatus', e, { root: true })
    }
  }
}
