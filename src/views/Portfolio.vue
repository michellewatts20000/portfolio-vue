<template>
  <v-container fill-height class="my-5">
    <v-row>
      <v-col v-for="card in cards"
        :key="`${card.name}-header-link`">
      <v-card
        style="padding: 15px;"
        class="mx-auto my-4"
        max-width="300"
      >
        <v-img height="200" :src="require(`@/assets/${card.url}`)"></v-img>
        <v-card-title class="title">{{ card.name }}</v-card-title>
        <v-card-subtitle >{{ card.tech }}</v-card-subtitle>
        <v-card-text class="body-1">
          <div>
            {{ card.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn :href="card.deployed" class="primary body-2"> Live Project </v-btn>
          <v-spacer></v-spacer>
          <v-btn :href="card.github" class="secondary body-2"> GitHub </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      show: false,
      cards: [
      {
          name: 'Promptopia',
          tech: 'Next.js, MongoDB, Tailwind CSS',
          url: 'note.jpg',
          description:
            'Create, edit and delete prompts for AI. Built with Next.js, MongoDB and Tailwind CSS.',
          deployed: 'https://comforting-gumption-53ec62.netlify.app/',
          github: 'https://github.com/michellewatts20000/promptopia',
        },
        
        {
          name: "Hearo",
          tech: 'React, MongoDB, Express, Node.js',
          url: 'hearo.png',
          description:
            "Find quiet places to socialise in Sydney. An app that lets you search for quiet places and review places for their loudness.",
          deployed: 'https://still-bayou-61713.herokuapp.com',
          github: 'https://github.com/michellewatts20000/hearo',
        },
        {
          name: "What's in my Pantry?",
          tech: 'Typescript, React, Material UI, REST API',
          url: 'pantry.jpg',
          description:
            "What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry.",
          deployed: 'https://voluble-blini-cd8074.netlify.app/',
          github: 'https://github.com/michellewatts20000/react-pantry',
        },
        {
          name: 'Overtime Calculator',
          tech: 'HTML, CSS, JavaScript',
          url: 'unpaid-ot.jpg',
          description:
            "A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year. It's more then you think.",
          deployed: 'https://nofreework.com.au/',
          github: 'https://github.com/michellewatts20000/unpaid-overtime-calc',
        },
        {
          name: 'Tech Blog',
          tech: 'Handlebars, MySQL, Express.js, Node.js',
          url: 'blogger.jpg',
          description:
            'A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs.',
          deployed: 'https://boiling-beach-99511.herokuapp.com/',
          github: 'https://github.com/michellewatts20000/tech-blog',
        },
        {
          name: 'Weather Dashboard',
          tech: 'HTML, CSS, JavaScript, REST API',
          url: 'weather.jpg',
          description:
            'The weather dashboard is an app that gives you the current weather and UV index for a place you search for and a 5 day forecast.',
          deployed: 'https://michellewatts20000.github.io/weather-dashboard',
          github: 'https://github.com/michellewatts20000/weather-dashboard',
        }
      ],
    }
  },
  methods: {},
}
</script>
