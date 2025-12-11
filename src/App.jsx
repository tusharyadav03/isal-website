import { useState } from "react";
import { motion } from "framer-motion";

import photo1 from "./assets/1.jpg";
import photo2 from "./assets/2.jpg";
import photo3 from "./assets/3.jpg";
import photo4 from "./assets/4.jpg";
import photo5 from "./assets/1.jpg";
import photo6 from "./assets/2.jpg";

const members = [
  {
    name: "Pratyush Dikshit",
    position: "President",
    contact: "+352 XXXX",
    photo: photo1,
    details:
      "Pratyush leads ISAL, manages events, and represents Indian students across Luxembourg.",
  },
  {
    name: "Jeffreen",
    position: "Vice President",
    contact: "+352 XXXX",
    photo: photo2,
    details:
      "Jeffreen coordinates cultural activities and student support initiatives.",
  },
  {
    name: "Pooja Adhav",
    position: "Treasurer",
    contact: "+352 XXXX",
    photo: photo3,
    details:
      "Pooja handles finances, budgets, and organisational transparency.",
  },
  {
    name: "Sandreya",
    position: "Secretary",
    contact: "+352 XXXX",
    photo: photo4,
    details:
      "Sandreya supports communication, documentation and smooth day-to-day functioning of ISAL.",
  },
  {
    name: "Tushar Yadav",
    position: "Event Manager / Tech",
    contact: "+352 XXXX",
    photo: photo5,
    details:
      "Tushar drives event planning and manages the technical side of ISAL initiatives and platforms.",
  },
  {
    name: "Kriti",
    position: "Event Manager",
    contact: "+352 XXXX",
    photo: photo6,
    details:
      "Kriti helps design and execute memorable events for the Indian student community.",
  },
];

const pastEvents = [
  {
    title: "Diwali Night 2024",
    desc: "A glowing cultural celebration.",
    img: "https://i.natgeofe.com/n/7e33fdf8-c549-4cc6-99c2-a66bf6cad079/GettyImages-1778646120.jpg",
  },
  {
    title: "Holi Festival 2024",
    desc: "Colours, joy, and community.",
    img: "https://images.squarespace-cdn.com/content/v1/61782ecbf6567d12f08ba3b9/1647524339004-CU4RMQZ5B4BW66JYB1D7/pexels-nishant-das-3906333.jpg",
  },
];

const upcoming = [
  {
    title: "Welcome Party 2025",
    desc: "New beginnings and new faces.",
    date: "Feb 2025",
  },
  {
    title: "Indian Food Festival",
    desc: "Taste the essence of home.",
    date: "Apr 2025",
  },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-950 text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md z-50 px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-400">ISAL</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {["home", "about", "past", "upcoming", "members", "contact"].map(
            (sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className="hover:text-yellow-400 transition text-sm md:text-base"
              >
                {sec.toUpperCase()}
              </a>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-yellow-400 text-2xl"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-14 right-4 bg-black/90 backdrop-blur-lg p-4 rounded-xl flex flex-col space-y-3 md:hidden">
            {["home", "about", "past", "upcoming", "members", "contact"].map(
              (sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-yellow-400 transition text-base"
                >
                  {sec.toUpperCase()}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background Slideshow */}
        <div className="absolute inset-0 slideshow bg-cover bg-center bg-no-repeat" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Animated Text */}
        <motion.div
          className="relative z-10 px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-yellow-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Indian Students Association Luxembourg
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            A vibrant home for every Indian soul in Luxembourg.
          </motion.p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-6 sm:mb-8"
        >
          About ISAL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-300 text-center text-base sm:text-lg"
        >
          ISAL fosters community, culture, and collaboration. We celebrate
          festivals, help new students adapt, and build a united Indian student
          family in Luxembourg.
        </motion.p>
      </section>

      {/* PAST EVENTS */}
      <section id="past" className="py-14 sm:py-20 bg-[#0d1117]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Past Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
          {pastEvents.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-[#141b23] border border-white/10"
            >
              <img
                src={e.img}
                className="w-full h-48 sm:h-56 object-cover"
                alt={e.title}
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {e.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section id="upcoming" className="py-14 sm:py-20 bg-[#0d1117]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
          {upcoming.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="p-5 sm:p-6 bg-[#141b23] border border-white/10 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300">
                {e.title}
              </h3>
              <p className="text-gray-300 mt-2 mb-1 text-sm sm:text-base">
                {e.desc}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">Date: {e.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MEMBERS */}
      <section id="members" className="py-14 sm:py-20 bg-[#0d1117]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ISAL Members
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative bg-[#141b23] border border-white/10 rounded-2xl p-6 text-center shadow-lg cursor-pointer group overflow-hidden"
            >
              {/* Profile Image */}
              <img
                src={m.photo}
                alt={m.name}
                className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover border-2 border-yellow-400 group-hover:scale-110 transition-transform duration-300"
              />

              {/* Name & Position */}
              <h3 className="text-lg sm:text-xl font-bold text-white mt-4">
                {m.name}
              </h3>
              <p className="text-yellow-300 text-sm sm:text-base">
                {m.position}
              </p>

              {/* Hover / Tap Full Details */}
              <div className="absolute inset-0 bg-black/90 text-white p-5 flex flex-col justify-center items-center text-center rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-400">
                  {m.name}
                </h3>
                <p className="text-yellow-300 mb-2 text-sm sm:text-base">
                  {m.position}
                </p>
                <p className="text-gray-300 mb-3 text-sm sm:text-base">
                  {m.details}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Contact: {m.contact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 sm:py-20 bg-[#0d1117]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300"
          >
            {/* Email */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:isal@uni.lu"
                className="text-yellow-400 hover:underline break-all"
              >
                isal@uni.lu
              </a>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/isal_lux/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:underline"
              >
                @isal_lux
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/isal-i-703b95388"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:underline"
              >
                ISAL Indian Students Association Luxembourg
              </a>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
          >
            <iframe
              title="ISAL Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.803126666081!2d5.946767576199186!3d49.504183971426976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f0356c15d87%3A0xd5ce92bbd6c6f20a!2sUniversity%20of%20Luxembourg!5e1!3m2!1sen!2slu!4v1765425709889!5m2!1sen!2slu"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:h-[300px] md:h-[350px]"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-xs sm:text-sm px-2">
        © 2025 ISAL. Crafted with passion.
      </footer>
    </div>
  );
}
