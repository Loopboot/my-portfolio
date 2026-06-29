import { Button } from "@/components/ui/button"
import data from "@/data/experience.json"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

interface ExperienceTypes {
  id: number
  position: string
  date: string
  project: string
  client: string
  description: string
  tech: string[]
  caseStudy: boolean
  caseStudyUrl: string | null
}

export default function ExperiencePage() {
  const experiences = data satisfies ExperienceTypes[]

  return (
    <main className="flex h-full w-screen justify-center">
      <section className="container flex h-full items-center justify-center py-24">
        <div className="flex w-full flex-col items-center">
          <h2 className="mt-12 mb-12">Experience</h2>
          {experiences.map((experience) => (
            <Card className="my-2 lg:w-4xl" key={experience.id}>
              <CardHeader>
                <CardTitle>
                  <h4 className="font-bold tracking-wider text-foreground/90">
                    {experience.position}
                  </h4>
                </CardTitle>
                <CardDescription>
                  <div className="flex flex-col gap-1.5">
                    <span>{experience.date}</span>
                    <span>{experience.client}</span>
                    <span className="font-bold text-foreground/75">
                      {experience.project}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="mb-8">{experience.description}</p>
                  <h5 className="text-lg font-medium text-muted-foreground">
                    Tech:
                  </h5>
                  <ul className="flex list-disc items-center gap-2 text-muted-foreground">
                    {experience.tech.map((item) => (
                      <li key={item} className="ml-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              {experience.caseStudy && (
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={experience.caseStudyUrl ?? "#"}>
                      Case Study
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
