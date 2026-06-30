import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, ShieldCheck, ArrowRight } from "lucide-react";

import { HOSPITAL_INFO } from "../../data/mockData.js";

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Premium Minimal Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-slate-50 blur-3xl opacity-80" />
        <div className="absolute left-[-10%] bottom-[-20%] h-[320px] w-[320px] rounded-full bg-slate-100/70 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div
          className="
            grid
            items-center
            gap-12
            py-8
            lg:grid-cols-2
            lg:gap-16
            lg:min-h-[calc(100svh-160px)]
            lg:py-20
          "
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div
              className="
                mb-6
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border border-slate-200
                bg-white/80
                px-4 py-2
                text-xs
                font-medium
                text-slate-600
                shadow-sm
                backdrop-blur-sm
                sm:text-sm
              "
            >
              <ShieldCheck size={15} className="shrink-0 text-slate-900" />

              <span className="truncate">
                NABH Accredited Healthcare Excellence
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-2xl
                text-4xl
                font-bold
                tracking-[-0.04em]
                text-slate-900
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                lg:leading-[0.98]
              "
            >
              Healthcare you
              <br />
              <span className="text-slate-400">can trust.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              Compassionate, modern, and comprehensive healthcare services for
              individuals and families across Hyderabad, delivered with clinical
              excellence and genuine care.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                mt-10
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <button
                onClick={() => scrollTo("#appointment")}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-6 py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                  hover:shadow-xl
                "
              >
                <Calendar size={17} />

                <span>Book Appointment</span>

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.emergency.replace(/\s/g, "")}`}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border border-slate-200
                  bg-white
                  px-6 py-3.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:bg-slate-50
                "
              >
                <Phone size={17} />

                <span>Emergency Care</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="
                mt-12
                grid
                grid-cols-3
                gap-4
                border-t
                border-slate-100
                pt-8
                sm:gap-8
              "
            >
              {HOSPITAL_INFO.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-slate-900
                      sm:text-3xl
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-relaxed
                      text-slate-500
                      sm:text-sm
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="order-1 lg:order-2"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-slate-100
                bg-slate-50
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80"
                alt="Doctor consulting with a patient at Harmony Care Hospital"
                className="
                  h-[300px]
                  w-full
                  object-cover
                  sm:h-[420px]
                  md:h-[500px]
                  lg:h-[620px]
                "
                loading="eager"
              />

              {/* Minimal floating trust card */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-2xl
                  border border-white/50
                  bg-white/90
                  px-5 py-4
                  shadow-xl
                  backdrop-blur-md
                "
              >
                <div className="text-2xl font-bold text-slate-900">25+</div>

                <div className="text-xs text-slate-500">
                  Years of Trusted Care
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
