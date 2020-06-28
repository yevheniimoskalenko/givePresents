export const state = () => ({ status: null })
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
export const actions = {}
