<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item three-line v-for="(song, index) in songs" :key="index">
      <Icon :object="object" :large="large" color="blue" />
      <v-list-item-content>
        <v-list-item-title>{{ song.name }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ song.description }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{ song.duration }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: { Icon },
  name: "test-list",
  props: ["songs", "currentSong"],
  data() {
    return {
      object: "star",
      large: true,
      color: "blue",
    };
  },
};
</script>

<style></style>
