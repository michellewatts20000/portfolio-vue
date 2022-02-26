export default {
  formatDate(value) {
    if (value) {
      return moment(String(value)).format("MMMM Do YYYY");
    }
  },
};
