<script setup></script>

<template>
  <header class="fixed w-full z-50 h-24">
    <div
      class="flex justify-between items-center w-full h-full px-5 sm:px-10 velux-bg-white">
      <nav class="flex items-center gap-8 font-bold text-[18px] tablet:hidden">
        <a class="cursor-pointer" href="">Stories</a>
        <a class="cursor-pointer" href="">Spaces</a>
        <a class="cursor-pointer" href="">Products</a>
      </nav>
      <div class="logo">
        <a href="/" class="w-auto h-auto" title="Velux" aria-label="Velux"
          ><img
            alt=""
            class="w-full h-full logo-image"
            data-test-id="logotype-id"
            src="//sc10103.azureedge.net/-/media/default/velux-red.svg?webp=1"
        /></a>
      </div>
      <div class="other-links flex items-center gap-8 font-bold">
        <a href="">
          <i class="fas fa-arrow-right mobile:hidden"></i>
          <span class="font-velux sm:ml-2 mobile:mr-2 text-[18px]"
            >GET STARTED</span
          >
          <i class="fas fa-arrow-right sm:hidden"></i>
        </a>
        <a href="" class="tablet:hidden">
          <img
            src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/search-bars.svg"
            alt="" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo-image {
  max-width: 140px;
  min-width: 95px;
}
</style>
