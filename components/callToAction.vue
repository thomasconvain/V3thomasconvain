<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-b from-black to-slate-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">¿Trabajemos juntos?</span>
              <span class="block">Valoro el diseño simple e intuitivo. </span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">Me adapto a los usuarios y a la identidad de cada proyecto.</p>
            <button @click="openModal()" class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">Contáctame</button>
          </div>
        </div>
        <div class="-mt-16 aspect-w-4 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-0" src="../assets/img/hands.png" alt="App screenshot" />
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