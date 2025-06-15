import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Rocket, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            Passionate about creating innovative web solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-black dark:text-white">Career Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black dark:text-white">
                Growing as a web developer in an energetic organization, solving practical problems with scalable and
                secure applications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <Lightbulb className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-black dark:text-white">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black dark:text-white">
                Excited to work with cutting-edge technologies and deliver high-impact projects while continuously
                improving my skills.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <Rocket className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-black dark:text-white">Growth Mindset</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black dark:text-white">
                Self-motivated technical professional committed to learning and adapting to new challenges in web
                development.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white dark:bg-gray-800 border-primary">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert text-black dark:text-white">
              <p className="text-lg leading-relaxed">
                I am a dedicated computing student and aspiring web developer with a passion for creating innovative
                digital solutions. Currently pursuing my BSc. (Hons) Computing degree at Itahari International College,
                I combine academic knowledge with practical experience to build robust web applications.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in technology is driven by curiosity and a desire to solve real-world problems. I specialize
                in full-stack development using technologies like Java, PHP, Python, and React, always focusing on
                creating secure, scalable, and user-friendly applications.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
