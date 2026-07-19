export function Navbar() {
  return `
<nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

<div class="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

<h1 class="text-2xl font-black text-amber-400 tracking-widest">
SALACCA
</h1>

<div class="hidden md:flex gap-8">

<a href="#hero" class="hover:text-amber-400 duration-300">
Home
</a>

<a href="#about" class="hover:text-amber-400 duration-300">
About
</a>

<a href="#portfolio" class="hover:text-amber-400 duration-300">
Portfolio
</a>

<a href="#audio" class="hover:text-amber-400 duration-300">
Demo
</a>

<a href="#contact" class="hover:text-amber-400 duration-300">
Contact
</a>

</div>

</div>

</nav>
`;
}