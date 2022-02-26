<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" color="primary" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <Dialog
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
    <DialogDueDate
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    />

    <DialogEdit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
  </div>
</template>

<script>
import Dialog from "./Dialog/Dialog.vue";
import DialogEdit from "./Dialog/DialogEdit.vue";
import DialogDueDate from "./Dialog/DialogDueDate.vue";
export default {
  components: {
    Dialog,
    DialogEdit,
    DialogDueDate,
  },
  props: ["task"],
  data: () => ({
    dialogs: { delete: false, edit: false, dueDate: false },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>
