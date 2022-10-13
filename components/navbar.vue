<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" id="holaa" :class="{ 'scrolled': updateNavbar }" class="bg-black backdrop-blur border-b border-transparent duration-500 fixed z-20 top-0 left-0 w-full" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-24 items-center justify-between">
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
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[itemActive === item.id ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="itemActive === item.id ? 'page' : undefined">{{ item.name }}</a>
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

const onscrollFn = () => {
  //const homeEl = document.getElementById('home');
  const contentEl = document.getElementById('content').getBoundingClientRect().top;
  if (
    contentEl < 96
  ) {
    itemActive.value = 'knowme';
  } else {
    itemActive.value = 'home';
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
  { name: 'Trabajos', href: '#', id: 'works' },
  { name: 'Contacto', href: '#', id: 'contact' },
]

</script>

<style scoped>
.scrolled {
  background-color:rgb(10 15 27 / 91%);
  border-bottom: solid #1c2538;
  border-bottom-width: 1px;
}
</style>