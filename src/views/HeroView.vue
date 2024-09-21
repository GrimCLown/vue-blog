<template>
  <div class="content pt-[24px] mb-[114px]">
    <div class="container">
      <div class="relative">
        <img
          :src="HeroImage"
          alt="Hero Image"
          class="w-full h-auto rounded-lg shadow-md"
        />
        <!-- Card overlay with content -->

        <div
          class="absolute bottom-[-64px] left-[64px] h-[304px] w-[598px] bg-white rounded-lg p-[40px] drop-shadow-md"
        >
          <div class="mb-[24px]">
            <span
              class="inline-block bg-blue-100 text-blue-800 text-[14px] text-center py-1 rounded-md mb-2 w-[97px] h-[28px] mb-[16px]"
              >Technology</span
            >
            <h2 class="text-4xl font-semibold text-gray-900 mb-2">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
          </div>

          <div class="flex items-center text-sm text-gray-500">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Author"
            />
            <p>Jason Francisco <span class="mx-2">•</span> August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from "../assets/img/hero-image.png";

export default {
  name: "HeroView",
  data() {
    return {
      HeroImage,
    };
  },
};
</script>
