import axios from "axios";

const weather = {
  namespaced: true,
  state: { cityres: "", weather: [] },
  getters: {},
  mutations: {
    getWeather(state, passOn) {
      state.weather = passOn.weather;
      state.cityres = passOn.cityres;
    },
  },
  actions: {
    getWeather({ commit }, payload) {
      commit("loading", true, { root: true });
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
          commit("loading", false, { root: true });
          commit("getWeather", passOn);
        });
    },
  },
};

export default weather;
