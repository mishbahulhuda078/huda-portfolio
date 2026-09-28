"use client";

import { Download, Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { num: "01", label: "Education", href: "#education" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Projects", href: "#work" },
  { num: "04", label: "Tools & Hardware", href: "#skills" },
  { num: "05", label: "Certifications", href: "#certifications" },
  { num: "06", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">

      {/* Main Nav Bar */}
      <div className={`px-4 pt-2 transition-all duration-300 ${scrolled ? "pt-2" : "pt-2 sm:pt-3"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] px-4 py-2.5 backdrop-blur-xl shadow-lg">
          {/* Logo / Brand */}
          <a href="#top" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-2)] text-[var(--accent)] transition group-hover:border-[var(--accent)]">
              <Terminal size={15} />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-[var(--text)] group-hover:text-[var(--accent)] transition">
                MUHAMMAD MISHBAHUL HUDA
              </div>
              <div className="text-[10px] text-[var(--muted)] tracking-tight">
                ELECTRICAL & INSTRUMENTATION
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-[var(--text-dim)] transition hover:bg-[var(--surface-2)] hover:text-[var(--accent)]"
              >
                <span className="text-[10px] text-[var(--muted)] group-hover:text-[var(--accent)]">
                  {link.num}.
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            <a
              href="/Muhammad-Mishbahul-Huda-CV.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download size={13} className="text-[var(--accent)]" />
              <span>CV.PDF</span>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface-2)] text-[var(--text-dim)] lg:hidden transition hover:border-[var(--accent)] hover:text-[var(--text)]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <div className="absolute left-4 right-4 top-full mt-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-2xl lg:hidden backdrop-blur-2xl">
              <div className="mb-2 border-b border-[var(--line)] pb-2 px-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">
                System Navigation
              </div>
              <div className="space-y-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-[var(--text)] transition hover:bg-[var(--surface-2)] hover:text-[var(--accent)]"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-[var(--muted)]">{link.num}</span>
                  </a>
                ))}
              </div>
              <div className="mt-3 border-t border-[var(--line)] pt-3">
                <a
                  href="/Muhammad-Mishbahul-Huda-CV.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] py-2 text-xs font-bold text-[var(--text)] hover:border-[var(--accent)]"
                >
                  <Download size={14} className="text-[var(--accent)]" />
                  Download Curriculum Vitae (PDF)
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
