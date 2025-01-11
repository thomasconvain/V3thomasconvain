<template>
    <div class="relative overflow-hidden">
      
  
      <main>
        <div class="h-screen lg:pt-40 border-b border-slate-800 bg-gradient-to-b from-black to-slate-900 sm:pt-28 lg:pt-18 lg:pb-0 lg:overflow-hidden">
          <img class="absolute -top-22 sm:top-0 left-0 opacity-20 blur-xl" src="../assets/img/bg-element-cut-up.png">
          <div class="relative h-full mx-auto max-w-7xl lg:px-8">
            <div class="h-full lg:grid lg:grid-cols-2 lg:gap-8 align-middle flex items-center">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 text-left flex items-center">
                <div class="lg:py-24 z-40 relative">
                  <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-900 rounded-full">¿Tomemos un café?</span>
                    <button @click="openModal()" class="ml-4 text-sm">Contáctame</button>
                    <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 class="mt-4 text-5xl tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block font-bold">Desarrollador</span>
                    <span class="block font-serif font-light flex">Front End
                      <span class="m-4 sm:m-5 flex h-5 w-5">
                        <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-indigo-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-5 w-5 bg-slate-900"></span>
                      </span>
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-gray-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Diseño y creo aplicaciones web simples e intuitivas. Soy apasionado por lo que hago.</p>
                </div>
              </div>
              <!-- <div class="w-full relative lg:relative items-center">
                <div class="mx-auto h-full w-full max-w-md px-4 lg:max-w-2xl lg:px-6 lg:px-0">
                   Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <!-- <img class="w-full h-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="../assets/img/hands.png" alt="" />
                </div>
              </div> -->
            </div>
          </div>
          <canvas class="top-0 hidden md:absolute opacity-90" ref="canvas" />
          <img class="absolute md:hidden -bottom-44 left-0 opacity-90" src="../assets/img/bg-element-cut.png">
          <!-- <div class="bg-gradient-to-b from-black via-transparent to-slate-900 absolute top-0 w-full h-screen z-30"></div> -->
        </div>
  
        <!-- More main page content here... -->
      </main>
    </div>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { ChevronRightIcon } from '@heroicons/vue/24/solid'
  import { Application } from '@splinetool/runtime';
  
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  const open = ref(true);
  
  const emits = defineEmits(["clickBtn"])
  
  const openModal = async () => {
    emits("clickBtn", open.value);
  };

// template ref
const canvas = ref(null)

// spline state
const state = reactive({
    spline: {
        scene: "https://prod.spline.design/k570T8ghIfOYL-BW/scene.splinecode",
        app: null,
        isLoaded: false,
    },
});

onMounted(async () =>{
    const app = new Application(canvas.value);
    await app.load(state.spline.scene)
    state.spline.app = app;
    state.spline.isLoaded = true;
})
  </script>