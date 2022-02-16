import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    message: "",
    count: 0,
    shopNumber: 2,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],

    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    colors: ["red", "blue", "green", "black", "yellow", "purple", "white"],
    objects: ["domain", "star", "home", "car"],
    sizes: ["large", "medium", "small", "x-large"],
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    shop(state) {
      return "The shop number is " + state.shopNumber;
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
  modules: {},
});
