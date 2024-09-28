<template>
  <div class="pt-[32px] px-[350px]">
    <div class="">
      <span
        class="inline-block bg-blue-100 text-blue-800 text-[14px] text-center py-1 rounded-md mb-2 w-[97px] h-[28px] mb-[16px]"
      >
        Technology
      </span>
      <h1 class="text-4xl font-semibold mb-2 w-[720px]">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div class="flex gap-3">
        <img
          :src="default_profile"
          alt="profile"
          class="w-[28px] h-[28px] rounded-lg shadow-md"
        />
        <h3>Tracey Wilson</h3>
        <h3>August 20, 2022</h3>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { getPosts } from "../helpers/heroCardHelper";
import default_profile from "../assets/img/default-Image.png";
export default {
  name: "SinglePost",
  components: {
    // Registering the HeroContent component
  },
  data() {
    return {
      default_profile,
      posts: getPosts(),
      // HeroImage data
    };
  },
};
</script>
