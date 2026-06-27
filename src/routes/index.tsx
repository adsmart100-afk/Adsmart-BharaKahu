import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/adsmart-logo.png.asset.json";
import svcPanaflex from "@/assets/svc-panaflex.jpg";
import svcVisiting from "@/assets/svc-visiting.jpg";
import svcBrochures from "@/assets/svc-brochures.jpg";
import svcWedding from "@/assets/svc-wedding.jpg";
import svcCertificates from "@/assets/svc-certificates.jpg";
import svcStickers from "@/assets/svc-stickers.jpg";
import svcShields from "@/assets/svc-shields.jpg";
import svcFlyers from "@/assets/svc-flyers.jpg";
import svcFiles from "@/assets/svc-files.jpg";
import svcBillbooks from "@/assets/svc-billbooks.jpg";
import galleryPress from "@/assets/gallery-press.jpg";
import gallerySignboard from "@/assets/gallery-signboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adsmart — Digital Printing Services, Bhara Kahu, Islamabad" },
      {
        name: "description",
        content:
          "Premium digital printing in Bhara Kahu, Islamabad. Panaflex, visiting cards, brochures, wedding cards, certificates, stickers, shields, flyers, files, bill books.",
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { name: "Panaflex", desc: "Weather-resistant large-format signage and banners.", tint: "ink-cyan", img: svcPanaflex },
  { name: "Visiting Cards", desc: "Matte, gloss and textured finishes that last.", tint: "ink-magenta", img: svcVisiting },
  { name: "Brochures", desc: "Bi-fold, tri-fold and stitched marketing books.", tint: "ink-yellow", img: svcBrochures },
  { name: "Wedding Cards", desc: "Custom invitations with foil and emboss work.", tint: "ink-green", img: svcWedding },
  { name: "Certificates", desc: "Crisp award and recognition prints, foil optional.", tint: "ink-cyan", img: svcCertificates },
  { name: "Stickers", desc: "Die-cut vinyl decals and adhesive product labels.", tint: "ink-magenta", img: svcStickers },
  { name: "Shields", desc: "Acrylic and wooden recognition shields, engraved.", tint: "ink-yellow", img: svcShields },
  { name: "Flyers", desc: "Single-sheet promo prints in any GSM, bulk runs.", tint: "ink-green", img: svcFlyers },
  { name: "Files", desc: "Branded folders and presentation files for offices.", tint: "ink-cyan", img: svcFiles },
  { name: "Bill Books", desc: "Serialized carbonless invoice and receipt pads.", tint: "ink-magenta", img: svcBillbooks },
];

const GALLERY = [
  { src: galleryPress, label: "Wide-format press run", span: "lg:col-span-2 lg:row-span-2" },
  { src: svcWedding, label: "Gold foil wedding suite", span: "" },
  { src: svcPanaflex, label: "Outdoor panaflex install", span: "" },
  { src: svcStickers, label: "Die-cut sticker batch", span: "lg:col-span-2" },
  { src: svcShields, label: "Engraved acrylic shield", span: "" },
  { src: svcBrochures, label: "Tri-fold brochure", span: "" },
  { src: gallerySignboard, label: "Illuminated signboard", span: "lg:col-span-2" },
  { src: svcVisiting, label: "Matte visiting cards", span: "" },
  { src: svcCertificates, label: "Foil certificate", span: "" },
  { src: svcBillbooks, label: "Carbonless bill book", span: "" },
];

const WA_PRIMARY = "923344003813";
const WA_SECONDARY = "923468836901";
const MAPS_URL = "https://maps.app.goo.gl/CiyvGHV8kNns2XQt6";

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-ink-yellow/40">
      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Adsmart logo" className="size-10 rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wider uppercase">Adsmart</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">
                Digital Printing
              </div>
            </div>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">
              Services
            </a>
            <a href="#gallery" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">
              Gallery
            </a>
            <a href="#about" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">
              About
            </a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">
              Contact
            </a>
          </div>
          <a
            href={`https://wa.me/${WA_PRIMARY}`}
            target="_blank"
            rel="noreferrer"
            className="bg-ink px-4 py-2 text-xs font-bold uppercase tracking-widest text-paper transition-colors hover:bg-brand"
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(var(--ink) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3 border border-ink/15 bg-paper px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-ink-green" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
                Bhara Kahu · Islamabad · Pakistan
              </span>
            </div>
            <h1 className="font-display text-6xl uppercase leading-[0.88] tracking-tight md:text-8xl lg:text-[128px]">
              Printing <br />
              your{" "}
              <span className="text-ink-cyan">v</span>
              <span className="text-ink-magenta">i</span>
              <span className="text-ink-yellow">s</span>
              <span className="text-ink-green">i</span>
              <span className="text-brand">o</span>
              <span className="text-ink-magenta">n</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              Adsmart is a full-service digital print house in Bhara Kahu, Islamabad. From
              large-format panaflex to fine wedding cards, we put your ideas on paper, vinyl,
              acrylic — whatever the job needs.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${WA_PRIMARY}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-widest text-paper shadow-[6px_6px_0_0_var(--brand)] transition-transform hover:-translate-y-0.5"
              >
                WhatsApp 0334-4003813
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="text-xs font-semibold uppercase tracking-widest text-ink/70 underline-offset-8 hover:text-ink hover:underline"
              >
                See all 10 services
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute -inset-4 -z-10 bg-ink-yellow" />
              <div className="absolute inset-0 flex items-center justify-center bg-paper p-8 ring-1 ring-ink/10">
                <img src={logo.url} alt="Adsmart — Printing your vision" className="size-full object-contain" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden bg-ink p-4 text-paper md:block">
                <div className="font-mono text-[10px] uppercase tracking-widest leading-tight">
                  Est. Bhara Kahu<br />Quality Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CMYK strip */}
        <div className="grid grid-cols-4 border-t border-ink/10">
          <div className="h-2 bg-ink-cyan" />
          <div className="h-2 bg-ink-magenta" />
          <div className="h-2 bg-ink-yellow" />
          <div className="h-2 bg-ink" />
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40">
                [ 01 / Capabilities ]
              </div>
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
                What we print
              </h2>
            </div>
            <p className="max-w-sm text-sm text-paper/60">
              Ten core services, run in-house with calibrated colour and clean registration.
              One quote, one delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.name}
                className="group relative flex flex-col bg-ink transition-colors duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.name} sample by Adsmart`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-70 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: `var(--${s.tint})` }}
                  />
                  <span className="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-paper/90">
                    {String(i + 1).padStart(2, "0")} ●
                  </span>
                </div>
                <div className="relative flex-1 p-5">
                  <h3 className="font-display text-2xl uppercase leading-none text-paper md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs leading-snug text-paper/60">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-ink/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
              [ 02 / About ]
            </div>
            <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-6xl">
              A neighbourhood print house with industrial standards.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-ink/75">
              We've spent years dialling in colour, paper stocks and finishing on every job that
              walks in the door — from a single visiting card to a 40-foot panaflex. Same press,
              same care.
            </p>
            <p className="text-base leading-relaxed text-ink/60">
              Drop in to Bhara Kahu, or send your artwork on WhatsApp. We'll quote fast, print
              clean, and have it ready when we said it would be.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <Stat n="10" label="Core services" />
              <Stat n="24h" label="Typical turnaround" />
              <Stat n="100%" label="CMYK calibrated" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-b border-ink/10 bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                [ 03 / Gallery ]
              </div>
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
                Recent work
              </h2>
            </div>
            <p className="max-w-sm text-sm text-ink/60">
              A peek at jobs off the press — banners, cards, shields and everything in between.
              Want something similar? Send it on WhatsApp.
            </p>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[200px]">
            {GALLERY.map((g, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden bg-ink ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-paper transition-transform duration-300 group-hover:translate-y-0">
                  {g.label}
                </figcaption>
                <span className="absolute right-2 top-2 bg-paper/90 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={`https://wa.me/${WA_PRIMARY}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-ink bg-paper px-6 py-3 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper"
            >
              Start your project on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">

        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
              [ 03 / Contact ]
            </div>
            <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
              Let's talk shop.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <ContactCard
                kind="WhatsApp · Primary"
                value="0334-4003813"
                href={`https://wa.me/${WA_PRIMARY}`}
                accent="ink-green"
              />
              <ContactCard
                kind="WhatsApp · Secondary"
                value="0346-8836901"
                href={`https://wa.me/${WA_SECONDARY}`}
                accent="ink-cyan"
              />
              <ContactCard
                kind="Email"
                value="adsmart100@gmail.com"
                href="mailto:adsmart100@gmail.com"
                accent="ink-magenta"
              />
              <ContactCard
                kind="Location"
                value="Bhara Kahu, Islamabad"
                href={MAPS_URL}
                accent="ink-yellow"
                external
              />
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden border border-ink/10 bg-secondary"
            >
              <iframe
                title="Adsmart location on Google Maps"
                src="https://www.google.com/maps?q=Bhara+Kahu,+Islamabad&output=embed"
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4 bg-ink px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-paper">
                Open in Google Maps ↗
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-ink text-paper">
        <div className="grid grid-cols-4">
          <div className="h-1.5 bg-ink-cyan" />
          <div className="h-1.5 bg-ink-magenta" />
          <div className="h-1.5 bg-ink-yellow" />
          <div className="h-1.5 bg-ink-green" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="size-9 rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-lg uppercase tracking-wider">Adsmart</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-paper/50">
                Digital Printing Services
              </div>
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
            © {new Date().getFullYear()} Adsmart · Bhara Kahu, Islamabad · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl leading-none">{n}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink/50">{label}</div>
    </div>
  );
}

function ContactCard({
  kind,
  value,
  href,
  accent,
  external,
}: {
  kind: string;
  value: string;
  href: string;
  accent: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center justify-between border border-ink/10 bg-card p-6 transition-all hover:border-ink hover:shadow-[6px_6px_0_0_var(--ink)]"
    >
      <div className="flex items-center gap-5">
        <span
          className="size-3 rounded-full"
          style={{ background: `var(--${accent})` }}
        />
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
            {kind}
          </div>
          <div className="font-display text-2xl uppercase tracking-wide md:text-3xl">{value}</div>
        </div>
      </div>
      <span className="font-mono text-xl text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-ink">
        →
      </span>
    </a>
  );
}
