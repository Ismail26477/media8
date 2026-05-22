import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Aditya Deshmukh",
    position: "Founder Director",
    bio: "With over 12 years of experience in the audio and video production industry, Aditya leads Media Works Studio with a strong vision for creativity, innovation, and professional excellence.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PG7TQHfSFeOttKngxOEstuyMlEifow.png",
  },
  {
    id: 2,
    name: "Mangesh Borgaonkar",
    position: "Co-Founder",
    bio: "Mangesh plays an important role in the growth and strategic development of Media Works Studio, contributing to business operations and creative planning.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YhIeujUBvF5I0Ckf8kwoZ0H66mNbob.png",
  },
  {
    id: 3,
    name: "Prasad Pawar",
    position: "Re-Recording Engineer",
    bio: "Prasad specializes in audio balancing, sound enhancement, and final sound mixing with technical precision and attention to detail.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2zsG9XWRrawAFjZRtaHPipDpLsMqHN.png",
  },
  {
    id: 4,
    name: "Mayur Satpute",
    position: "Editor & Colour Artist",
    bio: "Mayur brings stories to life through creative editing and cinematic colour grading, creating visually impactful content.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-21%20at%201.42.11%20PM-bMPXK25XE0fMFnU5VeUai700uuahRv.jpeg",
  },
  {
    id: 5,
    name: "Sumit Patil",
    position: "Recording Engineer",
    bio: "Sumit delivers high-quality audio recordings with clarity and precision, ensuring professional audio production across all media projects.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2HiqlvIYlHG5D8o1ZevFtYVOZPsTgl.png",
  },
  {
    id: 6,
    name: "Shrinivas Lange",
    position: "Foley Artist",
    bio: "Shrinivas specializes in creating realistic sound effects that add depth and authenticity to visual storytelling.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCBOHz9b5XKj85nXOVxwqZkTF4FGIx.png",
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary uppercase tracking-[4px] text-sm font-semibold mb-5">
            ▸ Our Team
          </p>

          {/* Increased Heading Size */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Meet The Creative
            <br />
            <span className="text-primary">
              Minds Behind Our Success
            </span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-[#111111] border border-white/10 rounded-2xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                
                {/* Image */}
                <div className="h-[360px] overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      {member.name}
                    </h3>

                    <p className="text-sm text-primary font-semibold mt-1">
                      {member.position}
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;