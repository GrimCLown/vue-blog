<template>
  <div class="bg-[#E8E8EA] px-[350px] pt-[64px]">
    <div class="flex justify-between h-[256px]">
      <div class="w-[280px] gap-y-[12px]">
        <h2 class="font-semibold mb-[12px] text-[18px]">About</h2>
        <p class="font-normal mb-[24px] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div>
          <p class="font-bold">
            Email:
            <span class="font-normal">emai@email.com</span>
          </p>
          <p class="font-bold">
            phone:
            <span class="font-normal">09000000000</span>
          </p>
        </div>
      </div>
      <div class="">
        <h2 class="font-semibold text-[18px] mb-[24px]">Quick Links</h2>

        <ul class="flex flex-col justify-between h-full pb-[64px]">
          <li class="flex-grow"><a routerLink="/">Home</a></li>
          <li class="flex-grow"><a routerLink="/blog">Blog</a></li>
          <li class="flex-grow"><a routerLink="/">Single Post</a></li>
          <li class="flex-grow"><a routerLink="/">Pages</a></li>
          <li class="flex-grow"><a routerLink="/">Contact</a></li>
        </ul>
      </div>
      <div>
        <h2 class="font-semibold text-[18px] mb-[24px]">Category</h2>
        <ul class="flex flex-col justify-between h-full pb-[64px]">
          <li><a routerLink="/">Lifestyle</a></li>
          <li><a routerLink="/blog">Technology</a></li>
          <li><a routerLink="/">Travel</a></li>
          <li><a routerLink="/">Business</a></li>
          <li><a routerLink="/">Economy</a></li>
          <li><a routerLink="/">Sports</a></li>
        </ul>
      </div>
      <div
        class="bg-white w-[392px] py-[32px] px-[36px] flex flex-col items-center rounded-lg"
      >
        <div class="text-center mb-[30px]">
          <h1 class="font-bold text-[20px]">Weekly Newsletter</h1>
          <p class="text-[16px]">Get blog articles and offers via email</p>
        </div>
        <div class="w-full">
          <div
            class="flex items-center border px-[16px] py-[12px] rounded-lg w-full"
          >
            <input
              type="text"
              placeholder="Search"
              class="rounded-md text-sm w-full"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z"
                fill="#696A75"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z"
                fill="#696A75"
              />
            </svg>
          </div>

          <button class="bg-blue-500 w-full h-[48px] rounded-lg mt-[8px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        class="flex justify-between mt-[64px] border-t border-gray-300 py-[32px]"
      >
        <div class="flex items-center gap-2">
          <div>logo</div>
          <div>
            <h1 class="text-[20px]">title</h1>
            <p>© JS Template 2023. All Rights Reserved.</p>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <ul class="flex gap-[32px]">
            <li><a routerLink="/">Terms of Use</a></li>
            <li><a routerLink="/">Privacy Policy</a></li>
            <li><a routerLink="/">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Add custom styles here */
</style>
