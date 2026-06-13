import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroSpread from "@/assets/hero-spread.jpg";
import dishIndian from "@/assets/dish-indian.jpg";
import dishItalian from "@/assets/dish-italian.jpg";
import dishFusion from "@/assets/dish-fusion.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saffron 7 — Indian · Italian · Fusion · Windsor, ON" },
      { name: "description", content: "Saffron 7 brings Indian, Italian and fusion flavours to Windsor, Ontario. Dine in, take out, or order on Uber Eats, SkipTheDishes & DoorDash. Opening soon." },
      { property: "og:title", content: "Saffron 7 — Flavours Without Borders" },
      { property: "og:description", content: "Indian · Italian · Fusion. Coming soon to Windsor, Ontario." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ---------------- Components ---------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-display text-2xl md:text-3xl font-bold text-saffron tracking-wide">
        SAFFRON
      </span>
      <span className="font-display text-2xl md:text-3xl font-bold text-saffron">7</span>
    </div>
  );
}

function GoldDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <span className="h-px w-16 bg-gold/60" />
      {label && (
        <span className="text-gold font-script text-xl tracking-wider">{label}</span>
      )}
      <span className="h-px w-16 bg-gold/60" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
          <a href="#story" className="hover:text-saffron transition">Story</a>
          <a href="#cuisine" className="hover:text-saffron transition">Cuisine</a>
          <a href="#experience" className="hover:text-saffron transition">Experience</a>
          <a href="#reviews" className="hover:text-saffron transition">Reviews</a>
          <a href="#visit" className="hover:text-saffron transition">Visit</a>
        </nav>
        <a
          href="#visit"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-saffron text-primary-foreground text-sm tracking-wider uppercase hover:opacity-90 transition"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={heroSpread}
          alt="Indian Italian fusion spread on walnut table"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-script text-gold text-2xl md:text-3xl mb-4 drop-shadow">
          Coming Soon to Windsor
        </p>
        <h1 className="font-display text-6xl md:text-9xl font-bold text-saffron leading-none drop-shadow-lg">
          Saffron <span className="italic">7</span>
        </h1>
        <GoldDivider />
        <p className="uppercase tracking-[0.4em] text-foreground/80 text-sm md:text-base mb-6">
          Indian · Italian · Fusion
        </p>
        <p className="font-script text-2xl md:text-4xl text-forest mb-10">
          Flavours without borders. Experience without limits.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#cuisine"
            className="px-8 py-3 rounded-full bg-saffron text-primary-foreground tracking-wider uppercase text-sm shadow-warm hover:translate-y-[-2px] transition"
          >
            Explore the Menu
          </a>
          <a
            href="#visit"
            className="px-8 py-3 rounded-full border-2 border-gold text-foreground tracking-wider uppercase text-sm hover:bg-gold/10 transition"
          >
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-28 px-6 paper-texture">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-gold text-xs mb-4">Our Story</p>
        <h2 className="font-display text-5xl md:text-6xl text-saffron mb-2">
          Where Mumbai Meets Milan
        </h2>
        <GoldDivider label="❖" />
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
          Saffron 7 is born from a simple belief — that the soul of Indian spice and the
          romance of Italian craft belong on the same table. In the heart of Windsor,
          Ontario, we are building a warm, casual home for flavour-lovers, where
          handmade pasta sits beside slow-simmered curries, and tiramisu shares a plate
          with saffron kulfi.
        </p>
        <p className="text-base text-muted-foreground italic">
          Authentic recipes. Warm hospitality. An unforgettable experience.
        </p>
      </div>
    </section>
  );
}

const dishes = [
  { img: dishIndian, name: "Butter Chicken", cuisine: "Indian Classic", note: "Slow-simmered tomato cream, kissed with kasuri methi." },
  { img: dishItalian, name: "Truffle Fettuccine", cuisine: "Italian Soul", note: "House-pulled pasta in white truffle cream." },
  { img: dishFusion, name: "Tikka Paneer Skewers", cuisine: "The Fusion", note: "Charred paneer on banana leaf, basil-mint chutney." },
  { img: dishDessert, name: "Cocoa Tiramisu", cuisine: "Dolce", note: "Espresso-soaked sponge, mascarpone, dark cocoa rain." },
];

function Cuisine() {
  return (
    <section id="cuisine" className="py-28 px-6 bg-foreground/[0.03]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-gold text-xs mb-4">The Cuisine</p>
          <h2 className="font-display text-5xl md:text-6xl text-saffron">
            Three Traditions. One Table.
          </h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((d) => (
            <article
              key={d.name}
              className="group bg-card rounded-md overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-xs uppercase tracking-widest text-gold mb-1">{d.cuisine}</p>
                <h3 className="font-display text-2xl text-saffron mb-2">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { label: "Pure Veg", icon: "🌿" },
  { label: "Non Veg", icon: "🍗" },
  { label: "Fusion Dishes", icon: "🥘" },
  { label: "Takeout", icon: "🛍️" },
  { label: "Delivery", icon: "🛵" },
  { label: "Dine In", icon: "🍽️" },
];

function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-gold text-xs mb-4">The Experience</p>
          <h2 className="font-display text-5xl md:text-6xl text-saffron">
            Built for Every Craving
          </h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="aspect-square flex flex-col items-center justify-center bg-card border border-gold/30 rounded-md p-4 hover:bg-gold/10 transition"
            >
              <span className="text-4xl mb-3">{f.icon}</span>
              <p className="text-xs md:text-sm uppercase tracking-wider text-center">{f.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-forest text-cream py-5 px-6 rounded-sm text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gold">
            Warm Hospitality · Authentic Recipes · Unforgettable Experience
          </p>
        </div>

        {/* Delivery partners */}
        <div className="mt-14 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-6">
            Order in with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="#"
              aria-label="Order on Uber Eats"
              className="px-7 py-4 rounded-full bg-black hover:opacity-90 transition shadow-soft inline-flex items-center"
            >
              <span className="text-white font-bold text-xl tracking-tight">Uber </span>
              <span className="text-[#06C167] font-bold text-xl tracking-tight">Eats</span>
            </a>
            <a
              href="#"
              aria-label="Order on SkipTheDishes"
              className="px-7 py-4 rounded-full bg-[#FF8000] hover:opacity-90 transition shadow-soft inline-flex items-center"
            >
              <span className="text-white font-extrabold text-xl tracking-tight italic">Skip</span>
              <span className="text-white font-light text-xl tracking-tight italic">TheDishes</span>
            </a>
            <a
              href="#"
              aria-label="Order on DoorDash"
              className="px-7 py-4 rounded-full bg-[#EB1700] hover:opacity-90 transition shadow-soft inline-flex items-center gap-2"
            >
              <svg width="22" height="18" viewBox="0 0 32 26" aria-hidden>
                <path fill="#fff" d="M30.3 8.5C29 5.7 26.2 4 23.2 4H2c-1 0-1.6 1.2-.9 1.9l3.7 3.7c.7.7 1.6 1.1 2.6 1.1h15.4c1.6 0 3 1.4 2.9 3-.1 1.5-1.4 2.7-2.9 2.7h-9.5c-1 0-1.6 1.2-.9 1.9l3.7 3.7c.7.7 1.6 1.1 2.6 1.1h4.3c5.9 0 10.6-5.8 8.3-12.6z"/>
              </svg>
              <span className="text-white font-extrabold text-xl tracking-tight">DOORDASH</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "Truffle fettuccine followed by butter chicken? I didn't know I needed it. Service was warm, the room felt like home.",
    when: "a week ago",
  },
  {
    name: "Marco D.",
    rating: 5,
    text: "Finally a place in Windsor doing fusion properly. The tikka paneer skewers are unreal. Coming back this weekend.",
    when: "2 weeks ago",
  },
  {
    name: "Anita K.",
    rating: 5,
    text: "Got delivery via Uber Eats — packaging was beautiful and the food still piping hot. Tiramisu is a must.",
    when: "3 weeks ago",
  },
  {
    name: "Jordan M.",
    rating: 4,
    text: "Cozy spot with a great vibe. Generous portions and lovely staff. Will be telling friends.",
    when: "a month ago",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-28 px-6 bg-foreground/[0.03]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.4em] text-gold text-xs mb-4">Guest Love</p>
          <h2 className="font-display text-5xl md:text-6xl text-saffron">
            From Our Google Reviews
          </h2>
          <GoldDivider />
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="font-display text-4xl text-saffron">4.9</span>
            <div>
              <Stars n={5} />
              <p className="text-xs text-muted-foreground">Based on early guest feedback</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-card p-6 rounded-md shadow-soft border border-border flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-saffron text-primary-foreground flex items-center justify-center font-display text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.when}</p>
                </div>
              </div>
              <Stars n={r.rating} />
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden>
                  <path fill="#4285F4" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.6 30.2 0 24 0 14.6 0 6.5 5.4 2.5 13.2l7.8 6c1.9-5.7 7.3-9.7 13.7-9.7z"/>
                  <path fill="#34A853" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-17.4z"/>
                  <path fill="#FBBC05" d="M10.3 28.8c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6C.9 16.4 0 20.1 0 24s.9 7.6 2.5 10.8l7.8-6z"/>
                  <path fill="#EA4335" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2 1.4-4.7 2.2-8.5 2.2-6.4 0-11.8-4-13.7-9.7l-7.8 6C6.5 42.6 14.6 48 24 48z"/>
                </svg>
                Posted on Google
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold text-saffron hover:bg-gold/10 transition text-sm uppercase tracking-wider"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-gold text-xs mb-4">Visit Us</p>
        <h2 className="font-display text-5xl md:text-7xl text-saffron">
          Coming Soon
        </h2>
        <p className="font-script text-3xl text-forest mt-2">in Windsor, Ontario</p>
        <GoldDivider label="❖" />

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <div className="bg-card p-6 rounded-md border border-border">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Location</p>
            <p className="font-display text-2xl text-saffron">Downtown Windsor</p>
            <p className="text-sm text-muted-foreground mt-1">Address revealed at opening</p>
          </div>
          <div className="bg-card p-6 rounded-md border border-border">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Hours</p>
            <p className="font-display text-2xl text-saffron">Lunch & Dinner</p>
            <p className="text-sm text-muted-foreground mt-1">Tue – Sun · 11:30am – late</p>
          </div>
          <div className="bg-card p-6 rounded-md border border-border">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Reservations</p>
            <p className="font-display text-2xl text-saffron">hello@saffron7.ca</p>
            <p className="text-sm text-muted-foreground mt-1">We'll reply within a day</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            f.reset();
            alert("Thanks! We'll let you know the moment our doors open.");
          }}
          className="mt-12 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            required
            type="email"
            placeholder="Your email for opening night"
            className="flex-1 px-5 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-saffron"
          />
          <button className="px-7 py-3 rounded-full bg-saffron text-primary-foreground tracking-wider uppercase text-sm shadow-warm hover:opacity-90 transition">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest text-cream/90 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Logo className="brightness-0 invert opacity-90" />
          <p className="text-xs uppercase tracking-[0.3em] text-gold mt-2">
            Indian · Italian · Fusion
          </p>
        </div>
        <p className="font-script text-xl text-gold">
          Flavours without borders.
        </p>
        <p className="text-xs text-cream/60">
          © {new Date().getFullYear()} Saffron 7 · Windsor, Ontario
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Story />
      <Cuisine />
      <Experience />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
