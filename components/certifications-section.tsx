import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Brain, Cloud, Code } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Academy Cloud Foundations",
      provider: "Amazon Web Services",
      icon: Cloud,
      category: "Cloud Computing",
      description:
        "Comprehensive understanding of cloud computing concepts, AWS core services, security, architecture, pricing, and support.",
      skills: ["Cloud Architecture", "AWS Services", "Security Best Practices", "Cost Optimization"],
    },
    {
      title: "AWS Machine Learning Foundations",
      provider: "Amazon Web Services",
      icon: Brain,
      category: "Machine Learning",
      description:
        "Foundational knowledge of machine learning concepts and AWS ML services for building intelligent applications.",
      skills: ["ML Algorithms", "AWS SageMaker", "Data Processing", "Model Deployment"],
    },
    {
      title: "AWS Machine Learning for NLP",
      provider: "Amazon Web Services",
      icon: Brain,
      category: "Natural Language Processing",
      description:
        "Specialized training in natural language processing using AWS services and machine learning techniques.",
      skills: ["Text Analysis", "Language Models", "AWS Comprehend", "Sentiment Analysis"],
    },
    {
      title: "C++ Basic Certification",
      provider: "Programming Institute",
      icon: Code,
      category: "Programming",
      description: "Fundamental programming concepts and object-oriented programming principles using C++.",
      skills: ["Object-Oriented Programming", "Data Structures", "Memory Management", "Algorithm Design"],
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Certifications</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            Recognitions and certifications that validate my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-black dark:border-gray-700">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 dark:bg-primary/20 transition-colors">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">{cert.category}</Badge>
                </div>
                <CardTitle className="text-black dark:text-white group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                <p className="text-black dark:text-gray-300 font-medium">{cert.provider}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black dark:text-gray-300">{cert.description}</p>

                <div>
                  <h4 className="font-medium mb-3 text-black dark:text-white">Key Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-primary text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center text-black dark:text-white">
                <Award className="h-5 w-5" />
                Certification Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <p className="text-black dark:text-gray-300">Professional Certifications</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <p className="text-black dark:text-gray-300">AWS Specializations</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <p className="text-black dark:text-gray-300">Commitment to Learning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
