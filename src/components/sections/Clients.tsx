import { memo } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "AppDirect",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jtQyYy87pevG7tny4mjHWSqtiTL2EX.png",
  },
  {
    name: "FinOlex Pipes",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lCknjauIszgjMVCRbwpzowo0YANGlQ.png",
  },
  {
    name: "Rhyfil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B8HFCGTzYLk6fz6bTZHUyf0sewuX9T.png",
  },
  {
    name: "Symbiosis International University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rLktMDT5dOvqThWqCMw5rpsyMkSOwe.png",
  },
  {
    name: "Maharashtra Shasan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-15CBI9ldBNNdQRyEmsC264fMj8a1Kz.png",
  },
  {
    name: "Maharashtra Tourism",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GoQL3WgC21oFStbcq2LrSYMUgfpv1Y.png",
  },
  {
    name: "Nashik Municipal Corporation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QQMLgmPw0058wE7otqxqXzqbqtUyt8.png",
  },
  {
    name: "Teradata",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2YW795FMyO0FS55mNDB2oLJvV2Ig1p.png",
  },
  {
    name: "Planet Marathi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a1YKFFSJOxJLY2Pv48TwPRBSwSZrTY.png",
  },
  {
    name: "Symbiosis SSOU",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KPdb3OMaa8gciRWEbVqejh8hPt6xhn.png",
  },
  {
    name: "Election Commission",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xTifiS5UlDKR1WDQ4ZYJK2GnFCKSRz.png",
  },
  {
    name: "Audible",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fBRJJnfhUh5KcnkoISeHuZuqYM7Mh8.png",
  },
  {
    name: "Zee Music Co. Marathi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gGXcYNQMUpVGXgtvE10bI54DBM2Dlq.png",
  },
];

const Clients = memo(() => {
  return (
    <section className="relative py-16 md:py-20 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-20 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-6 font-medium">
            ▸ Trusted By Industry Leaders
          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Our <span className="text-primary">Clients</span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 mt-5 leading-relaxed px-4">
            Proudly partnering with top brands, studios, and organizations across India and beyond
          </p>
        </motion.div>

        {/* Main Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 sm:p-8 md:p-12 backdrop-blur-sm"
        >

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">

            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

                {/* Card */}
                <div
                  className="
                    relative
                    bg-[#111111]
                    border
                    border-white/10
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    transition-all
                    duration-500
                    hover:border-primary/40
                    hover:bg-[#181818]

                    /* MOBILE HEIGHT */
                    h-[140px]

                    /* TABLET */
                    sm:h-[180px]

                    /* DESKTOP */
                    md:h-[210px]
                  "
                >

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* LOGO */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="
                      relative
                      z-10
                      object-contain
                      transition-all
                      duration-500
                      group-hover:scale-110

                      /* MOBILE BIGGER IMAGE */
                      max-w-[78%]
                      max-h-[78%]

                      /* TABLET */
                      sm:max-w-[70%]
                      sm:max-h-[70%]

                      /* DESKTOP */
                      md:max-w-[65%]
                      md:max-h-[65%]
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            And many more prestigious brands
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary text-xs">★</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Clients.displayName = "Clients";

export default Clients;
