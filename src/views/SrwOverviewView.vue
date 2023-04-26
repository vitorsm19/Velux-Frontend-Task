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
      <div
        class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8 sm:gap-y-8 sm:gap-x-8 pb-16">
        <div
          class="col-span-12 flex items-center justify-center px-4 sm:px-10 relative"
          id="2in1roofwindow">
          <div
            class="absolute top-0 right-0 h-[24px] uppercase rounded-full flex place-items-center z-10 gap-2 mr-8 sm:mr-16 mt-4 sm:mt-6 p-2 bg-gray-800 opacity-90 cursor-pointer">
            <i class="fa fa-refresh svg-white max-h-[10px]"></i>
            <span class="text-[10px] font-bold text-white tracking-[.1rem]"
              >Outside View</span
            >
          </div>
          <div
            class="w-full h-full bg-gradient-to-b from-transparent to-gray-950">
            <img
              alt="Room with Velux 2in1 roof window"
              class="w-full h-full object-cover object-center aspect-square sm:aspect-video opacity-50"
              src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/2in1roof.jpeg" />
          </div>
          <div
            class="flex flex-col gap-2 items-baseline text-base absolute justify-end bottom-0 left-0 ml-4 sm:ml-10 p-5 sm:p-8 sm:max-w-[45ch]">
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7">
              2in1 roof window
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <span
              class="text-[15px] sm:text-[16px] font-light leading-5 text-white mobile:pr-2"
              >Double your daylight. One fixed and one openable window in one
              frame.</span
            >
          </div>
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex items-center justify-center px-4 sm:px-0 sm:pl-10 relative"
          id="singleroofwindow">
          <div
            class="absolute top-0 right-0 h-[24px] uppercase rounded-full flex place-items-center z-10 gap-2 mr-8 sm:mr-6 mt-4 sm:mt-6 p-2 bg-gray-800 opacity-90 cursor-pointer">
            <i class="fa fa-refresh svg-white max-h-[10px]"></i>
            <span class="text-[10px] font-bold text-white tracking-[.1rem]"
              >Outside View</span
            >
          </div>
          <div
            class="w-full h-full bg-gradient-to-b from-transparent to-gray-950">
            <img
              alt="Room with Velux single roof window"
              class="w-full h-full object-cover object-center aspect-square sm:aspect-video opacity-50"
              src="https://sc10103.azureedge.net/-/media/products/16-9/sloped-roof-window/standard-single/standard-single-window-hero1.jpg?ch=378&cw=672&webp=1" />
          </div>
          <div
            class="flex flex-col gap-2 items-baseline text-base absolute justify-end bottom-0 left-0 ml-4 sm:ml-10 p-5 sm:p-8 sm:max-w-[45ch]">
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7">
              Single roof window
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <span
              class="text-[15px] sm:text-[16px] font-light leading-5 text-white mobile:pr-2"
              >The classic roof window.</span
            >
          </div>
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex items-center justify-center px-4 sm:px-0 sm:pr-10 relative"
          id="3in1roofwindow">
          <div
            class="absolute top-0 right-0 h-[24px] uppercase rounded-full flex place-items-center z-10 gap-2 mr-8 sm:mr-16 mt-4 sm:mt-6 p-2 bg-gray-800 opacity-90 cursor-pointer">
            <i class="fa fa-refresh svg-white max-h-[10px]"></i>
            <span class="text-[10px] font-bold text-white tracking-[.1rem]"
              >Outside View</span
            >
          </div>
          <div
            class="w-full h-full bg-gradient-to-b from-transparent to-gray-950">
            <img
              alt="Room with Velux 3in1 roof window"
              class="w-full h-full object-cover object-center aspect-square sm:aspect-video opacity-50"
              src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/3in1roof.jpeg" />
          </div>
          <div
            class="flex flex-col gap-2 items-baseline text-base absolute justify-end bottom-0 left-0 ml-4 sm:ml-10 p-5 sm:p-8 sm:max-w-[45ch]">
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7">
              3in1 window
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <span
              class="text-[15px] sm:text-[16px] font-light leading-5 text-white mobile:pr-2"
              >Increased feel of space. One fixed and two openable windows in
              one frame.</span
            >
          </div>
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex items-center justify-center px-4 sm:px-0 sm:pl-10 relative"
          id="multipleomegaroofwindow">
          <div
            class="absolute top-0 right-0 h-[24px] uppercase rounded-full flex place-items-center z-10 gap-2 mr-8 sm:mr-6 mt-4 sm:mt-6 p-2 bg-gray-800 opacity-90 cursor-pointer">
            <i class="fa fa-refresh svg-white max-h-[10px]"></i>
            <span class="text-[10px] font-bold text-white tracking-[.1rem]"
              >Outside View</span
            >
          </div>
          <div class="w-full h-full velux-gradient-bg">
            <img
              alt="Room with Velux Omega roof window"
              class="w-full h-full object-cover object-center aspect-square sm:aspect-video opacity-50"
              src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/omega.jpeg" />
          </div>
          <div
            class="flex flex-col gap-2 items-baseline text-base absolute justify-end bottom-0 left-0 ml-4 sm:ml-10 p-5 sm:p-8 sm:max-w-[45ch]">
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7 sm:hidden">
              Multiple windows
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7 mobile:hidden">
              Ω
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <span
              class="text-[15px] sm:text-[16px] font-light leading-5 text-white mobile:pr-2"
              >Customise your own unique combination of VELUX windows.</span
            >
          </div>
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex items-center justify-center px-4 sm:px-0 sm:pr-10 relative"
          id="3in1roofwindow">
          <div
            class="absolute top-0 right-0 h-[24px] uppercase rounded-full flex place-items-center z-10 gap-2 mr-8 sm:mr-16 mt-4 sm:mt-6 p-2 bg-gray-800 opacity-90 cursor-pointer">
            <i class="fa fa-refresh svg-white max-h-[10px]"></i>
            <span class="text-[10px] font-bold text-white tracking-[.1rem]"
              >Outside View</span
            >
          </div>
          <div class="w-full h-full bg-gradient-to-b from-transparent to-black">
            <img
              alt="Room with Velux roof/balcony/terrace window"
              class="w-full h-full object-cover object-center aspect-square sm:aspect-video opacity-50"
              src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/roofbalcony.jpeg" />
          </div>
          <div
            class="flex flex-col gap-2 items-baseline text-base absolute justify-end bottom-0 left-0 ml-4 sm:ml-10 p-5 sm:p-8 sm:max-w-[45ch]">
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7">
              Roof balcony, and terrace
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <span
              class="text-[15px] sm:text-[16px] font-light leading-5 text-white mobile:pr-2"
              >Transform your home and welcome in the outdoors.</span
            >
          </div>
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex items-center justify-center px-4 sm:px-0 sm:pl-10 relative"
          id="singleroofwindow">
          <div
            class="absolute top-0 right-0 h-[24px] uppercase rounded-full flex place-items-center z-10 gap-2 mr-8 sm:mr-6 mt-4 sm:mt-6 p-2 bg-gray-800 opacity-90 cursor-pointer">
            <i class="fa fa-refresh svg-white max-h-[10px]"></i>
            <span class="text-[10px] font-bold text-white tracking-[.1rem]"
              >Outside View</span
            >
          </div>
          <div class="w-full h-full grey-bg velux-gradient-bg">
            <img
              alt="Special function windows"
              class="w-full h-full object-cover object-center aspect-square sm:aspect-video opacity-0"
              src="https://sc10103.azureedge.net/-/media/products/16-9/sloped-roof-window/standard-single/standard-single-window-hero1.jpg?ch=378&cw=672&webp=1" />
          </div>
          <div
            class="flex flex-col gap-2 items-baseline text-base absolute justify-end bottom-0 left-0 ml-4 sm:ml-10 p-5 sm:p-8 sm:max-w-[45ch]">
            <h3
              class="text-[20px] sm:text-[24px] flex items-center text-white font-light leading-6 sm:leading-7">
              Special function windows
              <i class="ml-2 svg-white cursor-pointer">
                <img
                  src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/arrowleft.svg"
                  alt="" />
              </i>
            </h3>
            <span
              class="text-[15px] sm:text-[16px] font-light leading-5 text-white mobile:pr-2"
              >Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.</span
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.velux-gradient-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.64) 100%
  );
}
.grey-bg {
  background-color: #c4c4c4;
}
</style>
