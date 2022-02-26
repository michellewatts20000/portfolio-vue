<template>
  <div>
    <v-list-item
      @click="$store.commit('moduleTodos/doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ formatDate(task.dueDate) }}</v-list-item-action-text
          >
        </v-list-item-action>
        <v-list-item-action>
          <TaskMenu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from "./TaskMenu.vue";
import moment from "moment";
// import helpers from "../../services/helpers";

export default {
  name: "task",
  props: ["task"],
  components: {
    TaskMenu,
  },
  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY");
      }
    },
  },
};
</script>
