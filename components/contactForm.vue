<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div>
        <div class="section py-4">
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
        <div class="grid grid-cols-1 lg:gap-5 gap-0">
          <FormField label="Nombre">
          <input
            name="name"
            required
            type="text"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Nombre"
          />
        </FormField>

        <FormField label="Apellido">
          <input
            required
            type="text"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Apellido"
          />
        </FormField>

        <FormField label="Perfil">
          <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </FormField>

      </div>

      <button
          type="submit"
          class="group relative flex justify-center rounded-md w-full border border-transparent bg-indigo-900 mt-4 py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
          <svg :class="formLoading ? 'animate-spin' : 'hidden'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          <span :class="!formLoading ? '' : 'hidden'">Enviar</span>
      </button>
      </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>