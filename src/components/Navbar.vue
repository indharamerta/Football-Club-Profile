<template>
  <nav
    class="
      flex flex-row
      items-center
      justify-between
      bg-gray-700
      p-4
      fixed
      w-full
    "
  >
    <span
      class="text-white font-bold text-2xl hover:text-yellow-400 cursor-pointer"
      >JOJO SOCCER INFO</span
    >
    <ul>
      <li
        v-if="$route.name !== 'Home'"
        @click.prevent="$router.push({ path: '/' })"
        class="text-white cursor-pointer"
      >
        Back to Home
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
