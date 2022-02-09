<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12 my-5>
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
    </v-layout>
  </v-container>
</template>
