import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">Abdul Razzaq Ansari</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">Full Stack Web Developer</p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              A self-motivated and technical professional passionate about creating scalable, secure, and user-friendly
              web applications using Java, PHP, and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90 rounded-lg shadow-md w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white rounded-lg shadow-md w-full sm:w-auto"
                asChild
              >
                <a href="https://drive.google.com/file/d/1OWOkhFZp_QROtoRbpuLMbCsYJSFgA0Op/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>9827310498</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>rajakansari833@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Dharan-1, Sunsari</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white dark:bg-gray-800 border-primary shadow-xl">
              <div className="p-6">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-primary rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-lg">
                    AR
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Abdul Razzaq Ansari</h3>
                    <p className="text-gray-600 dark:text-gray-400">BSc. (Hons) Computing Student</p>
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button
                      size="icon"
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white rounded-md"
                      asChild
                    >
                      <a href="https://github.com/Rajak13" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white rounded-md"
                      asChild
                    >
                      <a href="mailto:rajakansari833@gmail.com">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white rounded-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
