export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  async verefy({ commit }, payload) {
    try {
      return await this.$axios.$post('/api/reviews/verefy', payload)
    } catch (e) {}
  },
  async addReviews({ commit }, payload) {
    try {
      const reviews = await this.$axios.$post('/api/reviews/create', payload)
      return reviews
    } catch (e) {
      commit('setStatus', e, { root: true })
    }
  }
}
