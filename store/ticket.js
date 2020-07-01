export const state = () => ({})
export const getters = {}
export const muttations = {}
export const actions = {
  async buyTicket({ commit }, payload) {
    try {
      await console.log(payload)
    } catch (e) {
      commit('setStatus', e, { root: true })
    }
  }
}
