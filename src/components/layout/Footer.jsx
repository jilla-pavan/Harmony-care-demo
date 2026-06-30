import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

import { HOSPITAL_INFO, DEPARTMENTS } from "../../data/mockData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const SOCIALS = [
    {
      icon: Facebook,
      href: HOSPITAL_INFO.socials.facebook,
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: HOSPITAL_INFO.socials.instagram,
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: HOSPITAL_INFO.socials.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: HOSPITAL_INFO.socials.youtube,
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400" role="contentinfo">
      <div className="container-custom py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900
                "
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <rect
                    x="13"
                    y="4"
                    width="6"
                    height="24"
                    rx="3"
                    fill="white"
                  />
                  <rect
                    x="4"
                    y="13"
                    width="24"
                    height="6"
                    rx="3"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Harmony Care
                </h3>

                <p className="text-sm text-slate-500">
                  Multispeciality Hospital
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Delivering compassionate, modern, and patient-first healthcare
              services for families across Hyderabad.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-800
                      bg-slate-900
                      transition-all
                      duration-300
                      hover:border-slate-700
                      hover:text-white
                    "
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>

            <ul className="space-y-4">
              {[
                ["About Us", "#why-us"],
                ["Departments", "#departments"],
                ["Doctors", "#doctors"],
                ["Appointments", "#appointment"],
                ["Facilities", "#facilities"],
                ["Contact", "#contact"],
              ].map(([label, id]) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="
                      text-sm
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="mb-6 text-sm  font-semibold uppercase tracking-wider text-white">
              Specialties
            </h4>

            <ul className="space-y-4">
              {DEPARTMENTS.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => scrollTo("#departments")}
                    className="
                        text-sm
                        transition-colors
                        hover:text-white
                      "
                  >
                    {dept.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="
                    mt-1
                    flex-shrink-0
                    text-slate-500
                  "
                />

                <p className="text-sm leading-7">{HOSPITAL_INFO.address}</p>
              </div>

              <a
                href={`tel:${HOSPITAL_INFO.phone.replace(/\s/g, "")}`}
                className="
                  flex
                  gap-3
                  text-sm
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={16}
                  className="
                    mt-0.5
                    flex-shrink-0
                    text-slate-500
                  "
                />

                {HOSPITAL_INFO.phone}
              </a>

              <a
                href={`mailto:${HOSPITAL_INFO.email}`}
                className="
                  flex
                  gap-3
                  text-sm
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={16}
                  className="
                    mt-0.5
                    flex-shrink-0
                    text-slate-500
                  "
                />

                {HOSPITAL_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-900">
        <div
          className="
            container-custom
            flex
            flex-col
            gap-4
            py-6
            text-xs
            text-slate-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {year} Harmony Care Multispeciality Hospital. All rights reserved.
          </p>

          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>

            <button className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
