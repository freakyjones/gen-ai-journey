import Link from "next/link";

export default function NotesPage() {
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-6">
      <div className="flex items-center gap-4">
        <Link className="text-sm underline" href="/">← Back to Home</Link>
      </div>
      <h1 className="text-2xl font-bold">Notes</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a className="underline" href="https://github.com/freakyjones/gen-ai-journey/tree/main/notes" target="_blank" rel="noopener noreferrer">
            All notes on GitHub
          </a>
        </li>
        <li>
          <a className="underline" href="https://github.com/freakyjones/gen-ai-journey" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </li>
      </ul>
    </main>
  );
}


