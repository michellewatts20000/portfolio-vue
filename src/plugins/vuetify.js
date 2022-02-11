import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: { primary: "#2EC4B6", secondary: "#FF3366" },
      dark: { primary: "#011627" },
    },
  },
});
