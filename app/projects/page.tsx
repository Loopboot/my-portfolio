import { Button } from "@/components/ui/button"
import data from "@/data/projects.json"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
interface ProjectTypes {
  id: number
  image: string
  alt: string
  name: string
  type: string
  description: string
  includeCaseStudy: boolean
  caseStudyUrl: string
  tech: string[]
}

export default function ProjectsPage() {
  const projects = data satisfies ProjectTypes[]

  return (
    <main className="flex h-screen w-screen justify-center">
      <section className="container flex h-full items-center justify-center">
        <div className="flex w-full flex-col items-center">
          <h2 className="mt-24 mb-12">Selected Projects</h2>
          <div>
            {projects.map((project) => (
              <Card className="my-2 lg:w-4xl" key={project.id}>
                <CardHeader>
                  <CardTitle>
                    <h4>{project.name}</h4>
                  </CardTitle>
                  <CardDescription>
                    <div className="w-full">
                      {project.image && (
                        <Image
                          alt={project.alt}
                          src={project.image}
                          width={1080}
                          height={1920}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span>{project.type}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <p className="mb-8">{project.description}</p>
                    <h5 className="text-lg font-medium text-muted-foreground">
                      Tech:
                    </h5>
                    <ul className="flex list-disc items-center gap-2 text-muted-foreground">
                      {project.tech.map((item) => (
                        <li key={item} className="ml-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {project.includeCaseStudy && (
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href={project.caseStudyUrl ?? "#"}>Case Study</Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
