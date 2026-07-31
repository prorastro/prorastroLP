import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/5591984000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Rastro%20F%C3%A1cil%20GPS.";

const WhatsappFloat = () => (
  <motion.a
    href={WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110"
  >
    <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
    <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2z" />
    </svg>
  </motion.a>
);

export default WhatsappFloat;
