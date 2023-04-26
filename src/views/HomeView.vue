<script setup>
import AppControlView from "../views/AppControlView.vue";
import SrwOverviewView from "../views/SrwOverviewView.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="fixed w-full z-50 h-24">
    <div
      class="flex justify-center items-center w-full h-full px-5 sm:px-10 velux-bg-white">
      <div class="logo">
        <a href="/" class="w-auto h-auto" title="Velux" aria-label="Velux"
          ><img
            alt=""
            class="w-full h-full logo-image"
            data-test-id="logotype-id"
            src="//sc10103.azureedge.net/-/media/default/velux-red.svg?webp=1"
        /></a>
      </div>
    </div>
  </header>
  <main class="w-full h-auto flex flex-col items-center pt-24">
    <section class="velux-bg-grey w-full" id="home">
      <div class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8">
        <div
          class="col-span-12 sm:col-span-8 flex items-center justify-start px-4 sm:px-16 py-16 sm:py-18">
          <div
            class="flex flex-col gap-6 sm:gap-8 items-start h-full font-velux-black">
            <h1
              class="text-[36px] sm:text-[64px] font-light leading-[2rem] sm:leading-[3.5rem]">
              Hello, Danny!
            </h1>
            <p class="text-[24px] sm:text-[20px] font-light leading-[1.625rem]">
              Here is my technical assessment for the Frontend Developer
              position at Velux :)
            </p>
            <p class="text-[24px] sm:text-[20px] font-bold leading-[1.625rem]">
              You can easily access the pages by clicking on the cards below:
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-white w-full" id="home-cards">
      <div
        class="velux-grid velux-container xl:max-w-[1440px] h-auto p-16 mobile:gap-y-16">
        <div
          class="col-span-12 sm:col-span-6 flex flex-col items-center justify-center gap-8 transition ease-in-out delay-100 sm:hover:scale-110 duration-300">
          <h1
            class="text-[32px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
            App Control
          </h1>
          <div
            class="max-h-[300px] min-h-[180px] aspect-video rounded-lg shadow-2xl cursor-pointer">
            <RouterLink to="/app-control">
              <img
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/AppControl-preview.jpeg"
                alt="App Control page preview" />
            </RouterLink>
          </div>
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex flex-col items-center justify-center gap-8 transition ease-in-out delay-100 sm:hover:scale-110 duration-300">
          <h1
            class="text-[32px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
            SRW Overview
          </h1>
          <div
            class="max-h-[300px] min-h-[180px] aspect-video rounded-lg shadow-2xl cursor-pointer">
            <RouterLink to="/srw-overview">
              <img
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/SRW-preview.jpeg"
                alt="Sloped Roof Window page preview" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
