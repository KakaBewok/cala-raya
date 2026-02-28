"use client";

import { useState, useEffect } from "react";
import "./fonts-preview.css";

/* ──────────────────────────────────────────────
   Font registry
   ──────────────────────────────────────────────
   Each entry maps a human‑readable name to the
   CSS variable defined in fonts.ts.
   Keep this in sync with fonts/fonts.ts.
   ────────────────────────────────────────────── */
const FONT_REGISTRY: { name: string; variable: string }[] = [
  { name: "Geist Sans", variable: "--font-geist-sans" },
  { name: "Geist Mono", variable: "--font-geist-mono" },
  { name: "Roboto", variable: "--font-roboto" },
  { name: "Playfair Display", variable: "--font-playfair" },
  { name: "Poppins", variable: "--font-poppins" },
  { name: "GFS Didot", variable: "--font-didot" },
  { name: "Raleway", variable: "--font-raleway" },
  { name: "Great Vibes", variable: "--font-great-vibes" },
  { name: "Optivaground", variable: "--font-optivaground" },
  { name: "Remine Fares", variable: "--font-reminefares" },
  { name: "Amalfi Coast", variable: "--font-amalfi-coast" },
  { name: "Ninfa", variable: "--font-ninfa" },
  { name: "Nyght Serif", variable: "--font-nyght-serif" },
  { name: "The Secret", variable: "--font-the-secret" },
  { name: "Commuters", variable: "--font-commuters" },
  { name: "Lagunac", variable: "--font-lagunac" },
  { name: "Month Glade", variable: "--font-month-glade" },
  { name: "Gandhi Serif", variable: "--font-gandhi-serif" },
  { name: "Montserrat", variable: "--font-montserrat" },
];

const DEFAULT_TEXT = "The quick brown fox jumps over the lazy dog";
const ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0 1 2 3 4 5 6 7 8 9";

/* ═══════════════════════════════════════════════
   FontsPreviewPage
   ═══════════════════════════════════════════════ */
export default function FontsPreviewPage() {
  const [previewText, setPreviewText] = useState<string>(DEFAULT_TEXT);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Detect scroll to add shadow on sticky bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const displayText = previewText.trim() || DEFAULT_TEXT;

  return (
    <div className="fonts-preview-page">
      {/* ── Hero ── */}
      <header className="fonts-hero">
        <span className="fonts-badge">Internal Tool</span>
        <h1>Font Preview</h1>
        <p>
          Browse &amp; compare every font available for invitation themes.
          Type your own text to see it rendered live.
        </p>
      </header>

      {/* ── Sticky Input Bar ── */}
      <div className={`fonts-input-bar ${scrolled ? "scrolled" : ""}`}>
        <div className="fonts-input-wrapper">
          <span className="fonts-input-label">Preview Text</span>
          <input
            id="font-preview-input"
            className="fonts-input-field"
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            placeholder="Type something to preview all fonts…"
          />
          <button
            className="fonts-reset-btn"
            onClick={() => setPreviewText(DEFAULT_TEXT)}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      {/* ── Count ── */}
      <p className="fonts-count">
        Showing <span>{FONT_REGISTRY.length}</span> fonts
      </p>

      {/* ── Font Cards Grid ── */}
      <div className="fonts-grid">
        {FONT_REGISTRY.map((font, idx) => (
          <FontCard
            key={font.variable}
            index={idx + 1}
            name={font.name}
            variable={font.variable}
            displayText={displayText}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FontCard
   ═══════════════════════════════════════════════ */
function FontCard({
  index,
  name,
  variable,
  displayText,
}: {
  index: number;
  name: string;
  variable: string;
  displayText: string;
}) {
  const fontStyle: React.CSSProperties = {
    fontFamily: `var(${variable})`,
  };

  return (
    <article className="font-card" id={`font-card-${variable}`}>
      {/* Header */}
      <div className="font-card-header">
        <span className="font-card-index">#{String(index).padStart(2, "0")}</span>
        <h2 className="font-card-name">{name}</h2>
        <code className="font-card-variable">{variable}</code>
      </div>

      {/* Body */}
      <div className="font-card-body">
        {/* H1 preview */}
        <div className="font-preview-section">
          <p className="font-preview-label">Heading 1</p>
          <h3 className="font-preview-h1" style={fontStyle}>
            {name}
          </h3>
        </div>

        {/* H2 preview */}
        <div className="font-preview-section">
          <p className="font-preview-label">Heading 2</p>
          <h4 className="font-preview-h2" style={fontStyle}>
            Invitation Theme Subheading
          </h4>
        </div>

        {/* Body preview */}
        <div className="font-preview-section">
          <p className="font-preview-label">Body</p>
          <p className="font-preview-body" style={fontStyle}>
            {DEFAULT_TEXT}
          </p>
        </div>

        {/* Alphabet */}
        <div className="font-preview-section">
          <p className="font-preview-label">Alphabet</p>
          <p className="font-preview-alphabet" style={fontStyle}>
            {ALPHABET_UPPER}
            <br />
            {ALPHABET_LOWER}
          </p>
        </div>

        {/* Numbers */}
        <div className="font-preview-section">
          <p className="font-preview-label">Numbers</p>
          <p className="font-preview-numbers" style={fontStyle}>
            {NUMBERS}
          </p>
        </div>

        {/* Custom text */}
        <div className="font-preview-custom">
          <p className="font-preview-custom-label">Your Preview</p>
          <p className="font-preview-custom-text" style={fontStyle}>
            {displayText}
          </p>
        </div>
      </div>
    </article>
  );
}
