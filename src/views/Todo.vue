<template>
  <v-container fill-height>
    <v-row justify="space-around" align="center">
      <v-col cols="12" lg="8">
        <div class="display-1 text-center mb-3">Add a Todo</div>
        <textfield />
        <todolist v-if="$store.state.moduleTodos.tasks.length" />
        <notask class="text-center" v-else />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import textfield from "../components/Todo/TextField.vue";
import todolist from "../components/Todo/TodoList.vue";
import notask from "../components/Todo/NoTasks.vue";

export default {
  name: "Todo",
  components: {
    textfield,
    todolist,
    notask,
  },
};
</script>
