import Localbase from 'localbase'
let db = new Localbase('db')

db.config.debug = false

const moduleTodos = {
  namespaced: true,
  state: {
    tasks: [],
    snackbar: { show: false, text: "" },
    sorting: false,
  },
  getters: {},
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
      console.log(tasks);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    hideSnack(state) {
      state.snackbar.show = false;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    addTask(state, newTask) {
      console.log(newTask)
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      db.collection('tasks').add({
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      }).then(() => {
        commit("addTask", newTask);
        commit("showSnackbar", "Task Added!");
      })
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('doneTask', id)
      })
    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id: id }).delete().then(() => {
        commit("deleteTask", id);
        commit("showSnackbar", "Task Deleted!");
      })
    },
    updateTaskTitle({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() => {
        commit("updateTaskTitle", payload);
        commit("showSnackbar", "Task Edited!");
      })
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit("updateTaskDueDate", payload);
        commit("showSnackbar", "Due Date Updated!");
      })
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },
    setTasks({ commit }, tasks) {
      db.collection('tasks')
        .set(tasks)
      commit('setTasks', tasks)
    }
  },
};

export default moduleTodos;
