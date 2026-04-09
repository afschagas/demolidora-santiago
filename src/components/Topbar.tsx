import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { CONTACT } from "../data/contact";

const link =
  "inline-flex items-center gap-2 text-sm text-theme transition-colors hover:text-[#fc700f]";

export default function Topbar() {
  return (
    <div className="app-topbar text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start">
          <a href={`tel:${CONTACT.phoneTel}`} className={link}>
            <FaPhone className="text-[#fc700f] shrink-0" aria-hidden />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className={link}>
            <FaWhatsapp className="text-[#fc700f] shrink-0" aria-hidden />
            <span>{CONTACT.whatsappDisplay}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className={`${link} max-w-[280px] sm:max-w-none truncate sm:truncate-none`}
          >
            <FaEnvelope className="text-[#fc700f] shrink-0" aria-hidden />
            <span>{CONTACT.email}</span>
          </a>
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center gap-2 text-theme-muted px-2">
          <FaClock className="text-[#fc700f] shrink-0" aria-hidden />
          <span className="text-center whitespace-nowrap">{CONTACT.hoursLine}</span>
        </div>
        <div className="flex items-center justify-center lg:justify-end gap-3">
          <span className="md:hidden inline-flex items-center gap-2 text-theme-muted text-xs">
            <FaClock className="text-[#fc700f] shrink-0" aria-hidden />
            <span className="text-center leading-tight">{CONTACT.hoursLine}</span>
          </span>
          <div className="flex items-center gap-2 border-l border-theme pl-3 ml-1">
            <a
              href="#"
              className="w-8 h-8 rounded border border-theme text-theme flex items-center justify-center transition-colors hover:border-[#fc700f] hover:text-[#fc700f]"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded border border-theme text-theme flex items-center justify-center transition-colors hover:border-[#fc700f] hover:text-[#fc700f]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded border border-theme text-theme flex items-center justify-center transition-colors hover:border-[#fc700f] hover:text-[#fc700f]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
