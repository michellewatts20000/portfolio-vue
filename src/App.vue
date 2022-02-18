<template>
  <v-app>
    <v-app-bar color="primary" dense app>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="hidden-md-and-up" icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon> </v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.url"
            :to="{ name: link.label }"
          >
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text rounded to="/">
        <v-icon>{{ "mdi-home" }}</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        :to="{ name: link.label }"
      >
        {{ link.label }}
      </v-btn>
      <v-btn @click="toggleTheme" text rounded>
        <v-icon @click="show = !show">{{
          !show ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny"
        }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color=""
          text
          rounded
          class="my-2"
          :to="{ name: link.label }"
        >
          {{ link.label }}
        </v-btn>

        <v-flex primary lighten-2 py-4 text-center xs12>
          {{ new Date().getFullYear() }} —
          <strong>Michelle Watts' Portfolio</strong>
        </v-flex>
        <v-btn
          class="my-2"
          href="https://github.com/michellewatts20000"
          text
          rounded
        >
          <v-icon>{{ "mdi-github" }}</v-icon>
        </v-btn>
        <v-btn
          class="my-2"
          href="https://www.linkedin.com/in/michelle-e-watts/"
          text
          rounded
        >
          <v-icon>{{ "mdi-linkedin" }}</v-icon>
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: null,
      show: false,
      links: [
        {
          label: "Portfolio",
          url: "/portfolio",
        },
        {
          label: "Resume",
          url: "/resume",
        },
        {
          label: "Contact",
          url: "/contact",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="sass"></style>
