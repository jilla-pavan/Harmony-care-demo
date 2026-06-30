import React from "react";
import { motion } from "framer-motion";
import { Clock, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";

import { DOCTORS } from "../../data/mockData.js";

export default function DoctorsSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="doctors" className="bg-slate-50/50 py-20 md:py-28">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border border-slate-200
              px-4 py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            Meet Our Specialists
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Experts dedicated
            <br className="hidden sm:block" />
            to your wellbeing.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              md:text-lg
            "
          >
            Our physicians combine decades of experience, advanced medical
            expertise, and compassionate patient care to deliver exceptional
            outcomes.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {DOCTORS.map((doctor, index) => (
            <motion.article
              key={doctor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:border-slate-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty}`}
                  loading="lazy"
                  className="
                    aspect-[4/3]
                    w-full
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                    text-slate-900
                  "
                >
                  {doctor.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    font-medium
                    text-slate-500
                  "
                >
                  {doctor.specialty}
                </p>

                {/* Information */}
                <div
                  className="
                    mt-6
                    space-y-3
                    border-t
                    border-slate-100
                    pt-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      size={16}
                      className="
                        mt-0.5
                        flex-shrink-0
                        text-slate-400
                      "
                    />

                    <span
                      className="
                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >
                      {doctor.qualifications}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-slate-400" />

                    <span className="text-sm text-slate-600">
                      {doctor.experience} Experience
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-slate-400" />

                    <span className="text-sm text-slate-600">
                      {doctor.timings}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo("#appointment")}
                  className="
                    group/button
                    mt-8
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-slate-200
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-slate-700
                    transition-all
                    duration-300
                    hover:bg-slate-900
                    hover:text-white
                    hover:border-slate-900
                  "
                >
                  Book Appointment
                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-0.5
                      group-hover/button:-translate-y-0.5
                    "
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
