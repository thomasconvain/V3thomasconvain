<template>
  <div class="bg-gradient-to-b from-indigo-100 to-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-7xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-indigo-600">
          Conóceme</h2>
        <p class="mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl lg:text-balance font-serif">Transformo tus ideas <br> en experiencias digitales <span class="underline decoration-indigo-600 decoration-wavy">impactantes</span></p>
        <p class="mt-6 text-lg/8 text-gray-600">Como desarrollador frontend, me especializo en crear interfaces que no solo se ven increíbles, sino que también ofrecen experiencias de usuario intuitivas y funcionales. Combinando diseño gráfico, UX/UI y las últimas tecnologías, trabajo contigo para llevar tus proyectos al siguiente nivel.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative"
            data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div class="pl-16 p-6 bg-indigo-50 rounded-xl hover:shadow-xl hover:rotate-2 rotate-0 transition duration-700 ease-in-out">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute -left-2 -top-3 flex size-10 items-center justify-center rounded-full bg-indigo-600 shadow-md">
                  <component :is="feature.icon" class="size-6 text-white p-2 w-10" aria-hidden="true" />
                </div>
                <span class="text-indigo-900">{{ feature.name }}</span>
              </dt>
            <dd class="mt-2 text-base/7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RocketLaunchIcon, CodeBracketIcon, GlobeEuropeAfricaIcon, SparklesIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Especialización en front-end',
    description:
      'Diseño interfaces modernas y funcionales, enfocadas en la experiencia del usuario (UX/UI).',
    icon: CodeBracketIcon,
  },
  {
    name: 'Habilidad en diseño gráfico',
    description:
      'Combino creatividad y precisión para crear soluciones visuales atractivas.',
    icon: SparklesIcon,
  },
  {
    name: 'Enfoque en innovación tecnológica',
    description:
      'Me mantengo al día con las últimas tendencias y herramientas para ofrecer resultados de vanguardia.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Experiencia internacional',
    description:
      'Con raíces en Francia y trabajando en Chile desde 2017, aporto una visión global a tus proyectos.',
    icon: GlobeEuropeAfricaIcon,
  },
]
</script>