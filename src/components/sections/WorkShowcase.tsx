import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, BookOpen, Award } from "lucide-react";

type Filter =
  | "All"
  | "Audio Post Production"
  | "Video Production"
  | "Corporate & Documentary"
  | "Short Films"
  | "Music Albums"
  | "Podcasts"
  | "Audio Books"
  | "Films & Productions";

const filters: Filter[] = [
  "All",
  "Audio Post Production",
  "Video Production",
  "Corporate & Documentary",
  "Short Films",
  "Music Albums",
  "Podcasts",
  "Audio Books",
  "Films & Productions",
];

const audioPost: Array<[string, string]> = [
  ["Javani Jindabad", "Sound Design & Foley"],
  ["Sargam", "Sound Design & Foley"],
  ["Beduk", "Audio Post Production"],
  ["Asehi Ekda Whave", "Sound Design & Foley"],
  ["Purushottam", "Dubbing"],
  ["Ke Sara Sara", "Sound Design & Foley"],
  ["Farzand", "Music Production · Dubbing"],
  ["Anand Mai Tera (Bhojpuri Film)", "Sound Design & Foley"],
  ["Mahaprayan", "Audio Post Production"],
  ["Lagn Mubarak", "Sound Design & Foley"],
  ["Re Raya Kar Dhava", "Audio Post Production"],
  ["Cinemascope", "Audio Post Production"],
  ["Basta", "Audio Post Production"],
  ["Loose Control", "Music Production · Dubbing"],
  ["Adham", "Music Production · Dubbing"],
  ["Ani Dr. Kashinath Ghanekar", "Dubbing"],
  ["Raan", "Audio Post Production"],
  ["Petla Man Saar", "Audio Post Production"],
  ["Lalbaug Chi Rani", "Music Production · Dubbing"],
  ["Udaharnarth Nemade", "Audio Post Production"],
  ["Firki", "Sound Design & Foley"],
  ["Fuli", "Music Production · Dubbing"],
];

const videoProd: Array<[string, string]> = [
  ["Safar Maharastachi Thodi Aad Watechi", "Shoot & Edit"],
  ["Mukkam Post Dhanori", "Edit"],
  ["Yu Hi", "Edit"],
  ["Tadaiv Lagnam", "Edit"],
  ["Paglya", "Edit"],
  ["Beduk", "Edit"],
  ["Khopa", "Final Out"],
  ["Premat Petal Man Saar", "Edit"],
];

interface CorporateItem {
  name: string;
  type: string;
  location: string;
  image?: string;
}

const corporate: Array<CorporateItem> = [
  { name: "Sri Daata Shikhar Santhan", type: "Corporate Film", location: "Mahur" },
  { name: "Rahuri University", type: "Documentary", location: "Ahmadnagar", image: "/corporate/gateway-of-india.jpg" },
  { name: "Symbiosis School of Open University", type: "Corporate Film", location: "Pune" },
  { name: "Gurukul Public School", type: "School Documentary", location: "Nanded" },
  { name: "Greenleaf Public School", type: "School Documentary", location: "Dharmabad, Nanded" },
  { name: "AppDirect India", type: "Corporate Film", location: "India" },
  { name: "Teradata India", type: "Corporate Film", location: "India" },
  { name: "Kadak Special", type: "TVC", location: "—" },
  { name: "JSPM", type: "Corporate Film", location: "Pune" },
  { name: "MGM Engineering College", type: "Corporate Film", location: "Nanded" },
  { name: "Election Campaign", type: "Campaign Film", location: "—" },
  { name: "Mitti Ke Sitare", type: "Documentary", location: "—" },
];

const shortFilms = [
  "The Drainage",
  "Vashat — The Cannibal",
  "Sati",
  "Ayan",
  "Shengadana",
  "Crosscheck",
  "KKB",
  "Dilemma",
  "Weekend",
  "Na Jaane Kyon",
];

const musicAlbums = [
  "Khakee Gulab: Ek Radrang",
  "Khakee Gulab: Ek Bhakti Sugandh",
  "Jhep",
  "Sukhachi Thev",
  "Swar Vitthal",
  "Tujha Ek Themb",
  "Sugaranicha Khopa",
  "Srimad Bhagavatgeeta",
  "Vanvaas",
  "Dharmik",
  "Bhakti Vedant Book Trust Audio Book",
  "Ramkrushna Math",
  "Cops",
  "Avinash Vishavajeet Music Single",
  "Hottle Song",
  "Gurukul Theme Song",
  "Shiv Putra Shambhu Raje",
];

const podcasts = ["+91 Podcast", "Charging Point", "Screen Time"];

const audioBooks: Array<[string, string]> = [
  ["Vanvaas", "Snovel · Audible · Storytell"],
  ["Hatya", "Platform release"],
  ["Love You Forever", "Platform release"],
  ["Dharmik", "Platform release"],
];

const filmCategories = {
  productions: [
    {
      title: "विनायक पंडित (Vinayak Pandit)",
      description: "Planet Marathi Original",
      category: "Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ivK9llqC8jTxhdp2zmWmBJ2Oxh7n5R.png",
    },
    {
      title: "इशारी (Ishari)",
      description: "IFFI Official Selection",
      category: "Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F2PVKncYbs2fmWc056hasNoZtuNm41.png",
    },
    {
      title: "स्वोपा (Swopa)",
      description: "Period Drama",
      category: "Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lg3bolB00ZHEPFmmnPfPsUilfeJJFw.png",
    },
    {
      title: "समुद्र महराज (Samudra Maharaj)",
      description: "Epic Period Drama",
      category: "Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6IjY3INj1mqiD2JL65Waiqf3AhZ10L.png",
    },
    {
      title: "साप्पळा (Saappala)",
      description: "Thriller Drama",
      category: "Comedy Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pbpnb8XrpYNT1KBjqqcb8jBRnHowWs.png",
    },
    {
      title: "गुलाबी (Gulabi)",
      description: "Comedy Drama",
      category: "Comedy Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C2mHW13Far70KXBW2QFNRDgdsa3SY1.png",
    },
    {
      title: "लाइक आणि सबस्क्राइब (Like aani Subscribe)",
      description: "Contemporary Comedy",
      category: "Comedy Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-huQ8cj1wV4Ws5UgcLNMhfxY4hWRTNd.png",
    },
    {
      title: "दिन लगनाची गास्ट (Din Lagnaachi Gast)",
      description: "Family Comedy",
      category: "Comedy Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BhNRv6WjCcl9BgJqHK2LnqQw5G6DGf.png",
    },
    {
      title: "करती काज (Karti Kaaj)",
      description: "Comedy Romance",
      category: "Comedy Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e7vA3pznIjahCYWW6bMOG2HVEZPjSv.png",
    },
    {
      title: "श्री शिव जी महिमा नालकूट (Shree Shiva Ji Mahima Nalkoot)",
      description: "Family Drama",
      category: "Family Drama",
      image: "/films/shiva-ji-mahima.jpg",
    },
    {
      title: "सुरुळता एक कोडी (Suruulta Ek Kodi)",
      description: "Drama",
      category: "Drama",
      image: "/films/suruulta-ek-kodi.jpg",
    },
  ],
  featureFilms: [
    {
      title: "Jawani Zindagiwa",
      description: "Romantic Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UfwPf0hsRwaOQW53N3Xyr49p8EmSzi.png",
    },
    {
      title: "Sarla Ek Koti",
      description: "Period Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ip50csJQbkQXgcXXAJolfRUqAdg9Oe.png",
    },
    {
      title: "Gadad Andhar",
      description: "Historical Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NmNDbN3GkSI0m4i6A0SEDjaj0MIzQ5.png",
    },
    {
      title: "Ani Dr. Kashinath Ghanekar",
      description: "Biographical Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PzDWe44oNe2a04km59Vkdu0AvnSCTn.png",
    },
    {
      title: "Basta",
      description: "Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NfBN5O7aqfgh1lxYu6saXnqTYCQoBP.png",
    },
    {
      title: "Farzand",
      description: "Family Drama",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jIcwBlK6h5akMMsYOR19w6lHxYsAoJ.png",
    },
  ],
  shortFilms: [
    {
      title: "The Drainage",
      description: "Award-Winning Short Film",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bs53VNaDV6SP2w1t4JUOm9dJtsc51a.png",
    },
    {
      title: "Weekend",
      description: "Award-Winning Short Film",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WbqrYJu2c7Bp8RNUdnO0vnLc4zQY5E.png",
    },
    {
      title: "Dialima",
      description: "Short Film",
      image: null,
    },
    {
      title: "Vashat",
      description: "Short Film",
      image: null,
    },
    {
      title: "Na Jaane Kyon",
      description: "Short Film",
      image: null,
    },
  ],
  corporateFilms: [
    {
      title: "Maharashtra Tourism",
      description: "Corporate Showcase",
      image: "/corporate/gateway-of-india.jpg",
    },
  ],
  corporateClients: [
    "Symbiosis Skills and professional university, Pune",
    "Finolex Pipes",
    "Teradata India",
    "AppDirect India",
    "Maharashtra Tourism Department Board",
    "Maharashtra Government",
    "Nanded Waghala Municipal Corporation",
    "Gurukul Public School",
    "Snovel",
    "Audible",
    "Rhyfil",
    "Zee Music Marathi",
  ],
};

const SectionHeader = ({
  num,
  title,
  count,
}: {
  num: string;
  title: string;
  count?: string;
}) => (
  <div className="mb-8">
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <p className="eyebrow mb-2">▸ {num}</p>
        <h2 className="font-display text-4xl md:text-5xl uppercase text-foreground">
          {title}
        </h2>
      </div>
      {count && (
        <span className="bg-primary/10 text-primary text-xs px-3 py-1 border border-primary/30 uppercase tracking-widest">
          {count}
        </span>
      )}
    </div>
    <div className="h-px w-16 bg-primary mt-6" />
  </div>
);

const TableRow = ({
  title,
  tag,
  i,
}: {
  title: string;
  tag: string;
  i: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }}
    className={`group flex items-center justify-between gap-4 py-4 px-6 border-b border-border border-l-4 border-l-transparent hover:border-l-primary hover:bg-background-elevated transition-all ${i % 2 === 1 ? "bg-background-elevated/40" : ""
      }`}
  >
    <span className="text-foreground font-medium text-sm md:text-base">{title}</span>
    <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary text-right shrink-0">
      {tag}
    </span>
  </motion.div>
);

const WorkShowcase = () => {
  const [active, setActive] = useState<Filter>("All");
  const show = (f: Filter) => active === "All" || active === f;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="container relative">
          <p className="eyebrow mb-4">▸ Since 2017</p>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs md:text-sm mt-6">
            Film · Sound · Music · Podcasts · Corporate
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-3xl">
            {[
              ["22", "Audio Post"],
              ["8", "Video"],
              ["12", "Corporate"],
              ["17", "Music Albums"],
            ].map(([n, l]) => (
              <div key={l} className="border border-border bg-background-elevated px-5 py-4">
                <p className="font-display text-3xl text-primary">{n}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-30 bg-background/90 backdrop-blur-xl border-y border-border">
        <div className="container py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] border transition-all whitespace-nowrap ${active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIO POST */}
      {show("Audio Post Production") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="01" title="Audio Post Production" count="22 Projects" />
            <div className="bg-background-elevated border border-border">
              {audioPost.map(([t, w], i) => (
                <TableRow key={t + i} title={t} tag={w} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VIDEO */}
      {show("Video Production") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="02" title="Video Production" count="8 Projects" />
            <div className="bg-background-elevated border border-border">
              {videoProd.map(([t, w], i) => (
                <TableRow key={t + i} title={t} tag={w} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CORPORATE */}
      {show("Corporate & Documentary") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="03" title="Corporate & Documentary" count="12 Projects" />
            
            {/* Corporate Films with Images */}
            <div className="mb-12">
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">▸</span> Featured Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {corporate
                  .filter((c) => c.image)
                  .map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group bg-background-elevated border border-border overflow-hidden hover:border-primary transition-all"
                    >
                      <div className="relative overflow-hidden bg-background aspect-[3/4]">
                        <img
                          src={c.image}
                          alt={c.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-sm md:text-base uppercase tracking-wide text-foreground line-clamp-2">
                          {c.name}
                        </h4>
                        <p className="text-primary text-[10px] uppercase tracking-widest mt-2">
                          {c.type}
                        </p>
                        <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-1">
                          {c.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Corporate List - Text Only */}
            <div>
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">▸</span> More Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {corporate
                  .filter((c) => !c.image)
                  .map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                      className="bg-background-elevated border border-border border-l-4 border-l-primary p-5 hover:border-primary transition-all"
                    >
                      <h3 className="text-foreground font-medium">{c.name}</h3>
                      <p className="text-primary text-xs uppercase tracking-wider mt-2">
                        {c.type}
                      </p>
                      <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-1">
                        {c.location}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SHORT FILMS */}
      {show("Short Films") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="04" title="Award-Winning Short Films" count="5 Short Films" />

            {/* Films with Images */}
            <div className="mb-12">
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">▸</span> Featured Films
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filmCategories.shortFilms
                  .filter((f) => f.image)
                  .map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group bg-background-elevated border border-border overflow-hidden hover:border-primary transition-all"
                    >
                      <div className="relative overflow-hidden bg-background aspect-[3/4]">
                        <img
                          src={f.image}
                          alt={f.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-sm md:text-base uppercase tracking-wide text-foreground line-clamp-2">
                          {f.title}
                        </h4>
                        <p className="text-primary text-[10px] uppercase tracking-widest mt-2">
                          {f.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Other Short Films List */}
            <div>
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">▸</span> More Films
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filmCategories.shortFilms
                  .filter((f) => !f.image)
                  .map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="relative bg-background-elevated border border-border p-6 hover:border-primary transition-all overflow-hidden"
                    >
                      <span className="absolute top-2 right-4 font-display text-6xl text-border/60 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-wide text-foreground relative">
                        {f.title}
                      </h3>
                      <p className="text-primary text-xs uppercase tracking-wider mt-2 relative">
                        {f.description}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-8 italic">
              And many more short films for which we are associated for their production and post-production needs
            </p>
          </div>
        </section>
      )}

      {/* MUSIC ALBUMS */}
      {show("Music Albums") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="05" title="Music Albums" count="17 Albums" />
            <div className="bg-background-elevated border border-border grid grid-cols-1 md:grid-cols-2">
              {musicAlbums.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: (i % 9) * 0.04 }}
                  className="group flex items-center justify-between gap-3 py-4 px-6 border-b border-border border-l-2 border-l-transparent hover:border-l-primary hover:bg-background transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-display text-lg w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground text-sm md:text-base">{a}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">
                    Music Production
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PODCASTS */}
      {show("Podcasts") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="06" title="Podcasts" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {podcasts.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-background-elevated border-t-2 border-t-primary border border-border p-8 text-center hover:border-primary transition-all"
                >
                  <Mic className="mx-auto text-primary mb-4" size={40} />
                  <h3 className="font-display text-3xl uppercase tracking-wide text-foreground">
                    {p}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                    Full Podcast Production
                  </p>
                  <span className="inline-block mt-4 text-[10px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-3 py-1">
                    Available on Snovel
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-xs uppercase tracking-widest mt-8">
              All podcasts available on Snovel's web portal
            </p>
          </div>
        </section>
      )}

      {/* AUDIO BOOKS */}
      {show("Audio Books") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="07" title="Audio Books" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {audioBooks.map(([t, p], i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-background-elevated border border-border p-6 text-center hover:border-primary transition-all"
                >
                  <BookOpen className="mx-auto text-primary mb-3" size={32} />
                  <h3 className="font-display text-xl uppercase tracking-wide text-foreground">
                    {t}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                    {p}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-8">
              And many more audio books available across Snovel, Audible, and Storytell platforms.
            </p>
          </div>
        </section>
      )}

      {/* FILMS & PRODUCTIONS */}
      {show("Films & Productions") && (
        <section className="py-20">
          <div className="container">
            <SectionHeader num="08" title="Films & Productions" count="9 Productions" />

            {/* Recent Productions with Images */}
            <div className="mb-16">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-foreground mb-8 flex items-center gap-3">
                <span className="text-primary">▸</span> Recent Productions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filmCategories.productions.map((film, i) => (
                  <motion.div
                    key={film.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group bg-background-elevated border border-border overflow-hidden hover:border-primary transition-all"
                  >
                    <div className="relative overflow-hidden bg-background aspect-[3/4]">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-display text-sm md:text-base uppercase tracking-wide text-foreground line-clamp-2">
                        {film.title}
                      </h4>
                      <p className="text-primary text-[10px] uppercase tracking-widest mt-2">
                        {film.category}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {film.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feature Films */}
            <div className="mb-16">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-foreground mb-8 flex items-center gap-3">
                <span className="text-primary">▸</span> Feature Films
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filmCategories.featureFilms.map((film, i) => (
                  <motion.div
                    key={film.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group bg-background-elevated border border-border overflow-hidden hover:border-primary transition-all"
                  >
                    <div className="relative overflow-hidden bg-background aspect-[3/4]">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-display text-sm md:text-base uppercase tracking-wide text-foreground line-clamp-2">
                        {film.title}
                      </h4>
                      <p className="text-primary text-[10px] uppercase tracking-widest mt-2">
                        Feature Film
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        {film.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Award-Winning Short Films */}
            <div className="mb-16">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-foreground mb-8 flex items-center gap-3">
                <span className="text-primary">▸</span> Award-Winning Short Films
              </h3>
              <div className="bg-background-elevated border border-border p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filmCategories.shortFilms.map((film) => (
                    <li key={film.title} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="font-medium">{film.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm mt-6 italic">
                  And many more short films for which we are associated for their production and post-production needs
                </p>
              </div>
            </div>

            {/* Corporate Films & Clients */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-foreground mb-8 flex items-center gap-3">
                <span className="text-primary">▸</span> Corporate Films & Clients
              </h3>
              <div className="bg-background-elevated border border-border p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filmCategories.corporateClients.map((client) => (
                    <li key={client} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="font-medium text-sm">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TOTAL SUMMARY */}
      <section className="py-16 border-y border-border bg-background-elevated">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-8 gap-y-8 divide-x divide-border text-center">
            {[
              ["22", "Audio Post"],
              ["8", "Video"],
              ["12", "Corporate"],
              ["17", "Music"],
              ["10", "Short Films"],
              ["3", "Podcasts"],
              ["4", "Audio Books"],
              ["9", "Films"],
            ].map(([n, l]) => (
              <div key={l} className="px-2">
                <p className="font-display text-4xl md:text-5xl text-primary">{n}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkShowcase;
