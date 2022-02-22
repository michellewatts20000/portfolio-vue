import Vue from "vue";
import Vuex from "vuex";
import moduleTodos from "./modules/todos";

// import axios from "axios";
// import { notesCollection } from "../services/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    moduleTodos,
  },
  state: {
    loading: false,
    waveArray: [],
    count: 0,
    allNotes: [],
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
    sizes: ["10", "25", "50", "75", "100"],
    posts: [],
    result: "",
    message: "",
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    shop(state) {
      return "The shop number is " + state.shopNumber;
    },
    loading(state) {
      return state.loading;
    },
    result(state) {
      return state.result;
    },
  },
  mutations: {
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
    vowel(state) {
      let reg = /[aeiou]/gi;
      let split = state.message.split("");
      let vowel = split.filter((item) => {
        return !item.match(reg);
      });
      state.message = vowel.join("");
    },
    SET_RESULT(state, result) {
      state.result = result;
    },
    loading(state, newLoading) {
      state.loading = newLoading;
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
