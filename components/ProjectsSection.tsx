"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  X,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileText,
  HardDrive,
  Sliders,
  HelpCircle,
  Activity,
  ImageIcon,
} from "lucide-react";

export interface ProjectImagePlaceholder {
  title: string;
  caption?: string;
  src?: string; // Set this to your image path e.g. "/projects/..."
}

export interface ProjectModalData {
  tagId?: string;
  number: string;
  title: string;
  client: string;
  category: string;
  filterGroup: "sensors" | "panel" | "automation";
  summary: string;
  result: string;
  accuracyValue?: string;
  challenge: string;
  methodology: string;
  whatIDid: string[];
  pipeline: string[];
  metrics: {
    label: string;
    value: string;
    sub?: string;
  }[];
  techStack: string[];
  documentationNote: string;
  driveUrl?: string;
  images?: ProjectImagePlaceholder[];
}

export const projectsData: ProjectModalData[] = [
  {
    number: "01",
    tagId: "FT-101",
    title: "Integrated Digital Wastewater Flow Monitoring System",
    client: "ITS Smart Eco Campus · Presented at ICOEE 2026",
    category: "Environmental & Flow Instrumentation",
    filterGroup: "sensors",
    summary:
      "An integrated digital flow-monitoring system developed to support sustainable wastewater management at ITS Smart Eco Campus, combining paddle-wheel flow metering with industrial Modbus RTU telemetry.",
    result: "95.46% measurement accuracy vs TUF-2000B",
    accuracyValue: "95.46%",
    challenge:
      "The existing Wastewater Treatment Plant (WWTP) at the Department of Environmental Engineering, ITS, relied on irregular manual recording to monitor open-channel wastewater discharge — a method with high latency and vulnerability to flow turbulence. Without a continuous monitoring system, treatment performance could not be evaluated quantitatively, which also affected the campus's water and wastewater score in the UI GreenMetric ranking. The objective was to design an automated, real-time digital monitoring station capable of accurately capturing dynamic wastewater discharge rates and daily volume across a 100 m HDPE pipeline, logging data over an industrial serial bus.",
    methodology:
      "Implemented a Bürkert S030 paddle-wheel flow meter (Hall-effect pulse output) paired with an Arduino Nano as a Modbus RTU slave, communicating via a MAX485 TTL-to-RS485 module to a ControlByWeb X-404 acting as Modbus master. Engineered the RS-485 serial bus, configured cyclic holding-register polling (9600 baud, 8N1, Function 03), and validated the system in the field by benchmarking Bürkert S030 flow readings against a certified TUF-2000B clamp-on ultrasonic flow meter across four pumping cycles, following ECOMET–UNIDO and ISO 5168 calibration guidelines.",
    whatIDid: [
      "Engineered the complete measurement circuitry, DC power distribution, and RS-485 communication line isolation on a custom slave PCB (EasyEDA).",
      "Programmed Arduino Nano firmware and mapped Modbus RTU holding registers (flow rate & cumulative volume) on the ControlByWeb X-404.",
      "Executed metrological field validation against the TUF-2000B ultrasonic reference standard, achieving 95.46% measurement accuracy.",
      "Authored the research paper and presented findings at the International Conference on Environmental Engineering (ICOEE) 2026.",
    ],
    pipeline: [
      "Bürkert S030 Paddle-Wheel",
      "Frequency-to-Pulse Conditioning",
      "RS-485 / Modbus RTU Bus",
      "ControlByWeb X-404 RTU",
      "TUF-2000B Benchmark Standard",
    ],
    metrics: [
      { label: "Flow Accuracy", value: "95.46%", sub: "vs TUF-2000B Ultrasonic" },
      { label: "Fieldbus Protocol", value: "Modbus RTU", sub: "RS-485" },
      { label: "Publication", value: "ICOEE 2026", sub: "International Conference" },
      { label: "Data Telemetry", value: "Real-Time", sub: "Data Logging" },
    ],
    techStack: [
      "Bürkert S030",
      "ControlByWeb X-404",
      "Modbus RTU",
      "RS-485",
      "Arduino IDE",
      "TUF-2000B",
      "Signal Conditioning",
      "Web Based Monitoring",
    ],
    documentationNote:
      "Schematic wiring diagram, pulse calibration curve, field transducer mounting at ITS wastewater ditch, and ICOEE 2026 conference presentation slides.",
    driveUrl: "https://drive.google.com/drive/folders/1lDY98MQU3CzFJBZavrpe6NOItT2O-dwV?usp=drive_link",
    images: [
      { title: "Sensor Field Installation", caption: "Panel System", src: "/project/p1-panel.jpg" },
      { title: "Controller Wiring Diagram", caption: "PCB Slave", src: "/project/p1-pcb.jpg" },
      { title: "TUF-2000B Benchmark Setup", caption: "Field Validation", src: "/project/p1-field.jpg" },
      { title: "Telemetry & Presentation", caption: "ICOEE 7th 2026", src: "/project/p1-icoee7th.jpg" },
    ],
  },
  {
    number: "02",
    tagId: "MST-202",
    title: "Soil Moisture Monitoring System for Fertilizer Product",
    client: "PT Petrokimia Gresik — NPK II, III & IV Bagging Area",
    category: "Agro-Chemical Sensor Integration",
    filterGroup: "sensors",
    summary:
      "A fertilizer moisture-monitoring device engineered during internship at PT Petrokimia Gresik to support real-time quality control and strict SNI 2803 national fertilizer compliance.",
    result: "98.13% accuracy vs NIR Proximate",
    accuracyValue: "98.13%",
    challenge:
      "PT Petrokimia Gresik's NPK/Phonska bagging lines (NPK II, III, and IV) had no real-time way to monitor product moisture after fertilizer left the dryer and entered packaging. Granular NPK is hygroscopic — excess moisture at this stage builds liquid bridges between granules that harden into solid bridges, causing caking and quality loss during storage and distribution. Without continuous moisture data, the plant had no historical record to evaluate this risk early, and modifying the upstream heat-transfer/cooling process to prevent it would require significant capital investment and production downtime. A lower-cost, non-invasive monitoring system was needed to capture actual moisture conditions in real time as a first step toward data-driven quality control.",
    methodology:
      "Designed and built a moisture monitoring device around a Soil Moisture and Temperature sensor (MT-02A) communicating over Modbus RTU/RS-485, paired with a Seeeduino XIAO SAMD21 microcontroller and a 1.3-inch OLED display. Sensor communication was first verified using Modbus Poll software, then the readings were validated against a laboratory-grade NIR Proxymate analyzer (Buchi Labortechnik AG) on NPK granule samples in PT Petrokimia Gresik's Lab II B, following the company's internal 2% moisture ceiling and SNI 2803:2024 fertilizer standards. The device was then field-tested by reading live NPK product moving on the bagging conveyor belt.",
    whatIDid: [
      "Designed the sensing circuit and wiring, integrating the MT-02A sensor, RS485-to-TTL converter, Seeeduino XIAO SAMD21, Hi-Link HLK-PM01 power module, and OLED display.",
      "Programmed the microcontroller firmware to poll the MT-02A over Modbus RTU and render live moisture readings on the OLED via I2C.",
      "Verified Modbus RTU/RS-485 communication using Modbus Poll, then validated sensor accuracy against a laboratory NIR Proxymate analyzer across four NPK granule samples.",
      "Field-tested the device on live production, reading moisture directly off product moving on the bagging conveyor without stopping the line or losing communication.",
    ],
    pipeline: [
      "MT-02A Soil Moisture & Temp Sensor",
      "RS-485 / Modbus RTU Output",
      "RS485-to-TTL Converter",
      "Seeeduino XIAO SAMD21 (I2C)",
      "OLED 1.3\" Live Display",
    ],
    metrics: [
      { label: "Moisture Accuracy", value: "98.13%", sub: "vs NIR Proximate (Büchi)" },
      { label: "Standardization", value: "SNI 2803", sub: "NPK Fertilizer Compliance" },
      { label: "Deployment Units", value: "NPK II, III, IV", sub: "Petrokimia Bagging Area" },
      { label: "Microcontroller", value: "Seeeduino", sub: "XIAO SAMD21 Board" },
    ],
    techStack: [
      "MT-02A Sensor",
      "Seeeduino XIAO SAMD21",
      "Modbus RTU",
      "RS-485",
      "Hi-Link HLK-PM01",
      "OLED 1.3\"",
      "NIR Proxymate",
      "Modbus Poll",
    ],
    documentationNote:
      "Calibration curves comparison with NIR Proximate, physical sensor housing assembly photos, and PT Petrokimia Gresik plant internship verification reports.",
    driveUrl: "https://drive.google.com/drive/folders/1rLVnFTeg5xWdQwQwpqbA81Yd-S4XgLnP?usp=sharing",
    images: [
      { title: "Industrial Probe & Housing", caption: "3D Design", src: "/project/p2-3d.jpg" },
      { title: "Embedded Circuitry", caption: "Hardware Assembly", src: "/project/p2-asm.jpg" },
      { title: "NIR Proximate Benchmark", caption: "Factory laboratory validation against Büchi NIR", src: "/project/p2-nir.jpg" },
      { title: "NPK Bagging Plant Floor", caption: "On-site testing in NPK Bagging Area", src: "/project/p2-field.jpg" },
    ],
  },
  {
    number: "03",
    tagId: "DO-303",
    title: "Dissolved Oxygen Monitoring System",
    client: "IPLT Keputih Surabaya (Wastewater Plant)",
    category: "Panel Fabrication & Mechanical Integration",
    filterGroup: "panel",
    summary:
      "Field-oriented multi-parameter water monitoring station combining 3D CAD sensor mounting brackets, industrial DIN-rail electrical panel fabrication, and in-situ electrode immersion.",
    result: "Panel + 3D Bracket Integration",
    challenge:
      "IPLT Keputih is Surabaya's only septage treatment plant, receiving waste from 48 private companies and 3 government trucks. Its oxidation ditch relies on dissolved oxygen (DO) staying above 2 mg/L to sustain the aerobic microorganisms that break down organic matter, but the city's water authority (DSDABM) only tested DO in a lab once a month, using a BOD5 method that itself takes 5 days to return results. That left long blind spots between readings, with no way to catch a process drifting out of range in real time. The objective was to build an online, sensor-based monitoring system — reading DO, ammonia, and nitrate continuously — paired with an inference engine that could turn raw sensor values into an operational read on how the nitrification process was actually running.",
    methodology:
      "Instrumented the oxidation ditch with an Atlas Scientific dissolved oxygen probe, an NHN-406 ammonia (NH4+) sensor, and an NON-406S nitrate (NO3-) sensor, all PVC ion-selective membrane based with temperature compensation, feeding into an X-404 Modbus gateway and X-600 controller over Ethernet for web-based display. Built a rule-based inference system in Boolean algebra — 6 input variables (low/normal/high across the 3 sensors) reduced via Karnaugh mapping into two logic functions — to classify oxidation ditch conditions into Critical, Process Initiation, or Process Continuing states. Validated each sensor individually against laboratory reference methods (zero-calibration DO titration, spectrophotometer for ammonia and nitrate) across multiple known-concentration standards before taking the system to the field for 5-point profiling across the ditch.",
    whatIDid: [
      "Engineered parametric 3D CAD mechanical brackets using Autodesk Inventor, manufactured with in-house 3D printers.",
      "Fabricated and wired industrial DIN rail electrical control panel, including fuse protection, DC supplies, and grounding lines.",
      "Conducted on-site immersion testing and mechanical stability evaluation in the turbulent oxidation ditch at IPLT Keputih.",
    ],
    pipeline: [
      "Atlas Scientific DO & Chemins Probes",
      "Autodesk Inventor 3D CAD",
      "FDM 3D Printed Brackets",
      "DIN-Rail Electrical Panel",
      "Oxidation Ditch In-Situ Immersion",
    ],
    metrics: [
      { label: "Sensor Array", value: "3 Probes", sub: "DO, Ammonia, Nitrate" },
      { label: "CAD Fabrication", value: "3D Printed", sub: "Autodesk Inventor Custom" },
      { label: "Field Site", value: "IPLT Keputih", sub: "Oxidation Ditch Station" },
    ],
    techStack: [
      "Atlas Scientific DO",
      "Chemins NHN-046",
      "Chemins NON-406",
      "Autodesk Inventor",
      "3D Printing Creality CR-10Max",
      "Panel Electrical Wiring",
      "Web Based Monitoring",
    ],
    documentationNote:
      "CAD component 3D models (.ipt/.stl), industrial control panel wiring diagrams, and on-site ditch installation photographs at IPLT Keputih.",
    driveUrl: "", // Google Drive link removed for Dissolved Oxygen project as requested
    images: [
      { title: "Autodesk Inventor 3D CAD", caption: "Bracket Sensor 3D Design", src: "/project/p3-3d.jpg" },
      { title: "3D Printing Bracket Sensor", caption: "3D Printing Bracket Sensor", src: "/project/p3-asm.jpg" },
    ],
  },
];

const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "sensors", label: "Sensors & Instrumentation" },
  { id: "panel", label: "Panel & Mechanical" },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.filterGroup === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 border-y border-[var(--line)] bg-[var(--surface)]/20 overflow-hidden">
      {/* Background Subtle Industrial Amber Glow */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[var(--accent-glow)] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-[var(--accent-glow)] blur-3xl opacity-40" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-[var(--text)]">
            Featured{" "}
            <span className="accent-text underline decoration-[var(--accent)]/40 underline-offset-8">
              Work
            </span>
          </h2>

          {/* Decorative Amber Center Line */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[var(--accent)]/60" />
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
            <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[var(--accent)]/60" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-dim)] sm:text-base">
            A comprehensive portfolio of engineering projects, industrial automation systems, calibrated sensors, and mechanical assemblies.
          </p>
        </div>

        {/* Filter Navigation Pills (Industrial Amber) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`rounded-lg px-4 py-2 font-semibold transition-all shadow-sm ${filter === opt.id
                ? "bg-[var(--accent)] text-[#090c10] shadow-[0_0_16px_var(--accent-glow)] font-bold scale-[1.02]"
                : "border border-[var(--line)] bg-[var(--surface-2)] text-[var(--text-dim)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-1">
          {filteredProjects.map((project) => (
            <article
              key={project.tagId}
              onClick={() => setSelectedProject(project)}
              className="card card-hover group relative cursor-pointer overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-6 sm:p-8 cad-bracket transition-all hover:border-[var(--accent)] hover:shadow-[0_0_30px_var(--accent-glow)]"
            >
              <div className="flex flex-col gap-6">
                {/* Top Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">

                    <span className="text-[var(--muted)]">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent)] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>

                {/* Main Info */}
                <div>
                  <h3 className="text-2xl font-black text-[var(--text)] sm:text-3xl group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-1.5 font-mono text-xs text-[var(--accent)] font-semibold">
                    {project.client}
                  </div>
                </div>

                {/* Metrics 4-Box Strip (Matches Benchmark Strip in Profile) */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)]/60 p-4 transition hover:border-[var(--accent)]"
                    >
                      <div className="font-mono text-xl font-black text-[var(--accent)] sm:text-2xl">
                        {m.value}
                      </div>
                      <div className="mt-1 font-semibold text-xs text-[var(--text)] sm:text-sm">
                        {m.label}
                      </div>
                      {m.sub && (
                        <div className="mt-0.5 font-mono text-[10px] text-[var(--muted)]">
                          {m.sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pipeline Flow Visual */}
                <div>
                  <div className="font-mono text-[10px] uppercase text-[var(--muted)] mb-2 flex items-center gap-1.5">
                    <Activity size={12} className="text-[var(--accent)]" />
                    <span>Signal &amp; Telemetry Pipeline:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.pipeline.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5">
                        <span className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[10px] text-[var(--text)]">
                          {step}
                        </span>
                        {sIdx < project.pipeline.length - 1 && (
                          <span className="text-[var(--muted)] font-mono text-xs">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm leading-relaxed text-[var(--text-dim)]">
                  {project.summary}
                </p>

                {/* Key Outcome Box (Matches Status Badge in Profile) */}
                <div className="rounded-lg border border-[var(--emerald)]/30 bg-[var(--emerald)]/10 p-3.5 text-xs text-[var(--text)]">
                  <span className="font-mono font-bold uppercase tracking-wider text-[var(--emerald)] mr-2 flex-inline items-center gap-1">
                    ✓ Key Project Outcome:
                  </span>
                  <span>{project.result}</span>
                </div>

                {/* Bottom Bar: Tech Stack & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] hover:underline underline-offset-4"
                  >
                    <span>Read Detailed Case Study &amp; Docs</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE POP-UP MODAL (CASE STUDY & DOCUMENTATION)     */}
      {/* ========================================================= */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[#090c10] text-[var(--text)] shadow-2xl cad-bracket"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase">
                  <span className="rounded border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2 py-0.5 font-bold text-[var(--accent)]">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-black text-[var(--text)] sm:text-3xl">
                  {selectedProject.title}
                </h3>
                <div className="mt-1 font-mono text-xs text-[var(--accent)] font-semibold">
                  {selectedProject.client}
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-2 text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-8 bg-[var(--bg)]">
              <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr]">
                {/* Left / Main Column */}
                <div className="space-y-6">
                  {/* Section 1: The Challenge / Background */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                      <HelpCircle size={15} />
                      <span>The Challenge &amp; Background</span>
                    </div>
                    <div className="mt-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 text-xs sm:text-sm leading-relaxed text-[var(--text-dim)]">
                      <p>{selectedProject.challenge}</p>
                    </div>
                  </div>

                  {/* Section 2: Methodology & Engineering Approach */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                      <Sliders size={15} />
                      <span>Methodology &amp; Approach</span>
                    </div>
                    <div className="mt-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 text-xs sm:text-sm leading-relaxed text-[var(--text-dim)]">
                      <p>{selectedProject.methodology}</p>
                    </div>
                  </div>

                  {/* Section 3: What I Did / Scope of Work */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                      <CheckCircle2 size={15} />
                      <span>What I Did &amp; Key Deliverables</span>
                    </div>
                    <ul className="mt-2 space-y-2.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 text-xs sm:text-sm leading-relaxed text-[var(--text-dim)]">
                      {selectedProject.whatIDid.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--emerald)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 4: Signal & Architecture Pipeline */}
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                      <Cpu size={15} />
                      <span>Data Processing &amp; Hardware Flow</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
                      {selectedProject.pipeline.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--text)]"
                        >
                          <span className="font-bold text-[var(--accent)]">{idx + 1}.</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 5: Documentation & Gallery Preview */}
                  <div>

                    {/* 4 Editable Landscape Image Placeholders (4:3 Ratio) */}
                    <div className="mt-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[var(--text)] flex items-center gap-1.5">
                          <ImageIcon size={14} className="text-[var(--accent)]" />
                          <span>Documentation &amp; Schematics Gallery</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(selectedProject.images && selectedProject.images.length > 0
                          ? selectedProject.images
                          : [
                            { title: "Schematic Diagram", caption: "Circuit wiring & electrical layout" },
                            { title: "Hardware Assembly", caption: "Transducer & transmitter mounting" },
                            { title: "Calibration Setup", caption: "Reference instrument validation test" },
                            { title: "Field Deployment", caption: "On-site operation & telemetry log" },
                          ]
                        ).map((img, i) => (
                          <div
                            key={i}
                            className="group relative flex flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--accent)]"
                          >
                            {/* 4:3 Aspect Ratio Image Frame */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface-2)]">
                              {img.src ? (
                                <Image
                                  src={img.src}
                                  alt={img.title}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 360px"
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/10 text-[var(--accent)]">
                                    <ImageIcon size={18} />
                                  </div>
                                  <div className="font-mono text-[11px] font-bold text-[var(--text)]">
                                    {img.title}
                                  </div>
                                  <div className="font-mono text-[9px] text-[var(--muted)] leading-tight max-w-[190px]">
                                    Editable 4:3 Landscape Placeholder
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Caption Footer */}
                            <div className="border-t border-[var(--line)] bg-[var(--surface-2)]/60 px-3 py-2">
                              <div className="font-mono text-[10px] text-[var(--text-dim)] truncate">
                                {img.caption || "Documentation Photo"}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right / Sidebar Column */}
                <div className="space-y-6">
                  {/* Metrics Achieved Box */}
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                      Metrics Achieved
                    </div>
                    <div className="space-y-3">
                      {selectedProject.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-3"
                        >
                          <div className="font-mono text-xl font-black text-[var(--accent)]">
                            {m.value}
                          </div>
                          <div className="font-bold text-xs text-[var(--text)]">
                            {m.label}
                          </div>
                          {m.sub && (
                            <div className="font-mono text-[10px] text-[var(--muted)]">
                              {m.sub}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Used */}
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                      Tech Stack Used
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-dim)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DIRECT LINK GOOGLE DRIVE BUTTON (Only rendered if driveUrl exists) */}
                  {selectedProject.driveUrl ? (
                    <div className="rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] p-5 shadow-lg">

                      <a
                        href={selectedProject.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-3 font-mono text-xs font-bold text-[#090c10] shadow-[0_0_20px_var(--accent-glow)] transition-all hover:bg-[var(--accent-light)] hover:scale-[1.02]"
                      >
                        <HardDrive size={16} />
                        <span>View Project</span>
                        <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[var(--line)] bg-[var(--surface)] px-6 py-4 font-mono text-xs text-[var(--muted)]">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] px-4 py-1.5 text-xs font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
