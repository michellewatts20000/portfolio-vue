import Vue from "vue";
import Vuex from "vuex";
import moduleTodos from "./modules/todos";
import weather from "./modules/weather";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    moduleTodos,
    weather,
  },
  state: {
    isLoading: false,
    waveArray: [],
    count: 0,
    allNotes: [],
    colors: ["red", "blue", "green", "black", "yellow", "purple", "white"],
    objects: ["domain", "star", "home", "car"],
    sizes: ["10", "25", "50", "75", "100"],
    posts: [],
    result: "",
    message: "",
    cityres: "",
    weather: [],
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    loading(state) {
      return state.isLoading;
    },
    result(state) {
      return state.result;
    },
  },
  mutations: {
    getWeather(state, passOn) {
      state.weather = passOn.weather;
      state.cityres = passOn.cityres;
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
      state.isLoading = newLoading;
    },
  },
  actions: {
    getWeather({ commit }, payload) {
      commit("loading", true);
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            payload.city +
            "&appid=" +
            payload.key +
            "&units=metric"
        )
        .then((response) => {
          let passOn = {
            weather: response.data.list,
            cityres: response.data.city.name,
          };
          commit("loading", false);
          commit("getWeather", passOn);
        });
    },
    increment({ commit }) {
      commit("increment");
    },
    timesTwo({ commit }) {
      commit("timesTwo");
    },
  },
});
