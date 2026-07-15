'use client'

import Link from 'next/link'
import { Menu, X, Share2, Users, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-background py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:omkar@electricals.com" className="flex items-center gap-2 text-foreground hover:text-accent">
              <span>✉</span>
              <span>omkar@electricals.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-accent">
              <span>📞</span>
              <span>(+91) 9876543210</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="text-foreground hover:text-accent">
              <Share2 size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-accent">
              <Users size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-foreground hover:text-accent">
              <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/omkar-logo.png" alt="Omkar Electricals" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="font-bold text-foreground text-lg">Omkar Electricals</div>
              <div className="text-xs text-muted-foreground">Adding Light to Life</div>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent font-medium transition">
              About us
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-accent font-medium transition">
                Our Services
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-background">
                  All Services
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-foreground hover:text-accent font-medium transition">
              Contact us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded font-medium hover:opacity-90 transition"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
            <Link
              href="/contact"
              className="block bg-accent text-accent-foreground px-4 py-2 rounded font-medium hover:opacity-90 transition w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get A Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
