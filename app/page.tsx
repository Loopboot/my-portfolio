import { StackList } from "@/components/stack-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex h-screen w-screen justify-center">
      <section className="container flex items-center justify-center">
        <div className="flex items-center gap-10">
          <div className="flex max-w-2xl flex-col items-start gap-2">
            <h1 className="">Kian Harvey Tayao</h1>
            <h4 className="text-lg font-semibold text-foreground/75">
              Junior{" "}
              <span className="bg-primary px-1 text-white">
                Full-Stack Developer
              </span>{" "}
              · Bulacan, Philippines
            </h4>

            <p className="text-foreground/75">
              I build secure, scalable web applications with a focus on business
              systems, backend architecture, and modern deployment practices. My
              experience includes developing a compliance-oriented Document
              Management System for a client, contributing to a unified
              enterprise platform during my internship, and building an RFID
              attendance system with facial verification.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link href="#">LinkdIn</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/Loopboot">Github</Link>
              </Button>
            </div>

            <div className="mt-12">
              <StackList />
            </div>
          </div>
          {/* <div className="grid auto-rows-fr grid-cols-2">
            <NavButtons />
          </div> */}
        </div>
      </section>
    </main>
  )
}
