export default function AboutPage() {
  return (
    <main className="h-screen w-screen">
      <section className="container mx-auto flex h-full items-center justify-center">
        <div className="flex max-w-2xl flex-col items-center">
          <h2>About</h2>
          <p>
            I&apos;m currently pursuing a BS in Information Systems while
            building full-stack web applications that solve real business
            problems. My recent work includes developing an RFID attendance
            monitoring system for our capstone project and a compliance-oriented
            Document Management System during my internship, featuring OCR,
            semantic search, and role-based access control. I&apos;m interested
            in backend architecture, security, and building software that scales
            beyond CRUD applications.
          </p>
        </div>
      </section>
    </main>
  )
}
