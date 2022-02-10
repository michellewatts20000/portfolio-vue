<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h4>{{ count }}</h4>
        <h1>{{ fullname }}</h1>
        <v-btn @click="incrementCounter">Count Up</v-btn>
        <v-btn @click="decrementCounter">Count Down</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      localCount: 5,
      firstName: "Foo",
      lastName: "Bar",
    };
  },
  methods: {
    incrementCounter: function () {
      this.$store.state.count += 1;
    },
    decrementCounter: function () {
      this.$store.state.count -= 1;
    },
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: (state) => state.count,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: "count",

    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  }),
};
</script>
