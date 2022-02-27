<template>
  <v-container fill-height>
    <v-row>
      <v-card
        v-for="card in cards"
        :key="`${card.name}-header-link`"
        class="mx-auto my-4"
        max-width="300"
      >
        <v-img height="200" :src="require(`@/assets/${card.url}`)"></v-img>
        <v-card-title class="title">{{ card.name }}</v-card-title>
        <v-card-text class="body-2">
          <div>
            {{ card.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn :href="card.deployed" class="primary body-2"> Deployed </v-btn>
          <v-spacer></v-spacer>
          <v-btn :href="card.github" class="secondary body-2"> GitHub </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      show: false,
      cards: [
        {
          name: "Unpaid Overtime Calculator",
          url: "unpaid-ot.png",
          description:
            "A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year. It's more then you think.",
          deployed: "https://nofreework.com.au/",
          github: "https://github.com/michellewatts20000/unpaid-overtime-calc",
        },
        {
          name: "What's in my Pantry?",
          url: "pantry.png",
          description:
            "What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry.",
          deployed: "https://michellewatts20000.github.io/whats-in-my-pantry/",
          github: "https://github.com/michellewatts20000/whats-in-my-pantry",
        },
        {
          name: "Tech Blog",
          url: "blogger.png",
          description:
            "A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs.",
          deployed: "https://boiling-beach-99511.herokuapp.com/",
          github: "https://github.com/michellewatts20000/tech-blog",
        },
        {
          name: "Note Taker",
          url: "note.png",
          description:
            "Write notes and save them for later. Keep track of tasks. Click on the delete button next to a note to delete from the applications memory.",
          deployed: "https://hidden-sands-80026.herokuapp.com/notes",
          github: "https://github.com/michellewatts20000/note-taker",
        },
        {
          name: "Weather Dashboard",
          url: "weather.png",
          description:
            "The weather dashboard is an app that gives you the current weather and UV index for a place you search for and a 5 day forecast.",
          deployed: "https://michellewatts20000.github.io/weather-dashboard",
          github: "https://github.com/michellewatts20000/weather-dashboard",
        },
        {
          name: "Code Quiz",
          url: "code.png",
          description:
            "You have 75 seconds to answer 5 coding questions. Once you have finished the quiz you will be asked to enter your initials to the high scores.",
          deployed: "https://michellewatts20000.github.io/code-quiz/",
          github: "https://github.com/michellewatts20000/code-quiz",
        },
      ],
    };
  },
  methods: {},
};
</script>
