// plugins/aos.client.ts
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 1000, // Duración de la animación en ms
      once: true, // Ejecuta la animación solo una vez
    });
  }
});
