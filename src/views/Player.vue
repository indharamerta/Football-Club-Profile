<template>
  <div>
    <header>
      <div
        id="playerHeader"
        class="
          pt-10
          jumbotron
          flex flex-col
          items-center
          justify-center
          h-96
          shadow-2xl
        "
      >
        <img class="h-2/5" :src="players.crestUrl" alt="" />
        <h1 class="text-3xl font-semibold m-2 text-gray-200">
          <a :href="players.website">
            {{ players.name }} ({{ players.founded }})
          </a>
        </h1>
        <p class="text-lg font-normal text-gray-200">
          {{ players.venue }}
        </p>
        <p class="text-lg font-normal text-gray-200">
          {{ players.phone }}, {{ players.address }}
        </p>
      </div>
    </header>

    <div
      id="playerBody"
      class="container h-full mx-auto bg-center bg-no-repeat bg-cover"
    >
      <h1 class="pt-10 pb-5 text-gray-200 font-bold text-3xl">
        TEAM SQUAD FOR 2020/2021
      </h1>
      <div class="grid lg:grid-cols-5 md:grid-cols-3">
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

<style>
#playerHeader {
  background-image: url("../assets/ball.png");
}

#playerBody {
  background-image: url("../assets/player.jpg");
}
</style>
