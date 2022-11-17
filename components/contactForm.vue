<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="my-6 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">¿Creamos algo juntos?</h1>
      <div>
        <div class="section py-4">
          <form name="contact" @submit.prevent="handleSubmit()" id="form">
            <input type="hidden" name="form-name" value="contact" />
        <div class="grid grid-cols-1 gap-5">
        <FormField label="Nombre">
          <input
            v-model="formState.firstName"
            name="name"
            required
            type="text"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Nombre"
          />
        </FormField>

        <FormField label="Apellido">
          <input
            v-model="formState.lastName"
            name="surname"
            required
            type="text"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Apellido"
          />
        </FormField>

        <FormField label="Correo">
          <input
            v-model="formState.replyTo"
            name="mail"
            required
            type="email"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="correo@ejemplo.com"
          />
        </FormField>

        <FormField label="message">
          <textarea v-model="formState.message.html" rows="4" name="comment" id="comment" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </FormField>

      </div>

      <button
          type="submit"
          class="group relative flex justify-center rounded-md w-full border border-transparent bg-indigo-900 mt-4 py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
          <span>Enviar</span>
      </button>
      </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  const formState = ref({
    to: "thomas.convain@gmail.com",
    replyTo: "",
    firstName: "",
    lastName: "",
    message:{
      subject: "Nuevo mensaje desde thomasconvain.com",
      text: "",
      html: "",
    }
  });
  
  const emits = defineEmits(["submitForm"])
  
  const handleSubmit = async () => {
    emits("submitForm", formState.value);
  };

</script>