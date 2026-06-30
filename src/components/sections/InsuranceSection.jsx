import React from "react";
import { motion } from "framer-motion";

import { INSURANCE_PARTNERS } from "../../data/mockData.js";

export default function InsuranceSection() {
  return (
    <section id="insurance" className="bg-slate-50/50 py-20 md:py-28">
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
            Insurance Partners
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
            Cashless treatment,
            {" "}<br className="hidden sm:block" />
            hassle-free claims.
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
            We are empanelled with leading insurance providers to ensure a
            seamless and convenient treatment experience for every patient.
          </p>
        </motion.div>

        {/* Insurance Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >
          {INSURANCE_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              whileHover={{ y: -2 }}
              className="
                flex
                min-h-[88px]
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-6
                text-center
                transition-colors
                duration-300
                hover:border-slate-300
              "
            >
              <span
                className="
                  text-sm
                  font-medium
                  leading-6
                  text-slate-700
                "
              >
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
