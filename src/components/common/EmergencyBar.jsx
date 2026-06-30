import React from "react";
import {
  PhoneCall,
  Clock3,
  MapPin,
  Ambulance,
  ChevronRight,
} from "lucide-react";

import { HOSPITAL_INFO } from "../../data/mockData.js";

export default function EmergencyBar() {
  return (
    <aside
      role="banner"
      aria-label="Emergency Contact Information"
      className="relative z-50 overflow-hidden border-b border-white/10 bg-gradient-to-r from-rose-700 via-red-700 to-rose-800 text-white shadow-2xl"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-red-300 blur-3xl" />
      </div>

      <div className="container-custom relative flex min-h-[56px] flex-col items-center justify-between gap-3 py-3 lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          {/* Emergency Badge */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Ambulance size={15} className="text-red-100" />

            <span className="font-semibold tracking-wide">
              24/7 Emergency Services
            </span>
          </div>

          {/* Divider */}
          <div className="hidden h-5 w-px bg-white/20 lg:block" />

          {/* Timing */}
          <div className="flex items-center gap-2 text-red-50">
            <Clock3 size={15} />

            <span className="font-medium">Open 24 Hours • 365 Days</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {/* Address */}
          <div className="hidden items-center gap-2 text-sm text-red-100 xl:flex">
            <MapPin size={15} />

            <span className="max-w-xs truncate">{HOSPITAL_INFO.address}</span>
          </div>

          {/* Emergency CTA */}
          <a
            href={`tel:${HOSPITAL_INFO.emergency.replace(/\s/g, "")}`}
            aria-label={`Call emergency number ${HOSPITAL_INFO.emergency}`}
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-5
              py-2
              font-bold
              text-red-700
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-2xl
            "
          >
            <PhoneCall
              size={16}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            <span>{HOSPITAL_INFO.emergency}</span>

            <ChevronRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </aside>
  );
}
