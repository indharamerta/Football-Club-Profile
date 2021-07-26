<template>
  <div>
    <header>
      <div
        id="player-bg"
        class="
          container
          mx-auto
          pt-10
          jumbotron
          flex flex-col
          items-center
          justify-center
          h-screen
          shadow-2xl
          bg-blue-200 bg-no-repeat bg-cover
        "
      >
        <div class="bg-ark-gray h-60 w-96 rounded-2xl bg-opacity-90 shadow-2xl">
          <div
            class="
              text-gray-200 text-2xl
              flex flex-col
              justify-start
              items-start
              pt-5
              px-8
            "
          >
            <h1 class="py-2">
              Name:
              <span class="text-yellow-500">{{ detail.name }}</span>
            </h1>
            <p class="py-2">
              Nationality:
              <span class="text-yellow-500">{{ detail.nationality }}</span>
            </p>
            <p class="py-2">
              Position:
              <span class="text-yellow-500">{{ detail.position }}</span>
            </p>
            <p class="py-2">
              Date of Birth:
              <span class="text-yellow-500">{{ detail.dateOfBirth }}</span>
            </p>
          </div>
        </div>
        <!-- <h1 class="text-3xl font-semibold m-2 text-gray-200">
            {{ players.name }} ({{ players.founded }})
        </h1>
        <p class="text-lg font-normal text-gray-200">
          {{ players.venue }}
        </p>
        <p class="text-lg font-normal text-gray-200">
          {{ players.phone }}, {{ players.address }}
        </p> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "PlayerDetail",
  computed: {
    detail() {
      console.log(this.$store.state.detail);
      return this.$store.state.detail;
    },
  },
  created() {
    this.$store.dispatch("showDetail");
  },
};
</script>

<style>
#player-bg {
  background-image: url("../assets/player.jpg");
}
</style>
