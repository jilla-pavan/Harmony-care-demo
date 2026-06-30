import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="13" y="4" width="6" height="24" rx="3" fill="white" />
              <rect x="4" y="13" width="24" height="6" rx="3" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-heading font-bold text-xl text-textMain leading-tight">Harmony Care</div>
            <div className="text-xs text-muted tracking-widest uppercase">Multispeciality Hospital</div>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>

        <p className="text-muted text-sm tracking-wide">Compassion. Care. Excellence.</p>
      </motion.div>
    </div>
  )
}
