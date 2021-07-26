<template>
  <div>
    <div
      id="club-bg"
      class="container h-full mx-auto bg-no-repeat bg-center bg-cover"
    >
      <div class="grid lg:grid-cols-5 md:grid-cols-3 pt-20">
        <ClubList v-for="club in clubs" :key="club.id" :club="club"></ClubList>
      </div>
    </div>
  </div>
</template>

<script>
import ClubList from "../components/ClubList.vue";

export default {
  name: "Club",
  components: {
    ClubList,
  },
  computed: {
    clubs() {
      return this.$store.state.clubs;
    },
  },
  created() {
    this.$store.dispatch("fetchClubs");
  },
};
</script>

<style>
#club-bg {
  background-image: url("../assets/field.jpg");
}
</style>
