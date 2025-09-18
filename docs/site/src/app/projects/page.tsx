import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="font-sans min-h-screen max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link className="underline" href="https://github.com/your-username/weather-app">
            Weather App
          </Link>
          <span className="text-neutral-500 ml-2">(code)</span>
        </li>
        <li>
          <Link className="underline" href="/projects/">All projects (root repo)</Link>
        </li>
      </ul>
    </main>
  );
}


