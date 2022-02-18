<template>
  <div>
    <v-icon :size="size" :color="color"> mdi-{{ object }} </v-icon>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: {
    object: { type: String, default: "domain" },
    size: { type: String, default: "40" },
    color: {},
  },
};
</script>

<style></style>
