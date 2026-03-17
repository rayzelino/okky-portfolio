import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import FloatingMenu from "@/components/FloatingMenu";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <FloatingMenu />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Left */}
          <motion.div {...fadeUp} className="flex flex-col gap-8 py-4">
            <h1 className="text-foreground font-semibold text-3xl md:text-4xl">
              For business enquiry
            </h1>

            <div className="flex flex-col gap-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail size={18} strokeWidth={1.5} />
                <span>hello@portfolio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.5} />
                <span>+1 (555) 000-0000</span>
              </div>
            </div>

            <motion.a
              href="https://wa.me/15550000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-fit bg-foreground text-background px-8 py-4 rounded-xl font-medium text-sm tracking-wide"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="rounded-[24px] p-8 md:p-10"
            style={{ 
              backgroundColor: "rgba(255,255,255,0.03)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" 
            }}
          >
            <h2 className="text-foreground font-semibold text-xl mb-8">Prefer forms?</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {(["name", "email", "message"] as const).map((field) => (
                <div key={field}>
                  <label className="text-muted-foreground text-xs font-medium tracking-wide uppercase mb-2 block">
                    {field}
                  </label>
                  {field === "message" ? (
                    <textarea
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      rows={4}
                      className="w-full bg-transparent border-b border-input focus:border-foreground transition-colors py-3 outline-none text-foreground resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-transparent border-b border-input focus:border-foreground transition-colors py-3 outline-none text-foreground"
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 bg-foreground text-background px-8 py-4 rounded-xl font-medium text-sm tracking-wide w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
