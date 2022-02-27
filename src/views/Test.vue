<template>
  <v-container fill-height>
    <v-row justify="space-around" align="center">
      <v-col lg="8" md="8" sm="12" xs="12">
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
        <v-text-field
          label="increment number by"
          type="number"
          v-model.number="incrementBy"
        >
        </v-text-field>
        <h1>{{ count }}</h1>

        <v-btn class="mr-5" @click="increment"> + </v-btn>
        <v-btn class="mr-5" @click="decrement"> - </v-btn>
        <v-btn @click="timesTwo"> x2 </v-btn>

        <div class="display-1 mt-10">Double count</div>
        <h1>{{ doubleCount }}</h1>
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
      incrementBy: null,
    };
  },
  computed: {
    ...mapState(["colors", "objects", "sizes"]),
    ...mapState({
      waveArray: (state) => state.words.waveArray,
      count: (state) => state.numbers.count,
    }),
    ...mapGetters("numbers", ["doubleCount"]),
    message: {
      get() {
        return this.$store.state.words.message;
      },
      set(value) {
        this.$store.commit("words/updateMessage", value);
      },
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("numbers/increment", this.incrementBy);
    },
    decrement() {
      this.$store.commit("numbers/decrement");
    },
    timesTwo() {
      this.$store.commit("numbers/timesTwo");
    },
    reverseMessage() {
      this.$store.commit("words/reverse");
    },
    dashMessage() {
      this.$store.commit("words/dash");
    },
    clearMessage() {
      this.$store.commit("words/clear");
    },
    zeroVowels() {
      this.$store.commit("words/vowels");
    },
    makeWave() {
      this.$store.commit("words/wave");
    },
  },

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>
