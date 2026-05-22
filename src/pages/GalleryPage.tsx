import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/sections/Footer";

import ameyWagh from "@/assets/gallery/amey-wagh.jpg";
import mangesh from "@/assets/gallery/mangesh-borgaonkar.jpg";
import savanee from "@/assets/gallery/savanee-ravindra.jpg";
import shaunak from "@/assets/gallery/shaunak-avinash.png";
import jyoti from "@/assets/gallery/jyoti-subash.png";
import milind from "@/assets/gallery/milind-gune.png";
import ashutosh from "@/assets/gallery/ashutosh-javdekar.png";
import mahalaxmi from "@/assets/gallery/mahalaxmi-iyer.png";
import uddhav from "@/assets/gallery/uddhav-thakre.jpg";
import shankar from "@/assets/gallery/shankar-mahadevan.jpg";
import subodh from "@/assets/gallery/subodh-bhave.jpg";

const photos = [
  { img: ameyWagh, name: "Amey Wagh", role: "Marathi Film Dubbing" },
  { img: mangesh, name: "Mangesh Borgaonkar", role: "Music Album Dubbing" },
  { img: savanee, name: "Savanee Ravindra", role: "Music Single Dubbing" },
  { img: shaunak, name: "Siddarth Menon", role: "Marathi Film Dubbing" },
  {
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QofqAp1c9YQYVrP0wGdsL29LBuTNi7.png",
    name: "Pt.Shaunak Abhisheki and Avinash Chandrachood",
    role: "Marathi Single",
  },
  { img: jyoti, name: "Jyoti Subash", role: "Dubbing for Film Basta" },
  { img: milind, name: "Milind Gune", role: "Ramkrushna Math, Pune · Music Album" },
  { img: ashutosh, name: "Dr. Ashutosh Javdekar", role: "Veen Music Album" },
  { img: uddhav, name: "Shri. Uddhav Thakre", role: "Khakee Gulab Release" },
  { img: shankar, name: "Shankar Mahadevan", role: "Katyar to Kajarare Promotions Shoot" },
  { img: subodh, name: "Subodh Bhave", role: "Dubbing For Film" },
  { img: mahalaxmi, name: "Mahalaxmi Iyer", role: "Dubbing for Album Tujha Ek Themb" },
];

const films = [
  {
    title: "Jai Bhim",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKIHJtOKOs7YSYTbQ5QnK4gSw1dfXq.png",
  },
  {
    title: "Kal Ho Naa Ho",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1i8v2LOkhXbhMOSoEbpoe5OHxi15oN.png",
  },
  {
    title: "Raan",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uYPxIG7Sd3IkrvMoRLvxXWdzZRiE4d.png",
  },
  {
    title: "Surkalota Ek Kodi",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mN90d4iVXZnxT7F1lXSsqYFe0hJcpV.png",
  },
  {
    title: "Rajkumar",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U5C4JE3auEcNz8BSuhWDBbDDPkbaEb.png",
  },
  {
    title: "Lalbaug Chi Rani",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-22%20at%2012.14.42%20PM-Y6ozbopi5u9tk9r9UdTVjfFcZLr27C.jpeg",
  },
  {
    title: "Prem",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q3bZRZB4A8WJ7PbXU7TsnhNzWCEda8.png",
  },
  {
    title: "Raan (Alternate)",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dH6GblaB1J6DF1h8kIScYG7Keu9MWu.png",
  },
];

const GalleryPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CursorGlow />
    <Navbar />

    <main className="pt-32 pb-24">

      {/* ================= GALLERY SECTION ================= */}
      <section className="container">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">▸ Studio Moments</p>

          <h1 className="display-lg mb-4">
            Gallery of <span className="text-primary">Collaborations</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Behind-the-scenes glimpses from our recording sessions with
            celebrated artists, singers and actors who have graced Media Works
            Studio.
          </p>
        </div>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {photos.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card aspect-[4/5]"
            >

              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

              {/* Content */}
              <figcaption className="absolute inset-x-0 bottom-0 p-5 transform transition-transform duration-500 group-hover:-translate-y-1">

                <div className="h-px w-10 bg-primary mb-3 transition-all duration-500 group-hover:w-20" />

                <h3 className="font-display text-xl uppercase tracking-wide text-white leading-tight">
                  {p.name}
                </h3>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mt-1.5">
                  {p.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ================= FEATURE FILMS SECTION ================= */}
      <section className="container mt-32">

        <div className="text-center mb-16">
          <p className="eyebrow mb-4">▸ Production Portfolio</p>

          <h2 className="display-lg mb-4">
            Featured <span className="text-primary">Films</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of Marathi cinema projects we have collaborated with for
            dubbing and audio production.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-transparent border border-white/10 rounded-2xl p-4 sm:p-8 md:p-12 backdrop-blur-sm"
        >

          {/* UPDATED MOBILE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">

            {films.map((film, i) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className="relative bg-[#0f0f0f] border border-white/10 rounded-xl p-3 sm:p-4 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-[#151515]">

                  {/* Poster */}
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4]">

                    <img
                      src={film.poster}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">
                        {film.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>

    <Footer />
  </div>
);

export default GalleryPage;
