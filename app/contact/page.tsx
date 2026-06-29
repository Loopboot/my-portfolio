import { Button } from "@/components/ui/button"
import Link from "next/link"
import data from "@/data/contacts.json"
interface ContactTypes {
  platform: string
  link: string
}

export default function ContactPage() {
  const contacts = data satisfies ContactTypes[]

  return (
    <main className="flex h-screen w-screen justify-center">
      <section className="container flex h-full items-center justify-center">
        <div className="flex max-w-2xl flex-col items-center">
          <h2>Contact</h2>
          <div className="my-12 grid grid-cols-2 grid-rows-1">
            {contacts.map((contact) => (
              <Button key={contact.id} asChild variant="outline">
                <Link href={contact.link}>{contact.platform}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
