<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field v-model="message" label="type anything" type="text">
        </v-text-field>
        <h2 class="mb-5">{{ message }}</h2>
        <v-btn class="mr-5" @click="reverseMessage">Reverse String </v-btn>
        <v-btn class="mr-5" @click="dashMessage">Dash String </v-btn>

        <v-btn @click="clearMessage">Clear</v-btn>

        <h3 class="mt-10">Change the type and colour of the icon</h3>
        <Icon class="mt-10" :color="color" :object="object" :size="size" />
        <v-select v-model="object" :items="objects" label="Objects"></v-select>
        <v-select v-model="color" :items="colors" label="Colors"></v-select>

        <v-select v-model="size" :items="sizes" label="Sizes"></v-select>

        <h1>{{ count }}</h1>
        <h1>{{ doubleCount }}</h1>

        <v-btn @click="increment"> + </v-btn>
        <v-btn @click="decrement"> - </v-btn>
        <v-btn @click="timesTwo"> x2 </v-btn>
      </v-col>

      <v-col>
        <h1>{{ number }}</h1>
        <v-btn @click="totalMarks"> x2 </v-btn>
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
      array: ["item1", "item2", "item3"],
      message: "",
      object: "",
      size: "",
      number: 2,
    };
  },
  computed: {
    // totalMarks() {
    //   return this.number * 2;
    // },
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
    },
    totalMarks: function () {
      this.number = this.number * 2;
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
