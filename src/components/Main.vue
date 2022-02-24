<template>
  <v-container fill-height>
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
          <div class="display-2 mb-3">
            Hi! My name is Michelle. I'm a <span class="typing"> </span>
          </div>
        </vue-typed-js>

        <div class="subtitle-1 mb-5">
          I am a Frontend Developer at Argenti. I have a background in
          graphic/web design and audio engineering. Check out some of my work by
          clicking the portfolio link in the navigation.
        </div>

        <v-btn
          :class="`mr-2 ${b.textCol}--text subtitle-2`"
          :color="b.color"
          v-for="b in ctaBtn"
          :key="b.id"
          :to="b.href"
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
        text: "Portfolio",
        href: "/portfolio",
        color: "primary",
        textCol: "white",
      },
      {
        text: "Resume",
        href: "/resume",
        color: "secondary",
        textCol: "white",
      },
    ],
  }),
};
</script>
