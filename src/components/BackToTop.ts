export function BackToTop() {
  return `
    <button
      id="back-to-top"
      class="
        fixed
        bottom-24
        right-6
        w-14
        h-14
        rounded-full
        bg-amber-400
        text-black
        text-2xl
        shadow-xl
        z-50
        hover:scale-110
        transition-all
        duration-300
      "
      aria-label="Back to top"
    >
      ↑
    </button>
  `;
}