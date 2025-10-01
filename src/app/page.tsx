"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Flag,
  Calendar,
  CreditCard,
  MapPin,
  Clock,
  Phone,
  Mail,
  Star,
  ChevronRight,
} from "lucide-react";

// === Simple design tokens and components ===
const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const section = "py-16 sm:py-20";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
      {children}
    </span>
  );
}

function PillButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110">
      {children}
      <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
      {children}
    </button>
  );
}

function Nav() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Pricing", href: "#pricing" },
    { label: "Memberships", href: "#memberships" },
    { label: "Lessons", href: "#lessons" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-7xl rounded-2xl border border-white/10 bg-[#0b1a12]/80 px-4 py-3 backdrop-blur md:w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white">
              <Flag className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">{"Tommy's Golf Club"}</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#book" className="ml-2">
              <PillButton>
                <Calendar className="h-4 w-4" /> Book Now
              </PillButton>
            </a>
          </div>
          <div className="md:hidden">
            <a href="#book">
              <PillButton>
                <Calendar className="h-4 w-4" />
              </PillButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0b1a12]">
      <div className="absolute inset-0">
        {/* Background image placeholder */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521026801726-0eeaadf5b0d8?q=80&w=1950&auto=format&fit=crop')] bg-cover bg-center opacity-30"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a12]/60 via-[#0b1a12]/80 to-[#0b1a12]" />
        <div className="absolute -left-16 -top-16 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-16 -bottom-24 h-[26rem] w-[26rem] rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <div className={`${container} relative pt-28 pb-24`}>
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge>
            <Star className="h-3.5 w-3.5" /> New: Fall Memberships now available
          </Badge>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Premium indoor golf on <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">TrackMan</span>
          </h1>
          <p className="mt-4 max-w-xl text-base/7 text-white/80 md:text-lg/8">
            Reserve a bay, pay online, and show up swinging. Clean space, tour‑grade data, and a friendly local crew.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#book">
              <PillButton>
                <Calendar className="h-4 w-4" /> Book a Bay
              </PillButton>
            </a>
            <a href="#pricing">
              <GhostButton>
                <CreditCard className="h-4 w-4" /> See Pricing
              </GhostButton>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 6am–11pm daily
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 123 Fairway Ave, Your City
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (555) 123‑4567
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <motion.div {...fadeUp} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white shadow">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="features" className={`${section} bg-gradient-to-b from-white to-white`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need for a great session</h2>
          <p className="mt-3 text-gray-600">Book in seconds. Walk in to a spotless bay. Leave with tour‑level data and a smile.</p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Flag} title="TrackMan Powered" desc="Ball flight, club data, 250+ courses, and skill games." />
          <Feature icon={Calendar} title="Instant Booking" desc="Real‑time availability with confirmations via email." />
          <Feature icon={CreditCard} title="Pay Online" desc="Secure checkout, memberships, and gift cards." />
          <Feature icon={Clock} title="Flexible Hours" desc="Early birds and night owls welcome—6am to 11pm." />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Off‑Peak",
      price: "$49",
      note: "Weekdays before 4pm",
      features: ["1 hour bay rental", "Up to 4 players", "TrackMan data export"],
      cta: "Book Off‑Peak",
    },
    {
      name: "Peak",
      price: "$59",
      note: "Weeknights & weekends",
      features: ["1 hour bay rental", "Up to 4 players", "400+ virtual courses"],
      cta: "Book Peak",
      highlight: true,
    },
    {
      name: "Membership",
      price: "$149",
      note: "Per month",
      features: ["8 hours included", "10% off guests", "Priority booking"],
      cta: "See Memberships",
    },
  ];

  return (
    <section id="pricing" className={`${section} bg-[#0b1a12] text-white`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Book by the hour or join as a member—no hidden fees.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              className={`relative rounded-2xl border ${
                t.highlight ? "border-emerald-400/40 bg-white/5" : "border-white/10 bg-white/5"
              } p-6 shadow-lg`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="text-sm text-white/70">{t.note}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-lime-400" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#book">
                  <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 px-4 py-3 text-sm font-semibold text-white shadow hover:brightness-110">
                    {t.cta}
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Memberships() {
  const perks = [
    "8 hours included each month",
    "10% off additional time and guests",
    "Priority booking window",
    "Member‑only events & leagues",
  ];

  return (
    <section id="memberships" className={`${section} bg-white`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Memberships</h2>
          <p className="mt-3 text-gray-600">Play more for less. Cancel anytime.</p>
        </motion.div>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm text-gray-700">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <a href="#book">
              <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 px-5 py-3 text-sm font-semibold text-white shadow hover:brightness-110">
                Become a Member
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lessons() {
  const items = [
    { title: "Intro Swing Assessment", desc: "60‑minute baseline session with TrackMan data and drills.", price: "$99" },
    { title: "Single Lesson", desc: "One 60‑minute private lesson tailored to your goals.", price: "$129" },
    { title: "3‑Pack", desc: "Three 60‑minute lessons at a discounted bundle rate.", price: "$339" },
  ];

  return (
    <section id="lessons" className={`${section} bg-emerald-50`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Lessons</h2>
          <p className="mt-3 text-gray-600">Work one‑on‑one with our coaches using TrackMan feedback.</p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <motion.div key={it.title} {...fadeUp} className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4 text-2xl font-bold text-gray-900">{it.price}</div>
              <div className="mt-6">
                <a href="#book">
                  <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 px-4 py-3 text-sm font-semibold text-white shadow hover:brightness-110">
                    Book Lesson
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop",
  ];
  return (
    <section id="gallery" className={`${section} bg-white`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Take a look inside</h2>
          <p className="mt-3 text-gray-600">Bright bays, premium mats, and clean vibes. More photos coming soon.</p>
        </motion.div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {imgs.map((src, i) => (
            <motion.div key={i} {...fadeUp} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={src} alt="Studio" className="h-full w-full object-cover transition duration-300 hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How many players per bay?", a: "Up to 4 players per hour. Add extra time if you have a full group." },
    { q: "What is your cancellation policy?", a: "Full refund up to 12 hours before your start time. Inside 12 hours, fees may apply." },
    { q: "Do you allow outside clubs?", a: "Absolutely. Please make sure clubfaces are clean to protect the screens." },
    { q: "Are walk‑ins welcome?", a: "Yes when space allows—online bookings get priority." },
  ];
  return (
    <section id="faq" className={`${section} bg-white`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-gray-600">Policies and details to make your visit smooth.</p>
        </motion.div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {items.map((it, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer list-none font-medium text-gray-900">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {it.q}
              </summary>
              <p className="mt-2 text-sm text-gray-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={`${section} bg-gradient-to-b from-white to-emerald-50`}>
      <div className={container}>
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Visit us</h2>
          <p className="mt-3 text-gray-600">
  	    {"We're easy to find and easier to reach."}
	  </p>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="mt-2 text-sm text-gray-600">123 Fairway Ave, Your City, ST 00000</p>
            <h3 className="mt-6 font-semibold text-gray-900">Hours</h3>
            <p className="mt-2 text-sm text-gray-600">Mon–Sun: 6:00am – 11:00pm</p>
            <h3 className="mt-6 font-semibold text-gray-900">Contact</h3>
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123‑4567</p>
            <p className="mt-1 text-sm text-gray-600 flex items-center gap-2"><Mail className="h-4 w-4" /> hello@tommysgolfclub.com</p>
          </div>
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-gray-200">
            {/* Map placeholder */}
            <iframe
              title="Map"
              className="h-[320px] w-full"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1a12] py-10 text-white">
      <div className={container}>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white">
              <Flag className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/80">{"Tommy's Golf Club"}</span>
          </div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Tommy's Golf Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function TommysGolfClubSite() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* Tailwind base container + global styles assumed in canvas */}
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Memberships />
      <Lessons />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      {/* Anchor for Book Now CTA (hook up later) */}
      <div id="book" className="hidden" />
    </main>
  );
}

export default function Page() {
  return <TommysGolfClubSite />;
}
