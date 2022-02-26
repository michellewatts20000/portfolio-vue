<template>
  <v-container fill-height>
    <v-row justify="space-around" align="center">
      <v-col cols="8">
        <div class="text-center display-2 mb-3">Weather dashboard</div>
        <v-select
          v-model="city"
          label="Select a city"
          :items="items"
        ></v-select>
        <v-btn class="primary" :loading="isLoading" @click="getWeather"
          >Get Weather</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-card
        v-for="(w, index) in weather.slice(0, 5)"
        :key="index"
        class="mx-auto my-4"
        width="300"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ cityres }}
            </v-list-item-title>

            <v-list-item-subtitle class="subtitle-1">{{
              formatDate(w.dt_txt)
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-1" cols="8"> {{ w.main.temp }}&deg;C </v-col>
            <v-col cols="4">
              <v-img
                :src="
                  'https://openweathermap.org/img/wn/' +
                  w.weather[0].icon +
                  suffix
                "
                alt="Sunny image"
                width="92"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="primary">mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ w.wind.speed }} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="primary">mdi-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ w.main.humidity }}%</v-list-item-subtitle>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
import moment from "moment";
import { mapState } from "vuex";
export default {
  name: "Weather",
  data() {
    return {
      suffix: "@2x.png",
      city: "",
      items: ["Sydney", "New York", "Paris", "London"],
      key: "844421298d794574c100e3409cee0499",
    };
  },

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY, ha");
      }
    },
    getWeather() {
      let payload = {
        city: this.city,
        key: this.key,
      };
      this.$store.dispatch("weather/getWeather", payload);
    },
  },
  computed: {
    // ...mapState(["isLoading", "cityres", "weather"]),
    // ...mapGetters(["loading"]),
    ...mapState(["isLoading"]),
    ...mapState({
      cityres: (state) => state.weather.cityres,
      weather: (state) => state.weather.weather,
    }),
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
