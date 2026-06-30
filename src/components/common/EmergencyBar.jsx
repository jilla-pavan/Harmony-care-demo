import React from "react";
import { PhoneCall, Clock3, Ambulance } from "lucide-react";

import { HOSPITAL_INFO } from "../../data/mockData.js";

export default function EmergencyBar() {
  return (
    <aside
      role="banner"
      aria-label="Emergency Contact Information"
      className="
        sticky top-0 z-50
        border-b border-red-800/30
        bg-red-700
        text-white
      "
    >
      <div
        className="
          container-custom
          flex
          flex-col
          gap-3
          py-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Left Content */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:justify-start
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-3
              py-1.5
              text-xs
              font-semibold
              backdrop-blur-sm
            "
          >
            <Ambulance size={14} />

            <span>24/7 Emergency Care</span>
          </div>

          <div
            className="
              hidden
              h-4
              w-px
              bg-white/20
              md:block
            "
          />

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-red-100
            "
          >
            <Clock3 size={14} />

            <span>Open 24 Hours</span>
          </div>
        </div>

        {/* Emergency CTA */}
        <a
          href={`tel:${HOSPITAL_INFO.emergency.replace(/\s/g, "")}`}
          aria-label={`Call emergency number ${HOSPITAL_INFO.emergency}`}
          className="
            group
            mx-auto
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-2.5
            text-sm
            font-semibold
            text-red-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-md
            sm:mx-0
            sm:w-auto
          "
        >
          <PhoneCall
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:rotate-12
            "
          />

          <span>{HOSPITAL_INFO.emergency}</span>
        </a>
      </div>
    </aside>
  );
}
