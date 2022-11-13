<template>
  <div>
    <navbar/>
    <NuxtPage/>
    <mainfooter/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const open = ref(false)

const openModal = async () => {
  open.value = true
}
</script>