<template>
  <v-container>
    <h1>{{ song.name }}</h1>
    <p>{{ song.description }}</p>
  </v-container>
</template>

<script>
export default {
  name: "test-comp",
  props: ["song"],
  data() {
    return {};
  },
};
</script>
