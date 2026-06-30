import React from "react";
import HeroSection from "../components/sections/HeroSection.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import DepartmentsSection from "../components/sections/DepartmentsSection.jsx";
import DoctorsSection from "../components/sections/DoctorsSection.jsx";
import AppointmentSection from "../components/sections/AppointmentSection.jsx";
import PackagesSection from "../components/sections/PackagesSection.jsx";
import FacilitiesSection from "../components/sections/FacilitiesSection.jsx";
import InsuranceSection from "../components/sections/InsuranceSection.jsx";
import TestimonialsSection from "../components/sections/TestimonialsSection.jsx";
import BlogSection from "../components/sections/BlogSection.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import GoogleReviewsSection from "../components/sections/GoogleReviewsSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import NewsletterSection from "../components/sections/NewsletterSection.jsx";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <DepartmentsSection />
      <DoctorsSection />
      <AppointmentSection />
      <FacilitiesSection />
      <InsuranceSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <GoogleReviewsSection />
      <ContactSection />
    </>
  );
}
