'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="ml-3 text-2xl font-bold text-gray-900">Apex Creative Studio</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Portfolio
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            About
          </a>
          <a href="#blog" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Blog
          </a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
            Get Quote
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600 p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
        <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
          Home
        </a>
        <a href="#services" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
          Services
        </a>
        <a href="#portfolio" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
          Portfolio
        </a>
        <a href="#about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
          About
        </a>
        <a href="#blog" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
          Blog
        </a>
        <a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 mt-4">
          Get Quote
        </a>
      </div>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366f1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="max-w-4xl mx-auto text-center">
      {/* Brand Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
        <span className="text-white/90 text-sm font-medium tracking-wide">CREATIVE EXCELLENCE REDEFINED</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
        <span className="block">Transform Your</span>
        <span className="block bg-gradient-to-r from-indigo-400 via-rose-400 to-emerald-400 bg-clip-text text-transparent">
          Brand Story
        </span>
        <span className="block text-4xl md:text-5xl lg:text-6xl text-white/80 font-light mt-2">
          Into Market Magic
        </span>
      </h1>

      {/* Company Name */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-white/90 tracking-widest">
          APEX CREATIVE STUDIO
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-rose-400 mx-auto mt-4"></div>
      </div>

      {/* Description */}
      <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
        We craft compelling campaigns that don't just capture attention—they capture hearts, minds, and market share. 
        From brand identity to digital dominance, we're your strategic creative partner.
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">500+</div>
          <div className="text-white/60 text-sm uppercase tracking-wide">Brands Elevated</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">98%</div>
          <div className="text-white/60 text-sm uppercase tracking-wide">Client Retention</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">15+</div>
          <div className="text-white/60 text-sm uppercase tracking-wide">Industry Awards</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full hover:from-indigo-500 hover:to-indigo-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25">
          <span className="relative z-10">Start Your Transformation</span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </button>
        
        <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center">
          <span>View Our Portfolio</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/50">
          <span className="text-xs uppercase tracking-widest mb-3">Discover More</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Apex Creative Studio Services
      </h2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        Elevate your brand with Apex Creative Studio's comprehensive marketing solutions. 
        Our award-winning team delivers measurable results through strategic creativity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy & Identity</h3>
        <p className="text-gray-600">
          Apex Creative Studio crafts compelling brand identities with strategic thinking that resonates with your target audience and drives business growth.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Marketing Campaigns</h3>
        <p className="text-gray-600">
          Our proven track record delivers measurable results through data-driven digital campaigns that maximize ROI and accelerate your marketing objectives.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Content Production</h3>
        <p className="text-gray-600">
          Apex Creative Studio's award-winning team produces high-impact visual content, from video campaigns to interactive media that captivates audiences.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Consulting</h3>
        <p className="text-gray-600">
          Experience Apex Creative Studio's collaborative design process where your vision meets our expertise to create full-service marketing solutions.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
        Start Your Project with Apex Creative Studio
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by leading brands to deliver exceptional marketing results
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            alt="Sarah Mitchell"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
            <p className="text-sm text-gray-600">Marketing Director, TechFlow Inc.</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Apex Creative Studio transformed our brand presence completely. Their strategic approach to our digital marketing campaign resulted in a 340% increase in qualified leads within just 4 months. The team's creativity and data-driven insights are unmatched."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            alt="Marcus Rodriguez"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Marcus Rodriguez</h4>
            <p className="text-sm text-gray-600">CEO, GreenLeaf Organics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Working with Apex Creative Studio was a game-changer for our product launch. Their integrated marketing strategy across social media, content marketing, and PPC advertising helped us achieve 250% of our initial sales targets. Professional, innovative, and results-driven."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            alt="Jennifer Chen"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Jennifer Chen</h4>
            <p className="text-sm text-gray-600">VP Marketing, FinanceFirst Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Apex Creative Studio's expertise in B2B marketing is exceptional. They redesigned our entire customer acquisition funnel and implemented marketing automation that increased our conversion rates by 180%. Their team feels like an extension of our own marketing department."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">Apex Creative Studio</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Elevating brands through innovative marketing strategies, creative design, and digital excellence. 
          Your vision, our expertise.
        </p>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <span className="mr-2">📧</span>
            hello@apexcreativestudio.com
          </p>
          <p className="flex items-center">
            <span className="mr-2">📞</span>
            (555) 123-4567
          </p>
          <p className="flex items-center">
            <span className="mr-2">📍</span>
            123 Creative Ave, Marketing District, NY 10001
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-orange-400 transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Creative Design</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Content Creation</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Social Media</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Portfolio</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Apex Creative Studio. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}