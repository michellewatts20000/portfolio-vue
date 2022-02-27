import Vue from "vue";
import Vuex from "vuex";
import moduleTodos from "./modules/todos";
import weather from "./modules/weather";
import words from "./modules/words";
import numbers from "./modules/numbers";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    moduleTodos,
    weather,
    numbers,
    words,
  },
  state: {
    isLoading: false,
    colors: ["red", "blue", "green", "black", "yellow", "purple", "white"],
    objects: ["domain", "star", "home", "car"],
    sizes: ["10", "25", "50", "75", "100"],
  },
  getters: {
    result(state) {
      return state.result;
    },
  },
  mutations: {
    loading(state, newLoading) {
      state.isLoading = newLoading;
    },
  },
  actions: {},
});
