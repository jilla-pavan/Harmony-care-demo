import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Stethoscope,
  Calendar,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

import { DEPARTMENTS, HOSPITAL_INFO } from "../../data/mockData.js";

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `Hello, I would like to book an appointment.%0A%0A` +
      `*Name:* ${encodeURIComponent(form.name)}%0A` +
      `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
      `*Department:* ${encodeURIComponent(form.department)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(form.date)}%0A` +
      `*Message:* ${encodeURIComponent(form.message || "N/A")}`;

    window.open(
      `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${text}`,
      "_blank",
    );
  };

  const benefits = [
    {
      title: "Quick confirmation",
      desc: "Responses within 30 minutes during working hours.",
    },
    {
      title: "Flexible scheduling",
      desc: "Choose a date that fits your routine.",
    },
    {
      title: "Priority appointments",
      desc: "Pre-booked patients experience shorter wait times.",
    },
  ];

  return (
    <section id="appointment" className="bg-slate-50/50 py-20 md:py-28">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
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
              Book an Appointment
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
              Schedule your visit
              {" "}<br className="hidden sm:block" />
              in minutes.
            </h2>

            <p
              className="
                mt-6
                text-base
                leading-8
                text-slate-600
                md:text-lg
              "
            >
              Fill out the form and our care team will connect with you through
              WhatsApp to confirm your preferred date and time.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-8">
              {benefits.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="
                      mt-2
                      h-2
                      w-2
                      flex-shrink-0
                      rounded-full
                      bg-slate-900
                    "
                  />

                  <div>
                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-slate-900
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            aria-label="Appointment booking form"
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              md:p-8
            "
          >
            <div className="grid gap-5">
              {/* Name */}
              <Field id="name" label="Full Name" icon={User}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputStyles}
                />
              </Field>

              {/* Phone */}
              <Field id="phone" label="Phone Number" icon={Phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputStyles}
                />
              </Field>

              {/* Department */}
              <Field id="department" label="Department" icon={Stethoscope}>
                <select
                  id="department"
                  name="department"
                  required
                  value={form.department}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none`}
                >
                  <option value="">Select a department</option>

                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Date */}
              <Field id="date" label="Preferred Date" icon={Calendar}>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </Field>

              {/* Message */}
              <Field
                id="message"
                label="Message (Optional)"
                icon={MessageSquare}
                textarea
              >
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms or reason for your visit."
                  className={`${inputStyles} resize-none`}
                />
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="
                  group
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-slate-800
                "
              >
                Confirm via WhatsApp
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>

              <p
                className="
                  text-center
                  text-xs
                  leading-6
                  text-slate-500
                "
              >
                You will be redirected to WhatsApp to confirm your appointment
                details.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

function Field({ id, label, icon: Icon, children, textarea = false }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-700
        "
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={16}
          className={`
            absolute left-4
            ${textarea ? "top-4" : "top-1/2 -translate-y-1/2"}
            text-slate-400
          `}
        />

        {children}
      </div>
    </div>
  );
}

const inputStyles = `
  w-full
  rounded-2xl
  border
  border-slate-200
  bg-white
  py-3.5
  pl-12
  pr-4
  text-sm
  text-slate-900
  placeholder:text-slate-400
  transition-colors
  duration-200
  focus:border-slate-900
  focus:outline-none
`;
