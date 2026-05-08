import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Leaf,
  Trees,
  Wrench,
  FlowerIcon,
  Star,
  MapPin,
  Phone,
  Instagram,
  Truck,
  Store,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";
import pMonstera from "@/assets/plant-monstera.jpg";
import pFiddle from "@/assets/plant-fiddle.jpg";
import pBop from "@/assets/plant-bop.jpg";
import pPhilo from "@/assets/plant-philo.jpg";
import pSnake from "@/assets/plant-snake.jpg";
import pCalathea from "@/assets/plant-calathea.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Plantbos Gardens & Landscape — Abuja's Premier Garden Center" },
      {
        name: "description",
        content:
          "Rare & exotic plants, professional landscaping, and premium pots in Abuja. Visit Plantbos in Lokogoma or order delivery & kerbside pickup.",
      },
      { property: "og:title", content: "Plantbos Gardens & Landscape" },
      {
        property: "og:description",
        content: "Bring nature home. Abuja's premier garden center for rare plants and luxury landscaping.",
      },
      { property: "og:image", content: hero },
    ],
  }),
});

const plants = [
  { img: pMonstera, name: "Monstera Deliciosa", tag: "Statement Foliage", price: "₦45,000" },
  { img: pFiddle, name: "Fiddle Leaf Fig", tag: "Indoor Tree", price: "₦78,000" },
  { img: pBop, name: "Bird of Paradise", tag: "Tropical Bloom", price: "₦95,000" },
  { img: pPhilo, name: "Philodendron Pink Princess", tag: "Rare & Exotic", price: "₦120,000" },
  { img: pSnake, name: "Snake Plant", tag: "Air Purifier", price: "₦18,000" },
  { img: pCalathea, name: "Calathea Orbifolia", tag: "Designer's Pick", price: "₦35,000" },
];

const services = [
  { icon: Leaf, title: "Rare & Exotic Plants", desc: "A curated catalogue of tropical and rare varieties, ethically sourced and nursery-cared." },
  { icon: Trees, title: "Garden Design & Landscaping", desc: "Bespoke outdoor sanctuaries — from concept sketches to full installation." },
  { icon: Wrench, title: "Maintenance & Installation", desc: "Ongoing care plans and expert installation that keep your green spaces thriving." },
  { icon: FlowerIcon, title: "Premium Pots & Planters", desc: "Ceramic, fiberglass and concrete vessels — sculptural pieces for every interior." },
];

const features = [
  { icon: Sparkles, title: "Curated Rarity", desc: "Hand-selected varieties you won't find elsewhere in Abuja." },
  { icon: ShieldCheck, title: "Healthy Guarantee", desc: "Every plant leaves our nursery acclimated, inspected and ready to thrive." },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "Safe, climate-aware delivery across the FCT and surrounding states." },
  { icon: PackageCheck, title: "Expert Aftercare", desc: "Lifetime advice from our horticulturists — text us anytime." },
];

const testimonials = [
  { name: "Adaeze O.", role: "Interior Designer, Maitama", quote: "Plantbos transformed our showroom. The selection is unmatched and their team is meticulous." },
  { name: "Chinedu K.", role: "Homeowner, Asokoro", quote: "From design to install, every detail felt considered. Our garden is now the heart of the house." },
  { name: "Hauwa B.", role: "Boutique Owner, Wuse", quote: "Their rare collection is a dream. The Pink Princess they delivered is absolutely thriving." },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoWhite} alt="Plantbos" className="h-10 w-auto opacity-95" width={400} height={400} />
        </a>
        <nav className="hidden items-center gap-10 text-sm tracking-wide text-foreground/80 md:flex">
          <a href="#shop" className="hover:text-foreground transition">Shop</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#visit" className="hover:text-foreground transition">Visit</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="https://instagram.com/plant_bos"
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground/90 hover:border-sage hover:text-sage transition"
          aria-label="Instagram"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Lush tropical landscape"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center">
        <img
          src={logoWhite}
          alt="Plantbos Gardens & Landscape"
          className="mb-10 h-24 w-auto animate-fade-in md:h-28"
          width={400}
          height={400}
        />
        <p className="mb-6 animate-fade-up text-xs uppercase tracking-[0.4em] text-foreground/70 delay-100">
          Abuja · Est. Lokogoma
        </p>
        <h1 className="animate-fade-up text-balance font-display text-6xl font-light leading-[1.05] text-foreground md:text-8xl delay-200">
          Bring Nature <em className="not-italic text-sage italic font-light">Home.</em>
        </h1>
        <p className="mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-foreground/80 md:text-lg delay-300">
          Rare & Exotic Plants · Professional Landscaping · Abuja's Premier Garden Center
        </p>
        <div className="mt-12 flex animate-fade-up flex-col items-center gap-4 sm:flex-row delay-500">
          <a
            href="#shop"
            className="group inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90"
          >
            Shop Plants
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition hover:bg-white hover:text-background"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-16 flex animate-fade-up flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-foreground/70 delay-500">
          <span className="flex items-center gap-2">
            <span className="flex text-terracotta">
              {[...Array(4)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              <Star className="h-3.5 w-3.5 fill-current opacity-50" />
            </span>
            4.8 · 16 reviews
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="flex items-center gap-2"><Truck className="h-3.5 w-3.5" /> Delivery</span>
          <span className="h-3 w-px bg-white/20" />
          <span className="flex items-center gap-2"><PackageCheck className="h-3.5 w-3.5" /> Kerbside Pickup</span>
          <span className="h-3 w-px bg-white/20" />
          <span className="flex items-center gap-2"><Store className="h-3.5 w-3.5" /> In-Store</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-gradient-deep py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">What we do</p>
          <h2 className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            A complete, considered green service.
          </h2>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-background p-10 transition duration-500 hover:bg-card"
            >
              <Icon className="h-8 w-8 text-sage transition group-hover:text-terracotta" strokeWidth={1.25} />
              <h3 className="mt-8 text-2xl font-light">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <ArrowRight className="mt-8 h-4 w-4 text-foreground/40 transition group-hover:translate-x-2 group-hover:text-sage" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section id="shop" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-sage">Featured collection</p>
            <h2 className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
              Rarities, freshly potted.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            A rotating selection from our greenhouse — each plant nursery-grown, acclimated, and ready to make a room feel alive.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((p) => (
            <article key={p.name} className="group hover-lift">
              <div className="relative overflow-hidden rounded-2xl bg-card">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  width={800}
                  height={1000}
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/90 backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-light">{p.name}</h3>
                <span className="text-sm tracking-wide text-sage">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm uppercase tracking-widest transition hover:border-sage hover:bg-sage hover:text-sage-foreground"
          >
            Browse Full Collection
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-cream py-32 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-sage">Why Plantbos</p>
            <h2 className="mt-4 text-balance font-display text-5xl font-light leading-tight md:text-6xl">
              Quietly obsessed with every leaf.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
              For over a decade, Abuja has trusted us to bring rare botanicals indoors and design landscapes that age beautifully.
            </p>
            <img src={logoGreen} alt="Plantbos" className="mt-12 h-20 w-auto" loading="lazy" width={400} height={400} />
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-background/10 sm:grid-cols-2 lg:col-span-7">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-cream p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-cream">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-background py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Visit us</p>
          <h2 className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            The garden, in person.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Step into our greenhouse in Lokogoma. Wander rows of rare tropicals, talk to our horticulturists, and find the piece that fits your home.
          </p>
          <ul className="mt-12 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
              <span className="leading-relaxed text-foreground/90">
                Peace Court Estate, Kado–Galadima Road,<br />
                After Living Faith Junction, Lokogoma,<br />
                Abuja 961102
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
              <a href="tel:+2349035912539" className="text-foreground/90 hover:text-sage">0903 591 2539</a>
            </li>
            <li className="flex gap-4">
              <Instagram className="mt-1 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
              <a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="text-foreground/90 hover:text-sage">@plant_bos</a>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-luxe">
          <iframe
            title="Plantbos location"
            src="https://www.google.com/maps?q=Lokogoma+Abuja&output=embed"
            className="h-[520px] w-full grayscale-[40%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [g1, g2, g3, g4, pMonstera, pBop];
  return (
    <section className="bg-background pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sage">@plant_bos</p>
            <h2 className="mt-4 text-balance text-4xl font-light md:text-5xl">From the gardens.</h2>
          </div>
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 hover:text-sage md:inline-flex"
          >
            Follow <Instagram className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/plant_bos"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 transition group-hover:bg-background/40" />
              <Instagram className="absolute inset-0 m-auto h-6 w-6 text-foreground opacity-0 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-gradient-deep py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Loved across Abuja</p>
          <h2 className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            Words from our garden community.
          </h2>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-cream p-10 text-background shadow-soft">
              <div className="flex gap-1 text-terracotta">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-6 font-display text-2xl font-light leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-background/10 pt-5">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-background/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-background pb-12 pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoWhite} alt="Plantbos" className="h-16 w-auto" loading="lazy" width={400} height={400} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Abuja's premier garden center for rare botanicals, considered landscape design, and luxury planters.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-sage">Explore</h4>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li><a href="#shop" className="hover:text-sage">Shop Plants</a></li>
              <li><a href="#services" className="hover:text-sage">Services</a></li>
              <li><a href="#visit" className="hover:text-sage">Visit</a></li>
              <li><a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="hover:text-sage">Instagram</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-sage">Contact</h4>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>Peace Court Estate, Kado–Galadima Rd,<br />Lokogoma, Abuja 961102</li>
              <li><a href="tel:+2349035912539" className="hover:text-sage">0903 591 2539</a></li>
              <li><a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="hover:text-sage">@plant_bos</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Plantbos Gardens & Landscape</span>
          <span>Designed in Abuja · Grown with care</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsApp() {
  return (
    <a
      href="https://wa.me/2349035912539"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-sage-foreground shadow-luxe transition hover:scale-110 hover:bg-sage/90"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Collection />
      <WhyUs />
      <Visit />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsApp />
    </main>
  );
}
