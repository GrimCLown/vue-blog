<template>
  <div class="flex flex-col border rounded-lg">
    <div
      class="w-full h-[240px] rounded-lg shadow-md mb-[16px]"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    ></div>
    <span
      class="inline-block bg-blue-100 text-blue-800 text-[14px] text-center py-1 rounded-md w-[97px] h-[28px]"
      >Technology</span
    >
    <h2 class="text-4xl font-semibold text-gray-900 mb-2">{{ title }}</h2>
    <div class="flex items-center text-sm text-gray-500">
      <img
        class="w-8 h-8 rounded-full mr-2"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Author"
      />
      <p>{{ author }} <span class="mx-2">•</span> {{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: {
    backgroundImage: String, // Background image for the div
    title: String,
    author: String,
    date: String,
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
