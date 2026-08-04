import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getGoogleReviews, type GoogleReview } from "@/lib/api/reviews.functions";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import heroSpread from "@/assets/hero-spread.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishSamosa from "@/assets/dish-samosa.jpg";
import dishMalaiKofta from "@/assets/dish-malai-kofta.jpg";
import dishRosePasta from "@/assets/dish-rose-pasta.jpg";
import dishArrabiata from "@/assets/dish-arrabiata.jpg";
import dishTikkaPasta from "@/assets/dish-tikka-pasta.jpg";
import dishRasmalai from "@/assets/dish-rasmalai.jpg";
import dishGulabJamun from "@/assets/dish-gulab-jamun.jpg";
import dishBiscoff from "@/assets/dish-biscoff.jpg";
import dishTiramisu from "@/assets/dish-tiramisu.jpg";
import dishFriedRice from "@/assets/dish-fried-rice.jpg";
import dishVegNoodles from "@/assets/dish-veg-noodles.jpg";
import dishFishPakora from "@/assets/dish-fish-pakora.jpg";
import dishMalaiTikka from "@/assets/dish-malai-tikka.jpg";
import dishOreoShake from "@/assets/dish-oreo-shake.jpg";
import dishMangoLassi from "@/assets/dish-mango-lassi.jpg";
import dishChai from "@/assets/dish-chai.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishButterNaan from "@/assets/dish-butter-naan.jpg";
import dishGarlicNaan from "@/assets/dish-garlic-naan.jpg";
import spiceStillLife from "@/assets/spice-still-life.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import saffronLogo from "@/assets/saffron7-logo.png";
import saffronLogoJpeg from "@/assets/saffron7-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saffron 7 — Indian · Italian · Fusion · Windsor, ON" },
      { name: "description", content: "Saffron 7 brings Indian, Italian and fusion flavours to Windsor, Ontario. Dine in, take out, or order on Uber Eats, SkipTheDishes & DoorDash. Now open and serving." },
      { property: "og:title", content: "Saffron 7 — Flavours Without Borders" },
      { property: "og:description", content: "Indian · Italian · Fusion. Now open and serving in Windsor, Ontario." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ---------------- Components ---------------- */

function Logo({
  className = "",
  size = "md",
  src = saffronLogo,
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  compact?: boolean;
  src?: string;
}) {
  const sizes = { sm: "h-10", md: "h-16", lg: "h-28", xl: "h-44 md:h-64" };
  return (
    <img
      src={src}
      alt="Saffron 7 — Indian · Italian · Fusion"
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
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
        <Logo size="sm" compact />
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
          <a href="#story" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-saffron after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-saffron transition-colors">Story</a>
          <a href="#cuisine" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-saffron after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-saffron transition-colors">Cuisine</a>
          <a href="#experience" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-saffron after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-saffron transition-colors">Experience</a>
          <a href="#reviews" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-saffron after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-saffron transition-colors">Reviews</a>
          <a href="#visit" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-saffron after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-saffron transition-colors">Visit</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://instagram.com/Saffron7Windsor"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @Saffron7Windsor"
            className="w-9 h-9 rounded-full flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://facebook.com/Saffron7Windsor"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Saffron7Windsor"
            className="w-9 h-9 rounded-full flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2V10H6v4h3v8h4z" />
            </svg>
          </a>
        </div>
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
          Now Open in Windsor
        </p>
        <h1 className="sr-only">Saffron 7 — Indian, Italian & Fusion Restaurant in Windsor, Ontario</h1>
        <div className="drop-shadow-lg flex justify-center mb-4">
          <Logo size="xl" />
        </div>
        <GoldDivider />
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
          A New Kind of Table in Windsor — Now Open
        </h2>
        <GoldDivider label="❖" />
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
          Saffron 7 is built on a simple belief — that bold Indian spice and the warmth
          of Italian craft belong on the same table. On University Avenue West, we've opened
          a casual, welcoming home for flavour-lovers, where rose-sauce penne sits
          beside slow-simmered curries, and dessert is always worth saving room for.
        </p>
        <p className="text-base text-muted-foreground italic">
          Authentic recipes. Warm hospitality. An unforgettable experience.
        </p>
      </div>
    </section>
  );
}

const dishes = [
  { img: dishButterChicken, name: "Butter Chicken", cuisine: "Indian Classic", note: "Tender chicken in a velvety tomato-cream gravy, finished with a swirl of butter." },
  { img: dishBiryani, name: "Chicken Biryani", cuisine: "Indian Classic", note: "Fragrant basmati layered with spiced chicken, saffron and fried onions." },
  { img: dishMalaiTikka, name: "Chicken Malai Tikka", cuisine: "Indian Classic", note: "Creamy yogurt-marinated chicken skewers, charred in the tandoor." },
  { img: dishFishPakora, name: "Fish Pakora", cuisine: "Indian Classic", note: "Crispy gram-flour battered fish bites with mint chutney and lemon." },
  { img: dishSamosa, name: "Samosa", cuisine: "Indian Classic", note: "Crispy golden pastries with spiced potato and pea filling, mint chutney." },
  { img: dishMalaiKofta, name: "Malai Kofta", cuisine: "Indian Classic", note: "Soft paneer dumplings in a rich creamy tomato-cashew gravy." },
  { img: dishButterNaan, name: "Butter Naan", cuisine: "From the Tandoor", note: "Pillowy clay-oven flatbread brushed with melted butter." },
  { img: dishGarlicNaan, name: "Garlic Coriander Naan", cuisine: "From the Tandoor", note: "Tandoor naan topped with fresh garlic, cilantro and butter." },
  { img: dishFriedRice, name: "Fried Rice", cuisine: "The Fusion", note: "Wok-tossed long-grain rice with peppers, scallions and Indo-Chinese spices." },
  { img: dishVegNoodles, name: "Street-Style Veg Noodles", cuisine: "The Fusion", note: "Hakka-style noodles with crunchy vegetables and a smoky chili kiss." },
  { img: dishRosePasta, name: "Spicy Rose Pasta", cuisine: "Italian Soul", note: "Penne in a creamy tomato rose sauce with a chili kick." },
  { img: dishArrabiata, name: "Penne Arrabiata", cuisine: "Italian Soul", note: "Penne tossed in a fiery garlic, chili and tomato sauce." },
  { img: dishTikkaPasta, name: "Tikka Masala Pasta", cuisine: "The Fusion", note: "Penne folded into creamy tikka masala with grilled chicken tikka." },
  { img: dishMangoLassi, name: "Mango Lassi", cuisine: "Sips", note: "Chilled yogurt blended with Alphonso mango, a pinch of cardamom." },
  { img: dishOreoShake, name: "Oreo Shake", cuisine: "Sips", note: "Cookies-and-cream milkshake crowned with whipped cream and crumbs." },
  { img: dishChai, name: "Masala Chai", cuisine: "Sips", note: "Strong black tea simmered with ginger, cardamom and warming spices." },
  { img: dishRasmalai, name: "Ras Malai", cuisine: "Dolce", note: "Soft paneer discs in saffron-kissed milk, pistachio crown." },
  { img: dishGulabJamun, name: "Gulab Jamun", cuisine: "Dolce", note: "Warm milk dumplings soaked in rose-cardamom syrup, pistachio." },
  { img: dishBiscoff, name: "Mini Lotus Biscoff Cake", cuisine: "Dolce", note: "Cookie-base cheesecake topped with molten Biscoff caramel." },
  { img: dishTiramisu, name: "Mini Tiramisu Cake", cuisine: "Dolce", note: "Mascarpone, espresso-soaked ladyfingers, dusted with cocoa." },
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
          <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground border border-gold/30 rounded-full px-4 py-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-600" />
            Vegetarian
            <span className="opacity-50">·</span>
            <span className="inline-block w-2 h-2 rounded-full bg-red-600" />
            Non-Vegetarian
            <span className="opacity-50">—</span>
            Prepared separately
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {dishes.map((d) => (
              <CarouselItem
                key={d.name}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <article className="group h-full bg-card rounded-md overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">{d.cuisine}</p>
                    <h3 className="font-display text-2xl text-saffron mb-2">{d.name}</h3>
                    <p className="text-sm text-muted-foreground">{d.note}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-card border-gold text-saffron hover:bg-gold/10" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-card border-gold text-saffron hover:bg-gold/10" />
        </Carousel>
        <p className="text-center text-xs text-muted-foreground mt-6 md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}

const chefStats = [
  { value: "7+", label: "Years in Kitchens" },
  { value: "3", label: "Cuisines Mastered" },
  { value: "10+", label: "Signature Dishes" },
];

function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-gold text-xs mb-4">The Chef</p>
          <h2 className="font-display text-5xl md:text-6xl text-saffron">
            Two Kitchens, One Table
          </h2>
          <GoldDivider />
        </div>

        {/* Chef's Story */}
        <div className="grid md:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/40 rounded-md -z-0" />
              <img
                src={spiceStillLife}
                alt="Saffron threads, cardamom, star anise, cinnamon and fresh basil on dark wood — the spices behind every Saffron 7 dish"
                loading="lazy"
                width={768}
                height={1024}
                className="relative w-full aspect-[3/4] object-cover rounded-md shadow-warm"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Chef &amp; Founder</p>
            <h3 className="font-display text-4xl md:text-5xl text-saffron mb-5">
              Mayank Kumar
            </h3>
            <p className="font-script text-2xl text-forest mb-6">
              "Every plate carries a memory — and an invitation."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raised in kitchens that smelled of cardamom at dawn and basil at dusk, Chef Mayank built Saffron 7 around a simple idea: the best meals don&apos;t belong to one country. They belong to whoever is hungry, at whatever table.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From slow-cooked biryanis to tikka-spiced fusion plates, every dish is hand-built from spices ground in-house and sauces that simmer for hours — never shortcuts, never compromises.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/20">
              {chefStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-saffron">{s.value}</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Find Us — map */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="uppercase tracking-[0.4em] text-gold text-xs mb-3">Find Us</p>
            <h3 className="font-display text-3xl md:text-4xl text-saffron">
              1457 University Ave West, Windsor
            </h3>
          </div>
          <div className="relative rounded-md overflow-hidden border border-gold/30 shadow-soft">
            <iframe
              title="Saffron 7 location map"
              src="https://www.google.com/maps?q=1457+University+Ave+West+Unit+C+Windsor+ON&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block grayscale-[20%]"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="#visit"
              className="inline-block text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/40 hover:border-gold pb-1 transition"
            >
              See Hours &amp; Directions →
            </a>
          </div>
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
  const { data } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => getGoogleReviews(),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  const live = data?.reviews?.length ? data.reviews : null;
  const items: GoogleReview[] = live ?? reviews;
  const rating = data?.rating ?? 4.9;
  const mapsUri =
    data?.mapsUri ??
    "https://www.google.com/maps/search/?api=1&query=Saffron+7+1457+University+Ave+West+Windsor+ON";

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
            <span className="font-display text-4xl text-saffron">{rating.toFixed(1)}</span>
            <div>
              <Stars n={Math.round(rating)} />
              <p className="text-xs text-muted-foreground">
                {live && data?.total
                  ? `Based on ${data.total} Google reviews`
                  : "Based on early guest feedback"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((r) => (
            <article
              key={`${r.name}-${r.when}`}
              className="bg-card p-6 rounded-md shadow-soft border border-border flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                {r.profilePhoto ? (
                  <img
                    src={r.profilePhoto}
                    alt={`${r.name} on Google`}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-saffron text-primary-foreground flex items-center justify-center font-display text-lg">
                    {r.name[0]}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.when}</p>
                </div>
              </div>
              <Stars n={r.rating} />
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed flex-1 line-clamp-6">
                "{r.text}"
              </p>
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
            href={mapsUri}
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
          Now Open
        </h2>
        <p className="font-script text-3xl text-forest mt-2">in Windsor, Ontario</p>
        <GoldDivider label="❖" />

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <a
            href="https://maps.google.com/?q=1457+University+Ave+West+Unit+C+Windsor+ON"
            target="_blank"
            rel="noreferrer"
            className="bg-card p-6 rounded-md border border-border hover:border-gold transition block"
          >
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Find Us</p>
            <p className="font-display text-2xl text-saffron leading-snug">
              1457 University Ave West, Unit C
            </p>
            <p className="text-sm text-muted-foreground mt-1">Windsor, ON · N9B 1B8</p>
          </a>
          <div className="bg-card p-6 rounded-md border border-border">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Hours</p>
            <p className="font-display text-2xl text-saffron">Open Daily</p>
            <p className="text-sm text-muted-foreground mt-1">Monday – Sunday · 12:00 PM – 12:00 AM</p>
          </div>
          <div className="bg-card p-6 rounded-md border border-border">
            <p className="text-xs uppercase tracking-widest text-gold mb-3">Follow Along</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/Saffron7Windsor"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @Saffron7Windsor"
                className="group flex-1 flex items-center gap-3 px-4 py-3 rounded-md bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white hover:opacity-90 transition"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <span className="font-semibold text-sm">@Saffron7Windsor</span>
              </a>
              <a
                href="https://facebook.com/Saffron7Windsor"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Saffron7Windsor"
                className="flex items-center justify-center w-12 rounded-md bg-[#1877F2] text-white hover:opacity-90 transition"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2V10H6v4h3v8h4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>


        <p className="mt-12 text-sm text-muted-foreground">
          Now open and serving — follow us on Instagram for daily specials, behind-the-scenes moments, and the latest dishes.
        </p>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest text-cream/90 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div>
          <Logo size="md" src={saffronLogoJpeg.url} />
          <p className="text-xs uppercase tracking-[0.3em] text-gold mt-2">
            Indian · Italian · Fusion
          </p>
          <p className="text-sm text-cream/70 mt-3 leading-relaxed">
            1457 University Ave West, Unit C<br />Windsor, ON · N9B 1B8
          </p>
        </div>
        <div className="text-center">
          <p className="font-script text-2xl text-gold">Flavours without borders.</p>
        </div>
        <div className="flex md:justify-end gap-3">
          <a
            href="https://instagram.com/Saffron7Windsor"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @Saffron7Windsor"
            className="w-11 h-11 rounded-full border border-gold/60 text-gold flex items-center justify-center hover:bg-gold/20 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          <a
            href="https://facebook.com/Saffron7Windsor"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Saffron7Windsor"
            className="w-11 h-11 rounded-full border border-gold/60 text-gold flex items-center justify-center hover:bg-gold/20 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2V10H6v4h3v8h4z"/></svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gold/20 text-xs text-cream/60 text-center">
        © {new Date().getFullYear()} Saffron 7 · Windsor, Ontario
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
