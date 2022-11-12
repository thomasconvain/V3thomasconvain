<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Herramientas y lenguajes que manejo</h2>
          <!-- <p class="mt-3 max-w-3xl text-lg text-gray-500">Valoro el diseño simple e intuitivo. Me adapto a los usuarios y a la identidad de cada proyecto.</p> -->
          <div class="mt-8 sm:flex">
          <button v-for="item in Themes" :key="item.name" type="button" class="mx-1 my-1 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="setId = item.id">{{item.name}}</button>
          </div>

        </div>
        <div class="mt-8 grid grid-cols-3 gap-1.5 md:grid-cols-4 lg:mt-0 lg:grid-cols-5">
          <TransitionGroup name="list">
          <template v-for="item in LogosList" :key="item.name">
              <div v-if="setId === item.id || setId === ''" class="col-span-1 flex flex-wrap justify-center pt-6 pb-4 px-6 bg-gray-50 rounded-lg">
                <img class="max-h-12" :src=item.image alt="Workcation" />
                <p class="text-gray-300 px-2 mt-2 text-xs">{{item.name}}</p>
              </div>
            </template>
          </TransitionGroup>
        </div>
        <!-- <div class="mt-8 sm:flex">
            <div class="rounded-md shadow">
              <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Create Account </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"> Contact Us </a>
            </div>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const Themes = ref([
  {name: 'diseño', id: 'design'},
  {name: 'desarollo', id: 'dev'},
  {name: 'ci/cd', id: 'cicd'},
  {name: 'infraestructura', id: 'infrastructure'},
  {name: 'gestión de datos', id: 'database'},
  {name: 'todo', id: ''},
])
const LogosList= ref([
  {name: 'Figma', image: '../assets/img/figma-logo.svg', id: 'design'},
  {name: 'Whimsical', image: '../assets/img/whimsical-logo.png', id: 'design'},
  {name: 'Storybook', image: '../assets/img/storybook-logo.png', id: 'design'},
  {name: 'Html5', image: '../assets/img/html5-logo.svg', id: 'dev'},
  {name: 'CSS3', image: '../assets/img/css3-logo.svg', id: 'dev'},
  {name: 'VueJs', image: '../assets/img/vuejs-logo.png', id: 'dev'},
  {name: 'Bulma', image: '../assets/img/bulma-logo.svg', id: 'dev'},
  {name: 'Tailwind', image: '../assets/img/tailwind-logo.png', id: 'dev'},
  {name: 'Saas', image: '../assets/img/saas-logo.png', id: 'dev'},
  {name: 'Javascript', image: '../assets/img/js-logo.png', id: 'dev'},
  {name: 'NodeJs', image: '../assets/img/nodejs-logo.svg', id: 'dev'},
  {name: 'AWS', image: '../assets/img/aws-logo.png', id: 'infrastructure'},
  {name: 'Firebase', image: '../assets/img/firebase-logo.png', id: 'database'},
  {name: 'MongoDb', image: '../assets/img/mongo-logo.svg', id: 'database'},
  {name: 'Cypress', image: '../assets/img/cypress-logo.jpeg', id: 'testing'},
  {name: 'Drone', image: '../assets/img/drone-logo.png', id: 'cicd'},
  {name: 'Circle CI', image: '../assets/img/circle-ci-logo.png', id: 'cicd'},
])

const setId = ref('')
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>