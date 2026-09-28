"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Users,
  Calendar,
  MapPin,
  ChevronRight,
  Building2,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";

export interface ExperienceItem {
  id: string;
  code: string;
  role: string;
  company: string;
  department?: string;
  type: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  skills: string[];
  note?: string;
  image?: string;
}

export const professionalExperiences: ExperienceItem[] = [
  {
    id: "exp-pg",
    code: "-",
    role: "Instrument Maintenance Intern",
    company: "PT Petrokimia Gresik",
    department: "Instrument Maintenance II Section · Plant Operations",
    type: "Industrial Internship",
    period: "Feb 2026 – Jul 2026",
    location: "Gresik, Indonesia",
    description:
      "Performed hands-on industrial instrumentation maintenance, sensor calibration, and diagnostic troubleshooting across fertilizer production units. Engineered an automated NPK moisture monitoring device benchmarked against laboratory standards.",
    bullets: [
      "Conducted instrument calibration, loop checks, transmitter troubleshooting, and preventative maintenance activities across plant units.",
      "Developed a fertilizer moisture monitoring device for NPK products to support compliance with SNI 2803, achieving 98.13% accuracy compared with NIR Proximate (Büchi Labortechnik AG) as reference laboratory instrument.",
      "Interfaced industrial transmitters with Modbus RTU communication lines, ensuring noise-immune transmission in high-vibration plant areas.",
    ],
    skills: ["Calibration", "Troubleshooting", "NIR Proximate", "Modbus RTU", "SNI 2803", "Field Maintenance"],
    note: "Primary field internship in chemical manufacturing plant environment.",
    image: "/experience/exp-ptpg.jpg",
  },
  {
    id: "exp-ntust",
    code: "-",
    role: "Research Assistant",
    company: "Seismic Resilience Laboratory, NTUST",
    department: "Dept. of Civil and Construction Engineering",
    type: "International Fellowship",
    period: "Aug 2024 – Sep 2024",
    location: "Taipei City, Taiwan",
    description:
      "Awarded Taiwan's International Internship Pilot Program (IIPP) research fellowship to conduct experimental testing and performance telemetry on multi-hop wireless sensor networks for earthquake detection.",
    bullets: [
      "Selected for Taiwan’s International Internship Pilot Program (IIPP) sponsored research fellowship at National Taiwan University of Science and Technology.",
      "Conducted testing, calibration, and performance evaluation of an earthquake detection system based on a multi-hop wireless sensor network.",
      "Analyzed packet transmission reliability, signal propagation latency, and mesh routing under simulated seismic shock events.",
    ],
    skills: ["Multi-Hop Wireless Network", "Telemetry Testing", "Seismic Instrumentation", "International Research"],
    note: "Sponsored research fellowship under Taiwan National Science and Technology Council.",
    image: "/experience/exp-ntust.jpg",
  },
  {
    id: "exp-its",
    code: "-",
    role: "Student Coordinator · Mechanical Manager",
    company: "Electronic Laboratory, ITS",
    department: "Dept. of Instrumentation Engineering, Faculty of Vocational Studies",
    type: "Academic Laboratory Leadership",
    period: "Nov 2023 – Jan 2026",
    location: "Surabaya, Indonesia",
    description:
      "Supervised lab assistants, managed 4 academic instrumentation practicum courses for 200+ students, and headed 3D mechanical CAD design, rapid prototyping, and additive manufacturing machinery.",
    bullets: [
      "Supervised 14 laboratory assistants and practical sessions across 4 Instrumentation courses supporting 200+ students.",
      "Coordinated applied engineering research projects with external industry partners under INSPIRASI, HETI, and Kedaireka initiatives.",
      "Designed 3D mechanical components, sensor brackets, device structures, and controller enclosures using Autodesk Inventor; maintained and operated laboratory 3D printers.",
    ],
    skills: ["Autodesk Inventor", "3D Printing & FDM", "Lab Leadership", "Practicum Supervision", "Rapid Prototyping"],
    note: "Departmental teaching lab management and fabrication lead.",
    image: "/experience/exp-its.jpg",
  },
  {
    id: "exp-mlt",
    code: "-",
    role: "Helper Technician Intern",
    company: "PT Mentari Lima Teknik",
    department: "Heavy Lifting & Electromechanical Division",
    type: "Technician Internship",
    period: "Nov 2019 – Apr 2020",
    location: "Surabaya, Indonesia",
    description:
      "Assisted senior electromechanical technicians in industrial lifting equipment maintenance, overhead crane motor overhauls, elevator inspections, and structural girder fabrication.",
    bullets: [
      "Supported hoist and crane maintenance by replacing electromechanical components, contactors, and wire rope assemblies.",
      "Conducted industrial elevator safety inspections and functional load testing adhering to occupational safety standards.",
      "Assisted in structural girder welding fabrication, mechanical alignment, and industrial hoist assembly installation.",
    ],
    skills: ["Electromechanical", "Crane Maintenance", "Girder Fabrication", "Plant Safety", "Heavy Lifting"],
    note: "Foundational industrial electromechanical work experience.",
    image: "/experience/exp-mlt.jpg",
  },
];

export const organizationalExperiences: ExperienceItem[] = [
  {
    id: "org-kag",
    code: "-",
    role: "Journalistic Coordinator (2020–2022) · Facilitator (2022–Present)",
    company: "Komunitas Anak Gresik, KBP3A Gresik",
    department: "Youth Empowerment & Child Rights Advocacy Division",
    type: "Community Leadership",
    period: "2020 – Present",
    location: "Gresik, Indonesia",
    description:
      "Led youth community advocacy, public communication, and interactive educational workshops across Gresik regency in partnership with Dinas KB-PP-PA (KBP3A).",
    bullets: [
      "Coordinated journalistic media documentation, published event bulletins, and led social media advocacy campaigns promoting child welfare.",
      "Facilitated child participation forums and educational workshops reaching hundreds of youth across regional districts.",
      "Acted as liaison between local government bodies, schools, and non-profit partners to implement child-friendly city programs.",
    ],
    skills: ["Community Facilitation", "Youth Advocacy", "Journalistic Media", "Public Speaking", "Event Moderation"],
    note: "Regional youth community partnership with KBP3A Gresik.",
    image: "/experience/org-kagg.jpg",
  },
  {
    id: "org-himatekins",
    code: "-",
    role: "Instructor Committee of Cadres Element",
    company: "HIMATEKINS ITS (Student Association)",
    department: "Dept. of Instrumentation Engineering Student Association",
    type: "Student Association Leadership",
    period: "2024 – 2025",
    location: "Surabaya, Indonesia",
    description:
      "Designed and executed leadership development, professional ethics, and organizational character cultivation for incoming Instrumentation Engineering students.",
    bullets: [
      "Formulated and implemented cadre development curriculum, mentoring new students on academic adaptability and leadership ethics.",
      "Facilitated group problem-solving simulations, technical study groups, and organizational integrity workshops.",
      "Evaluated cadre progress and provided 1-on-1 mentorship to foster solid cohort cohesion and institutional responsibility.",
    ],
    skills: ["Cadre Mentorship", "Student Governance", "Curriculum Execution", "Team Development", "Coaching"],
    note: "Departmental student association cadre mentorship division.",
    image: "/experience/org-himatekins.jpg",
  },
  {
    id: "org-ilingbumi",
    code: "-",
    role: "Environmental Volunteer",
    company: "Iling Bumi Gresik",
    department: "Social & Ecological Sustainability Initiative",
    type: "Volunteer Service",
    period: "2022 – Present",
    location: "Gresik, Indonesia",
    description:
      "Active volunteer in community-based social initiatives, focusing on humanitarian assistance, Ramadan outreach, and informal education for underserved communities in Gresik.",
    bullets: [
      "Participated in Ramadan community outreach by distributing iftar and pre-dawn meals to people living and working on the streets, as well as providing food assistance to communities affected by flooding.",
      "Supported social education initiatives by teaching and engaging with street children, contributing to community development and access to informal education.",
    ],
    skills: ["Environmental Conservation", "Volunteerism", "Community Education", "Ecological Stewardship"],
    note: "Independent ecological and social movement in Gresik.",
    image: "/experience/org-ibg.jpg",
  },
  {
    id: "org-campus-events",
    code: "-",
    role: "Campus Event Committees",
    company: "Institut Teknologi Sepuluh Nopember (ITS)",
    department: "GERIGI ITS · VONDASI 5.0 · ITS Expo · INFEST · Maba Cup",
    type: "Event Committee Portfolio",
    period: "2022 – 2024",
    location: "Surabaya, Indonesia",
    description:
      "Delivered cross-functional contributions across major university-wide and faculty-level initiatives, spanning official administrative correspondence, equipment logistics, and stage design.",
    bullets: [
      "GERIGI ITS 2023 (Secretarial Staff): Handled administrative correspondence, archival records, and orientation certificates for ITS's university-wide freshman induction.",
      "VONDASI 5.0 ITS 2023 (Logistics Staff): Managed stage rigging, technical gear inventory, and operational procurement for the Faculty of Vocational Studies event.",
      "INFEST 2023-2024 (Instraining Coordinator & Income Staff): Structured technical training workshops (Instraining) for national participants.",
      "ITS Expo 2023 & Maba Cup 2022 (Decoration Staff): Designed spatial aesthetics, exhibition booth layout, and structural artistic displays.",
    ],
    skills: ["Event Logistics", "Secretarial & Documentation", "Stage Decoration", "Cross-Functional Collaboration"],
    note: "Portfolio of institutional event management committees at ITS.",
    image: "/experience/org-campus-events.jpg",
  },
];

export default function ExperienceLeadershipSection() {
  const [activeTab, setActiveTab] = useState<"professional" | "organizational">("professional");

  const items = activeTab === "professional" ? professionalExperiences : organizationalExperiences;

  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8 border-y border-[var(--line)] bg-[var(--surface)]/40 overflow-hidden">
      {/* Background Subtle Industrial Amber Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[var(--accent-glow)] blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[var(--accent-glow)] blur-3xl opacity-40" />

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-[var(--text)]">
            Experience &amp;{" "}
            <span className="accent-text underline decoration-[var(--accent)]/40 underline-offset-8">
              Leadership
            </span>
          </h2>

          {/* Decorative Amber Center Line */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[var(--accent)]/60" />
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
            <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[var(--accent)]/60" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-dim)] sm:text-base">
            Structured background across industry plant internships, international research fellowships, and student leadership governance.
          </p>
        </div>

        {/* 2-Button Toggle Selector (Industrial Amber Theme) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab("professional")}
            className={`group flex items-center gap-2.5 rounded-lg px-5 py-3 font-bold transition-all shadow-md ${activeTab === "professional"
              ? "bg-[var(--accent)] text-[#090c10] shadow-[0_0_20px_var(--accent-glow)] scale-[1.02]"
              : "border border-[var(--line)] bg-[var(--surface-2)] text-[var(--text-dim)] hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[var(--surface-3)]"
              }`}
          >
            <Briefcase size={16} className={activeTab === "professional" ? "text-[#090c10]" : "text-[var(--accent)]"} />
            <span>Professional Experience ({professionalExperiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("organizational")}
            className={`group flex items-center gap-2.5 rounded-lg px-5 py-3 font-bold transition-all shadow-md ${activeTab === "organizational"
              ? "bg-[var(--accent)] text-[#090c10] shadow-[0_0_20px_var(--accent-glow)] scale-[1.02]"
              : "border border-[var(--line)] bg-[var(--surface-2)] text-[var(--text-dim)] hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[var(--surface-3)]"
              }`}
          >
            <Users size={16} className={activeTab === "organizational" ? "text-[#090c10]" : "text-[var(--accent)]"} />
            <span>Organization &amp; Volunteer ({organizationalExperiences.length})</span>
          </button>
        </div>

        {/* Category Header Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface-2)]/60 p-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
              {activeTab === "professional" ? <Briefcase size={18} /> : <Users size={18} />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[var(--text)] sm:text-lg">
                  {activeTab === "professional" ? "Professional Experience" : "Organization & Volunteer Experience"}
                </h3>
                <span className="rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-[var(--accent)]">
                  {activeTab === "professional" ? "Primary Focus" : "Leadership & Community"}
                </span>
              </div>
              <p className="text-xs text-[var(--muted)]">
                {activeTab === "professional"
                  ? "Industry internships, international research, and academic laboratory operations"
                  : "Student association governance, youth advocacy, and campus event portfolios"}
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-[var(--muted)]">
            Total Records: <span className="font-bold text-[var(--accent)]">{items.length}</span>
          </div>
        </div>

        {/* Timeline / Card Stream */}
        <div className="relative mt-10 space-y-8 pl-4 sm:pl-8 before:absolute before:bottom-3 before:left-2 before:top-3 before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent)]/60 before:via-[var(--line)] before:to-transparent sm:before:left-4">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Connector Node (Industrial Amber) */}
              <div className="absolute -left-[23px] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--accent)]/50 bg-[#090c10] text-[var(--accent)] shadow-[0_0_10px_var(--accent-glow)] transition-transform group-hover:scale-110 sm:-left-[39px]">
                {activeTab === "professional" ? (
                  <Briefcase size={12} className="text-[var(--accent)]" />
                ) : (
                  <Users size={12} className="text-[var(--accent)]" />
                )}
              </div>

              {/* Main Card */}
              <article className="card card-hover relative overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-6 sm:p-8 cad-bracket transition-all">
                {/* Card Top: Content + Photo */}
                <div className="flex flex-col-reverse sm:flex-row sm:gap-6">
                  {/* Left: Text Content */}
                  <div className="flex-1 min-w-0">
                    {/* Role Title */}
                    <h4 className="text-lg font-bold text-[var(--text)] sm:text-xl group-hover:text-[var(--accent)] transition-colors">
                      {item.role}
                    </h4>
                    {/* Company & Department */}
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-sm text-[var(--accent)]">
                        {item.company}
                      </span>
                      {item.department && (
                        <>
                          <span className="text-[var(--line-strong)] hidden sm:inline">•</span>
                          <span className="font-mono text-xs text-[var(--muted)]">
                            {item.department}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Inline Metadata Row: Type + Period + Location */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 font-medium text-[var(--accent)]">
                        {activeTab === "professional" ? (
                          <Building2 size={12} />
                        ) : (
                          <ShieldCheck size={12} />
                        )}
                        <span>{item.type}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1 text-[var(--muted)]">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1 text-[var(--muted)]">
                        <MapPin size={12} className="text-[var(--accent)]" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right: Photo Area */}
                  <div className="mb-4 sm:mb-0 w-full sm:w-36 md:w-44 shrink-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-2)]">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={`${item.role} at ${item.company}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 176px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--muted)]">
                          <ImageIcon size={24} className="opacity-40" />
                          <span className="font-mono text-[9px] uppercase tracking-wider opacity-50">Photo</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b border-[var(--line)] mt-4 mb-4" />

                {/* Description Paragraph (Editable) */}
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-dim)]">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm leading-relaxed text-[var(--text-dim)]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <ChevronRight size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills / Tags */}
                <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-[var(--line)] pt-4">
                  <span className="mr-2 font-mono text-[12px] sentencecase text-[var(--muted)]">
                    Applied Tools / Focus:
                  </span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--text-dim)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
