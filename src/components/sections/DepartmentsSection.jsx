import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Baby,
  Heart,
  Bone,
  HeartPulse,
  Sparkles,
  SmilePlus,
  Activity,
  FlaskConical,
  Siren,
  ArrowRight,
} from "lucide-react";

import { DEPARTMENTS } from "../../data/mockData.js";

const ICONS = {
  Stethoscope,
  Baby,
  Heart,
  Bone,
  HeartPulse,
  Sparkles,
  SmilePlus,
  Activity,
  FlaskConical,
  Siren,
};

export default function DepartmentsSection() {
  return (
    <section
      id="departments"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-slate-100 blur-3xl opacity-60" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-50 blur-3xl opacity-80" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border border-slate-200
              bg-white
              px-4 py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            Our Specialties
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Comprehensive care
            <br className="hidden sm:block" />
            across every stage of life.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            From preventive health checkups to advanced treatments, our
            multidisciplinary teams deliver exceptional care across every
            medical specialty.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DEPARTMENTS.map((dept, index) => {
            const Icon = ICONS[dept.icon];

            return (
              <motion.article
                key={dept.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.06,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[270px]
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:shadow-xl
                  hover:shadow-slate-200/60
                "
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-slate-900 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-100
                    transition-all
                    duration-300
                    group-hover:bg-slate-900
                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="
                      text-slate-700
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {dept.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {dept.desc}
                </p>

                {/* Learn More */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-500
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  Learn more
                  <ArrowRight size={14} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
