const words = {
  namespaced: true,
  state: { message: "", waveArray: [] },
  getters: {},
  mutations: {
    updateMessage(state, message) {
      state.message = message;
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

    reverse(state) {
      state.message = state.message.split("").reverse().join("");
    },
    dash(state) {
      state.message = state.message.split("").join("-");
    },

    clear(state) {
      state.message = "";
      state.waveArray = [];
    },
  },
  actions: {},
};

export default words;
