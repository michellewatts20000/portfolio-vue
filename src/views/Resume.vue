<template>
  <v-container fill-height class="my-5">
    <v-row justify="space-around" class="text-center" align="center">
      <v-col cols="12" lg="8">
        <div class="display-1 mb-3">Hi! My name is Michelle.</div>

        <div class="subtitle-1 mb-5">
          I am a frontend web developer utilising a background in graphic
          design to bring creative approaches to problem solving and UX/UI design.
        </div>

        <v-btn
          class="mx-2 white--text mb-10 subtitle-1"
          :color="b.color"
          v-for="b in ctaBtn"
          :key="b.id"
          :href="b.href"
          >{{ b.text }}
        </v-btn>

        <div class="text-center mb-10">
          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-server-plus </v-icon>
            JavaScript, CSS, HTML
          </v-chip>
          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-account-outline </v-icon>
            Vue.js, React, Node.js, Vuetify, Material UI, SASS, Jest, MongoDB,
MySQL, GraphQL, AWS, Git, npm, REST APIs
          </v-chip>

          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-wrench </v-icon>
            VSCode, GitHub, Jira, BitBucket, Figma
          </v-chip>
          <v-chip class="ma-2" color="info" outlined>
            <v-icon left> mdi-wrench </v-icon>
            Bootstrap, Vuetify, Chakra
          </v-chip>
        </div>

        <template>
          <v-expansion-panels class="hidden-lg-and-up">
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header class="subtitle-1">
                {{ item.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content class="text-left body-2">
                {{ item.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>

        <v-card class="mb-10 hidden-md-and-down">
          <v-tabs color="info" horizontal>
            <v-tab class="subtitle-1">
              <v-icon left> mdi-account-group </v-icon>
              Team-orienated
            </v-tab>
            <v-tab class="subtitle-1">
              <v-icon left> mdi-weight-lifter </v-icon>
              Strengths
            </v-tab>
            <v-tab class="subtitle-1">
              <v-icon left> mdi-medal </v-icon>
              Bootcamp certificate
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="text-left body-2">
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
                  <p class="text-left body-2">
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
                  <p class="text-left body-2">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Resume',
  data: () => ({
    items: [
      {
        name: 'Team-orienated',
        description:
          'Team-oriented individual with strengths in analytical problem solving and collaborating across diverse groups. Adept at working independently and collaborating with teams across multiple functions to take information from a wide variety of sources and effectively break down concepts in layman terms to diverse audiences.',
      },
      {
        name: 'Strengths',
        description:
          'A critical thinker with an eye for aesthetics and a research-based approach to design and storytelling. Strengths include problem solving, project management, and agile adaptation to last minute support changes.',
      },
      {
        name: 'Bootcamp certificate',
        description:
          'A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.',
      },
    ],
    ctaBtn: [
      {
        text: 'Download CV',
        href: 'https://drive.google.com/file/d/1krIgipz9jmquz0QYmlm1wQfsUzI-PVIB/view?usp=sharing',
        color: 'primary',
      },
    ],
  }),
}
</script>
