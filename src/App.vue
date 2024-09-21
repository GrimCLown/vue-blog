<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="px-[350px]">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue"; // Importing the Navbar component
import Hero from "./components/hero.vue"; // Importing the Hero component

export default {
  components: {
    Navbar,
    Hero, // Registering the component
  },
};
</script>
