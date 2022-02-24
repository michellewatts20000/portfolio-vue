<template>
  <v-list class="pt-0" flat>
    <task
      v-for="task in $store.state.moduleTodos.tasks"
      :key="task.id"
      :task="task"
    />
  </v-list>
</template>

<script>
import task from "./Task.vue";
export default {
  name: "todolist",
  components: {
    task,
  },
  methods: {},
};
</script>
