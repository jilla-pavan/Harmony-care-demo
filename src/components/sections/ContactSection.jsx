import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

import { HOSPITAL_INFO } from "../../data/mockData.js";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `Hello, I have an enquiry.%0A%0A` +
      `*Name:* ${encodeURIComponent(form.name)}%0A` +
      `*Email:* ${encodeURIComponent(form.email)}%0A%0A` +
      `*Message:* ${encodeURIComponent(form.message)}`;

    window.open(
      `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${text}`,
      "_blank",
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const CONTACT_ITEMS = [
    {
      icon: MapPin,
      title: "Visit Us",
      value: HOSPITAL_INFO.address,
    },
    {
      icon: Phone,
      title: "Call Us",
      value: HOSPITAL_INFO.phone,
      href: `tel:${HOSPITAL_INFO.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      value: HOSPITAL_INFO.email,
      href: `mailto:${HOSPITAL_INFO.email}`,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon – Sat · 8:00 AM – 8:00 PM",
    },
  ];

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
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
              border
              border-slate-200
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            Contact Us
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
            We're here whenever
            {" "}<br className="hidden sm:block" />
            you need us.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600
            "
          >
            Connect with our team for appointments, enquiries, feedback, or
            assistance with your healthcare journey.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-4"
          >
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  gap-4
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-slate-50/50
                  p-5
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:bg-white
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                  "
                >
                  <item.icon size={18} className="text-slate-700" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="
                        mt-1
                        block
                        text-sm
                        leading-7
                        text-slate-600
                        transition-colors
                        hover:text-slate-900
                      "
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                h-72
              "
            >
              <iframe
                title="Hospital Location"
                src={HOSPITAL_INFO.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              lg:col-span-8
              rounded-[32px]
              border
              border-slate-200
              bg-slate-50/40
              p-6
              md:p-8
            "
          >
            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Name
                </label>

                <div className="relative">
                  <User
                    size={16}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      py-4
                      pl-12
                      pr-4
                      text-sm
                      outline-none
                      transition
                      focus:border-slate-400
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      py-4
                      pl-12
                      pr-4
                      text-sm
                      outline-none
                      transition
                      focus:border-slate-400
                    "
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>

              <div className="relative">
                <MessageSquare
                  size={16}
                  className="
                    absolute
                    left-4
                    top-5
                    text-slate-400
                  "
                />

                <textarea
                  rows={6}
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    outline-none
                    transition
                    focus:border-slate-400
                  "
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-black
                  sm:w-auto
                "
              >
                <Send size={15} />
                Send via WhatsApp
              </button>

              <p className="mt-4 text-sm text-slate-500">
                Your message will open directly in WhatsApp for faster
                assistance.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
