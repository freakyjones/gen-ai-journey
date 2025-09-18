import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-8">
      <section>
        <h1 className="text-3xl font-bold">GenAI Workspace</h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          Building practical AI-first apps and showcasing hands-on engineering.
        </p>
      </section>

      <section className="grid gap-3">
        <Link className="underline" href="/projects">Projects</Link>
        <Link className="underline" href="/notes">Notes</Link>
        <Link className="underline" href="/cv">CV / Contact</Link>
      </section>
    </main>
  );
}
