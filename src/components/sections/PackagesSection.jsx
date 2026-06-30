import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { PACKAGES, HOSPITAL_INFO } from '../../data/mockData.js'

export default function PackagesSection() {
  const waLink = (pkgName) =>
    `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkgName)}.`

  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label">Health Packages</span>
          <h2 className="section-title mt-3 mb-4">Preventive Care, Made Affordable</h2>
          <p className="section-subtitle">
            Comprehensive diagnostic packages designed to catch potential issues early and keep your family healthy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 border-2 flex flex-col ${
                pkg.popular ? 'border-primary shadow-md' : 'border-gray-100 shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={11} fill="white" aria-hidden="true" />
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-semibold text-base text-textMain mb-2">{pkg.name}</h3>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-heading font-bold text-2xl" style={{ color: pkg.color }}>{pkg.price}</span>
                <span className="text-sm text-muted line-through mb-0.5">{pkg.original}</span>
              </div>
              <p className="text-xs text-muted mb-4">Per person, all tests included</p>

              <ul className="space-y-2 mb-6 flex-1">
                {pkg.tests.slice(0, 5).map((test) => (
                  <li key={test} className="flex items-start gap-2 text-xs text-muted">
                    <Check size={13} className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{test}</span>
                  </li>
                ))}
                {pkg.tests.length > 5 && (
                  <li className="text-xs text-primary font-medium">+{pkg.tests.length - 5} more tests</li>
                )}
              </ul>

              <a
                href={waLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center text-sm font-semibold py-2.5 rounded-full transition-colors ${
                  pkg.popular ? 'bg-primary text-white hover:bg-blue-700' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Book This Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
