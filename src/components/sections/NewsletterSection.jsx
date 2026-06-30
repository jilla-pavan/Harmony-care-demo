import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-5">
            <Mail size={22} className="text-white" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
            Stay Updated on Health Tips & Offers
          </h2>
          <p className="text-blue-100 mb-7">
            Subscribe to our newsletter for the latest health insights, package offers, and hospital updates.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-white font-medium" role="status">
              <CheckCircle2 size={20} aria-hidden="true" />
              You've subscribed successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full text-sm text-textMain focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                <Send size={16} aria-hidden="true" />
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
