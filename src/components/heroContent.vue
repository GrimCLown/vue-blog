<template>
  <div class="content">
    <!-- Advertisement Section -->

    <section class="flex flex-col justify-center items-center mb-8">
      <Advertisment1 />
    </section>

    <!-- Latest Post Section -->
    <section class="flex flex-col text-start gap-y-[32px] px-[350px]">
      <h1 class="text-[24px] font-bold mb-4">Latest Post</h1>

      <div class="flex flex-wrap justify-between gap-4">
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
      </div>
      <div class="flex items-center justify-center mb-20">
        <button class="border w-[142px] h-[48px]">View all posts</button>
      </div>
    </section>
    <section class="flex flex-col justify-center items-center mb-8">
      <Advertisment1 />
    </section>
  </div>
</template>

<script>
import { getPosts } from "../helpers/heroCardHelper"; // Import the helper
import HeroCard from "./heroCard.vue";
import Advertisment1 from "./advertisment1.vue";

export default {
  name: "HeroContent",
  components: {
    HeroCard,
    Advertisment1,
  },
  data() {
    return {
      posts: getPosts(), // Use the helper function to get posts
    };
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
