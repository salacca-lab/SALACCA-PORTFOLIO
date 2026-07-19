export function Audio() {
  return `
<section id="audio" class="py-24">

<div
class="max-w-3xl mx-auto
backdrop-blur-xl
bg-white/5
border border-white/10
rounded-3xl
p-10
shadow-2xl"

data-aos="fade-up"
>

<h2 class="text-4xl font-black text-center text-amber-400 mb-4">
Voice Demo
</h2>

<p class="text-center text-gray-400 mb-10">
Dengarkan contoh karakter suara Salacca.
</p>

<audio
controls
class="w-full rounded-xl"
>

<source src="/demo.mp3" type="audio/mp3">

Browser Anda tidak mendukung audio.

</audio>

</div>

</section>
`;
}