<template>
  <div
    class="ads flex flex-col justify-center items-center text-center rounded-lg bg-[#E8E8EA] h-[100px] w-[750px]"
  >
    <h3 class="text-gray-700">{{ ad.title }}</h3>
    <h1 class="text-black font-semibold">{{ ad.content }}</h1>
    <h3 class="text-gray-700">{{ ad.size }}</h3>
  </div>
</template>

<script>
export default {
  name: "Advertisment1",
  data() {
    return {
      ad: {
        title: "Advertisement",
        content: "You can place Ads here",
        size: "750x100",
      }, // Use the helper function to get posts
    };
  },
};
</script>
