export function BackToTop() {
  return `
    <button
      id="back-to-top"
      class="fixed bottom-24 right-6 w-12 h-12 bg-amber-400 text-black rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-all duration-300"
      style="display:none;"
    >
      ↑
    </button>
  `;
}
