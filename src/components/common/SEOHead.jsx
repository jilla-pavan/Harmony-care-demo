import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.harmonycare.com";
const HOSPITAL_NAME = "Harmony Care Multispeciality Hospital";
const PHONE = "+91-9876540000";
const EMAIL = "info@harmonycare.com";
const ADDRESS = "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034";

export default function SEOHead() {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${SITE_URL}/#hospital`,
    name: HOSPITAL_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    slogan: "Compassion. Care. Excellence.",
    description:
      "Harmony Care Multispeciality Hospital delivers world-class healthcare with advanced technology, experienced specialists, and compassionate patient-centered care in Hyderabad.",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Road No. 12, Banjara Hills",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500034",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4126",
      longitude: "78.4482",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    medicalSpecialty: [
      "Cardiology",
      "Pediatrics",
      "Orthopedic",
      "Gynecology",
      "Dermatology",
      "Neurology",
      "Oncology",
      "Pulmonology",
      "General Surgery",
      "Emergency Medicine",
    ],

    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "24/7 Emergency Care",
      },
      {
        "@type": "MedicalTherapy",
        name: "Health Checkup Packages",
      },
      {
        "@type": "MedicalTherapy",
        name: "Advanced Diagnostic Services",
      },
    ],

    sameAs: [
      "https://www.facebook.com/harmonycare",
      "https://www.instagram.com/harmonycare",
      "https://www.linkedin.com/company/harmonycare",
      "https://www.youtube.com/@harmonycare",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: HOSPITAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN",
    },
  };

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary SEO */}
      <html lang="en" />

      <title>
        Harmony Care Multispeciality Hospital | Advanced Healthcare in Hyderabad
      </title>

      <meta
        name="description"
        content="Experience premium multispeciality healthcare in Hyderabad with expert doctors, advanced diagnostics, 24/7 emergency services, and compassionate patient care at Harmony Care Hospital."
      />

      <meta
        name="keywords"
        content="
          best hospital in hyderabad,
          multispeciality hospital banjara hills,
          cardiology hospital hyderabad,
          pediatric specialists hyderabad,
          emergency hospital hyderabad,
          gynecology hospital telangana,
          orthopedic care hyderabad,
          healthcare services hyderabad
        "
      />

      <meta name="author" content={HOSPITAL_NAME} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#0F766E" />

      {/* Canonical */}
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={HOSPITAL_NAME} />

      <meta
        property="og:title"
        content="Harmony Care Multispeciality Hospital | Compassion. Care. Excellence."
      />

      <meta
        property="og:description"
        content="Trusted by thousands of families in Hyderabad for expert medical care, advanced treatments, and 24/7 emergency support."
      />

      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta
        property="og:image:alt"
        content="Harmony Care Multispeciality Hospital, Hyderabad"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Harmony Care Multispeciality Hospital"
      />

      <meta
        name="twitter:description"
        content="Advanced healthcare, compassionate treatment, and expert specialists serving Hyderabad 24/7."
      />

      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

      {/* Mobile & PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content={HOSPITAL_NAME} />

      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.4126;78.4482" />
      <meta name="ICBM" content="17.4126, 78.4482" />

      {/* Contact Information */}
      <meta name="contact" content={PHONE} />
      <meta name="reply-to" content={EMAIL} />
      <meta name="address" content={ADDRESS} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(hospitalSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
