import type { Metadata } from "next";
import EvidenceClient from "./EvidenceClient";

export const metadata: Metadata = {
  title: "Evidence Hub",
  description: "Private hub with documents supporting my Global Talent Visa application.",
  robots: { index: false, follow: false },
};

export default function EvidencePage() {
  return <EvidenceClient />;
}
