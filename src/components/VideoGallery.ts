export function VideoGallery() {
  return `
<section id="video-gallery" class="py-24 bg-black">

<div class="max-w-7xl mx-auto px-6">

<h2 class="text-4xl font-black text-center text-amber-400">
Video Gallery
</h2>

<p class="text-center text-gray-400 mt-4 mb-14">
Watch my latest voice over performances and showreels.
</p>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div class="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400 transition duration-300 hover:-translate-y-2">

<video
class="w-full aspect-video object-cover"
controls
poster="/salacca.jpeg">

<source src="/videos/company-profile.mp4" type="video/mp4">

</video>

<div class="p-5">

<h3 class="text-white font-bold text-xl group-hover:text-amber-400">
Company Profile
</h3>

<p class="text-gray-400 mt-2">
Professional narration for business presentation.
</p>

</div>

</div>

<div class="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400 transition duration-300 hover:-translate-y-2">

<video
class="w-full aspect-video object-cover"
controls
poster="/salacca.jpeg">

<source src="/videos/commercial.mp4" type="video/mp4">

</video>

<div class="p-5">

<h3 class="text-white font-bold text-xl group-hover:text-amber-400">
Commercial Ads
</h3>

<p class="text-gray-400 mt-2">
Commercial and advertising voice over.
</p>

</div>

</div>

<div class="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400 transition duration-300 hover:-translate-y-2">

<video
class="w-full aspect-video object-cover"
controls
poster="/salacca.jpeg">

<source src="/videos/storytelling.mp4" type="video/mp4">

</video>

<div class="p-5">

<h3 class="text-white font-bold text-xl group-hover:text-amber-400">
Storytelling
</h3>

<p class="text-gray-400 mt-2">
Emotionally engaging storytelling.
</p>

</div>

</div>

</div>

</div>

</section>
`;
}