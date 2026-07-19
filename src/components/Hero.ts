export function Hero() {
  return `
    <section id="hero" class="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <img
        src="/salacca.jpeg"
        alt="Salacca"
        class="w-48 h-48 rounded-full border-4 border-yellow-400 shadow-lg object-cover mb-6"
      >

      <h1 class="text-5xl font-bold text-white">
        SALACCA
      </h1>

      <p class="text-yellow-400 text-xl mt-3">
        Voice Talent • Content Creator
      </p>

      <p class="text-gray-300 max-w-xl mt-6">
        Crafting memorable voices, digital stories, and creative experiences.
      </p>

      <div class="mt-8 flex gap-4">
        <a href="#portfolio"
          class="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold">
          Portfolio
        </a>

        <a href="#contact"
          class="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full">
          Contact
        </a>
      </div>

    </section>
  `;
}