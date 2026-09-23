import Link from "next/link";
import { profile, projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <section className="py-16">
        <p className="text-sm text-blue-600 font-medium mb-3">
          ● Available for AI/LLM consulting
        </p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          {profile.name}
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">{profile.title}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/chat"
            className="px-5 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800"
          >
            💬 Chat with my CV
          </Link>
          <Link
            href="/cv"
            className="px-5 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50"
          >
            View CV
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="py-12 border-t">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => p.highlight)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
      </section>
    </>
  );
}