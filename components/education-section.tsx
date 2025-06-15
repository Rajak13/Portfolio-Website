import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, GraduationCap, MapPin } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "BSc. (Hons) Computing",
      institution: "Itahari International College",
      university: "London Metropolitan University",
      location: "Sundarharicha 04, Morang",
      period: "2023 - Current",
      status: "In Progress",
      description:
        "Comprehensive computing program covering software development, web technologies, database management, and modern programming practices.",
    },
    {
      degree: "S.L.C. (Science Stream)",
      institution: "Dharan Adarsha Secondary Boarding School",
      location: "Dharan 01, Sunsari",
      period: "2020 - 2022",
      status: "Completed",
      description:
        "Strong foundation in science subjects including mathematics, physics, and computer science, preparing for higher education in technology.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Education</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            My academic background and qualifications in computing and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="relative overflow-hidden bg-white dark:bg-gray-800 border-primary">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl text-black dark:text-white">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-medium text-black dark:text-white mt-1">{edu.institution}</p>
                    {edu.university && <p className="text-sm text-gray-600 dark:text-gray-400">{edu.university}</p>}
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">{edu.status}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin className="h-4 w-4" />
                  {edu.location}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Academic Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <h4 className="font-medium text-black dark:text-white">Current Focus Areas:</h4>
                  <ul className="text-sm text-black dark:text-gray-300 space-y-1">
                    <li>• Web Development Technologies</li>
                    <li>• Software Engineering Principles</li>
                    <li>• Database Design & Management</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-black dark:text-white">Key Competencies:</h4>
                  <ul className="text-sm text-black dark:text-gray-300 space-y-1">
                    <li>• Object-Oriented Programming</li>
                    <li>• System Analysis & Design</li>
                    <li>• Project Management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
