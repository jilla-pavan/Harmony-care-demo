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
    <section id="why-us" className="bg-slate-50/50 py-20 md:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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
            Why Patients Trust Us
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
            A standard of care
            <br className="hidden sm:block" />
            you can rely on.
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
            We combine clinical excellence with compassionate care to create
            healthcare experiences that place patients and families at the
            center of everything we do.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICONS[item.icon];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
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
                  hover:-translate-y-1
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
                    text-lg
                    font-semibold
                    tracking-tight
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
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
