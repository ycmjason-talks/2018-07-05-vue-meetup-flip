<template>
  <main>
    <button @click="shuffle">shuffle</button>
    <transition-group>
      <div v-for="team in teams" class="team" :key="team">
        {{ team }}
      </div>
    </transition-group>
  </main>
</template>

<script>
const TEAMS = ['Argentina', 'Australia', 'Belgium', 'Brazil', 'Colombia', 'Costa Rica', 'Croatia', 'Denmark', 'Egypt', 'England', 'France', 'Germany', 'Iceland', 'IR Iran', 'Japan', 'Korea Republic', 'Mexico', 'Morocco', 'Nigeria', 'Panama', 'Peru', 'Poland', 'Portugal', 'Russia', 'Saudi Arabia', 'Senegal', 'Serbia', 'Spain', 'Sweden', 'Switzerland', 'Tunisia', 'Uruguay'];
const shuffle = ([...arr]) => arr.sort(() => Math.random() - 0.5);

export default {
  data: () => ({
    teams: TEAMS,
  }),

  methods: {
    shuffle() {
      this.teams = shuffle(TEAMS);
    },
  },
};
</script>

<style scoped>
.team {
  border: 1px black dashed;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
}

.v-move {
  transition: transform 1s;
}
</style>
