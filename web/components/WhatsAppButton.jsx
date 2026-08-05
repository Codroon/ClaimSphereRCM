import React from 'react';
import { companyInfo } from '../data/mock';

// Floating WhatsApp click-to-chat button (bottom-right).
//
// NOTE: the number is derived from companyInfo.phone (digits only). WhatsApp
// requires this line to be a WhatsApp-enabled number — confirm the client's
// number is on WhatsApp, otherwise set WHATSAPP_NUMBER to the correct one.
const WHATSAPP_NUMBER = companyInfo.phone.replace(/\D/g, ''); // e.g. 13074001621
const PREFILL = 'Hi ClaimSphere RCM, I would like to learn more about your services.';

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* Gentle attention ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping"></span>

      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.926 11.926 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893A11.821 11.821 0 0020.52 3.449" />
        </svg>
      </span>

      {/* Hover label */}
      <span className="absolute right-16 whitespace-nowrap rounded-full bg-[#003366] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 pointer-events-none hidden sm:block">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
