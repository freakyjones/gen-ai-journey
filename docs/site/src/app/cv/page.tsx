import Link from "next/link";

export default function CvPage() {
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-6">
      <div className="flex items-center gap-4">
        <Link className="text-sm underline" href="/">← Back to Home</Link>
      </div>
      <h1 className="text-2xl font-bold">CV / Contact</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a className="underline" href="https://github.com/freakyjones" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </li>
        <li>
          <a className="underline" href="https://linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a className="underline" href="mailto:your@email.com">Email</a>
        </li>
      </ul>
    </main>
  );
}


