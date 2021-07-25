<template>
  <div>
    <header>
      <div
        class="
          jumbotron
          flex flex-col
          items-center
          justify-center
          h-80
          bg-blue-400
        "
      >
        <img :src="players.crestUrl" alt="" />
        <h1 class="text-3xl font-semibold m-2">
          {{ players.name }} ({{ players.founded }})
        </h1>
        <p class="text-lg font-normal">
          {{ players.venue }}
        </p>
        <p class="text-lg font-normal">
          {{ players.address }}
        </p>
      </div>
    </header>
    <div class="container bg-blue-300 h-full mx-auto">
      <div class="grid grid-cols-5">
        <PlayerList
          v-for="player in players.squad"
          :key="player.id"
          :player="player"
        ></PlayerList>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerList from "../components/PlayerList.vue";

export default {
  name: "Player",
  components: {
    PlayerList,
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
  created() {
    this.$store.dispatch("fetchPlayers");
  },
};
</script>

<style></style>
