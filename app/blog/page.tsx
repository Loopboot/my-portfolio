import { CaseStudyList } from "@/components/case-study-list"

export default function BlogPage() {
  return (
    <main className="flex h-screen w-screen justify-center">
      <section className="container flex h-full items-center justify-center">
        <div className="w-full max-w-2xl items-center">
          <section className="mb-8 text-center">
            <h2 className="mx-auto mb-4 w-fit">Case Studies</h2>
            <div className="flex w-full flex-col">
              <CaseStudyList />
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
