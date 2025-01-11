<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-b from-black to-slate-900 rounded-xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="z-50 relative pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl text-white sm:text-4xl">
              <span class="block font-serif font-extrabold text-5xl sm:text-6xl">¿Trabajemos juntos?</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-300">Escríbeme para empezar a conversar sobre tu proyecto</p>
            <button @click="openModal()" class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">Contáctame</button>
          </div>
        </div>
        <div class="relative z-0 -mt-60 aspect-w-4 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-0 translate-y-0 rounded-md object-cover object-right-top" src="../assets/img/bg-element-cut.png" alt="App screenshot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const open = ref(true);
  
  const emits = defineEmits(["clickBtn"])
  
  const openModal = async () => {
    emits("clickBtn", open.value);
  };
</script>