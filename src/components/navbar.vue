<template>
  <header class="bg-white shadown flex justify-center">
    <nav class="flex items-center justify-center h-[100px] w-full gap-[118px]">
      <div class="logo"><h1>Metablog</h1></div>
      <div class="flex justify-center nav-items w-[942px] gap-[21px]">
        <ul
          class="flex text-center items-center text-gray-600 text-base gap-[24px] px-[115px] whitespace-nowrap"
        >
          <li><a href="#" class="hover:text-gray-800">Home</a></li>
          <li><a href="#" class="hover:text-gray-800">Blog</a></li>
          <li><a href="#" class="hover:text-gray-800">Single Post</a></li>
          <li><a href="#" class="hover:text-gray-800">Pages</a></li>
          <li><a href="#" class="hover:text-gray-800">Contact</a></li>
        </ul>
        <div class="search">
          <div class="relative">
            <input
              type="text"
              placeholder="Search"
              class="bg-gray-100 px-4 py-2 rounded-md text-sm"
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.9 14.32a7.5 7.5 0 111.42-1.42l4.94 4.94a1 1 0 01-1.42 1.42l-4.94-4.94zM7.5 13a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
