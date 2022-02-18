<template>
  <v-container>
    <v-row class="my-5" justify="center">
      <v-col cols="10" sm="8" md="8" lg="6">
        <h1 class="display-2 mb-3">Contact Me</h1>
        <v-form
          ref="signUpForm"
          @submit.prevent="sendEmail"
          v-model="formValidity"
        >
          <v-text-field
            label="Name"
            type="text"
            name="name"
            v-model="name"
            required
          ></v-text-field>
          <v-text-field
            label="Email"
            type="email"
            name="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>

          <v-textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Message"
            required
          >
          </v-textarea>

          <v-btn
            type="submit"
            color="primary"
            class="mr-4 subtitle-2"
            value="Send"
            :disabled="!formValidity"
            >Submit</v-btn
          >
          <v-btn color="secondary white--text subtitle-2" @click="resetForm"
            >Reset</v-btn
          >
        </v-form>
        <v-alert type="success" v-if="thanks" class="mt-5"
          >Thanks for reaching out, I will reply to your email shortly.</v-alert
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "Contact",
  data: () => ({
    name: "",
    email: "",
    message: "",
    thanks: false,
    emailRules: [
      (value) => !!value || "Email is required.",
      (value) => value.indexOf("@") !== 0 || "Email should have a username.",
      (value) => value.includes("@") || "Email should include an @ symbol.",
      (value) => value.includes(".") || "Email should include a period symbol.",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension.",
    ],
    formValidity: false,
  }),
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_zkbnhdj",
          "template_8eoy6gi",
          e.target,
          "user_eRiVJQWlEW4YWr0jVhl9u",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
      this.$refs.signUpForm.reset();
      this.thanks = true;
    },
  },
};
</script>
