export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  async fetchId({ commit }, payload) {
    try {
      const order = await this.$axios.$get(`/api/order/fetchId/${payload.id}`)
      return order
    } catch (e) {
      commit('setStatus', e, { root: true })
    }
  },

  async findUser({ commit }, payload) {
    try {
      const user = await this.$axios.$post('api/order/findUser', payload)
      commit('setUser', user, { root: true })
    } catch (e) {
      console.log(e)
    }
  }
}
