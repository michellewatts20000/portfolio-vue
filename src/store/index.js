import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    loading: false,
    waveArray: [],
    count: 0,
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
    sizes: ["10", "25", "50", "75", "100"],
    posts: [],
    result: "",
    message: "",
    apiKey: "bcfe6b08dcmsh6ed06ffa591d054p14d4b0jsn565c23c38d4f",
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
    getJoke({ commit }) {
      commit("loading", true);

      axios
        .get("https://funny-joke-dataset.p.rapidapi.com/users", {
          headers: {
            "x-rapidapi-host": "funny-joke-dataset.p.rapidapi.com",
            "x-rapidapi-key":
              "bcfe6b08dcmsh6ed06ffa591d054p14d4b0jsn565c23c38d4f",
          },
        })
        .then((response) => {
          let find = response.data.users[Math.floor(Math.random() * 1000)].body;
          console.log(find);
          commit("loading", false);
          commit("SET_RESULT", find);
        });
    },
  },
  modules: {},
});
