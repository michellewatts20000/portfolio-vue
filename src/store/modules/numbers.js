const numbers = {
  namespaced: true,
  state: { count: 0 },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    timesTwo(state) {
      state.count = state.count * 2;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    timesTwo({ commit }) {
      commit("timesTwo");
    },
  },
};

export default numbers;
