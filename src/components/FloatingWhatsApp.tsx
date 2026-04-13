import { MessageCircle } from 'lucide-react';

/**
 * FloatingWhatsApp Component
 * Senior Engineering Note: Implementing a high-visibility, 
 * non-intrusive floating CTA for conversion optimization.
 * Z-index management and mobile-first positioning included.
 */
export default function FloatingWhatsApp() {
  const whatsappNumber = '5511921225287';
  const message = encodeURIComponent('Olá! Gostaria de uma análise inicial sobre o meu caso de Direito da Saúde.');
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center"
      aria-label="Falar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Falar com Especialista
      </span>
    </a>
  );
}
