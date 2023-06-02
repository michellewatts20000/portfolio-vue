<template>
  <v-container fill-height>
    <v-row justify="space-around">
      <v-col
        order="2"
        class="mb-5 text-md-left text-center"
        cols="12"
        md="8"
      >
        <!-- <vue-typed-js
          :strings="['Web Developer', 'Designer', 'Drummer', 'Web Developer']"
        >
          <div class="display-1 mb-3">
            Hi! My name is Michelle. <br />I'm a <span class="typing"> </span>
          </div>
        </vue-typed-js> -->

        <div :class="{
            'display-2': $vuetify.breakpoint.mdAndUp,
            'display-1': $vuetify.breakpoint.smOnly
          }" class="mb-3">
          Hi! My name is Michelle. <br />
          I'm a Frontend Developer.
        </div>
        <div class="mb-3 ">
          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-server-plus </v-icon>
            JavaScript, CSS, HTML
          </v-chip>
          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-wrench </v-icon>
            VSCode, GitHub, Jira, BitBucket, Figma
          </v-chip>

          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-account-outline </v-icon>
            Vue.js, React, Node.js, Vuetify, SASS, Jest, MongoDB, MySQL,
            GraphQL, AWS, Git, npm, REST APIs
          </v-chip>
        </div>
        <div class="subtitle-1 mb-5">
          I specialise in Vue and React frameworks. I have a background in graphic,
          web design and audio engineering. Check out some of my work by
          clicking the portfolio button below.
        </div>

        <v-btn
          :class="`mr-2 ${b.textCol}--text body-2`"
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
  name: 'Main',
  data: () => ({
    ctaBtn: [
      {
        text: 'Portfolio',
        href: '/portfolio',
        color: 'primary',
        textCol: 'white',
      },
      {
        text: 'CV',
        href: '/resume',
        color: 'secondary',
        textCol: 'white',
      },
    ],
  }),
}
</script>
