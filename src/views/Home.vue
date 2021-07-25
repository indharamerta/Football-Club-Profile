<template>
  <div>
    <header>
      <div
        class="
          jumbotron
          flex flex-col
          items-start
          justify-center
          h-screen
          bg-red-400
        "
      >
        <h1 class="text-3xl font-semibold m-2">Welcome to Soccer Club</h1>
        <p class="text-lg font-normal">
          You can find your favourite team and players around the world here!
        </p>
        <button
          @click.prevent="$router.push({ path: '/area' })"
          class="bg-white px-4 py-2 rounded-lg m-3"
        >
          Search All Area
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
