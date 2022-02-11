<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>{{ fullName }}</h1>
        <h4>{{ countAlias }}</h4>

        <v-btn @click="incrementCounter">Count Up</v-btn>
        <v-btn @click="decrementCounter">Count Down</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "About",
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
