<template>
  <v-container class="my-5">
    <v-layout text-center wrap align-center justify-space-around>
      <v-flex xs12 md6 mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Hi! My name is Michelle.
        </h1>

        <p class="subheading font-weight-regular">
          I am a Frontend Developer at Argenti. I have a background in
          graphic/web design and audio engineering. Check out some of my work by
          clicking the portfolio link in the navigation.
        </p>

        <v-btn
          class="mx-2"
          :color="b.color"
          v-for="b in ctaBtn"
          :key="b.id"
          :href="b.href"
          >{{ b.text }}
        </v-btn>
      </v-flex>

      <v-flex xs8 md4>
        <v-img
          :src="require('../assets/profile-pic.jpeg')"
          contain
          class="rounded-circle my-3"
          position="center center"
          alt="profile-picture"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ctaBtn: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/michelle-e-watts/",
        color: "primary",
      },
      {
        text: "GitHub",
        href: "https://github.com/michellewatts20000",
        color: "info",
      },
    ],
  }),
};
</script>
