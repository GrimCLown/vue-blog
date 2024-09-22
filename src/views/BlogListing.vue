<template>
  <div class="flex flex-col px-[350px] gap-[48px]">
    <div class="text-center">
      <h1>Page Title</h1>
      <div class="text-center">
        <h1>Home</h1>
        <h1>Link One</h1>
      </div>
    </div>
    <div>
      <div class="relative h-[450px]">
        <!-- Hero Image -->
        <img
          :src="HeroImage"
          alt="Hero Image"
          class="w-full h-full rounded-lg shadow-md"
        />

        <!-- Card overlay with content -->
        <div
          class="absolute bottom-0 left-0 w-[598px] rounded-lg p-[40px] drop-shadow-md"
        >
          <div class="">
            <span
              class="inline-block bg-[#4B6BFB] text-white text-[14px] text-center py-1 rounded-md mb-2 w-[97px] h-[28px] mb-[16px]"
            >
              Technology
            </span>
            <h2 class="text-4xl font-semibold text-white mb-2 w-[720px]">
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

    <div class="flex flex-wrap justify-between items-center gap-4">
      <!-- Pass props to CardTitle component -->
      <HeroCard
        class="w-[392px] h-[488px] p-[16px]"
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :author="post.author"
        :date="post.date"
        :profile-image="post.profileImage"
        :background-image="post.backgroundImage"
      />
      <div class="flex text-center justify-center items-center w-full">
        <button class="border w-[142px] h-[48px]">View all posts</button>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center mb-8">
      <Advertisment1 />
    </div>
  </div>
</template>

<script>
import { getPosts } from "../helpers/heroCardHelper";
import HeroImage from "../assets/img/hero-image.png";
import HeroCard from "../components/heroCard.vue";
import Advertisment1 from "../components/advertisment1.vue";

export default {
  name: "BlogListing",
  components: {
    HeroCard,
    Advertisment1,
  },

  data() {
    return {
      HeroImage,
      posts: getPosts(), // Use the helper function to get posts
    };
  },
};
</script>
