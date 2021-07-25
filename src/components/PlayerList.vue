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
      <h1 class="text-3xl">{{ player.shirtNumber }}</h1>
      <p class="">{{ player.name }}</p>
      <button @click.prevent="playerList(club.id)" class="bg-red-700">
        Get details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerList",
  props: ["player"],
};
</script>

<style></style>
