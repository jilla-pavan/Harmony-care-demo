import React from "react";
import { motion } from "framer-motion";
import { Clock, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";

import { DOCTORS } from "../../data/mockData.js";

export default function DoctorsSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="doctors" className="bg-slate-50/50 py-16 md:py-20 lg:py-28">
      <div className="container-custom max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 md:mb-16 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              py-2
              text-[11px]
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
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              md:text-4xl
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
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              md:text-lg
              md:leading-8
            "
          >
            Our physicians combine decades of experience, advanced medical
            expertise, and compassionate patient care to deliver exceptional
            outcomes.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-300
                hover:shadow-xl
                hover:shadow-slate-200/50
              "
            >
              {/* Image */}
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.specialty}`}
                  loading="lazy"
                  className="
                    h-64
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    sm:h-72
                    lg:h-80
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    text-slate-900
                    md:text-xl
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
                    mt-5
                    space-y-3
                    border-t
                    border-slate-100
                    pt-5
                  "
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <GraduationCap
                      size={16}
                      className="mt-1 flex-shrink-0 text-slate-400"
                    />

                    <span className="min-w-0 break-words text-sm leading-6 text-slate-600">
                      {doctor.qualifications}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="flex-shrink-0 text-slate-400" />

                    <span className="text-sm text-slate-600">
                      {doctor.experience} Experience
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar
                      size={16}
                      className="flex-shrink-0 text-slate-400"
                    />

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
                    mt-auto
                    pt-6
                  "
                >
                  <span
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      px-5
                      py-3.5
                      text-sm
                      font-medium
                      text-slate-700
                      transition-all
                      duration-300
                      hover:border-slate-900
                      hover:bg-slate-900
                      hover:text-white
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
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
