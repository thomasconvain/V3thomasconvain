<template>
  <div>
  <div class="" id="home">
    <hero @clickBtn="openModal"/>
  </div>
  <div class="" id="content">
    <content-setion/>
  </div>
  <div class="" id="stack">
    <logos/>
  </div>
  <div class="" id="contact">
  <call-to-action @clickBtn="openModal"/>
  </div>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-50 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
            <ContactForm @submitForm="handleSubmit"/>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
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

const handleSubmit = async (formState) => {
  document.getElementById("form").reset();
  await add("mails", formState);
  open.value = false;
};
</script>