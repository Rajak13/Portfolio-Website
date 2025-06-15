"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9827310498",
      href: "tel:9827310498",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rajakansari833@gmail.com",
      href: "mailto:rajakansari833@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dharan-1, Sunsari, Nepal",
      href: "#",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rajak13",
      href: "https://github.com/Rajak13",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-pink-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get in Touch</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-black dark:text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-black dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">abdulrazzaqansari@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-black dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+977 981-2345678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-black dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sundarharicha 04, Morang, Nepal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-black dark:text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black dark:text-white">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black dark:text-white">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Message subject"
                    className="bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black dark:text-white">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
