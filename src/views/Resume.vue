<template>
  <v-container class="my-5">
    <v-layout text-center wrap align-center justify-space-around>
      <v-flex xs12 md8 mb-10>
        <h1 class="display-2 font-weight-bold mb-3">
          Hi! My name is Michelle.
        </h1>

        <h3 class="font-weight-regular mb-5">
          I am a Full Stack web developer utilising a background in graphic
          design to bring creative approaches to problem solving and UX.
        </h3>

        <v-btn
          class="mx-2 white--text mb-10"
          :color="b.color"
          v-for="b in ctaBtn"
          :key="b.id"
          :href="b.href"
          >{{ b.text }}
        </v-btn>
        <div class="text-center mb-10">
          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-server-plus </v-icon>
            JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
          </v-chip>

          <v-chip class="ma-2" color="info" outlined pill>
            GitHub, MongoDB, MySQL
            <v-icon right> mdi-account-outline </v-icon>
          </v-chip>

          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-wrench </v-icon>
            Chakra, Express, React, Vue, Node.js, Handlebars, JQuery, Bootstrap
          </v-chip>
        </div>

        <v-card class="mb-10">
          <v-tabs color="info" horizontal>
            <v-tab>
              <v-icon left> mdi-account-group </v-icon>
              Team-orienated
            </v-tab>
            <v-tab>
              <v-icon left> mdi-weight-lifter </v-icon>
              Strengths
            </v-tab>
            <v-tab>
              <v-icon left> mdi-medal </v-icon>
              Bootcamp certificate
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="text-left">
                    Team-oriented individual with strengths in analytical
                    problem solving and collaborating across diverse groups.
                    Adept at working independently and collaborating with teams
                    across multiple functions to take information from a wide
                    variety of sources and effectively break down concepts in
                    layman terms to diverse audiences.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="text-left">
                    A critical thinker with an eye for aesthetics and a
                    research-based approach to design and storytelling.
                    Strengths include problem solving, project management, and
                    agile adaptation to last minute support changes.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="text-left">
                    A 24-week intensive program focused on gaining technical
                    programming skills in HTML5, CSS3, Javascript, JQuery,
                    Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js &
                    ReactJS.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Resume",
  data: () => ({
    ctaBtn: [
      {
        text: "Download Resume",
        href: "https://drive.google.com/file/d/1krIgipz9jmquz0QYmlm1wQfsUzI-PVIB/view?usp=sharing",
        color: "primary",
      },
    ],
  }),
};
</script>
