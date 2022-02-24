<template>
  <v-container>
    <div class="text-center display-2 mb-3">Weather dashboard</div>
    <v-select v-model="city" label="Select a city" :items="items"></v-select>
    <v-btn class="primary" @click="getData">Get Weather</v-btn>

    <v-row class="my-4">
      <v-card
        v-for="(w, index) in weather.slice(0, 5)"
        :key="index"
        class="mx-auto my-4"
        width="300"
      >
        <!-- <p>{{ w.dt_txt }}</p> -->
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ cityres }}
            </v-list-item-title>

            <v-list-item-subtitle>{{
              formatDate(w.dt_txt)
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="text-h3" cols="8"> {{ w.main.temp }}&deg;C </v-col>
            <v-col cols="4">
              <!-- <v-img
                :src="
                  'https://openweathermap.org/img/wn/' +
                  w.weather[0].icon +
                  suffix
                "
                alt="Sunny image"
                width="92"
              ></v-img> -->
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ w.wind.speed }} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ w.main.humidity }}%</v-list-item-subtitle>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Weather",
  data() {
    return {
      suffix: "@2x.png",
      city: "",
      cityres: "",
      key: "844421298d794574c100e3409cee0499",
      weather: [],
      items: ["Sydney", "New York", "Paris", "London"],
    };
  },

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY, ha");
      }
    },
    getData() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            this.city +
            "&appid=" +
            this.key +
            "&units=metric"
        )
        .then((response) => {
          console.log(response.data.list);
          this.weather = response.data.list;
          this.cityres = response.data.city.name;
        });
    },
  },
  computed: {},
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
