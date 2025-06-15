"use client"

import { Button } from "@/components/ui/button"
import { Award, BookOpen, Briefcase, Home, Mail, Menu, Star, User, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home", icon: <Home className="h-5 w-5 mr-2" /> },
    { href: "#about", label: "About", icon: <User className="h-5 w-5 mr-2" /> },
    { href: "#skills", label: "Skills", icon: <Star className="h-5 w-5 mr-2" /> },
    { href: "#education", label: "Education", icon: <BookOpen className="h-5 w-5 mr-2" /> },
    { href: "#projects", label: "Projects", icon: <Briefcase className="h-5 w-5 mr-2" /> },
    { href: "#certifications", label: "Certifications", icon: <Award className="h-5 w-5 mr-2" /> },
    { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5 mr-2" /> },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="font-bold text-xl gradient-text">Abdul Razzaq</div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center w-full text-left py-2 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
