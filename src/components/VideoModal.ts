export function VideoModal() {
  return `
<div
  id="video-modal"
  class="fixed inset-0 bg-black/90 hidden items-center justify-center z-[999]"
>

  <button
    id="close-video"
    class="absolute top-6 right-8 text-white text-5xl hover:text-yellow-400 transition"
  >
    ×
  </button>

  <div class="w-[90%] max-w-5xl">

    <video
      id="popup-video"
      controls
      class="w-full rounded-2xl shadow-2xl"
    >
      <source src="/demo.mp4" type="video/mp4">
    </video>

  </div>

</div>
`;
}