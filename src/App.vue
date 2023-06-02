<template>
  <v-app>
    <v-system-bar color="primary lighten-2"></v-system-bar>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme" text rounded>
        <v-icon @click="show = !show">{{
          !show ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'
        }}</v-icon>
      </v-btn>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary app>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <v-list-item
            exact
            v-for="link in links"
            :key="link.url"
            :to="{ name: link.label }"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-5">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
      <snackbar />
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          exact
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
          <v-icon>{{ 'mdi-github' }}</v-icon>
        </v-btn>
        <v-btn
          class="my-2"
          href="https://www.linkedin.com/in/michelle-e-watts/"
          text
          rounded
        >
          <v-icon>{{ 'mdi-linkedin' }}</v-icon>
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import snackbar from './components/Global/Snackbar.vue'
export default {
  name: 'App',
  components: {
    snackbar,
  },
  data() {
    return {
      drawer: null,
      group: null,
      show: false,
      links: [
        {
          label: 'Home',
          url: '/',
          icon: 'mdi-home',
        },
        {
          label: 'Portfolio',
          url: '/portfolio',
          icon: 'mdi-palette',
        },
        {
          label: 'Weather',
          url: '/weather',
          icon: 'mdi-apple-icloud',
        },
        {
          label: 'Todo',
          url: '/todo',
          icon: 'mdi-check-circle',
        },
        {
          label: 'Contact',
          url: '/contact',
          icon: 'mdi-email',
        },
      ],
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style lang="css"></style>
