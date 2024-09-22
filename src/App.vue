<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <Navbar class="px-[350px]" />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue"; // Importing the Navbar component // Importing the Hero component
import Footer from "./components/footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
