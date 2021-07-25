<template>
  <div>
    <div class="container bg-blue-300 h-full mx-auto">
      <div class="grid grid-cols-5">
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

<style></style>
