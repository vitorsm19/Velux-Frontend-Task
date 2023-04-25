<script setup>
import VeluxHeader from "../components/VeluxHeader.vue";
</script>

<template>
  <VeluxHeader />
  <main class="w-full flex flex-col items-center pt-24" id="srwoverview">
    <section class="velux-bg-white w-full" id="srwoverview-filter">
      <div class="velux-grid velux-container xl:max-w-[1440px] h-auto">
        <div
          class="col-span-12 flex items-center h-[48px] sm:h-[56px] gap-x-2 px-5 sm:px-10">
          <span class="text-[15px] sm:text-[16px] font-light leading-4"
            >Products</span
          >
          <span
            class="text-[15px] sm:text-[16px] font-semibold leading-5 mobile:tracking-[0.25px]"
            >Sloped roof windows</span
          >
          <i class="fa fa-angle-down h-[14px] pt-1"></i>
        </div>
      </div>
    </section>
    <section class="velux-bg-white w-full" id="srwoverview-hero">
      <div class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8">
        <div
          class="col-span-12 sm:col-span-8 flex items-center justify-start px-4 sm:px-10 py-16 sm:py-18">
          <div class="flex flex-col gap-6 sm:gap-8 items-start h-full">
            <h1
              class="text-[36px] sm:text-[64px] font-light leading-[2rem] sm:leading-[3.5rem]">
              Sloped roof windows
            </h1>
            <p
              class="font-velux-black text-[24px] sm:text-[20px] font-light leading-[1.625rem]">
              Add daylight, fresh air and a feeling of more space into your home
              with VELUX roof windows.
              <br /><br />
              Explore our products below.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-white w-full" id="srwoverview-banners">
      <div class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8">
        <div
          class="col-span-12 flex items-center justify-center px-4 sm:px-10"></div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
