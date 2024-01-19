<template>
  <section id="navbar">
    <div
      class="container max-w-full lg2:max-w-1536 py-4 md:px-0 xs:px-4 xm:mx-0"
    >
      <div v-if="screenWidth >= 768" class="flex max-w-full md:mx-2 xl:mx-44">
        <div
          class="flex py-3 w-1/3 justify-center items-center bg-primary border-2 rounded-tl-lg rounded-bl-lg border-primary"
        >
          <img src="./../assets/sword.png" alt="" class="w-12" />
          <h4 class="font-silkscreen text-white text-lg">HAHAHAHA</h4>
        </div>

        <div
          class="flex justify-around items-center font-silkscreen lg:text-xl md:text-lg text-primary flex-1"
        >
          <div class="">
            <a href="#" class="hover:text-third transition duration-300"
              >ABOUT</a
            >
          </div>
          <div class="">
            <a href="#" class="hover:text-third transition duration-300"
              >PROJECTS</a
            >
          </div>
          <div class="">
            <a href="#" class="hover:text-third transition duration-300"
              >BLOG</a
            >
          </div>
        </div>

        <div
          class="flex justify-center items-center space-x-8 w-1/4 rounded-tr-lg rounded-br-lg"
        >
          <div class="rounded-full border-circle p-2 bg-gray-200">
            <img src="./../assets/icons/linkedin.svg" alt="" class="w-5" />
          </div>
          <div class="rounded-full border-circle p-2 bg-gray-200">
            <img src="./../assets/icons/medium.svg" alt="" class="w-5" />
          </div>
          <div class="rounded-full border-circle p-2 bg-gray-200">
            <img src="./../assets/icons/github.svg" alt="" class="w-5" />
          </div>
        </div>
      </div>

      <div v-else class="flex justify-end ml-auto">
        <button
          @click="toggleNavbar"
          id="hamburger-btn"
          class="text-white focus:outline-none"
        >
          <img
            src="./../assets/hamburger.svg"
            alt="hamburger menu"
            class="w-8"
          />
        </button>
      </div>

      <Transition name="slide">
        <div
          v-show="showNavbar"
          class="flex flex-col items-center h-80 transition-all ease-in duration-100 w-full py-4 right-0"
          :style="{ zIndex: zIndex, position: 'fixed', background: 'white' }"
        >
          <div
            class="flex flex-col mb-4 justify-around items-center font-silkscreen lg:text-xl md:text-lg text-primary flex-1"
          >
            <div class="">
              <a href="#" class="hover:text-third transition duration-300"
                >ABOUT</a
              >
            </div>
            <div class="">
              <a href="#" class="hover:text-third transition duration-300"
                >PROJECTS</a
              >
            </div>
            <div class="">
              <a href="#" class="hover:text-third transition duration-300"
                >BLOG</a
              >
            </div>
          </div>
          <div class="flex space-x-8 rounded-tr-lg rounded-br-lg">
            <div class="rounded-full border-circle p-2 bg-gray-200">
              <img src="./../assets/icons/linkedin.svg" alt="" class="w-5" />
            </div>
            <div class="rounded-full border-circle p-2 bg-gray-200">
              <img src="./../assets/icons/medium.svg" alt="" class="w-5" />
            </div>
            <div class="rounded-full border-circle p-2 bg-gray-200">
              <img src="./../assets/icons/github.svg" alt="" class="w-5" />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const screenWidth = ref(window.innerWidth);
    const showNavbar = ref(false);
    const zIndex = ref(1);

    const handleResize = () => {
      screenWidth.value = window.innerWidth;
    };

    const toggleNavbar = () => {
      showNavbar.value = !showNavbar.value;
      zIndex.value = showNavbar.value ? 2 : 1;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      screenWidth,
      showNavbar,
      toggleNavbar,
      zIndex
    };
  },
};
</script>
