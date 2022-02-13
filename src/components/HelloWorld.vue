<template>
  <v-container fill-height class="mt-3 mb-5">
    <v-row justify="center" align="center">
      <v-col class="text-sm-center text-md-left text-center" cols="12" md="8">
        <h1 class="display-2 font-weight-bold mb-3">
          Hi! My name is Michelle.
        </h1>

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

      <v-col md="3" sm="4" cols="6">
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
  name: "HelloWorld",

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
        color: "info",
        textCol: "black",
      },
    ],
  }),
};
</script>
