<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" id="" class="border-b border-transparent duration-500 absolute z-50 top-4 left-0 w-full" v-slot="{ open }">
    <div :class="{ 'scrolled': updateNavbar }" class="mx-2 xl:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="../assets/img/logo.svg" alt="Your Company" />
            <img class="hidden h-8 w-auto lg:block" src="../assets/img/logo.svg" alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[itemActive === item.id ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="itemActive === item.id ? 'page' : undefined">{{ item.name }}</a> -->
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :aria-current="itemActive === item.id ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[itemActive === item.id ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="itemActive === item.id ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';


const props = withDefaults(
  defineProps<{
    // distancia desde la cual se mostrará el botón
    scrollToTopDistance?: number,
    itemActive?: string
  }>(),
  {
    scrollToTopDistance: 20,
    itemActive: 'home'
  }
);

// Se accede directamente al elemento 'window' del DOM
// Y se asigna la funcion onscroll para detectar el scroll de la ventana
const itemActive = ref('home');
const updateNavbar = ref(false);


onMounted(async () =>{
  const homeEl = document.getElementById('home').getBoundingClientRect().top;
  if (
    homeEl < 0
  ) {
    updateNavbar.value = true;
  }
})
const onscrollFn = () => {
  const homeEl = document.getElementById('home').getBoundingClientRect().top;
  const contentEl = document.getElementById('content').getBoundingClientRect().top;
  const stackEl = document.getElementById('stack').getBoundingClientRect().top;
  // console.log("stack",stackEl)
  // console.log("content",contentEl)
  // console.log("home",homeEl)
  if (
    homeEl < 96 && homeEl >= 0
  ) {
    itemActive.value = 'home';
  }
  if (
    contentEl <= 96 && contentEl >= 0
  ) {
    itemActive.value = 'knowme';
  }
  if (
    stackEl <= 96 && stackEl >= 0
  ) {
    itemActive.value = 'stack';
  }
  if (
    document.body.scrollTop > props.scrollToTopDistance ||
    document.documentElement.scrollTop > props.scrollToTopDistance
  ) {
    updateNavbar.value = true;
  } else {
    updateNavbar.value = false;
  }
};
if (process.client) {
window.onscroll = onscrollFn;
};

const navigation = [
  { name: 'Inicio', href: '#', id: 'home' },
  { name: 'Conóceme', href: '#content', id: 'knowme' },
  { name: 'Stack de trabajo', href: '#stack', id: 'stack' },
  { name: 'Contacto', href: '#contact', id: 'contact' },
]

</script>

<style scoped>
/* .scrolled {
  background-color:rgba(18, 16, 31, 0.8);
  border-radius: 1rem;
  --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
} */
</style>