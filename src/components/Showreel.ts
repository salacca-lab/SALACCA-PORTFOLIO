export function Showreel() {
  return `
<section class="py-24 bg-neutral-950">

<div class="max-w-5xl mx-auto px-6">

<h2 class="text-4xl font-bold text-center text-yellow-400">
Demo Showreel
</h2>

<p class="text-center text-gray-400 mt-3 mb-10">
Lihat contoh penampilan Voice Talent saya.
</p>

<div class="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

<video
class="w-full"
controls
poster="/salacca.jpeg">

<source src="/videos/showreel1.mp4" type="video/mp4">

Browser Anda tidak mendukung video.

</video>
n
</div>

</div>

</section>
`;
}