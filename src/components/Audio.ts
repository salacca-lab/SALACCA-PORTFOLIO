export function Audio() {
  return `
    <section id="audio" class="py-20 px-6 bg-black text-white">

      <div class="max-w-4xl mx-auto text-center">

        <h2 class="text-4xl font-bold text-yellow-400 mb-6">
          Voice Demo
        </h2>

        <p class="text-gray-300 mb-8">
          Dengarkan beberapa contoh voice over saya.
        </p>

        <div class="bg-gray-900 rounded-xl p-6 shadow-lg">

          <h3 class="text-xl font-semibold mb-4">
            Commercial Voice
          </h3>

          <audio controls class="w-full">
            <source src="/demo.mp3" type="audio/mpeg">
            Browser Anda tidak mendukung audio.
          </audio>

        </div>

      </div>

    </section>
  `;
}