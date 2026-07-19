export function Portfolio() {
  return `
    <section id="portfolio" class="bg-gray-900 text-white py-20 px-6">

      <div class="max-w-6xl mx-auto">

        <h2 class="text-4xl font-bold text-yellow-400 mb-10 text-center">
          My Portfolio
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6
           shadow-2xl hover:scale-105 hover:border-amber-400 transition-all duration-500">
            <h3 class="text-2xl font-bold mb-3">🎙️ Voice Over</h3>
            <p class="text-gray-300">
              Voice over untuk iklan, company profile, dan media sosial.
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 
          shadow-2xl hover:scale-105 hover:border-amber-400 transition-all duration-500">
            <h3 class="text-2xl font-bold mb-3">🎧 Audio Editing</h3>
            <p class="text-gray-300">
              Editing audio profesional dengan kualitas jernih.
            </p>
          </div>
          <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6
           shadow-2xl hover:scale-105 hover:border-amber-400 transition-all duration-500">
            <h3 class="text-2xl font-bold mb-3">🎬 Content Creator</h3>
            <p class="text-gray-300">
              Membuat konten kreatif untuk YouTube, TikTok, dan Instagram.
            </p>
          </div>

        </div>

      </div>

    </section>
  `;
}