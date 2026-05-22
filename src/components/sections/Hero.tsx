import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="
          absolute
          -top-10
          left-0
          w-full
          h-[115%]
          bg-cover
          bg-top
          md:bg-center
          bg-no-repeat
          scale-150
          md:scale-100
        "
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">

        {/* Logo Image */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src={logo}
          alt="Media Works Studio"
          className="
            w-[260px]
            sm:w-[340px]
            md:w-[500px]
            object-contain
            mb-8
          "
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Link
            to="/work"
            className="
              bg-[#d88345]
              text-black
              uppercase
              tracking-[0.25em]
              text-[11px]
              font-semibold
              px-8
              py-3
              hover:opacity-90
              transition
            "
          >
            View Our Work
          </Link>

          <Link
            to="/contact"
            className="
              border
              border-white
              text-white
              uppercase
              tracking-[0.25em]
              text-[11px]
              font-semibold
              px-8
              py-3
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Explore */}
        <Link
          to="/about"
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            text-[#d88345]
          "
        >
          <span className="text-[10px] uppercase tracking-[0.4em] mb-2">
            Explore
          </span>

          <ArrowDown
            size={14}
            className="animate-bounce"
          />
        </Link>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;