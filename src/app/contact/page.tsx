"use client";

import { motion } from "framer-motion";
import BackButton from "../BackButton";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 text-white flex items-center justify-center"
    >
     <div className="fixed top-6 left-6 z-50">
  <BackButton />
</div>
      <div className="w-full max-w-5xl">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold heading-font">
            Get In Touch
          </h1>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Have a project idea, freelance work, or collaboration in mind?
            I’m always open to discussing new opportunities.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <h2 className="text-xl font-semibold mb-6">Send Message</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
              />

              <textarea
                placeholder="Your Message"
                className="p-3 rounded-lg bg-black/30 border border-white/10 outline-none focus:border-cyan-400 h-32 resize-none"
              />

              <button
                className="mt-2 bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <h3 className="text-cyan-400 font-semibold">Email</h3>
              <p className="text-white/70 mt-2">ambekarshraddha21@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <h3 className="text-cyan-400 font-semibold">Location</h3>
              <p className="text-white/70 mt-2">Kolhapur, Maharashtra, India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <h3 className="text-cyan-400 font-semibold">Availability</h3>
              <p className="text-white/70 mt-2">
                Freelance and Full-time work Open
              </p>
            </motion.div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/ShraddhaAmbekar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shraddha-ambekar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com/shraddha_ambekar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
              >
                Twitter
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
