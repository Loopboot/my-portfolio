"use client"
import { CaseStudyTypes } from "@/app/blog/case-study/[id]/page"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import data from "@/data/case-studies.json"
import { useRouter } from "next/navigation"

export async function generateStaticParams() {
  const caseStudies = data as CaseStudyTypes[]
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }))
}

function CaseStudyList() {
  const caseStudies = data as CaseStudyTypes[]
  const router = useRouter()

  function viewCase(id: number) {
    router.push(`/blog/case-study/${id}/`)
  }

  return (
    <>
      {caseStudies.map((content) => (
        <Card key={content.id} className="justify-even flex-between flex! h-32">
          <CardContent>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col items-start">
                <h4 className="font-bold tracking-wider text-foreground/90">
                  {content.hero.project_name}
                </h4>
                <span className="text-muted-foreground">
                  {content.hero.duration}
                </span>
              </div>
              <Button variant="default" onClick={() => viewCase(content.id)}>
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export { CaseStudyList }
