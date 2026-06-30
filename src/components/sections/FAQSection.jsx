import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { FAQS } from "../../data/mockData.js";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50/50 py-20 md:py-28">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
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
            Frequently Asked Questions
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
            Answers to common
            <br className="hidden sm:block" />
            patient questions.
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
            Everything you need to know about our services, appointments,
            insurance coverage, and patient care processes.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  transition-colors
                  duration-300
                  hover:border-slate-300
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-6
                    text-left
                    focus:outline-none
                  "
                >
                  <span
                    className="
                      text-base
                      font-medium
                      leading-7
                      text-slate-900
                    "
                  >
                    {faq.q}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-100
                      transition-colors
                    "
                  >
                    {isOpen ? (
                      <Minus size={16} className="text-slate-700" />
                    ) : (
                      <Plus size={16} className="text-slate-700" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          border-t
                          border-slate-100
                          px-6
                          py-6
                        "
                      >
                        <p
                          className="
                            text-sm
                            leading-8
                            text-slate-600
                          "
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
