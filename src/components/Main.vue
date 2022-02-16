<template>
  <v-container fill-height class="mt-3 mb-5">
    <v-row justify="space-around" align="center">
      <v-col
        order="2"
        class="text-sm-center text-md-left text-center mb-5"
        cols="12"
        md="8"
      >
        <vue-typed-js
          :strings="['Web Developer', 'Designer', 'Drummer', 'Web Developer']"
        >
          <h1 class="display-2 font-weight-bold mb-3">
            Hi! My name is Michelle. I'm a <span class="typing"> </span>
          </h1>
        </vue-typed-js>

        <h3 class="font-weight-regular mb-5">
          I am a Frontend Developer at Argenti. I have a background in
          graphic/web design and audio engineering. Check out some of my work by
          clicking the portfolio link in the navigation.
        </h3>

        <v-btn
          :class="`mr-2 ${b.textCol}--text`"
          :color="b.color"
          v-for="b in ctaBtn"
          :key="b.id"
          :href="b.href"
          >{{ b.text }}
        </v-btn>
      </v-col>

      <v-col order="1" lg="3" md="4" sm="4" cols="6">
        <v-img
          :src="require('../assets/profile-pic.jpeg')"
          contain
          class="rounded-circle my-3"
          position="center center"
          alt="profile-picture"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",

  data: () => ({
    ctaBtn: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/michelle-e-watts/",
        color: "primary",
        textCol: "white",
      },
      {
        text: "GitHub",
        href: "https://github.com/michellewatts20000",
        color: "secondary",
        textCol: "white",
      },
    ],
  }),
};
</script>
