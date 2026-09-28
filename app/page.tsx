"use client";

import Image from "next/image";
import profilePic from "../public/profile.jpg";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Download,
  GraduationCap,
  ImageIcon,
  MapPin,
  Radio,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ExperienceLeadershipSection from "@/components/ExperienceLeadershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const skillGroups = [
  {
    title: "Instrumentation",
    icon: Radio,
    accentColor: "var(--accent)",
    items: ["Measurement & Calibration", "Instrument Maintenance", "Troubleshooting", "Industrial Sensors", "4–20 mA Current Loop",],
    description: "Physical sensors, transmitters, and field calibration standards.",
  },
  {
    title: "Automation & PLC",
    icon: Zap,
    accentColor: "var(--cyan)",
    items: ["Siemens TIA Portal", "Omron CX-One", "Mitsubishi GX Works", "KepServer EX", "ControlByWeb",],
    description: "Industrial ladder logic, controller configuration, and HMI telemetry.",
  },
  {
    title: "Industrial Communication",
    icon: Cpu,
    accentColor: "var(--emerald)",
    items: ["Modbus RTU", "Modbus TCP/IP", "RS-485", "I2C",],
    description: "Deterministic serial communication and network bus protocols.",
  },
  {
    title: "Mechanical & Fabrication",
    icon: Wrench,
    accentColor: "var(--accent)",
    items: ["Autodesk Inventor", "AutoCAD", "Creality Ender 2/3", "CR-10 Max", "ELEGOO Neptune 4 Plus", "Sensor Brackets", "Custom Enclosure", "Panel Fabrication",],
    description: "3D CAD modeling, custom enclosures, and industrial control panel wiring.",
  },
  {
    title: "Programming & Engineering Software",
    icon: BriefcaseBusiness,
    accentColor: "var(--cyan)",
    items: ["Arduino IDE", "Visual Studio Code", "Python", "Eclipse (C++)", "JetBrains IDE (Rust)", "MATLAB", "Ansys", "Aspen HYSYS", "Festo FluidSIM",],
    description: "Simulation, process modeling, firmware coding, and computational analysis.",
  },
];

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  status: string; // All marked as "Completed"
  badge: string;
  scope: string;
  imgWidth: number;  // [EDITABLE] Width in px — adjust freely to resize the image frame
  imgHeight: number; // [EDITABLE] Height in px — adjust freely to resize the image frame
  src?: string;      // Replace with image path e.g. "/certificates/your-certificate.jpg"
}

// Each certification has its OWN image placeholder with editable width & height
// To resize: simply change imgWidth / imgHeight values below (in pixels)
const certifications: CertificationItem[] = [
  {
    id: "cert-bnsp-p1",
    name: "LSP P1 BNSP — Engineer Scheme Competency (LSP ITS)",
    issuer: "LSP ITS / Badan Nasional Sertifikasi Profesi (BNSP)",
    status: "Completed",
    badge: "BNSP P1",
    scope: "Certified competency qualification in Instrumentation Engineering systems & operational standards.",
    imgWidth: 360,   // [EDITABLE] px
    imgHeight: 200,  // [EDITABLE] px
    src: "/certificate/lspp1.jpg",
  },
  {
    id: "cert-infineon",
    name: "MCU PSoC 6 Training Program by Infineon Technologies",
    issuer: "Infineon Technologies",
    status: "Completed",
    badge: "Infineon",
    scope: "Specialized training on MCU PSoC 6 dual-core architecture, embedded firmware design, and sensor peripheral integration.",
    imgWidth: 220,  // [EDITABLE] px
    imgHeight: 300,  // [EDITABLE] px
    src: "/certificate/psoc.jpg",
  },
  {
    id: "cert-bnsp-p3",
    name: "LSP P3 BNSP — PLC-Based Electronic Equipment Operation",
    issuer: "LSP Elektronika Indonesia / BNSP",
    status: "Completed",
    badge: "BNSP P3",
    scope: "Competency qualification in programmable logic controllers (PLC), ladder programming, and industrial control equipment.",
    imgWidth: 220,  // [EDITABLE] px
    imgHeight: 300,  // [EDITABLE] px
    src: "/certificate/lspp3.jpg",
  },
  {
    id: "cert-lsk",
    name: "LSK — Low Voltage Electrical Installation Competency",
    issuer: "LSK Ketenagalistrikan / PT Lisan Nusantara Satu",
    status: "Completed",
    badge: "LSK",
    scope: "Low voltage industrial electrical wiring, earthing/grounding standards, and plant electrical installation compliance.",
    imgWidth: 360,   // [EDITABLE] px
    imgHeight: 240,  // [EDITABLE] px
    src: "/certificate/lsk.jpg",
  },
];

export default function Home() {
  return (
    <main
      id="top"
      className="noise min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[92vh] items-center px-5 pb-20 pt-36 sm:px-8">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="absolute left-1/2 top-32 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent-glow)] blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.18fr_.82fr]">
          {/* Hero Left Content */}
          <div className="reveal">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 font-mono text-[11px] font-semibold text-[var(--accent)]">
              <span className="led-indicator led-amber" />
              <span>INSTRUMENTATION & AUTOMATION ENGINEERING</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Engineering ideas into{" "}
              <span className="accent-text underline decoration-[var(--accent)]/40 underline-offset-8">
                calibrated, working systems.
              </span>
            </h1>

            {/* Profile Bio */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-dim)] sm:text-lg">
              I’m{" "}
              <strong className="text-[var(--text)] font-bold">
                Muhammad Mishbahul Huda
              </strong>
              , a D4 Instrumentation Engineering graduate from Institut
              Teknologi Sepuluh Nopember (ITS), with hands-on experience across
              instrumentation maintenance, calibration, troubleshooting,
              automation, electrical systems, and engineering projects.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-bold text-[#090c10] shadow-lg transition hover:bg-[var(--accent-light)]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="/Muhammad-Mishbahul-Huda-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface-2)] px-5 py-3 font-bold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <span>DOWNLOAD CV (PDF)</span>
                <Download size={15} className="text-[var(--accent)]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-3 font-bold text-[var(--text-dim)] hover:text-[var(--accent)] transition"
              >
                <span>Contact Me! →</span>
              </a>
            </div>
          </div>

          {/* Hero Right: Industrial Field Profile Dossier */}
          <div className="relative mx-auto w-full max-w-md reveal [animation-delay:120ms]">
            {/* Outer CAD Bracket Border */}
            <div className="relative overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-2 cad-bracket shadow-2xl">
              {/* Image Frame */}
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-[var(--surface-2)]">
                <Image
                  src={profilePic}
                  alt="Muhammad Mishbahul Huda in an industrial field environment at Petrokimia Gresik harbor dock"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 440px"
                  className="object-cover object-center"
                />
                <div className="scanline" />
              </div>

              {/* Info Box Below Photo */}
              <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3.5 mt-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm tracking-wide text-[var(--text)]">
                    Muhammad Mishbahul Huda
                  </div>
                  <span className="text-[var(--emerald)] flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" />
                    ON-SITE LOG
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="font-mono text-xs text-amber-400">
                    D4 Instrumentation Engineer
                  </div>
                  <div className="font-mono text-[10px] font-semibold text-[var(--emerald)]">
                    Ready for Employment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Education & Degree with Academic Benchmarks Section */}
      <section
        id="education"
        className="border-y border-[var(--line)] bg-[var(--surface)]/40 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="card p-6 sm:p-8 cad-bracket border-[var(--line-strong)] bg-[var(--surface)] shadow-xl">
            {/* Header: Title, Subtitle, and GPA Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-5 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--text)]">
                    Education &amp; Degree
                  </h3>
                </div>
              </div>
            </div>

            {/* Middle: Degree, Institution, Thesis, and Academic Status Box */}
            <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_.8fr] pb-6 border-b border-[var(--line)]">
              <div>
                <h4 className="font-bold text-lg text-[var(--text)]">
                  Institut Teknologi Sepuluh Nopember (ITS)
                </h4>
                <div className="mt-1 font-mono text-xs text-[var(--accent)] font-semibold">
                  D4 / Bachelor-equivalent in Instrumentation Engineering
                </div>
                <div className="mt-1 text-xs text-[var(--muted)] font-mono">
                  Jul 2022 — Aug 2026 · Surabaya, Indonesia
                </div>

                <div className="mt-4 rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-4 text-xs sm:text-sm text-[var(--text-dim)] leading-relaxed">
                  <span className="font-bold text-[var(--accent)]">Thesis Research:</span>{" "}
                  Integrated Digital Wastewater Flow Monitoring System to Support Sustainable Water Management at ITS Smart Eco Campus.
                </div>
              </div>
            </div>

            {/* Bottom: The 4 Key Statistics Cards integrated seamlessly */}
            <div className="mt-6 pt-1">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Academic &amp; Field Milestones</span>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {[
                  {
                    metric: "3.56",
                    label: "Cumulative GPA / 4.00",
                    sub: "Bachelor-Equivalent D4 Degree (ITS)",
                  },
                  {
                    metric: "98.13%",
                    label: "Fertilizer Moisture Accuracy",
                    sub: "PT Petrokimia Gresik",
                  },
                  {
                    metric: "95.46%",
                    label: "Wastewater Flow Accuracy",
                    sub: "WWTP at ITS Smart Eco Campus",
                  },
                  {
                    metric: "200+",
                    label: "Practicum Students Guided",
                    sub: "Electronic Laboratory ITS Coordinator",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-lg border border-[var(--line)] bg-[var(--surface-2)]/70 p-4 transition-all hover:border-[var(--accent)] hover:shadow-md"
                  >
                    <div className="font-mono text-2xl font-black text-[var(--accent)] sm:text-3xl">
                      {stat.metric}
                    </div>
                    <div className="mt-1 font-semibold text-xs text-[var(--text)] sm:text-sm">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-[var(--muted)]">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <ExperienceLeadershipSection />

      {/* Featured Work Projects Section */}
      <ProjectsSection />

      {/* Technical Stack Section */}
      <section id="skills" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl text-[var(--text)]">
                Tools &amp; Hardware
              </h2>
            </div>
            <p className="max-w-md text-sm leading-5 text-[var(--muted)]">
              From field instruments to CAD modeling, embedded systems, and engineering analysis.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.title}
                  className="card card-hover flex flex-col justify-between p-6 transition-all"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-2)] text-[var(--accent)]">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="font-bold text-[var(--text)]">
                            {group.title}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-[var(--muted)] leading-5">
                      {group.description}
                    </p>

                    {/* Skill items chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-xs text-[var(--text-dim)] hover:border-[var(--accent)] transition"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>



      {/* Competency Certifications & Training Section with Individual Placeholders */}
      <section
        id="certifications"
        className="border-b border-[var(--line)] bg-[var(--surface)]/20 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
                <ShieldCheck size={16} />
                <span>Verified Qualifications</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-[var(--text)]">
                Competency Certifications &amp; Training
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[var(--muted)] max-w-2xl">
                National competency certifications (BNSP / LSK) and specialized technical training programs. Each qualification has its own individual preview frame with customizable portrait and landscape aspect ratios.
              </p>
            </div>
            <div className="font-mono text-xs text-[var(--muted)]">
              Total Credentials: <span className="font-bold text-[var(--accent)]">{certifications.length}</span>
            </div>
          </div>

          {/* Certification Cards - Text Left, Image Right */}
          <div className="space-y-6">
            {certifications.map((cert) => (
              <article
                key={cert.id}
                className="card card-hover relative overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-5 sm:p-6 cad-bracket transition-all hover:border-[var(--accent)] shadow-md"
              >
                <div className="grid gap-5 md:grid-cols-[1fr_1.3fr] items-start">
                  {/* Left: Text Content */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="rounded-md border border-[var(--emerald)]/30 bg-[var(--emerald)]/10 px-2 py-0.5 font-mono text-[10px] font-bold text-[var(--emerald)]">
                          ✓ {cert.status}
                        </span>
                        <span className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                          {cert.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-[var(--text)] leading-snug">
                        {cert.name}
                      </h3>
                      <p className="mt-1.5 font-mono text-xs text-[var(--accent)] font-semibold">
                        {cert.issuer}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-[var(--text-dim)]">
                        {cert.scope}
                      </p>
                    </div>
                  </div>

                  {/* Right: Certificate Image — size controlled by imgWidth & imgHeight */}
                  <div
                    className="relative w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-2)] transition-all"
                    style={{
                      maxWidth: `${cert.imgWidth}px`,
                      aspectRatio: `${cert.imgWidth} / ${cert.imgHeight}`,
                    }}
                  >
                    {cert.src ? (
                      <Image
                        src={cert.src}
                        alt={cert.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 p-4 text-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/10 text-[var(--accent)]">
                          <ImageIcon size={22} />
                        </div>
                        <div className="font-mono text-xs font-bold text-[var(--text)]">
                          {cert.badge} CERTIFICATE
                        </div>
                        <p className="font-mono text-[9px] text-[var(--muted)] max-w-[260px] leading-relaxed">
                          {cert.imgWidth} × {cert.imgHeight} px
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Contact & Dispatch Terminal */}
      <ContactSection />

      {/* Industrial Engineering Footer */}
      <footer className="border-t border-[var(--line)] bg-[var(--surface-2)]/60 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} by Muhammad Mishbahul Huda
          </div>
          <div className="flex flex-wrap gap-5">
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition"
            >
              Back to top <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
