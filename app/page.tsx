'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function TypewriterText() {
  const texts = [
    "Elevate Your Real Estate Investments",
    "Analyze Deals Instantly",
    "Make Smarter Investment Decisions"
  ];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayed(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

export default function HomePage() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto">
        <div className="font-semibold text-lg">Premium Enterprises</div>

        <div className="space-x-6 text-sm opacity-80 cursor-pointer">
          <span onClick={() => scrollTo('features')}>Features</span>
          <span onClick={() => scrollTo('about')}>About</span>
          <span onClick={() => scrollTo('contact')}>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-white/5 via-transparent to-white/5" />

        {/* CONTENT */}
        <div className="relative z-10 space-y-6 max-w-3xl px-4">

          <TypewriterText />

          <p className="opacity-80 text-lg">
            Enterprise-grade apartment underwriting platform built for serious investors.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollTo('about')}
              className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">

        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-lg hover:scale-105 transition"
          >
            <div className="relative">
              <img
                src={f.img}
                alt={f.title}
                className="h-40 w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl" />
            </div>

            <h3 className="text-lg font-semibold mt-4">{f.title}</h3>
            <p className="text-sm opacity-70">{f.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-3xl font-semibold">About Us</h2>

        <p className="opacity-80">
          Premium Enterprises simplifies real estate deal analysis with powerful underwriting tools,
          financial modeling, and risk insights.
        </p>

        <p className="opacity-60">
          Built for investors and enterprises who want fast, accurate, and data-driven decisions.
        </p>
      </section>

      {/* STATS */}
      <section className="text-center py-20 bg-white/5">
        <h2 className="text-2xl font-semibold mb-10">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold">{s.value}</h3>
              <p className="opacity-70 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20">

        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

        <p className="opacity-80">Reach out for demos or partnerships.</p>

        <div className="mt-6 space-y-2">
          <p>📞 8454874911</p>
          <p>📧 kumar641837@gmail.com</p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a href="tel:8454874911" className="px-6 py-3 bg-white text-black rounded-xl">
            Call Now
          </a>

          <a href="mailto:kumar641837@gmail.com" className="px-6 py-3 border border-white/40 rounded-xl">
            Send Email
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm opacity-60 py-6 border-t border-white/10">
        © 2026 Premium Enterprises. All rights reserved.
      </footer>

    </main>
  )
}

const features = [
  {
    title: 'Advanced Analytics',
    desc: 'NOI, cap rate, ROI insights instantly.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    title: 'Risk Assessment',
    desc: 'Smart AI-driven deal evaluation.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f'
  },
  {
    title: 'Instant Reports',
    desc: 'Investor-ready reports in seconds.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
  }
]

const stats = [
  { value: '500+', label: 'Deals' },
  { value: '$2B+', label: 'Transactions' },
  { value: '10K+', label: 'Units' },
  { value: '99%', label: 'Accuracy' }
]