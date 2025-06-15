import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Mail, User } from "lucide-react"

export function ReferencesSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">References</h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            Professional references who can speak to my academic performance and character
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="text-center bg-white dark:bg-gray-800 border-primary">
            <CardHeader>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mb-4">
                <User className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-black dark:text-white">Mr. Romy Khatri</CardTitle>
              <p className="text-lg text-primary">Tutor</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-black dark:text-gray-300">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Itahari International College</span>
              </div>

              <div className="p-4 bg-pink-50 dark:bg-gray-900 rounded-lg">
                <p className="text-black dark:text-gray-300 italic">
                  &quot;Abdul Razzaq is a dedicated and technically proficient student who consistently demonstrates strong
                  problem-solving abilities and a genuine passion for web development. His commitment to learning and
                  collaborative approach make him a valuable team member.&quot;
                </p>
              </div>

              <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="mailto:romy.khatri@iic.edu.np">
                  <Mail className="h-4 w-4" />
                  romy.khatri@iic.edu.np
                </a>
              </Button>

              <div className="pt-4 border-t">
                <p className="text-sm text-black dark:text-gray-300">Additional references available upon request</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
