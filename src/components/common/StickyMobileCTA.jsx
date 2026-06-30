import React from 'react'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { HOSPITAL_INFO } from '../../data/mockData.js'

export default function StickyMobileCTA() {
  const waLink = `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Harmony%20Care%20Hospital.`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${HOSPITAL_INFO.phone.replace(/\s/g, '')}`}
          className="flex flex-col items-center gap-1 py-3 text-primary hover:bg-blue-50 transition-colors"
          aria-label="Call us"
        >
          <Phone size={20} />
          <span className="text-xs font-medium">Call Us</span>
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 bg-primary text-white hover:bg-blue-700 transition-colors"
          aria-label="WhatsApp appointment"
        >
          <MessageCircle size={20} />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <a
          href="#appointment"
          className="flex flex-col items-center gap-1 py-3 text-primary hover:bg-blue-50 transition-colors"
          aria-label="Book appointment"
        >
          <Calendar size={20} />
          <span className="text-xs font-medium">Book Now</span>
        </a>
      </div>
    </div>
  )
}
