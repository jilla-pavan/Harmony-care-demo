import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Microscope, Heart } from "lucide-react";

import { WHY_CHOOSE_US } from "../../data/mockData.js";

const ICONS = {
  Award,
  Users,
  Clock,
  Shield,
  Microscope,
  Heart,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-50 py-16 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl opacity-70" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl opacity-50" />

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
              bg-white/80
              px-4 py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-500
              backdrop-blur-sm
            "
          >
            Why Patients Trust Us
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A standard of care
            <br className="hidden sm:block" />
            you can rely on.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            We combine clinical excellence with compassionate care to create
            healthcare experiences that place patients and families at the
            center of everything we do.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICONS[item.icon];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/80
                  bg-white/90
                  p-7
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:shadow-xl
                  hover:shadow-slate-200/60
                "
              >
                {/* Top Accent */}
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
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
