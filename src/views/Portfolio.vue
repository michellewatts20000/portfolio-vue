<template>
  <v-container class="my-5">
    <v-row>
      <v-card
        v-for="card in cards"
        :key="`${card.name}-header-link`"
        class="mx-auto my-4"
        max-width="374"
      >
        <v-img height="250" :src="`${card.url}`"></v-img>
        <v-card-title>{{ card.name }}</v-card-title>
        <v-card-text>
          <div>
            {{ card.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn :href="card.deployed" class="primary"> Deployed </v-btn>
          <v-spacer></v-spacer>
          <v-btn :href="card.github" class="secondary"> GitHub </v-btn>
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
          name: "Unpaid overtime calculator",
          url: "https://michellewatts20000.github.io/watts-react-portfolio-chakra/static/media/calculator.f020aa1d.png",
          description:
            "A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year. It's more then you think.",
          deployed: "https://nofreework.com.au/",
          github: "https://github.com/michellewatts20000/unpaid-overtime-calc",
        },
        {
          name: "What's in my pantry?",
          url: "https://michellewatts20000.github.io/watts-react-portfolio-chakra/static/media/pantry.970aba9d.png",
          description:
            "What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry.",
          deployed: "https://michellewatts20000.github.io/whats-in-my-pantry/",
          github: "https://github.com/michellewatts20000/whats-in-my-pantry",
        },
        {
          name: "Tech Blog",
          url: "https://michellewatts20000.github.io/watts-react-portfolio-chakra/static/media/blogger.600da017.png",
          description:
            "A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs.",
          deployed: "https://boiling-beach-99511.herokuapp.com/",
          github: "https://github.com/michellewatts20000/tech-blog",
        },
        {
          name: "Note Taker",
          url: "https://michellewatts20000.github.io/watts-react-portfolio-chakra/static/media/note.5c7d78eb.png",
          description:
            "Write notes and save them for later. Keep track of tasks. Click on the delete button next to a note to delete from the applications memory.",
          deployed: "https://hidden-sands-80026.herokuapp.com/notes",
          github: "https://github.com/michellewatts20000/note-taker",
        },
        {
          name: "Weather dashboard",
          url: "https://michellewatts20000.github.io/watts-react-portfolio-chakra/static/media/weather.43923c93.png",
          description:
            "The weather dashboard is an app that gives you the current weather and UV index for a place you search for and a 5 day forecast.",
          deployed: "https://michellewatts20000.github.io/weather-dashboard",
          github: "https://github.com/michellewatts20000/weather-dashboard",
        },
        {
          name: "Code Quiz",
          url: "https://michellewatts20000.github.io/watts-react-portfolio-chakra/static/media/code-img-land.fa207d68.png",
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
