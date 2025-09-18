export default function CvPage() {
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">CV / Contact</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a className="underline" href="https://example.com" target="_blank" rel="noreferrer">Live portfolio</a>
        </li>
        <li>
          <a className="underline" href="https://linkedin.com/in/your-handle" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a className="underline" href="mailto:your@email.com">Email</a>
        </li>
      </ul>
    </main>
  );
}


