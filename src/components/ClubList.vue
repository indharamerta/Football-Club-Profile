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
        bg-ark-gray bg-opacity-70
        rounded-2xl
      "
    >
      <img :src="club.crestUrl" alt="img" class="object-scale-down h-1/2" />
      <p class="text-gray-200 mt-5 mb-2 font-semibold">{{ club.name }}</p>
      <button
        @click.prevent="playerList(club.id)"
        class="
          rounded-xl
          bg-yellow-500
          px-6
          py-1
          text-ark-gray
          hover:bg-ark-gray hover:text-yellow-500
        "
      >
        Club Details
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
