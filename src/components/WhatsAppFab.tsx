import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full border-2 border-white bg-black/25 text-white shadow-lg shadow-black/40 flex items-center justify-center transition-all hover:bg-[#ff7900] hover:border-[#ff7900] hover:text-white hover:scale-105 backdrop-blur-sm"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
