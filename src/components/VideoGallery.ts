export function VideoGallery() {
  return `
<section id="videos" class="py-24 bg-neutral-950">

<div class="max-w-7xl mx-auto px-6">

<h2 class="text-5xl font-black text-center text-yellow-400">
Video Gallery
</h2>

<p class="text-center text-gray-400 mt-4 mb-16">
Watch some of my latest Voice Over projects.
</p>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- VIDEO 1 -->

<div
onclick="openVideo('/videos/showreel1.mp4')"
class="group cursor-pointer rounded-3xl overflow-hidden bg-neutral-900 shadow-xl hover:shadow-yellow-500/30 transition duration-500">

<div class="relative overflow-hidden">

<img
src="/salacca.jpeg"
class="w-full h-72 object-cover group-hover:scale-110 transition duration-700">

<div
class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition">
</div>

<div
class="absolute inset-0 flex items-center justify-center">

<div
class="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl text-black shadow-2xl group-hover:scale-125 transition">

▶️

</div>

</div>

</div>

<div class="p-6">

<h3 class="text-2xl text-white font-bold">

Showreel

</h3>

<p class="text-gray-400 mt-2">

Compilation of Voice Over performances.

</p>

</div>

</div>

<!-- VIDEO 2 -->

<div
onclick="openVideo('/videos/company.mp4')"
class="group cursor-pointer rounded-3xl overflow-hidden bg-neutral-900 shadow-xl hover:shadow-yellow-500/30 transition duration-500">

<div class="relative overflow-hidden">

<img
src="/salacca.jpeg"
class="w-full h-72 object-cover group-hover:scale-110 transition duration-700">

<div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition"></div>

<div class="absolute inset-0 flex items-center justify-center">

<div
class="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl text-black shadow-2xl group-hover:scale-125 transition">

▶️

</div>

</div>

</div>

<div class="p-6">

<h3 class="text-2xl text-white font-bold">

Company Profile

</h3>

<p class="text-gray-400 mt-2">

Corporate narration demo.

</p>

</div>

</div>

<!-- VIDEO 3 -->

<div
onclick="openVideo('/videos/commercial.mp4')"
class="group cursor-pointer rounded-3xl overflow-hidden bg-neutral-900 shadow-xl hover:shadow-yellow-500/30 transition duration-500">

<div class="relative overflow-hidden">

<img
src="/salacca.jpeg"
class="w-full h-72 object-cover group-hover:scale-110 transition duration-700">

<div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition"></div>

<div class="absolute inset-0 flex items-center justify-center">

<div
class="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl text-black shadow-2xl group-hover:scale-125 transition">

▶️

</div>

</div>

</div>

<div class="p-6">

<h3 class="text-2xl text-white font-bold">

Commercial Ads

</h3>

<p class="text-gray-400 mt-2">

Advertising Voice Over.

</p>

</div>

</div>

</div>

</div>

</section>
`;
}