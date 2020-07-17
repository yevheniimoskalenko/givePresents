export const state = () => ({ user: [] })

export const getters = {
  getuser: (state) => state.user
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}
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
      commit('setUser', user)
    } catch (e) {
      console.log(e)
    }
  }
}
