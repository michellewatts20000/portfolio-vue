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
    count: 0,
    waveArray: [],
    colors: ["red", "blue", "green", "black", "yellow", "purple", "white"],
    objects: ["domain", "star", "home", "car"],
    sizes: ["10", "25", "50", "75", "100"],
    result: "",
    message: "",
  },
  getters: {
    // loading(state) {
    //   return state.isLoading;
    // },
    doubleCount(state) {
      return state.count * 2;
    },
    result(state) {
      return state.result;
    },
  },
  mutations: {
    loading(state, newLoading) {
      state.isLoading = newLoading;
    },
    increment(state) {
      state.count++;
    },
    updateMessage(state, message) {
      state.message = message;
    },
    decrement(state) {
      state.count--;
    },
    reverse(state) {
      state.message = state.message.split("").reverse().join("");
    },
    dash(state) {
      state.message = state.message.split("").join("-");
    },
    vowels(state) {
      let reg = /[aeiou]/gi;
      let split = state.message.split("");
      let vowel = split.filter((item) => {
        return !item.match(reg);
      });
      state.message = vowel.join("");
    },
    wave(state) {
      for (let i = 0; i < state.message.length; i++) {
        let letter = state.message[i];
        if (letter === " ") {
          continue;
        } else {
          state.waveArray.push(
            state.message.slice(0, i) +
              letter.toUpperCase() +
              state.message.slice(i + 1)
          );
        }
      }
      return state.waveArray;
    },
    clear(state) {
      state.message = "";
      state.waveArray = [];
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
});
