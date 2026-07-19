export function FloatingWhatsApp() {
  return `
    <a
      href="https://wa.me/6285187770105?text=Halo%20Salacca,%20saya%20tertarik%20dengan%20jasa%20Voice%20Talent%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      class="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
      aria-label="Chat via WhatsApp"
    >
      <iconify-icon
        icon="mdi:whatsapp"
        width="36"
        class="text-white"
      ></iconify-icon>
    </a>
  `;
}