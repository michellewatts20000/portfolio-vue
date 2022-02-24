<template>
  <v-container fill-height>
    <v-row justify="space-around" align="center">
      <v-col cols="12" lg="8">
        <textfield />
        <todolist v-if="$store.state.moduleTodos.tasks.length" />
        <notask v-else />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapState } from "vuex";
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

  // computed: {
  //   ...mapState("moduleTodos", {
  //     tasks: (state) => state.tasks,
  //   }),
  // },
};
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
