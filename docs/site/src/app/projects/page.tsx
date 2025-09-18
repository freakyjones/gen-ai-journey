import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-6">
      <div className="flex items-center gap-4">
        <Link className="text-sm underline" href="/">← Back to Home</Link>
      </div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link className="underline" href="https://github.com/freakyjones/gen-ai-journey" target="_blank" rel="noopener noreferrer">
            GenAI Journey Repository
          </Link>
          <span className="text-neutral-500 ml-2">(source code)</span>
        </li>
        <li>
          <Link className="underline" href="https://github.com/freakyjones" target="_blank" rel="noopener noreferrer">
            All projects on GitHub
          </Link>
        </li>
      </ul>
    </main>
  );
}


