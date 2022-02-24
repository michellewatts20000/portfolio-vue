<template>
  <v-snackbar v-model="snackbar.show">
    {{ snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn @click="hideSnack" color="red" text v-bind="attrs"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "snackbar",
  computed: {
    ...mapState("moduleTodos", {
      snackbar: (state) => state.snackbar,
    }),
  },
  methods: {
    hideSnack() {
      this.$store.commit("moduleTodos/hideSnack");
    },
  },
};
</script>
