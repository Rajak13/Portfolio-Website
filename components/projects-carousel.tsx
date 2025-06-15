"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ChevronLeft, ChevronRight, Dumbbell, ExternalLink, Github, Music } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Gym Management System",
    description:
      "A comprehensive gym management system with secure authentication, role-based access control, and full CRUD operations for managing members, trainers, and equipment.",
    icon: Dumbbell,
    technologies: ["PHP", "TailwindCSS", "Bootstrap", "MySQL"],
    features: [
      "Secure login/registration system",
      "Role-based access control",
      "Member management dashboard",
      "Equipment tracking",
      "Payment processing",
      "Responsive design",
    ],
    status: "Completed",
    category: "Web Application",
    gradient: "from-pink-500 to-rose-500",
    github: "https://github.com/Rajak13/GymManagementSystem.git",
  },
  {
    title: "Book Store Management System",
    description:
      "A full-featured bookstore management system built with Java enterprise technologies, featuring role-based dashboards and order management.",
    icon: BookOpen,
    technologies: ["Java", "JSP", "Servlets", "MVC Architecture", "MySQL"],
    features: [
      "Role-based dashboard system",
      "Order status tracking",
      "Book recommendation engine",
      "Inventory management",
      "Customer management",
      "Sales reporting",
    ],
    status: "Completed",
    category: "Enterprise Application",
    gradient: "from-pink-500 to-rose-500",
    github: "https://github.com/Rajak13/AdvanceProgrammingCW.git",
  },
  {
    title: "Music Player Desktop Icon",
    description:
      "A lightweight, customizable desktop music player built with Electron, featuring a draggable interface and theme customization options.",
    icon: Music,
    technologies: ["Electron", "HTML", "CSS", "JavaScript", "Node.js"],
    features: [
      "Lightweight and fast",
      "Draggable interface",
      "Theme customization",
      "Playlist management",
      "Audio visualization",
      "Cross-platform compatibility",
    ],
    status: "Completed",
    category: "Desktop Application",
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Rajak13/Music-Player-Desktop-Icon.git",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects, skills, and experience.",
    icon: ExternalLink,
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    features: [
      "Responsive design",
      "Animated sections",
      "Contact form",
      "Project showcase carousel",
      "Custom theming",
    ],
    status: "Completed",
    category: "Web Application",
    gradient: "from-pink-500 to-rose-500",
    github: "https://github.com/Rajak13/Portfolio-Website.git",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-black dark:text-white">{project.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-white shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-white shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            title={`Go to project ${index+1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary shadow-lg" : "bg-black hover:bg-primary"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
