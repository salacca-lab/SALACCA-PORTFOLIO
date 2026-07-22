export function VideoModal() {
  return `
<div
id="video-modal"
class="fixed inset-0 hidden items-center justify-center bg-black/90 backdrop-blur-sm z-[9999] transition-all duration-300">

<button
id="close-video"
class="absolute top-6 right-8 text-white text-5xl hover:text-yellow-400 transition">

&times;

</button>

<div class="w-[92%] max-w-6xl">

<video
id="popup-video"
controls
controlsList="nodownload"
class="w-full rounded-3xl shadow-2xl bg-black">

<source id="video-source" src="" type="video/mp4">

Browser Anda tidak mendukung video.

</video>

</div>

</div>
`;
}