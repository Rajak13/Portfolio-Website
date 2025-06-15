import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users } from "lucide-react"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Java", level: 85, icon: Code },
    { name: "PHP", level: 80, icon: Code },
    { name: "React", level: 75, icon: Code },
    { name: "MySQL", level: 85, icon: Code },
    { name: "HTML/CSS", level: 90, icon: Code },
    { name: "JavaScript", level: 80, icon: Code },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Users },
    { name: "Team Collaboration", icon: Users },
    { name: "Communication", icon: Users },
    { name: "Time Management", icon: Users },
    { name: "Adaptability", icon: Users },
    { name: "Attention to Detail", icon: Users },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Skills & Expertise</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            A showcase of my technical and soft skills, as well as the tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black dark:text-white">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-black dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-3 rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black dark:text-white">
                <Users className="h-5 w-5" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium text-black dark:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP",
                  "Java",
                  "Python",
                  "React",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "TailwindCSS",
                  "Bootstrap",
                  "SQL",
                  "MySQL",
                  "Electron",
                  "JSP",
                  "Servlets",
                  "MVC Architecture",
                  "Git",
                  "GitHub",
                  "Wireframing",
                  "UI/UX Design",
                  "Responsive Design",
                  "RESTful APIs",
                ].map((tech) => (
                  <Badge key={tech} className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
