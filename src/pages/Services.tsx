import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Stethoscope, Sparkles, ScanFace, Syringe, Zap, Scissors, Eraser, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const serviceData = [
  {
    icon: Smile, label: "Dental Implants", category: "Dental",
    desc: "Permanent titanium implants that look, feel, and function like natural teeth. Our advanced 3D-guided surgery ensures precise placement with minimal discomfort and faster healing.",
  },
  {
    icon: Stethoscope, label: "Root Canal Treatment", category: "Dental",
    desc: "Save your natural tooth with our painless root canal procedure. Using rotary endodontics and digital apex locators, we complete most treatments in a single visit.",
  },
  {
    icon: Sparkles, label: "Braces & Invisalign", category: "Dental",
    desc: "Achieve a perfectly aligned smile with traditional metal braces, ceramic braces, or virtually invisible Invisalign clear aligners — tailored to your lifestyle.",
  },
  {
    icon: ScanFace, label: "Cosmetic Dentistry", category: "Dental",
    desc: "Transform your smile with porcelain veneers, teeth whitening, and smile makeovers. We design your perfect smile using digital smile design technology.",
  },
  {
    icon: Syringe, label: "Botox & Dermal Fillers", category: "Skin",
    desc: "Turn back the clock with medical-grade Botox and hyaluronic acid fillers. Reduce wrinkles, restore volume, and achieve a naturally youthful appearance.",
  },
  {
    icon: Zap, label: "Laser Hair Removal", category: "Skin",
    desc: "Permanent hair reduction using FDA-approved diode laser technology. Safe for all skin types with minimal discomfort and lasting results.",
  },
  {
    icon: Scissors, label: "Hair Transplant", category: "Hair",
    desc: "Natural-looking hair restoration using advanced FUE technique. Minimally invasive with virtually no scarring and permanent results.",
  },
  {
    icon: Eraser, label: "Tattoo Removal", category: "Skin",
    desc: "Safe and effective tattoo removal using Q-switched Nd:YAG laser. Works on all ink colors with gradual fading over multiple sessions.",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-center text-muted-foreground max-w-xl mx-auto"
          >
            Comprehensive dental, skin, and hair treatments using the latest technology.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {serviceData.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="border border-border rounded-xl overflow-hidden bg-card shadow-card"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{s.label}</h3>
                    <span className="text-xs text-primary font-medium">{s.category}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
