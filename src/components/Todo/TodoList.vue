<template>
  <v-list class="pt-0" flat>
    <draggable v-model="myList" handle=".handle">
      <task
        v-for="task in $store.state.moduleTodos.tasks"
        :key="task.id"
        :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import task from "./Task.vue";
import draggable from "vuedraggable";
export default {
  name: "todolist",
  components: {
    task,
    draggable,
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.moduleTodos.tasks;
      },
      set(value) {
        this.$store.commit("moduleTodos/setTasks", value);
      },
    },
  },
};
</script>
