<template>
  <v-row>
    <v-col class="my-5">
      <v-progress-circular
        v-if="active"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    active: Boolean,
  },
};
</script>
