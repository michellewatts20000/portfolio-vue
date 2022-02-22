<template>
  <v-container>
    <v-row justify="space-around" align="center">
      <v-col cols="12" lg="8">
        <v-text-field
          v-model="newTaskTitle"
          @click:append="addTask"
          @keyup.enter="addTask"
          class="pa-3"
          outlined
          label="Add Task"
          append-icon="mdi-plus"
          hide-details
          clearable
        ></v-text-field>

        <v-list v-if="tasks.length" class="pt-0" flat>
          <div v-for="task in tasks" :key="task.id">
            <v-list-item
              @click="$store.commit('moduleTodos/doneTask', task.id)"
              :class="{ 'blue lighten-5': task.done }"
            >
              <template v-slot:default>
                <v-list-item-action>
                  <v-checkbox
                    :input-value="task.done"
                    color="primary"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{ 'text-decoration-line-through': task.done }"
                  >
                    {{ task.title }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    @click.stop="
                      $store.commit('moduleTodos/deleteTask', task.id)
                    "
                    icon
                  >
                    <v-icon color="red lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
        <div v-else class="no-tasks">
          <v-icon size="100" color="primary"> mdi-check </v-icon>
          <div class="text-h5 primary--text">No tasks</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Todo",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    ...mapState("moduleTodos", {
      tasks: (state) => state.tasks,
    }),
  },
  methods: {
    addTask() {
      this.$store.commit("moduleTodos/addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
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
