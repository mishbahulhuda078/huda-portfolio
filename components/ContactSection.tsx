"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";

function LinkedinIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] p-6 sm:p-12 cad-bracket shadow-2xl">
          {/* Background grid */}
          <div className="grid-subtle absolute inset-0 opacity-40 pointer-events-none" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            {/* Left Column: Heading & Availability */}
            <div>
              <div className="flex items-center gap-2">
                <span className="led-indicator" />
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                  READY FOR CONTACT!
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-[var(--text)]">
                Let’s engineer <br />
                <span className="accent-text">reliable industrial systems.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-dim)] sm:text-base">
                Fresh graduate instrumentation engineer with practical plant internship experience at PT Petrokimia Gresik, academic laboratory leadership at ITS, and research fellowship at NTUST Taiwan. Ready for full-time engineering roles in Instrumentation, Automation, PLC/SCADA, and Maintenance.
              </p>

              {/* Status checklist */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="rounded-md border border-[var(--emerald)]/30 bg-[var(--emerald)]/10 px-3 py-1.5 text-[var(--emerald)] font-medium">
                  ✓ BNSP Engineer Scheme Certified
                </span>
                <span className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 text-[var(--text-dim)] font-medium">
                  ✓ On-site / Field Ready
                </span>
                <span className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 text-[var(--text-dim)] font-medium">
                  ✓ D4 Bachelor Equivalent (ITS)
                </span>
              </div>
            </div>

            {/* Right Column: Direct Dispatch Terminals */}
            <div className="flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] flex items-center justify-between">
                  <span>CONTACT ME</span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Email Box */}
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3.5">
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--muted)]">
                      <span>EMAIL DISPATCH</span>
                      <button
                        onClick={() => copyToClipboard("mishbahulhuda078@gmail.com")}
                        className="flex items-center gap-1 text-[var(--accent)] hover:underline font-semibold"
                      >
                        {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                      </button>
                    </div>
                    <a
                      href="mailto:mishbahulhuda078@gmail.com"
                      className="mt-1 block text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)] transition truncate"
                    >
                      mishbahulhuda078@gmail.com
                    </a>
                  </div>

                  {/* LinkedIn Box */}
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3.5">
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--muted)]">
                      <span>PROFESSIONAL NETWORK</span>
                      <span className="text-[10px] text-[var(--cyan)] font-mono">LINKEDIN</span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/mishbahulhuda"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 flex items-center justify-between text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)] transition"
                    >
                      <span>linkedin.com/in/mishbahulhuda</span>
                      <ExternalLink size={14} className="text-[var(--muted)] shrink-0" />
                    </a>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-center justify-between text-xs font-medium text-[var(--muted)] pt-1 px-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[var(--accent)]" />
                      <span>Gresik, East Java, Indonesia</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: LinkedIn, Email, Download CV (No WhatsApp) */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-2.5">
                <a
                  href="https://www.linkedin.com/in/mishbahulhuda"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--surface)] border border-[var(--line)] px-4 py-2.5 text-xs font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition shadow-sm"
                >
                  <LinkedinIcon size={15} className="text-[var(--cyan)]" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="mailto:mishbahulhuda078@gmail.com"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-xs font-bold text-[#090c10] shadow-md hover:bg-[var(--accent-light)] transition"
                >
                  <Mail size={15} />
                  <span>EMAIL</span>
                </a>
                <a
                  href="/Muhammad-Mishbahul-Huda-CV.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-xs font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                >
                  <Download size={14} className="text-[var(--accent)]" />
                  <span>DOWNLOAD CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
