<template>
  <div>
    <header>
      <div
        id="areaHeader"
        class="
          jumbotron
          flex flex-col
          items-center
          justify-center
          h-60
          bg-no-repeat bg-cover
        "
      >
        <h1 class="text-3xl font-semibold mt-10 mb-2 text-gray-200">
          Search by Area
        </h1>
        <p class="text-lg font-normal text-gray-400">
          Find your favourite teams/players from around the world
        </p>
      </div>
    </header>
    <div
      id="areaBody"
      class="bg-no-repeat bg-cover bg-center container h-full mx-auto"
    >
      <div class="grid lg:grid-cols-9 md:grid-cols-5 pt-2">
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

<style>
#areaHeader {
  background-image: url("../assets/ball.png");
}

#areaBody {
  background-image: url("../assets/field.jpg");
}
</style>
