<template>
  <v-container my-10>
    <v-row class="mx-5" align="center" justify="center">
      <v-col lg="8" md="8" sm="12" xs="12">
        <div>
          {{ result }}
        </div>
        <v-btn
          class="mt-5 subtitle-1 primary"
          :loading="loading"
          @click="getJoke"
          >Get Joke</v-btn
        >

        <!-- <div v-for="(todo, index) in todos" :key="index">
          <li>{{ todo.title }}</li>
        </div>
        <v-btn
          class="mt-5 subtitle-1 primary"
          :loading="loading"
          @click="getToDo"
          >Get Todo 2.0</v-btn
        > -->

        <div class="mt-10 display-1">Word Play</div>
        <v-text-field v-model="message" label="type anything" type="text">
        </v-text-field>
        <h2 class="mb-5">{{ message }}</h2>
        <h2 class="mb-5" v-if="waveArray.length > 0">{{ waveArray }}</h2>
        <v-btn class="mb-5" @click="makeWave">Make a word wave</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mb-5" @click="reverseMessage">Reverse String </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mb-5" @click="dashMessage">Dash String </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mb-5" @click="zeroVowels">No vowels </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="clearMessage">Clear</v-btn>

        <Icon class="mt-10" :color="color" :object="object" :size="size" />
        <div class="mt-10 display-1">
          Change the type and colour of the icon
        </div>
        <v-select v-model="object" :items="objects" label="Objects"></v-select>
        <v-select v-model="color" :items="colors" label="Colors"></v-select>

        <v-select v-model="size" :items="sizes" label="Sizes"></v-select>

        <div class="display-1 mt-10">Numbers</div>
        <h1>{{ count }}</h1>

        <v-btn class="mr-5" @click="increment"> + </v-btn>
        <v-btn class="mr-5" @click="decrement"> - </v-btn>
        <v-btn @click="timesTwo"> x2 </v-btn>
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
      color: "",
      size: "50",
      object: "domain",
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
      "result",
      "waveArray",
    ]),
    ...mapGetters(["doubleCount", "shop", "loading", "result"]),
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    timesTwo() {
      this.$store.commit("timesTwo");
    },
    reverseMessage() {
      this.$store.commit("reverse");
    },
    dashMessage() {
      this.$store.commit("dash");
    },
    clearMessage() {
      this.$store.commit("clear");
    },
    getJoke() {
      this.$store.dispatch("getJoke");
    },
    // getToDo() {
    //   this.$store.dispatch("getToDo");
    // },
    zeroVowels() {
      this.$store.commit("vowels");
    },
    makeWave() {
      this.$store.commit("wave");
    },
  },

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>

<style scoped lang="scss">
// .v-btn:not(.v-btn--round).v-size--default {
//   color: $white;
//   background-color: $ads-navy;
//   font-weight: 900;
// }
</style>
