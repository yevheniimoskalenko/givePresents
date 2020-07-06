export const state = () => ({})
export const getters = {}
export const muttations = {}
export const actions = {
  async buyTicket({ commit }, payload) {
    try {
      const html = await this.$axios.$post('/api/tickets/create', payload)
      return html
    } catch (e) {
      commit('setStatus', e, { root: true })
    }
  }
}
