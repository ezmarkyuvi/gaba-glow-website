import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Award, ShieldCheck, Phone, ArrowRight, Smile, Stethoscope, Sparkles, Scissors, Syringe, ScanFace, Zap, Eraser } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinic.jpg";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const highlights = [
  { icon: Star, label: "4.9 Rating", sub: "500+ Happy Patients" },
  { icon: Award, label: "Best Dental Clinic", sub: "Award Winning" },
  { icon: ShieldCheck, label: "ISO Certified", sub: "Quality Assured" },
];

const services = [
  { icon: Smile, label: "Dental Implants", desc: "Permanent tooth replacement" },
  { icon: Stethoscope, label: "Root Canal", desc: "Painless treatment" },
  { icon: Sparkles, label: "Braces & Invisalign", desc: "Smile alignment" },
  { icon: ScanFace, label: "Cosmetic Veneers", desc: "Perfect smile makeover" },
  { icon: Syringe, label: "Botox & Fillers", desc: "Anti-aging treatments" },
  { icon: Zap, label: "Laser Hair Removal", desc: "Permanent hair reduction" },
  { icon: Scissors, label: "Hair Transplant", desc: "Natural hair restoration" },
  { icon: Eraser, label: "Tattoo Removal", desc: "Advanced laser removal" },
];

const testimonials = [
  { text: "Painless experience and great results. Dr. Gaba is extremely skilled and caring.", name: "Rajesh K." },
  { text: "Highly professional doctors. The clinic is super clean and modern. Highly recommend!", name: "Priya S." },
  { text: "Best clinic for implants and braces. My smile transformation was incredible.", name: "Amit M." },
];

const beforeAfter = [
  { img: ba1, label: "Dental Implants" },
  { img: ba2, label: "Skin Treatment" },
  { img: ba3, label: "Braces Treatment" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Gaba Dental Clinic interior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="container relative z-10 py-32">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Pain-Free Dental &<br />
            <span className="text-primary">Advanced Skin</span> Treatments
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body">
            Experience world-class dental care and cosmetology at Ludhiana's most trusted clinic.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="text-base h-12 px-8 gap-2">
              <Link to="/contact">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base h-12 px-8 gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:09872622231">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-6 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="flex items-center gap-4 p-5 rounded-lg bg-card shadow-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{h.label}</p>
                <p className="text-sm text-muted-foreground">{h.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Comprehensive dental and skin care solutions under one roof.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="group p-6 rounded-xl bg-card border border-border hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{s.label}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild className="gap-2">
            <Link to="/services">View All Services <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
        >
          What Our Patients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="bg-card p-8 rounded-xl shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Before / After */}
    <section className="py-20">
      <div className="container">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
        >
          Real Results, <span className="text-primary">Real Smiles</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {beforeAfter.map((b, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="rounded-xl overflow-hidden shadow-card group"
            >
              <img src={b.img} alt={`Before and after ${b.label}`} loading="lazy" width={1024} height={512} className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-card text-center">
                <p className="font-semibold text-foreground">{b.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Strip */}
    <section className="bg-primary py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">Ready for Your Best Smile?</h2>
          <p className="text-primary-foreground/80">Book your consultation today or call us directly.</p>
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <Link to="/contact">Book Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <a href="tel:09872622231"><Phone className="w-4 h-4" /> 098726 22231</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Quick Inquiry */}
    <section className="py-20 bg-secondary">
      <div className="container max-w-xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">Quick Inquiry</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none" />
          <input type="tel" placeholder="Phone Number" className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none" />
          <select className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none">
            <option value="">Select Service</option>
            {services.map((s) => <option key={s.label} value={s.label}>{s.label}</option>)}
          </select>
          <textarea placeholder="Message (optional)" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none resize-none" />
          <Button type="submit" className="w-full h-12 text-base">Send Inquiry</Button>
        </form>
      </div>
    </section>
  </main>
);

export default Index;
