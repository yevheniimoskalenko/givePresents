export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  addReviews({ commit }, payload) {
    try {
    } catch (e) {
      commit('setStatus', e, { root: true })
    }
  }
}
