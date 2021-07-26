<template>
  <div>
    <header>
      <div
        id="home"
        class="
          jumbotron
          flex flex-col
          items-start
          justify-center
          h-screen
          bg-no-repeat bg-cover bg-center
          p-10
        "
      >
        <h1 class="text-gray-100 text-4xl font-semibold m-2">
          Welcome to JOJO Soccer
        </h1>
        <p class="text-gray-400 text-lg font-normal mx-2">
          Where you can find your favourite team and players info!
        </p>
        <button
          @click.prevent="$router.push({ path: '/area' })"
          class="
            text-black
            font-semibold
            bg-yellow-500
            px-4
            py-2
            rounded-lg
            my-4
            mx-2
            hover:text-yellow-500 hover:bg-ark-gray
            shadow-inner
          "
        >
          Search All Clubs
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

<style>
#home {
  background-image: url("../assets/shoes.png");
}
</style>
