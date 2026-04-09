import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { LOGO_SRC } from "../brand";
import { CONTACT } from "../data/contact";
import ThemeToggle from "./ThemeToggle";

const navBase =
  "uppercase tracking-wide text-sm font-semibold text-[#fc700f] hover:opacity-90 transition-opacity";

function NavItemWithMenu({
  label,
  to,
  items,
}: {
  label: string;
  to: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div className="relative group">
      <Link to={to} className={`${navBase} inline-flex items-center gap-1 py-2`}>
        {label}
        <FaChevronDown className="text-[10px] opacity-80 text-[#fc700f] group-hover:rotate-180 transition-transform duration-200" />
      </Link>
      <div className="absolute left-0 top-full z-[100] hidden min-w-[240px] pt-2 group-hover:block">
        <div className="nav-dropdown-panel">
          {items.map((it) => (
            <Link key={it.to} to={it.to} className="nav-dropdown-link">
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="app-navbar">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0 flex items-center" onClick={() => setOpen(false)}>
          <img
            src={LOGO_SRC}
            alt="Demolidora Santiago"
            className="h-16 sm:h-[4.5rem] md:h-[5rem] w-auto object-contain object-left"
            width={280}
            height={120}
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-8 flex-1 justify-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navBase} border-b-2 pb-0.5 ${isActive ? "border-[#fc700f] text-[#fc700f] opacity-100" : "border-transparent"}`
            }
          >
            Home
          </NavLink>
          <NavItemWithMenu
            label="Quem Somos"
            to="/quem-somos"
            items={[
              { label: "Nossa história", to: "/quem-somos" },
              { label: "Equipe e valores", to: "/quem-somos#valores" },
            ]}
          />
          <NavItemWithMenu
            label="Serviços"
            to="/servicos"
            items={[
              { label: "Demolição residencial", to: "/servicos" },
              { label: "Demolição industrial", to: "/servicos" },
              { label: "Remoção de entulho", to: "/servicos" },
            ]}
          />
          <NavItemWithMenu
            label="Contato"
            to="/contato"
            items={[
              { label: "Fale conosco", to: "/contato" },
              { label: "Localização", to: "/contato#mapa" },
            ]}
          />
        </nav>

        <div className="hidden lg:flex items-center shrink-0 gap-2">
          <ThemeToggle />
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#fc700f] text-[#fc700f] bg-transparent hover:bg-[#fc700f] hover:text-white font-bold uppercase text-xs tracking-wide px-4 py-2.5 rounded-sm transition-colors shadow-md shadow-black/25"
          >
            <FaWhatsapp className="text-lg" />
            Orçamento
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="nav-icon-btn p-2 text-[#fc700f] border border-[#fc700f]/45 rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="app-mobile-sheet xl:hidden px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 font-semibold uppercase text-sm text-[#fc700f] ${isActive ? "underline underline-offset-4" : ""}`
              }
            >
              Home
            </NavLink>
            <Link
              to="/quem-somos"
              onClick={() => setOpen(false)}
              className="py-2 text-[#fc700f] font-semibold uppercase text-sm"
            >
              Quem Somos
            </Link>
            <Link
              to="/servicos"
              onClick={() => setOpen(false)}
              className="py-2 text-[#fc700f] font-semibold uppercase text-sm"
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="py-2 text-[#fc700f] font-semibold uppercase text-sm"
            >
              Contato
            </Link>
          </div>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 border-2 border-[#fc700f] text-[#fc700f] hover:bg-[#fc700f] hover:text-white font-bold uppercase text-sm py-3 rounded-sm transition-colors"
            style={{ backgroundColor: "var(--theme-panel)" }}
            onClick={() => setOpen(false)}
          >
            <FaWhatsapp />
            Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
