import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import EmergencyBar from './components/common/EmergencyBar.jsx'
import StickyMobileCTA from './components/common/StickyMobileCTA.jsx'
import LoadingScreen from './components/common/LoadingScreen.jsx'
import HomePage from './pages/HomePage.jsx'
import SEOHead from './components/common/SEOHead.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <>
      <SEOHead />
      <EmergencyBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <StickyMobileCTA />
    </>
  )
}
