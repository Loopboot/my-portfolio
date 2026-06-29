import { notFound } from "next/navigation"
import data from "@/data/case-studies.json"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ReturnButton } from "@/components/back-button"
export interface CaseStudyTypes {
  id: number
  highlights: string[]
  hero: {
    project_name: string
    position: string
    duration: string
    team_size: string
    status: string
  }
  problem_description: string
  requirements: {
    functional: string[]
    non_functional: string[]
  }
  solution: string
  design_principle: string
  architecture: {
    diagram_name: string
    diagram_url: string
    diagram_description: string
  }[]
  technical_decisions: {
    title: string
    challenge: string
    decision: string
    outcome: string[]
  }[]
  gallery:
    | {
        image_id: number
        image_label: string
        image_url: string
        image_alt: string
      }[]
    | null

  project_links:
    | {
        type: string
        url: string
      }[]
    | null
}

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const caseStudies = data as CaseStudyTypes[]
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params
  const caseStudies = data as CaseStudyTypes[]
  const caseStudy = caseStudies.find((study) => study.id === parseInt(id))

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto my-24 max-w-4xl">
        <div className="fixed bottom-0 z-9 h-12 w-full max-w-4xl">
          <ReturnButton />
        </div>
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-center">{caseStudy.hero.project_name}</h1>
          <div className="flex justify-center gap-4 text-muted-foreground *:capitalize">
            <span>{caseStudy.hero.position}</span>
            <span>{caseStudy.hero.duration}</span>
            <span>{caseStudy.hero.team_size}</span>
            <span>{caseStudy.hero.status}</span>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Highlights</h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {caseStudy.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        {/* Problem */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Problem</h2>
          <p className="text-foreground/80">{caseStudy.problem_description}</p>
        </section>

        {/* Solution */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Solution</h2>
          <p className="text-foreground/80">{caseStudy.solution}</p>
        </section>

        {/* Architecture */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Architecture</h2>
          {caseStudy.architecture.map((diagram, idx) => (
            <div className="mb-8 flex flex-col gap-2" key={idx}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={diagram.diagram_url}
                  alt={diagram.diagram_name}
                  width={1080}
                  height={1920}
                  className="w-full rounded-lg"
                />
              </AspectRatio>
              <h4 className="mx-auto border-b">{diagram.diagram_name}</h4>
              <p>{diagram.diagram_description}</p>
            </div>
          ))}
        </section>

        {/* Technical Decisions */}
        {caseStudy.technical_decisions.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Technical Decisions</h2>
            <div className="space-y-4">
              {caseStudy.technical_decisions.map((decision, idx) => (
                <div key={idx} className="rounded-lg border p-4">
                  <h3 className="mb-2 font-bold">{decision.title}</h3>
                  <p className="mb-2 text-sm text-foreground/70">
                    <strong>Challenge:</strong> {decision.challenge}
                  </p>
                  <p className="mb-2 text-sm text-foreground/70">
                    <strong>Decision:</strong> {decision.decision}
                  </p>
                  <ul className="list-inside list-disc text-sm text-foreground/70">
                    {decision.outcome.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {Array.isArray(caseStudy.gallery) && caseStudy.gallery.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.gallery &&
                caseStudy.gallery.map((image, idx) => (
                  <div key={idx}>
                    {
                      <Image
                        src={image.image_url}
                        alt={image.image_alt}
                        width={1080}
                        height={1920}
                        className="w-full rounded-lg"
                      />
                    }
                    <p className="mt-2 text-sm text-foreground/70">
                      {image.image_label}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Project Links */}
        {caseStudy.project_links && caseStudy.project_links.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-bold">Links</h2>
            <ul className="space-y-2">
              {caseStudy.project_links.map((link, idx) => (
                <li key={idx}>
                  <Button asChild variant="outline">
                    <Link href={link.url}>{link.type}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  )
}
