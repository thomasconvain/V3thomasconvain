<template>
    <div class="relative overflow-hidden">
      
  
      <main>
        <div class="h-screen lg:pt-40 border-b border-slate-800 bg-gradient-to-b from-black to-slate-900 sm:pt-28 lg:pt-18 lg:pb-0 lg:overflow-hidden">
          <div class="relative h-full mx-auto max-w-7xl lg:px-8">
            <div class="h-full lg:grid lg:grid-cols-2 lg:gap-8 align-middle flex items-center">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center lg:px-0 lg:text-left flex items-center">
                <div class="lg:py-24 z-20 relative">
                  <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">¿Tomemos un café?</span>
                    <button @click="openModal()" class="ml-4 text-sm">Contáctame</button>
                    <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Desarrollador</span>
                    <span class="block">Front End</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"><strong>Santiago - Chile</strong><br>Diseño y creo aplicaciones web simples e intuitivas. Soy apasionado por lo que hago.</p>
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
          <canvas class="top-0 absolute opacity-75" ref="canvas" />
          <div class="bg-gradient-to-b from-black via-transparent to-slate-900 absolute top-0 w-full h-screen z-40"></div>
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
        scene: "https://prod.spline.design/QkTzaPNQM6ALhQkP/scene.splinecode",
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