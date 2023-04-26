<script setup>
import VeluxHeader from "../components/VeluxHeader.vue";

import { ref } from "vue";

const comparison = ref([
  {
    name: "Smartphone control",
    check1: true,
    check2: true,
    check3: true,
  },
  {
    name: "Scheduling​",
    check1: true,
    check2: true,
    check3: true,
  },
  {
    name: "Voice control​​",
    check1: true,
    check2: true,
    check3: true,
  },
  {
    name: "Interoperability​​",
    check1: true,
    check2: true,
    check3: true,
  },
  {
    name: "Automatic heat protection​​​​​",
    check1: true,
    check2: true,
    check3: true,
  },
  {
    name: "Ventilation timer​​",
    check1: true,
    check2: true,
    check3: true,
  },
  {
    name: "Sensor-based ventilation",
    check1: false,
    check2: false,
    check3: true,
  },
  {
    name: "Live weather data​",
    check1: false,
    check2: false,
    check3: true,
  },
  {
    name: "Weather watchdogs​",
    check1: false,
    check2: false,
    check3: true,
  },
]);

const filteredOne = ref(
  comparison.value.filter((item) => item.check1 === true)
);
const filteredTwo = ref(
  comparison.value.filter((item) => item.check2 === true)
);
const filteredThree = ref(
  comparison.value.filter((item) => item.check3 === true)
);
</script>

<template>
  <VeluxHeader />
  <main class="w-full flex flex-col items-center" id="appcontrol">
    <section class="velux-bg-white w-full" id="appcontrol-hero1">
      <div
        class="velux-grid velux-container xl:max-w-[1440px] h-auto pt-24"
        id="appcontrol-hero1">
        <div
          class="col-span-3 pt-5 sm:pt-20 bg-inherit pl-4 sm:pl-8 mobile:top-20 mobile:z-10 mobile:flex mobile:items-center">
          <i class="fas fa-arrow-left pl-4 mobile:hidden"></i>
          <span class="ml-2 text-[16px] mobile:hidden"
            >Back to Intelligent Home Control</span
          >
          <i class="fas fa-arrow-left pl-4 sm:hidden svg-white"></i>
          <span class="ml-2 text-[16px] sm:hidden text-white font-light"
            >Back</span
          >
        </div>
        <div class="sm:col-span-9 col-span-12 mobile:-mt-16">
          <div class="h-full w-full">
            <img
              alt="Mon and her son looking out of a Velux window"
              class="sm:w-[1560px] mobile:max-w-[767px] mobile:w-full mobile:min-h-[377px] sm:h-auto object-cover sm:object-center mobile:object-left"
              src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/AppControlHero.png" />
            <div
              class="buy flex justify-end w-full gap-x-6 px-8 py-6 -mt-24 mobile:hidden">
              <p class="text-white bg-transparent flex items-center">
                <span
                  class="text-[24px] bg-inherit text-inherit mr-1 mb-[.4rem]"
                  >X.XXX</span
                >
                € Incl. VAT
              </p>
              <button
                class="velux-bg-red hover:bg-red-600 uppercase font-bold py-4 px-6 h-[52px] w-32 flex justify-center items-center text-white">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-grey w-full" id="appcontrol-hero2">
      <div
        class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8 p-4 sm:p-8 mobile:gap-y-12">
        <div
          class="col-span-12 sm:col-span-8 flex flex-col gap-4 sm:gap-8 py-8 sm:py-16 px-5 sm:px-[104px] h-auto -mt-28 sm:-mt-36 -ml-4 sm:ml-0 velux-bg-white">
          <span
            class="font-velux-grey uppercase text-[11px] sm:text-[16px] font-bold tracking-[.125rem] leading-21">
            Intelligent Home Control
          </span>
          <h1 class="text-[36px] sm:text-[64px] font-light">
            VELUX App Control​
          </h1>
          <p
            class="font-velux-grey text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
            Control all your VELUX electrical products right from your phone.
            Open and close your roof windows, blinds, and shutters with a single
            swipe or group your VELUX INTEGRA products to control them in
            groups. Share the VELUX INTEGRA app with your whole household to
            control all your windows when you're at home or on the go.
          </p>
          <ul
            class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-6 font-velux-grey mobile:pt-4">
            <li>
              <div class="flex items-center gap-4 text-base">
                <div class="w-[2rem]">
                  <img
                    alt="Check icon image"
                    class="w-full h-full object-cover"
                    src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1" />
                </div>
                <div class="flex-1 leading-4">
                  <span class="text-[15px] sm:text-[16px]"
                    >Schedule your products to match your daily routine​</span
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-4 text-base">
                <div class="w-[2rem]">
                  <img
                    alt="Check icon image"
                    class="w-full h-full object-cover"
                    src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1" />
                </div>
                <div class="flex-1 leading-4">
                  <span class="text-[15px] sm:text-[16px]"
                    >Control all your products from anywhere - at all
                    time​</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-span-12 sm:col-span-4 p-0 h-auto flex flex-col gap-4">
          <div
            class="min-h-[200px] w-full app-video-preview flex justify-center items-center">
            <img
              alt="Video preview image for the VELUX App"
              class="object-cover"
              src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/play-icon.svg" />
          </div>
          <a
            class="w-full h-[40px] sm:h-[32px] flex flex-row justify-center items-center uppercase border-4 border-velux font-velux text-[14px] leading-4 tracking-wider cursor-pointer">
            Watch Video
          </a>
        </div>
      </div>
    </section>
    <section class="velux-bg-grey w-full" id="appcontrol-operation-intro">
      <div class="velux-grid velux-container h-auto gap-8 sm:pb-20 sm:pt-28">
        <div class="col-span-12 sm:col-span-6 mobile:pb-8 mobile: pt-12">
          <img
            class="w-full h-auto"
            src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/App3.png"
            alt="Smartphone with VELUX App" />
        </div>
        <div
          class="col-span-12 sm:col-span-6 sm:max-w-[50ch] h-full flex flex-col gap-8 justify-center px-4 sm:pl-8 xl:pl-24">
          <h1
            class="text-[28px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
            Smartphone control of your roof windows, shutters and blinds​
          </h1>
          <p
            class="font-velux-black text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
            VELUX App Control helps you achieve the optimal amount of daylight
            and fresh air in your home with a tap on your phone or through voice
            commands.
          </p>
        </div>
        <div
          class="col-span-12 flex flex-col sm:flex-row justify-center mobile:items-start gap-20 mobile:gap-y-12 font-velux-black py-10 sm:py-8 mobile:px-4">
          <div class="col-span-12 sm:col-span-4 flex gap-4">
            <div class="flex items-start">
              <img
                class="w-[32px] min-w-[32px] h-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/app-phone-icon.svg"
                alt="Smartphone with VELUX app icon" />
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-[24px] leading-[1.625rem]">Comfort on demand</h3>
              <span class="sm:max-w-[20ch] text-[20px] leading-[1.5rem]"
                >Simply tap your smartphone to let in a breath of fresh air or
                shade from the sun to control temperature, light, look, and feel
                of your home.</span
              >
            </div>
          </div>
          <div class="col-span-12 sm:col-span-4 flex gap-4">
            <div class="flex items-start">
              <img
                class="w-[32px] min-w-[32px] h-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/microphone-icon.svg"
                alt="Microphone icon" />
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-[24px] leading-[1.625rem]">
                Experience convenience​
              </h3>
              <span class="sm:max-w-[20ch] text-[20px] leading-[1.5rem]"
                >With intuitive scheduling features, smartspeaker integration,
                and voice control, VELUX App Control lets you air out your home
                when you have your hands full.
              </span>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-4 flex gap-4">
            <div class="flex items-start">
              <img
                class="w-[32px] min-w-[32px] h-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/fb55d4ea587afbaf8df616298ffef2c907f006a7/src/assets/special-icons/lock-icon.svg"
                alt="Lock icon" />
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-[24px] leading-[1.625rem]">
                Security at all times​
              </h3>
              <span class="sm:max-w-[20ch] text-[20px] leading-[1.5rem]"
                >In a moment of doubt, you can quickly check if you closed your
                roof windows – even when away from home.</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-white w-full" id="appcontrol-inspiration">
      <div class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8">
        <div class="col-span-12 sm:col-span-6">
          <img
            class="w-full object-fill aspect-w-16 aspect-h-9 mobile:pl-16"
            src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/master/src/assets/img/AppSchedule.png"
            alt="Smartphone with VELUX app opened on the 'Schedule' function" />
        </div>
        <div
          class="col-span-12 sm:col-span-6 flex items-center justify-center mobile:px-4 mobile:pt-12">
          <div
            class="flex flex-col gap-8 justify-center items-start sm:items-center h-full sm:max-w-[35ch]">
            <h1
              class="text-[28px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
              Set your own schedules​​
            </h1>
            <p
              class="font-velux-black text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
              VELUX App Control easily adapts to your lifestyle with intuitive
              scheduling features. Automatically open or shut your roof windows
              in every morning of the week to control your indoor climate.
              Simply set up a schedule to air out your home at the time you
              want.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-white w-full" id="appcontrol-getstarted">
      <div
        class="velux-grid velux-container xl:max-w-[1440px] gap-y-12 h-auto py-12 sm:py-20 px-4 sm:px-8">
        <div
          class="col-span-12 sm:col-span-6 sm:col-start-2 flex justify-center items-center">
          <ul
            class="steps-container w-auto h-auto rounded-[2rem] velux-bg-grey flex flex-col justify-center items-start px-6 py-8 sm:px-20 sm:py-12 gap-10">
            <li class="flex items-center h-auto">
              <div
                class="rounded-full border-velux min-w-[40px] min-h-[40px] flex items-center justify-center mr-4">
                1
              </div>
              <span
                class="text-[15px] sm:text-[16px] leading-4 tracking-[0.5px]"
                >Plug in the gateway and download the app</span
              >
            </li>
            <li class="flex items-center h-auto">
              <div
                class="rounded-full border-velux min-w-[40px] min-h-[40px] flex items-center justify-center mr-4">
                2
              </div>
              <span class="text-[15px] sm:text-[16px]"
                >Pairing the sensor and departure switch with the gateway</span
              >
            </li>
            <li class="flex items-center h-auto">
              <div
                class="rounded-full border-velux min-w-[40px] min-h-[40px] flex items-center justify-center mr-4">
                3
              </div>
              <span class="text-[15px] sm:text-[16px]"
                >Detecting and adding VELUX skylights and blinds</span
              >
            </li>
            <li class="flex items-center h-auto">
              <div
                class="rounded-full border-velux min-w-[40px] min-h-[40px] flex items-center justify-center mr-4">
                4
              </div>
              <span class="text-[15px] sm:text-[16px]"
                >Assign names to the (eg. ‘my living room’)</span
              >
            </li>
          </ul>
        </div>
        <div
          class="col-span-12 sm:col-span-4 h-auto flex flex-col gap-8 justify-center items-center mobile:pt-8">
          <div class="flex flex-col gap-8 sm:max-w-[30ch]">
            <h1
              class="text-[28px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
              It’s easy to get started
            </h1>
            <p
              class="font-velux-black text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
              To install the starter kit, download the VELUX ACTIVE smartphone
              app, which guide you through the four.step installation process.
              VELUX ACTIVE can be installed without any professional help.
            </p>
            <div
              class="logos w-full h-auto flex flex-row justify-start items-center gap-6">
              <img
                class="h-[40px] w-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/59186aa5f55be67b3edc06990e2179f35febfee8/src/assets/img/AppStore.svg"
                alt="AppStore icon" />
              <img
                class="h-[40px] w-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/59186aa5f55be67b3edc06990e2179f35febfee8/src/assets/img/GooglePlay.svg"
                alt="GooglePlay icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-grey w-full" id="appcontrol-switch">
      <div class="velux-grid velux-container h-auto gap-8">
        <div class="col-span-12 sm:col-span-5">
          <img
            class="w-full max-h-[520px] object-cover"
            src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/man-with-phone.jpg?cx=300.5&cy=0.5&webp=1&cw=619"
            alt="Mid-aged man holding a smartphone with the Velux app opened" />
        </div>
        <div
          class="col-span-12 sm:col-span-7 w-full h-full flex flex-col gap-8 sm:gap-12 justify-center px-4 sm:px-32 mobile:py-8">
          <h1
            class="text-[28px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
            Want to switch from manual to electric?
          </h1>
          <p
            class="font-velux-black text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
            All Intelligent Home Control products are compatible with VELUX
            electric roof windows, blinds and shutters.
          </p>
          <a href="" class="">
            <i class="fas fa-arrow-right"></i>
            <span
              class="font-velux ml-2 text-[14px] sm:text-[18px] uppercase leading-5 tracking-[.5px]"
              >Learn more about electric roof window</span
            >
          </a>
        </div>
      </div>
    </section>
    <section class="velux-bg-white w-full" id="appcontrol-connect">
      <div
        class="velux-grid velux-container xl:max-w-[1440px] h-auto justify-center py-12 sm:py-28 mobile:gap-y-12">
        <div
          class="col-span-12 sm:col-span-6 sm:col-start-2 flex justify-center mobile:px-4">
          <div
            class="h-full flex flex-col gap-8 justify-center items-start sm:max-w-[65ch] sm:pl-8">
            <h1
              class="text-[28px] sm:text-[48px] font-light leading-[2rem] sm:leading-[3.5rem]">
              Connect your home
            </h1>
            <p
              class="font-velux-black text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
              VELUX App Control is compatible with other smart home systems,
              such as Apple HomeKit and Google Home, letting you control your
              VELUX electrical products using voice control.
            </p>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-4 flex justify-center items-center">
          <div class="connect-apps">
            <div
              class="logos w-full h-auto flex flex-col justify-center items-start gap-6">
              <img
                class="h-[56px] w-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/59186aa5f55be67b3edc06990e2179f35febfee8/src/assets/img/AppleHomeKit.svg"
                alt="Apple Home Kit icon" />
              <img
                class="h-[56px] w-auto"
                src="https://raw.githubusercontent.com/vitorsm19/Velux-Task/59186aa5f55be67b3edc06990e2179f35febfee8/src/assets/img/GoogleHome.svg"
                alt="Google Home icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="velux-bg-grey w-full" id="appcontrol-comparison">
      <div
        class="velux-grid velux-container xl:max-w-[1440px] h-auto gap-8 justify-center mobile:px-0 mobile:py-12 sm:p-28">
        <div
          class="col-span-12 sm:col-span-6 h-full flex flex-col gap-8 justify-start items-start sm:max-w-[65ch] sm:pl-8 mobile:px-4">
          <h1
            class="text-[28px] sm:text-[48px] sm:font-light leading-[2rem] sm:leading-[3.5rem]">
            Upgrade your VELUX App control to a full indoor climate control
            solution​
          </h1>
        </div>
        <div
          class="col-span-12 sm:col-span-6 h-full flex flex-col gap-8 justify-start items-start sm:max-w-[65ch] sm:pl-8 mobile:px-4">
          <p
            class="font-velux-black text-[18px] sm:text-[20px] font-light leading-[1.625rem]">
            You can always upgrade from VELUX App Control to our full indoor
            climate solution, VELUX ACTIVE with NETATMO, to automatically keep
            your home feeling fresh and healthy at all times.
            <br /><br />
            Upgrading is easy and only requires the VELUX ACTIVE indoor climate
            sensor.
          </p>
        </div>
        <div class="col-span-5 mobile:hidden"></div>
        <div class="col-span-7 flex justify-evenly items-start mobile:hidden">
          <div class="product1">
            <div class="product-image h-[200px] w-[200px] bg-cover bg-center">
              <img
                alt="VELUX Touch product box image"
                class="w-full h-full object-cover object-center"
                src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/velux-app-control/velux-ihc-addons-touch.png?ch=576&amp;cw=768&amp;webp=1" />
            </div>
            <div
              class="product-info flex flex-col justify-start items-center font-velux-grey">
              <h1
                class="text-[24px] font-light leading-[1.625rem] text-center h-[50px] font-velux-grey">
                VELUX Touch
              </h1>
              <p
                class="font-velux-black text-[16px] font-light leading-[1.625rem] pt-4 font-velux-grey">
                XXX€
              </p>
            </div>
          </div>
          <div class="product2">
            <div class="product-image h-[200px] w-[180px] bg-cover bg-center">
              <img
                alt="VELUX App Control product box image"
                class="w-full h-full object-cover object-center"
                src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/velux-app-control/velux-ihc-addons-app-control.png?ch=576&amp;cw=768&amp;webp=1" />
            </div>
            <div class="product-info flex flex-col justify-start items-center">
              <h1
                class="text-[24px] font-light leading-[1.625rem] text-center h-[50px] font-velux-grey">
                VELUX App Control
              </h1>
              <p
                class="font-velux-black text-[16px] font-light leading-[1.625rem] pt-4 font-velux-grey">
                XXX€
              </p>
            </div>
          </div>
          <div class="product3">
            <div class="product-image h-[200px] w-[200px] bg-cover bg-center">
              <img
                alt="VELUX ACTIVE product box image"
                class="w-full h-full object-cover object-center"
                src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/velux-app-control/velux-ihc-addons-active.png?ch=576&amp;cw=768&amp;webp=1" />
            </div>
            <div class="product-info flex flex-col justify-start items-center">
              <h1
                class="text-[24px] font-light leading-[1.625rem] text-center h-[50px] font-velux-grey">
                VELUX ACTIVE
              </h1>
              <p
                class="font-velux-black text-[16px] font-light leading-[1.625rem] pt-4 font-velux-grey">
                XXX€
              </p>
            </div>
          </div>
        </div>
        <div
          v-for="item in comparison"
          :key="item.name"
          class="col-span-12 grid grid-cols-12 velux-bg-white h-[72px] rounded-[16px] p-0 items-center gap-6 mb-2 mobile:hidden">
          <div class="col-span-5 pl-6">
            <span class="text-[20px]">{{ item.name }}</span>
          </div>
          <div class="col-span-7 flex justify-evenly items-start">
            <div class="check flex justify-center items-center flex-1">
              <img
                v-show="item.check1"
                src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1"
                alt="Check icon"
                class="max-w-[2rem]" />
            </div>
            <div class="check flex justify-center items-center flex-1">
              <img
                v-show="item.check2"
                src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1"
                alt="Check icon"
                class="max-w-[2rem]" />
            </div>
            <div class="check flex justify-center items-center flex-1">
              <img
                v-show="item.check3"
                src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1"
                alt="Check icon"
                class="max-w-[2rem]" />
            </div>
          </div>
        </div>

        <div
          class="col-span-12 w-full relative flex snap-x snap-mandatory overflow-x-auto sm:hidden">
          <div
            class="product1 w-3/4 flex flex-col flex-none snap-center border-r border-r-gray-400">
            <div
              class="product-image flex justify-center h-[280px] w-auto velux-bg-white">
              <img
                alt="VELUX Touch product box image"
                class="object-cover object-center h-full w-full"
                src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/velux-app-control/velux-ihc-addons-touch.png?ch=576&amp;cw=768&amp;webp=1" />
            </div>
            <div
              class="product-info flex justify-between items-center font-velux-grey px-4 py-6 h-[85px]">
              <h1 class="text-[24px] font-light leading-[1.625rem]">
                VELUX Touch
              </h1>
              <p
                class="font-velux-black text-[20px] font-light leading-[1.625rem] font-velux-grey">
                XXX€
              </p>
            </div>
            <ul class="px-4">
              <li
                class="flex velux-bg-white p-4 rounded-lg mb-4 items-center"
                v-for="item in filteredOne"
                :key="item.name">
                <img
                  src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1"
                  alt="Check icon"
                  class="w-[1.5rem] max-w-[2rem]" />
                <span class="ml-2 text-13">{{ item.name }}</span>
              </li>
            </ul>
          </div>
          <div
            class="product2 w-3/4 flex flex-col flex-none snap-center border-r-2">
            <div
              class="product-image flex justify-center h-[280px] w-auto velux-bg-white">
              <img
                alt="VELUX App Control product box image"
                class="w-full h-full object-cover object-center"
                src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/velux-app-control/velux-ihc-addons-app-control.png?ch=576&amp;cw=768&amp;webp=1" />
            </div>
            <div
              class="product-info flex justify-between items-center font-velux-grey px-4 py-6 h-[85px]">
              <h1 class="text-[24px] font-light leading-[1.625rem]">
                VELUX App Control
              </h1>
              <p
                class="font-velux-black text-[20px] font-light leading-[1.625rem] font-velux-grey">
                XXX€
              </p>
            </div>
            <ul class="px-4">
              <li
                class="flex velux-bg-white p-4 rounded-lg mb-4 items-center"
                v-for="item in filteredTwo"
                :key="item.name">
                <img
                  src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1"
                  alt="Check icon"
                  class="w-[1.5rem] max-w-[2rem]" />
                <span class="ml-2 text-13">{{ item.name }}</span>
              </li>
            </ul>
          </div>
          <div class="product3 w-3/4 flex flex-col flex-none snap-center">
            <div
              class="product-image flex justify-center h-[280px] w-auto velux-bg-white">
              <img
                alt="VELUX ACTIVE product box image"
                class="w-full h-full object-cover object-center"
                src="//sc10103.azureedge.net/-/media/products/1-1/smart-products/velux-app-control/velux-ihc-addons-active.png?ch=576&amp;cw=768&amp;webp=1" />
            </div>
            <div
              class="product-info flex justify-between items-center font-velux-grey px-4 py-6 h-[85px]">
              <h1 class="text-[24px] font-light leading-[1.625rem]">
                VELUX ACTIVE with NETATMO
              </h1>
              <p
                class="font-velux-black text-[20px] font-light leading-[1.625rem] font-velux-grey">
                XXX€
              </p>
            </div>
            <ul class="px-4">
              <li
                class="flex velux-bg-white p-4 rounded-lg mb-4 items-center"
                v-for="item in filteredThree"
                :key="item.name">
                <img
                  src="//sc10103.azureedge.net/-/media/icons/velux-icns-stroke-checkmark.svg?iar=0&amp;hash=DD86F6A8809B27909580D013EC5E957D&amp;webp=1"
                  alt="Check icon"
                  class="w-[1.5rem] max-w-[2rem]" />
                <span class="ml-2 text-13">{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.app-video-preview {
  background-image: url("//sc10103.azureedge.net/-/media/products/16-9/daylight-effect/video-thumb/video-cover-smart-home.jpg?ch=432&amp;cw=768&amp;webp=1");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 16/9;
}
</style>
