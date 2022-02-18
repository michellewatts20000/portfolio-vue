<template>
  <v-container my-10>
    <v-row class="mx-5" align="center" justify="center">
      <v-col lg="8" md="8" sm="12" xs="12">
        <h3 class="mb-5 title" v-if="responseAvailable == true">
          {{ result }}
        </h3>
        <v-btn
          color="primary"
          :loading="loading"
          class="mb-5 subtitle-1"
          id="get-joke"
          @click="fetchAPIData"
          >Get Joke
        </v-btn>
        <!-- 
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Joke of the day
              </v-list-item-title>
              <v-list-item-subtitle v-if="responseAvailable == false"
                >A duck walks into a bar...</v-list-item-subtitle
              >
              <v-list-item-subtitle v-if="responseAvailable == true">{{
                result
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              color="primary"
              :loading="loading"
              id="get-joke"
              @click="fetchAPIData"
              >Get Joke
            </v-btn>
          </v-card-actions>
        </v-card> -->
        <v-divider></v-divider>
        <h1 class="mt-10">Word Play</h1>
        <v-text-field v-model="message" label="type anything" type="text">
        </v-text-field>
        <h2 class="mb-5">{{ message }}</h2>
        <h2 class="mb-5" v-if="waveArray.length > 0">{{ waveArray }}</h2>
        <v-btn class="mr-5" @click="wave">Make a word wave</v-btn>
        <v-btn class="mr-5" @click="reverseMessage">Reverse String </v-btn>
        <v-btn class="mr-5" @click="dashMessage">Dash String </v-btn>
        <v-btn class="mr-5" @click="zeroVowels">No vowels </v-btn>
        <v-btn @click="clearMessage">Clear</v-btn>

        <Icon class="mt-10" :color="color" :object="object" :size="size" />
        <h3 class="mt-10">Change the type and colour of the icon</h3>
        <v-select v-model="object" :items="objects" label="Objects"></v-select>
        <v-select v-model="color" :items="colors" label="Colors"></v-select>

        <v-select v-model="size" :items="sizes" label="Sizes"></v-select>

        <h1 class="mt-10">Numbers</h1>
        <h1>{{ count }}</h1>
        <!-- <h1>{{ doubleCount }}</h1> -->

        <v-btn class="mr-5" @click="increment"> + </v-btn>
        <v-btn class="mr-5" @click="decrement"> - </v-btn>
        <v-btn @click="timesTwo"> x2 </v-btn>

        <!-- <h1>{{ number }}</h1>
        <v-btn @click="totalMarks"> x2 </v-btn> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
  name: "Test",
  data() {
    return {
      button_text: "Submit",
      loaderActive: false,
      loading: false,
      color: "",
      array: ["item1", "item2", "item3"],
      message: "",
      number: 2,
      size: "50",
      object: "domain",
      waveArray: [],
      result: "",
      responseAvailable: false,
      apiKey: "bcfe6b08dcmsh6ed06ffa591d054p14d4b0jsn565c23c38d4f",
    };
  },
  computed: {
    ...mapState([
      "count",
      "categories",
      "todos",
      "users",
      "shopNumber",
      "colors",
      "objects",
      "sizes",
    ]),
    ...mapGetters(["doubleCount", "shop"]),
  },
  methods: {
    showLoader() {
      this.loaderActive = true;
    },
    hideLoader() {
      this.loaderActive = false;
    },
    fetchAPIData() {
      this.responseAvailable = false;
      // this.button_text = `Loading`;
      // this.showLoader();
      this.loading = true;
      fetch("https://funny-joke-dataset.p.rapidapi.com/users", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "funny-joke-dataset.p.rapidapi.com",
          "x-rapidapi-key": this.apiKey,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          console.log(response.users[Math.floor(Math.random() * 1000)].body);
          this.result = response.users[Math.floor(Math.random() * 1000)].body;
          this.responseAvailable = true;
          // this.button_text = "Submit";
          // this.hideLoader();
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    timesTwo() {
      this.$store.commit("timesTwo");
    },
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    dashMessage: function () {
      this.message = this.message.split("").join("-");
    },
    clearMessage: function () {
      this.message = "";
      this.waveArray = [];
    },
    totalMarks: function () {
      this.number = this.number * 2;
    },
    zeroVowels: function () {
      let reg = /[aeiou]/gi;
      let split = this.message.split("");
      let vowel = split.filter((item) => {
        return !item.match(reg);
      });
      this.message = vowel.join("");
    },
    wave: function () {
      for (let i = 0; i < this.message.length; i++) {
        let letter = this.message[i];
        if (letter === " ") {
          continue;
        } else {
          this.waveArray.push(
            this.message.slice(0, i) +
              letter.toUpperCase() +
              this.message.slice(i + 1)
          );
        }
      }
      return this.waveArray;
    },
  },

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.v-btn:not(.v-btn--round).v-size--default {
  color: $white;
  background-color: $ads-navy;
  font-weight: 900;
}
</style>
