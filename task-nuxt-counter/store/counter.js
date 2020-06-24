export const state = () => ({
  counter: 0
})

export const mutations = {
  countUp (state) {
    state.counter += 1
  },

  reset (state) {
    state.counter = 0
  }
}
