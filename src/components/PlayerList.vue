<template>
  <div>
    <div
      class="
        card
        m-5
        h-60
        w-52
        flex-shrink-0 flex flex-col
        justify-center
        items-center
        text-center
        bg-ark-gray bg-opacity-60
        rounded-2xl
      "
    >
      <p class="text-gray-200 text-lg font-semibold mb-3">{{ player.name }}</p>
      <h1 class="text-yellow-500 text-8xl">{{ player.shirtNumber }}</h1>
      <button
        @click.prevent="playerDetail(player.id)"
        class="
          bg-ark-gray
          text-yellow-500
          rounded-2xl
          px-6
          py-2
          mt-2
          hover:bg-yellow-500 hover:text-ark-gray
        "
      >
        More Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerList",
  props: ["player"],
  methods: {
    playerDetail(id) {
      this.$store.dispatch("showDetail", id);
    },
  },
};
</script>

<style></style>
