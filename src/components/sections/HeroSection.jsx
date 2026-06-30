import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, ShieldCheck } from "lucide-react";

import { HOSPITAL_INFO } from "../../data/mockData.js";

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        bg-white
      "
    >
      {/* Subtle background accent */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-slate-50
          blur-3xl
          opacity-70
        "
      />

      <div className="container-custom relative">
        <div
          className="
            grid
            min-h-[calc(100vh-140px)]
            items-center
            gap-14
            py-16
            lg:grid-cols-2
            lg:py-24
          "
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                px-4
                py-2
                text-sm
                font-medium
                text-slate-600
              "
            >
              <ShieldCheck size={16} className="text-slate-900" />

              <span>NABH Accredited Healthcare Excellence</span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
                lg:leading-[1.05]
              "
            >
              Healthcare you
              <br />
              <span className="text-slate-500">can trust.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Compassionate, modern, and comprehensive healthcare services for
              individuals and families across Hyderabad.
            </p>

            {/* Actions */}
            <div
              className="
                mt-10
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <button
                onClick={() => scrollTo("#appointment")}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-slate-800
                "
              >
                <Calendar size={18} />
                Book Appointment
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.emergency.replace(/\s/g, "")}`}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-slate-50
                "
              >
                <Phone size={18} />
                Emergency Care
              </a>
            </div>

            {/* Statistics */}
            <div
              className="
                mt-14
                grid
                grid-cols-3
                gap-6
                border-t
                border-slate-100
                pt-8
              "
            >
              {HOSPITAL_INFO.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div
                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                        md:text-3xl
                      "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                        mt-1
                        text-xs
                        leading-relaxed
                        text-slate-500
                        md:text-sm
                      "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-100
                bg-slate-50
              "
            >
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80"
                alt="Doctor consulting with a patient at Harmony Care Hospital"
                className="
                  h-[340px]
                  w-full
                  object-cover
                  sm:h-[420px]
                  lg:h-[620px]
                "
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
