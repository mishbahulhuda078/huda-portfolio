"use client";

import { useState } from "react";
import {
  ChevronRight,
  Cpu,
  Monitor,
  Radio,
  Sliders,
} from "lucide-react";

const loopStages = [
  {
    id: "stage-1",
    step: "01",
    tag: "PRIMARY_SENSOR",
    title: "Field Transducers & Sensors",
    icon: Radio,
    description: "Physical parameter acquisition in industrial field environments, harsh chemical plants, and wastewater plants.",
    specs: [
      { label: "Flow Measurement", value: "Bürkert S030 Paddle-Wheel" },
      { label: "Soil Moisture", value: "MT-02A Industrial Sensor" },
      { label: "Dissolved Oxygen", value: "Atlas Scientific DO Kit" },
      { label: "Ammonia & Nitrate", value: "Chemins NHN-046 & NON-406" },
    ],
    appliedIn: "Project 01, 02, 03",
    telemetry: "RAW ANALOG / FREQUENCY ACQUISITION",
  },
  {
    id: "stage-2",
    step: "02",
    tag: "SIGNAL_CONDITIONING",
    title: "4–20 mA & Transmitter Loops",
    icon: Sliders,
    description: "Conditioning low-level sensor signals into standardized, noise-immune industrial transmission lines.",
    specs: [
      { label: "Current Loop", value: "4–20 mA 2-Wire Transmission" },
      { label: "Signal Conversion", value: "Sensor to Standard Linear Loop" },
      { label: "Mechanical Enclosure", value: "Custom 3D CAD Brackets" },
      { label: "Wiring & Isolation", value: "Industrial DIN Rail Panels" },
    ],
    appliedIn: "Petrokimia Gresik & IPLT Keputih",
    telemetry: "ZERO: 4.00mA | SPAN: 20.00mA",
  },
  {
    id: "stage-3",
    step: "03",
    tag: "BUS_AND_CONTROLLER",
    title: "Modbus RTU & PLC Automation",
    icon: Cpu,
    description: "Reliable industrial fieldbus communication, packet polling, cyclic error checks, and PLC ladder control.",
    specs: [
      { label: "Fieldbus Protocol", value: "Modbus RTU over RS-485" },
      { label: "Network Bus", value: "Modbus TCP/IP & ControlByWeb" },
      { label: "PLC Hardware", value: "Siemens S7-1200, Omron, Mitsubishi" },
      { label: "Embedded Units", value: "Seeeduino XIAO, Arduino" },
    ],
    appliedIn: "ITS Smart Eco Campus & Industrial Projects",
    telemetry: "BAUD: 9600-8-N-1 | CRC VERIFIED",
  },
  {
    id: "stage-4",
    step: "04",
    tag: "SCADA_AND_VALIDATION",
    title: "SCADA & Metrological Validation",
    icon: Monitor,
    description: "Human-Machine Interface visualization, automated alarm limits, and rigorous validation against laboratory reference instruments.",
    specs: [
      { label: "SCADA & HMI", value: "Industrial HMI & SCADA Dashboards" },
      { label: "Moisture Benchmark", value: "98.13% vs NIR Proximate (Büchi)" },
      { label: "Flow Benchmark", value: "95.46% vs TUF-2000B Ultrasonic" },
      { label: "Standardization", value: "SNI 2803 Fertilizer Compliance" },
    ],
    appliedIn: "ICOEE 2026 & Factory Lab Validation",
    telemetry: "CALIBRATION ERROR < 2.0%",
  },
];

export default function InstrumentationLoop() {
  const [activeStage, setActiveStage] = useState(0);
  const current = loopStages[activeStage];
  const Icon = current.icon;

  return (
    <section id="loop-architecture" className="border-y border-[var(--line)] bg-[var(--surface)]/30 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-kicker">02 / Engineering System Architecture</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
              The Instrumentation & Control Loop.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            How I architect and execute measurement systems from raw physical sensors in the field to calibrated SCADA telemetry.
          </p>
        </div>

        {/* Interactive Step Selector */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {loopStages.map((stage, idx) => {
            const StageIcon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--surface-2)] shadow-[0_4px_24px_var(--accent-glow)]"
                    : "border-[var(--line)] bg-[var(--surface)]/60 hover:border-[var(--line-strong)] hover:bg-[var(--surface-2)]/60"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`text-xs font-bold ${
                      isSelected ? "text-[var(--accent)]" : "text-[var(--muted)]"
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-md border ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                        : "border-[var(--line)] text-[var(--muted)] group-hover:text-[var(--text)]"
                    }`}
                  >
                    <StageIcon size={14} />
                  </div>
                </div>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                  {stage.tag}
                </div>
                <div className="mt-0.5 text-sm font-bold text-[var(--text)]">
                  {stage.title}
                </div>
                {isSelected && (
                  <div className="absolute -bottom-px left-4 right-4 h-0.5 bg-[var(--accent)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display Panel */}
        <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 cad-bracket">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            {/* Left Column: Stage Narrative & Telemetry */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag-pill tag-pill-accent">STAGE_{current.step}</span>
                <span className="tag-pill tag-pill-cyan font-semibold">{current.telemetry}</span>
                <span className="tag-pill font-semibold text-[var(--emerald)] border-[var(--emerald)]/30">
                  <span className="led-indicator mr-1" /> ACTIVE INSPECTION
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black tracking-tight text-[var(--text)] sm:text-3xl">
                {current.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-dim)] sm:text-base">
                {current.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-[var(--muted)]">
                <span className="font-semibold text-[var(--text)]">APPLIED ACROSS:</span>
                <span className="text-[var(--accent)] font-semibold">{current.appliedIn}</span>
              </div>

              {/* Progress Flow visualization */}
              <div className="mt-8 flex items-center gap-2 text-xs text-[var(--muted)] overflow-x-auto pb-2 font-medium">
                <span className={activeStage === 0 ? "text-[var(--accent)] font-bold" : ""}>Sensor</span>
                <ChevronRight size={14} className="shrink-0" />
                <span className={activeStage === 1 ? "text-[var(--accent)] font-bold" : ""}>4–20mA Transmitter</span>
                <ChevronRight size={14} className="shrink-0" />
                <span className={activeStage === 2 ? "text-[var(--accent)] font-bold" : ""}>Modbus / PLC</span>
                <ChevronRight size={14} className="shrink-0" />
                <span className={activeStage === 3 ? "text-[var(--accent)] font-bold" : ""}>SCADA / Validation</span>
              </div>
            </div>

            {/* Right Column: Technical Specifications Grid */}
            <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                // TECHNICAL PARAMETERS & HARDWARE
              </div>
              <div className="mt-4 divide-y divide-[var(--line)]">
                {current.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col py-3 sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                    <span className="text-[var(--muted)]">{spec.label}</span>
                    <span className="font-semibold text-[var(--text)]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
