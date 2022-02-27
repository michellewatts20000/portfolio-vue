<template>
  <v-row class="justify-space-around mt-10">
    <v-btn
      color="primary"
      class="text-center"
      @click="$store.commit('moduleTodos/toggleSorting')"
      >Done sorting</v-btn
    >
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
