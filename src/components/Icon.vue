<template>
  <div>
    <v-icon :size="size" :color="color"> mdi-{{ object }} </v-icon>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: ["object", "size", "color"],
};
</script>

<style></style>
