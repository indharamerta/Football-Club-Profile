<template>
  <nav
    class="
      flex flex-row
      items-center
      justify-between
      bg-ark-gray
      p-4
      fixed
      w-full
      shadow-2xl
    "
  >
    <span
      class="text-yellow-500 font-bold text-2xl cursor-pointer"
      @click.prevent="$router.push({ path: '/' })"
      >JOJO SOCCER INFO</span
    >
    <ul>
      <li
        v-if="
          $route.name !== 'Home' &&
          $route.name !== 'Player' &&
          $route.name !== 'PlayerDetail'
        "
        @click.prevent="$router.push({ path: '/' })"
        class="text-white cursor-pointer hover:text-yellow-500"
      >
        Back to Home
      </li>
      <li
        v-if="$route.name === 'Player'"
        @click.prevent="$router.push({ path: '/club' })"
        class="text-white cursor-pointer hover:text-yellow-500"
      >
        Back to Club List
      </li>
      <li
        v-if="$route.name === 'PlayerDetail'"
        @click.prevent="$router.push({ path: '/player' })"
        class="text-white cursor-pointer hover:text-yellow-500"
      >
        Back to Player List
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
