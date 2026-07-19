export function Loading() {
  return `
    <div id="loading-screen"
      class="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-700">

      <h1 class="text-6xl font-black text-amber-400 tracking-[10px] animate-pulse">
        SALACCA
      </h1>

      <p class="mt-6 text-gray-400">
        Crafting Voices...
      </p>

    </div>
  `;
}