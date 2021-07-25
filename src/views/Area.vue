<template>
  <div>
    <header>
      <div
        class="
          jumbotron
          flex flex-col
          items-center
          justify-center
          h-60
          bg-blue-400
        "
      >
        <h1 class="text-3xl font-semibold m-2">All Area</h1>
        <p class="text-lg font-normal">
          You can find your favourite team and players around the world here!
        </p>
      </div>
    </header>
    <div class="container bg-blue-900 h-full mx-auto">
      <div class="grid lg:grid-cols-10 md:grid-cols-5">
        <AreaList v-for="area in areas" :key="area.id" :area="area"></AreaList>
      </div>
    </div>
  </div>
</template>

<script>
import AreaList from "../components/AreaList.vue";

export default {
  name: "Area",
  components: {
    AreaList,
  },
  computed: {
    areas() {
      return this.$store.state.areas;
    },
  },
  created() {
    this.$store.dispatch("fetchArea");
  },
};
</script>

<style></style>
