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
    <section id="departments" className="bg-white py-20 md:py-28">
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
            Our Specialties
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
            Comprehensive care
            <br className="hidden sm:block" />
            across every stage of life.
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
            From preventive health checkups to advanced treatments, our
            multidisciplinary teams deliver exceptional care across every
            medical specialty.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {DEPARTMENTS.map((dept, index) => {
            const Icon = ICONS[dept.icon];

            return (
              <motion.article
                key={dept.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: (index % 5) * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="
                  group
                  flex
                  min-h-[260px]
                  flex-col
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:border-slate-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-100
                    transition-colors
                    group-hover:bg-slate-900
                  "
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="
                      text-slate-700
                      transition-colors
                      group-hover:text-white
                    "
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3
                  className="
                    text-base
                    font-semibold
                    tracking-tight
                    text-slate-900
                  "
                >
                  {dept.name}
                </h3>

                <p
                  className="
                    mt-3
                    flex-1
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {dept.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
