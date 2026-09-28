import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Mishbahul Huda | Instrumentation Engineer",
  description:
    "Portfolio of Muhammad Mishbahul Huda — D4 Instrumentation Engineering graduate with experience in instrumentation, automation, maintenance, electrical systems, and engineering projects.",
  keywords: [
    "Muhammad Mishbahul Huda",
    "Instrumentation Engineer",
    "Instrumentation Engineering",
    "PLC",
    "SCADA",
    "Modbus",
    "Industrial Automation",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Mishbahul Huda" }],
  openGraph: {
    title: "Muhammad Mishbahul Huda | Instrumentation Engineer",
    description:
      "Instrumentation, automation, electrical systems, industrial monitoring, and engineering projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
