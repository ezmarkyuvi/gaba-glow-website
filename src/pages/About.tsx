import { motion } from "framer-motion";
import { Award, ShieldCheck, GraduationCap, Heart } from "lucide-react";
import doctorImg from "@/assets/doctor-profile.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const certs = [
  { icon: GraduationCap, label: "BDS, MDS — Oral Surgery" },
  { icon: Award, label: "Best Dental Clinic Award — Ludhiana" },
  { icon: ShieldCheck, label: "ISO 9001 Certified Clinic" },
  { icon: Heart, label: "15+ Years of Clinical Excellence" },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          About <span className="text-primary">Our Clinic</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="text-center text-muted-foreground max-w-xl mx-auto"
        >
          A legacy of excellence in dental care and cosmetology in Ludhiana since 2008.
        </motion.p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <img src={clinicImg} alt="Gaba Dental Clinic reception" loading="lazy" width={1024} height={768} className="rounded-xl shadow-elevated w-full" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gaba Dental & Skin Cosmetology Clinic was founded with a simple mission — to provide pain-free, world-class dental and skin treatments right here in Ludhiana. Over the past 15+ years, we have transformed thousands of smiles and helped patients regain their confidence.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Equipped with the latest technology including digital X-rays, laser systems, and 3D imaging, our clinic delivers results that meet international standards — all in a warm, patient-first environment.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Doctor */}
    <section className="py-20 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="order-2 md:order-1">
          <h2 className="text-3xl font-heading font-bold mb-2">Dr. Mausam A. Gaba</h2>
          <p className="text-primary font-semibold mb-6">Founder & Lead Surgeon</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With over 15 years of experience in oral surgery, implantology, and cosmetic dentistry, Dr. Gaba is one of Ludhiana's most trusted dental professionals. His gentle approach and precision techniques ensure every patient receives comfortable, painless care.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dr. Gaba regularly attends international dental conferences and stays at the forefront of innovations in implant dentistry and aesthetic treatments.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="order-1 md:order-2">
          <img src={doctorImg} alt="Dr. Mausam A. Gaba" loading="lazy" width={800} height={1024} className="rounded-xl shadow-elevated w-full max-w-sm mx-auto" />
        </motion.div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Certifications & Awards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
