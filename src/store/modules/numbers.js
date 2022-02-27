const numbers = {
  namespaced: true,
  state: { count: 0 },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state, value) {
      state.count += value;
    },
    decrement(state) {
      state.count--;
    },
    timesTwo(state) {
      state.count = state.count * 2;
    },
  },
  actions: {
    increment({ commit }, value) {
      commit("increment", value);
    },
    timesTwo({ commit }) {
      commit("timesTwo");
    },
  },
};

export default numbers;
