import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { TESTIMONIALS } from "../../data/mockData.js";

const testimonials = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-slate-50/50 py-20 md:py-28"
    >
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
            Patient Stories
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
            Trusted by families
            <br className="hidden sm:block" />
            across Hyderabad.
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
            Real experiences from patients who placed their trust in our doctors
            and care teams.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative overflow-hidden">
        <div className="testimonial-track">
          {testimonials.map((item, index) => (
            <article key={`${item.id}-${index}`} className="testimonial-card">
              {/* Rating */}
              <div
                className="mb-5 flex gap-1"
                aria-label={`${item.rating} stars`}
              >
                {Array.from({
                  length: item.rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-slate-900 text-slate-900"
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="
                  flex-1
                  text-sm
                  leading-7
                  text-slate-700
                "
              >
                "{item.text}"
              </p>

              {/* Footer */}
              <div
                className="
                  mt-8
                  border-t
                  border-slate-100
                  pt-5
                "
              >
                <h4
                  className="
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  {item.name}
                </h4>

                <p className="mt-1 text-xs text-slate-500">{item.location}</p>

                <p
                  className="
                    mt-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-700
                  "
                >
                  {item.treatment}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
