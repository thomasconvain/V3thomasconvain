<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-center min-h-[288px]">
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Herramientas y lenguajes que manejo</h2>
          <!-- <p class="mt-3 max-w-3xl text-lg text-gray-500">Valoro el diseño simple e intuitivo. Me adapto a los usuarios y a la identidad de cada proyecto.</p> -->
          <div class="mt-8 sm:flex">
          <button v-for="item in Themes" :key="item.name" type="button" class="mx-1 my-1 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="setId = item.id">{{item.name}}</button>
          </div>

        </div>
        <div class="mt-8 grid grid-cols-4 gap-1.5 md:grid-cols-5 lg:mt-0 lg:grid-cols-6">
          <TransitionGroup name="list">
          <template v-for="item in LogosList" :key="item.name">
              <div v-if="setId === item.id || setId === ''" class="col-span-1 flex flex-wrap justify-center pt-6 pb-4 bg-gray-50 rounded-lg">
                <img class="max-h-7" :src="item.image" alt="Workcation" />
                <p class="text-gray-300 text-center mt-2 text-xs min-w-full">{{item.name}}</p>
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
import figmaLogo from '../assets/img/figma-logo.svg';
import whimsicalLogo from '../assets/img/whimsical-logo.png';
import storybookLogo from '../assets/img/storybook-logo.png';
import html5Logo from '../assets/img/html5-logo.svg';
import css3Logo from '../assets/img/css3-logo.svg';
import vuejsLogo from '../assets/img/vuejs-logo.png';
import bulmaLogo from '../assets/img/bulma-logo.svg';
import tailwindLogo from '../assets/img/tailwind-logo.png';
import saasLogo from '../assets/img/saas-logo.png';
import jsLogo from '../assets/img/js-logo.png';
import nodejsLogo from '../assets/img/nodejs-logo.svg';
import awsLogo from '../assets/img/aws-logo.png';
import firebaseLogo from '../assets/img/firebase-logo.png';
import mongoLogo from '../assets/img/mongo-logo.svg';
import cypressLogo from '../assets/img/cypress-logo.jpeg';
import droneLogo from '../assets/img/drone-logo.png';
import circleciLogo from '../assets/img/circle-ci-logo.png';

const Themes = ref([
  {name: 'diseño', id: 'design'},
  {name: 'desarollo', id: 'dev'},
  {name: 'ci/cd', id: 'cicd'},
  {name: 'infraestructura', id: 'infrastructure'},
  {name: 'gestión de datos', id: 'database'},
  {name: 'todo', id: ''},
])
const LogosList= ref([
  {name: 'Figma', image: figmaLogo, id: 'design'},
  {name: 'Whimsical', image: whimsicalLogo, id: 'design'},
  {name: 'Storybook', image: storybookLogo, id: 'design'},
  {name: 'Html5', image: html5Logo, id: 'dev'},
  {name: 'CSS3', image: css3Logo, id: 'dev'},
  {name: 'VueJs', image: vuejsLogo, id: 'dev'},
  {name: 'Bulma', image: bulmaLogo, id: 'dev'},
  {name: 'Tailwind', image: tailwindLogo, id: 'dev'},
  {name: 'Saas', image: saasLogo, id: 'dev'},
  {name: 'Javascript', image: jsLogo, id: 'dev'},
  {name: 'NodeJs', image: nodejsLogo, id: 'dev'},
  {name: 'AWS', image: awsLogo, id: 'infrastructure'},
  {name: 'Firebase', image: firebaseLogo, id: 'database'},
  {name: 'MongoDb', image: mongoLogo, id: 'database'},
  {name: 'Cypress', image: cypressLogo, id: 'testing'},
  {name: 'Drone', image: droneLogo, id: 'cicd'},
  {name: 'Circle CI', image: circleciLogo, id: 'cicd'},
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