import { Card, CardContent } from "@/components/ui/card"
import { ProjectsCarousel } from "./projects-carousel"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-pink-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            A selection of my most impactful and innovative projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <ProjectsCarousel />
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto border-primary bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Project Development Approach</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-medium mb-2 text-black dark:text-white">Planning & Design</h4>
                  <p className="text-sm text-black dark:text-white">
                    Thorough requirement analysis and system design with user experience in mind
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-medium mb-2 text-black dark:text-white">Development</h4>
                  <p className="text-sm text-black dark:text-white">
                    Clean, maintainable code following best practices and industry standards
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-medium mb-2 text-black dark:text-white">Testing & Deployment</h4>
                  <p className="text-sm text-black dark:text-white">
                    Comprehensive testing and optimization for performance and security
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
