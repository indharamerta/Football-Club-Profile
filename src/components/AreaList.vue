<template>
  <div>
    <div class="card p-3">
      <button
        @click.prevent="showClubs(area.id)"
        class="bg-white h-16 w-24 text-sm"
      >
        {{ area.name }}
        <p>{{ area.area.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaList",
  props: ["area"],
  methods: {
    showClubs(id) {
      this.$store.dispatch("fetchClubs", id);
    },
  },
};
</script>

<style></style>
