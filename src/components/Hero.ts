export function Hero() {
  return `
    <section
      id="hero"
      class="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >

      <!-- Glow Background -->
      <div class="absolute inset-0 -z-10">

        <div
          class="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 blur-[120px] rounded-full animate-pulse">
        </div>

        <div
          class="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full animate-pulse">
        </div>

      </div>

      <!-- Hero Content -->
      <div class="relative z-10">

        <img
          src="/salacca.jpeg"
          alt="Salacca"
          class="w-48 h-48 rounded-full border-4 border-yellow-400 shadow-2xl object-cover mb-6 animate-[float_4s_ease-in-out_infinite]"
        >

        <h1 class="text-5xl md:text-6xl font-black text-white">
          SALACCA
        </h1>

        <p class="text-yellow-400 text-xl mt-3 font-semibold">
          Voice Talent • Content Creator
        </p>

        <p class="text-gray-300 max-w-xl mt-6 leading-8">
          Crafting memorable voices, digital stories,
          and creative experiences that inspire audiences.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#portfolio"
            class="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-3 rounded-full font-bold transition duration-300 hover:scale-105 shadow-lg"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            class="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-7 py-3 rounded-full font-bold transition duration-300 hover:scale-105"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  `;
}