<template>
  <div>
    <div
      class="
        card
        m-5
        h-64
        w-52
        flex-shrink-0 flex flex-col
        justify-center
        items-center
        text-center
        bg-white
      "
    >
      <img :src="club.crestUrl" alt="img" class="object-scale-down" />
      <p class="">{{ club.name }}</p>
      <button @click.prevent="playerList(club.id)" class="bg-red-700">
        Get details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClubList",
  props: ["club"],
  methods: {
    playerList(id) {
      this.$store.dispatch("fetchPlayers", id);
    },
  },
};
</script>

<style></style>
