import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  ScanLine,
  Pill,
  Truck,
  Scissors,
  BedDouble,
} from "lucide-react";

import { FACILITIES } from "../../data/mockData.js";

const ICONS = {
  Monitor,
  ScanLine,
  Pill,
  Truck,
  Scissors,
  BedDouble,
};

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-white py-20 md:py-28">
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
            Facilities & Infrastructure
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
            Modern infrastructure
            {" "}<br className="hidden sm:block" />
            designed for better outcomes.
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
            Advanced medical technology, patient-first spaces, and efficient
            healthcare systems that support accurate diagnosis and exceptional
            care.
          </p>
        </motion.div>

        {/* Facilities */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {FACILITIES.map((facility, index) => {
            const Icon = ICONS[facility.icon];

            return (
              <motion.article
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:border-slate-300
                "
              >
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
                    className="
                      text-slate-700
                      transition-colors
                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    text-slate-900
                  "
                >
                  {facility.name}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {facility.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
