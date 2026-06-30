import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

import { BLOG_POSTS } from "../../data/mockData.js";

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 md:py-28">
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
            Health Journal
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
            Insights from
            {" "}<br className="hidden sm:block" />
            our medical experts.
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
            Evidence-based guidance, preventive care advice, and practical
            health tips curated by our specialists.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
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
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:border-slate-300
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="
                    aspect-[3/2]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div className="flex h-full flex-col p-6">
                {/* Category */}
                <span
                  className="
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-slate-200
                    px-3
                    py-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                  "
                >
                  {post.category}
                </span>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    leading-snug
                    tracking-tight
                    text-slate-900
                  "
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    flex-1
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-5
                    border-t
                    border-slate-100
                    pt-5
                    text-xs
                    text-slate-500
                  "
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-700
                    transition-colors
                    group-hover:text-slate-900
                  "
                >
                  Read article
                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
