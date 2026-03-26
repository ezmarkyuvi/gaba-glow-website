import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => (
  <main className="pt-20">
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          Contact <span className="text-primary">Us</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
          className="text-center text-muted-foreground max-w-xl mx-auto"
        >
          Ready to transform your smile? Get in touch with us today.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="text-2xl font-heading font-bold mb-6">Book an Appointment</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none" />
            <input type="email" placeholder="Email Address" className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none" />
            <select className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none">
              <option value="">Select Service</option>
              <option>Dental Implants</option>
              <option>Root Canal</option>
              <option>Braces & Invisalign</option>
              <option>Cosmetic Dentistry</option>
              <option>Botox & Fillers</option>
              <option>Laser Hair Removal</option>
              <option>Hair Transplant</option>
              <option>Tattoo Removal</option>
            </select>
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none resize-none" />
            <Button type="submit" className="w-full h-12 text-base">Send Message</Button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground text-sm">Model Town, Ludhiana, Punjab, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href="tel:09872622231" className="text-primary text-sm font-medium">098726 22231</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Working Hours</p>
                <p className="text-muted-foreground text-sm">Mon – Sat: 10:00 AM – 7:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">WhatsApp</p>
                <a href="https://wa.me/919872622231" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium">Chat with us</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-card">
            <iframe
              title="Gaba Dental Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.0!2d75.8573!3d30.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAwLjAiTiA3NcKwNTEnMjYuMyJF!5e0!3m2!1sen!2sin!4v1600000000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Contact;
