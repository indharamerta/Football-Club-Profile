<template>
  <div>
    <div class="card p-1">
      <button
        @click.prevent="showClubs(area.id)"
        class="
          bg-ark-gray
          h-24
          w-32
          p-2
          text-sm
          font-semibold
          rounded-lg
          text-gray-200
          hover:bg-yellow-500 hover: hover:text-ark-gray
        "
      >
        {{ area.name }}
        <p class="font-normal text-gray-400 hover:text-gray-200">
          {{ area.area.name }}
        </p>
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
