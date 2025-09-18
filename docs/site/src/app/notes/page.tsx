export default async function NotesPage() {
  // Static page with simple links; for full listing, see root notes/README.md
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Notes</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a className="underline" href="https://github.com/your-username/genai/tree/main/notes">All notes (GitHub)</a>
        </li>
      </ul>
    </main>
  );
}


