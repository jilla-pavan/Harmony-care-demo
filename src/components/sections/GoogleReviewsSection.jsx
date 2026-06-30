import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

export default function GoogleReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-col
            gap-8
            rounded-[32px]
            border
            border-slate-200
            bg-slate-50/50
            p-8
            md:flex-row
            md:items-center
            md:justify-between
            md:p-10
          "
        >
          {/* Left */}
          <div className="flex items-start gap-5">
            <div
              className="
                flex
                h-14
                w-14
                flex-shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
              "
            >
              <span
                className="
                  text-lg
                  font-bold
                  text-slate-900
                "
              >
                G
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="
                        fill-slate-900
                        text-slate-900
                      "
                  />
                ))}

                <span
                  className="
                    ml-2
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  4.8 / 5
                </span>
              </div>

              <h3
                className="
                  mt-3
                  text-xl
                  font-semibold
                  tracking-tight
                  text-slate-900
                "
              >
                Trusted by thousands of patients.
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-7
                  text-slate-600
                "
              >
                Based on 2,400+ verified Google reviews from patients and
                families across Hyderabad.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://www.google.com/search?q=harmony+care+multispeciality+hospital+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              self-start
              rounded-full
              border
              border-slate-200
              bg-white
              px-6
              py-3
              text-sm
              font-medium
              text-slate-700
              transition-all
              duration-300
              hover:border-slate-300
              hover:bg-slate-900
              hover:text-white
              md:self-auto
            "
          >
            View Google Reviews
            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
