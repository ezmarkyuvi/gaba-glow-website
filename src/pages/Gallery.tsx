import { motion } from "framer-motion";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import heroImg from "@/assets/hero-clinic.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const results = [
  { img: ba1, label: "Dental Implant — Before & After" },
  { img: ba2, label: "Skin Treatment — Before & After" },
  { img: ba3, label: "Braces — Before & After" },
];

const clinicImages = [
  { img: heroImg, label: "Treatment Room" },
  { img: clinicImg, label: "Reception & Waiting Area" },
];

const Gallery = () => (
  <main className="pt-20">
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          Our <span className="text-primary">Gallery</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="text-center text-muted-foreground max-w-xl mx-auto"
        >
          See real results from our patients and explore our world-class facilities.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Before & After Results</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {results.map((r, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="rounded-xl overflow-hidden shadow-card group"
            >
              <img src={r.img} alt={r.label} loading="lazy" width={1024} height={512} className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-card"><p className="text-sm font-semibold text-foreground">{r.label}</p></div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Our Clinic</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {clinicImages.map((c, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="rounded-xl overflow-hidden shadow-card group"
            >
              <img src={c.img} alt={c.label} loading="lazy" width={1024} height={768} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-card"><p className="text-sm font-semibold text-foreground">{c.label}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Gallery;
