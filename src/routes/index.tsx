import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/adsmart-logo.png.asset.json";
import svcPanaflexAsset from "@/assets/svc-panaflex.jpg.asset.json";
import svcVisitingAsset from "@/assets/svc-visiting.jpg.asset.json";
import svcBrochuresAsset from "@/assets/svc-brochures.jpg.asset.json";
import svcWeddingAsset from "@/assets/svc-wedding.jpg.asset.json";
import svcCertificatesAsset from "@/assets/svc-certificates.jpg.asset.json";
import svcStickersAsset from "@/assets/svc-stickers.jpg.asset.json";
import svcShieldsAsset from "@/assets/svc-shields.jpg.asset.json";
import svcFlyersAsset from "@/assets/svc-flyers.jpg.asset.json";
import svcFilesAsset from "@/assets/svc-files.jpg.asset.json";
import svcBillbooksAsset from "@/assets/svc-billbooks.jpg.asset.json";
import svcAcrylicAsset from "@/assets/svc-acrylic.jpg.asset.json";
import svcNameplateAsset from "@/assets/svc-nameplate.jpg.asset.json";
import svcResultcardsAsset from "@/assets/svc-resultcards.jpg.asset.json";
import svcStampsAsset from "@/assets/svc-stamps.jpg.asset.json";
import svcCashmemoAsset from "@/assets/svc-cashmemo.jpg.asset.json";
import svcBooksAsset from "@/assets/svc-books.jpg.asset.json";
import svcNewsletterAsset from "@/assets/svc-newsletter.jpg.asset.json";
import svcMenuAsset from "@/assets/svc-menu.jpg.asset.json";
import svcCupsAsset from "@/assets/svc-cups.jpg.asset.json";
import svcWallpaperAsset from "@/assets/svc-wallpaper.jpg.asset.json";
import svcSocialAsset from "@/assets/svc-social.jpg.asset.json";
import mockBacklight from "@/assets/mock-backlight.jpg.asset.json";
import mockLed from "@/assets/mock-led.jpg.asset.json";
import mockBranding from "@/assets/mock-branding.jpg.asset.json";
import mockTshirt from "@/assets/mock-tshirt.jpg.asset.json";
import mockFlag from "@/assets/mock-flag.jpg.asset.json";
import mockBus from "@/assets/mock-bus.jpg.asset.json";
import mockBillboard from "@/assets/mock-billboard.jpg.asset.json";
import mockPackaging from "@/assets/mock-packaging.jpg.asset.json";
import galleryBillboard from "@/assets/gallery-billboard.jpg";
import galleryBusWrap from "@/assets/gallery-bus-wrap.jpg";
import galleryPackaging from "@/assets/gallery-packaging.jpg";

const logo = logoAsset;
const svcPanaflex = svcPanaflexAsset.url;
const svcVisiting = svcVisitingAsset.url;
const svcBrochures = svcBrochuresAsset.url;
const svcWedding = svcWeddingAsset.url;
const svcCertificates = svcCertificatesAsset.url;
const svcStickers = svcStickersAsset.url;
const svcShields = svcShieldsAsset.url;
const svcFlyers = svcFlyersAsset.url;
const svcFiles = svcFilesAsset.url;
const svcBillbooks = svcBillbooksAsset.url;
const svcAcrylic = svcAcrylicAsset.url;
const svcNameplate = svcNameplateAsset.url;
const svcResultcards = svcResultcardsAsset.url;
const svcStamps = svcStampsAsset.url;
const svcCashmemo = svcCashmemoAsset.url;
const svcBooks = svcBooksAsset.url;
const svcNewsletter = svcNewsletterAsset.url;
const svcMenu = svcMenuAsset.url;
const svcCups = svcCupsAsset.url;
const svcWallpaper = svcWallpaperAsset.url;
const svcSocial = svcSocialAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adsmart — Digital Printing Services, Bhara Kahu, Islamabad" },
      {
        name: "description",
        content:
          "Premium digital printing in Bhara Kahu, Islamabad. Panaflex, backlight boards, LED boards, wedding cards, branding, t-shirts, wallpapers and more.",
      },
      { property: "og:title", content: "Adsmart Digital Printing Services | Bhara Kahu" },
      {
        property: "og:description",
        content:
          "Explore Adsmart's digital printing, signage, stationery, and branding services in Bhara Kahu, Islamabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type Service = { name: string; desc: string; tint: string; img?: string; waText?: string };

const SERVICES: Service[] = [
  { name: "Panaflex", desc: "Weather-resistant large-format signage and banners.", tint: "ink-cyan", img: svcPanaflex },
  { name: "Backlight Board", desc: "Illuminated flex boards for shopfronts and signage.", tint: "ink-magenta", img: mockBacklight.url },
  { name: "LED Board", desc: "Bright LED signboards, custom sizes and channels.", tint: "ink-yellow", img: mockLed.url },
  { name: "3D Acrylic Boards", desc: "Raised acrylic letters and logos for premium signage.", tint: "ink-green", img: svcAcrylic },
  { name: "Name Plates", desc: "House, office and door name plates — acrylic or metal.", tint: "ink-cyan", img: svcNameplate },
  { name: "Visiting Cards", desc: "Matte, gloss and textured finishes that last.", tint: "ink-magenta", img: svcVisiting },
  { name: "Brochures", desc: "Bi-fold, tri-fold and stitched marketing books.", tint: "ink-yellow", img: svcBrochures },
  { name: "Flyers", desc: "Single-sheet promo prints in any GSM, bulk runs.", tint: "ink-green", img: svcFlyers },
  { name: "Wedding Cards", desc: "Custom invitations with foil and emboss work.", tint: "ink-cyan", img: svcWedding },
  { name: "Fabric Sashes", desc: "Printed sashes and flags for events and pageants.", tint: "ink-magenta", img: mockFlag.url },
  { name: "Certificates", desc: "Crisp award and recognition prints, foil optional.", tint: "ink-yellow", img: svcCertificates },
  { name: "Result Cards", desc: "School and academy result card printing in bulk.", tint: "ink-green", img: svcResultcards },
  { name: "Stickers", desc: "Die-cut vinyl decals and adhesive product labels.", tint: "ink-cyan", img: svcStickers },
  { name: "Shields", desc: "Acrylic and wooden recognition shields, engraved.", tint: "ink-magenta", img: svcShields },
  { name: "Stamps", desc: "Self-inking and rubber stamps, ready same day.", tint: "ink-yellow", img: svcStamps },
  { name: "File Covers", desc: "Branded folders and presentation files for offices.", tint: "ink-green", img: svcFiles },
  { name: "Bill Books", desc: "Serialized carbonless invoice and receipt pads.", tint: "ink-cyan", img: svcBillbooks },
  { name: "Cash Memos", desc: "Custom cash memo books for shops and traders.", tint: "ink-magenta", img: svcCashmemo },
  { name: "Books", desc: "Notebooks, registers and bound book printing.", tint: "ink-yellow", img: svcBooks },
  { name: "News Letters", desc: "Periodic newsletter design and bulk printing.", tint: "ink-green", img: svcNewsletter },
  { name: "Menu Cards", desc: "Restaurant and café menus — laminated or booklet.", tint: "ink-cyan", img: svcMenu },
  { name: "Cup Printing", desc: "Branded paper and ceramic cups with your logo.", tint: "ink-magenta", img: svcCups },
  { name: "T-Shirt Printing", desc: "DTF and sublimation tees, uniforms and tracksuits.", tint: "ink-yellow", img: mockTshirt.url },
  {
    name: "Wallpapers",
    desc: "Custom wall murals and wallpaper printing. WhatsApp to see designs.",
    tint: "ink-green",
    img: svcWallpaper,
    waText: "Hi Adsmart, I'd like to see wallpaper designs.",
  },
  { name: "Social Media Posts", desc: "Daily post and reel design for your brand.", tint: "ink-cyan", img: svcSocial },
  { name: "Complete Branding", desc: "End-to-end identity: logo, stationery, signage.", tint: "ink-magenta", img: mockBranding.url },
];

const GALLERY = [
  { src: mockBranding.url, label: "Complete brand identity suite", span: "lg:col-span-2 lg:row-span-2" },
  { src: mockBacklight.url, label: "Backlight board shop signage", span: "lg:col-span-2" },
  { src: mockLed.url, label: "LED channel letter signboard", span: "" },
  { src: galleryBillboard, label: "Highway billboard panaflex", span: "" },
  { src: galleryBusWrap, label: "School bus vinyl wrap", span: "lg:col-span-2" },
  { src: mockTshirt.url, label: "Uniform t-shirt printing", span: "" },
  { src: galleryPackaging, label: "Product packaging & labels", span: "" },
  { src: mockFlag.url, label: "Custom fabric sash & flag", span: "" },
  { src: svcWedding, label: "Wedding invitation suite", span: "lg:col-span-2" },
  { src: svcVisiting, label: "Premium visiting cards", span: "" },
  { src: svcShields, label: "Engraved recognition shield", span: "" },
  { src: svcPanaflex, label: "Storefront panaflex banner", span: "" },
  { src: svcNameplate, label: "Acrylic name plate", span: "" },
  { src: svcBillbooks, label: "Carbonless bill book", span: "" },
  { src: svcStickers, label: "Die-cut vinyl stickers", span: "lg:col-span-2" },
];


const WA_PRIMARY = "923344003813";
const WA_SECONDARY = "923468836901";
const DEFAULT_WA_TEXT = "Hi Adsmart, I'd like a quote for printing.";
const MAPS_URL = "https://maps.app.goo.gl/CiyvGHV8kNns2XQt6";

function waLink(phone: string = WA_PRIMARY, text: string = DEFAULT_WA_TEXT) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

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
            <a href="#services" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">Services</a>
            <a href="#gallery" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">Gallery</a>
            <a href="#about" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">About</a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-widest hover:text-brand">Contact</a>
          </div>
          <a
            href={waLink()}
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
          style={{ backgroundImage: "radial-gradient(var(--ink) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
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
              large-format panaflex and LED boards to fine wedding cards, t-shirts and complete
              branding — we put your ideas on paper, vinyl, acrylic, fabric and walls.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waLink()}
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
                See all services
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
              {SERVICES.length}+ services, run in-house with calibrated colour and clean
              registration. One quote, one delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {SERVICES.map((s, i) => (
              <a
                key={s.name}
                href={waLink(WA_PRIMARY, s.waText ?? `Hi Adsmart, I'm interested in ${s.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col bg-ink transition-colors duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {s.img ? (
                    <>
                      <img
                        src={s.img}
                        alt={`${s.name} sample by Adsmart`}
                        loading="lazy"
                        className="size-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-70 transition-opacity duration-500 group-hover:opacity-0"
                        style={{ background: `var(--${s.tint})` }}
                      />
                    </>
                  ) : (
                    <div
                      className="flex size-full items-center justify-center transition-transform duration-500 group-hover:scale-105"
                      style={{ background: `var(--${s.tint})` }}
                    >
                      <span className="font-display text-3xl uppercase text-ink/80 md:text-4xl">
                        {s.name.split(" ")[0]}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-paper/90">
                    {String(i + 1).padStart(2, "0")} ●
                  </span>
                </div>
                <div className="relative flex-1 p-5">
                  <h3 className="font-display text-2xl uppercase leading-none text-paper md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs leading-snug text-paper/60">{s.desc}</p>
                </div>
              </a>
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
              <Stat n={`${SERVICES.length}+`} label="Services" />
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
              Real jobs off the Adsmart press — branding, banners, cards, shields and everything
              in between. Want something similar? Send it on WhatsApp.
            </p>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[200px]">
            {GALLERY.map((g, i) => (
              <figure key={i} className={`group relative overflow-hidden bg-ink ${g.span}`}>
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
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
              href={waLink()}
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
              [ 04 / Contact ]
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
                href={waLink(WA_PRIMARY)}
                accent="ink-green"
              />
              <ContactCard
                kind="WhatsApp · Secondary"
                value="0346-8836901"
                href={waLink(WA_SECONDARY)}
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

      {/* Floating WhatsApp */}
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-ink-green text-paper shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.04 0C5.463 0 .104 5.335.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.733 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.483-8.413z" />
        </svg>
      </a>
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
  kind, value, href, accent, external,
}: {
  kind: string; value: string; href: string; accent: string; external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center justify-between border border-ink/10 bg-card p-6 transition-all hover:border-ink hover:shadow-[6px_6px_0_0_var(--ink)]"
    >
      <div className="flex items-center gap-5">
        <span className="size-3 rounded-full" style={{ background: `var(--${accent})` }} />
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{kind}</div>
          <div className="font-display text-2xl uppercase tracking-wide md:text-3xl">{value}</div>
        </div>
      </div>
      <span className="font-mono text-xl text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-ink">→</span>
    </a>
  );
}
