import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.demo && (
          <Link href={project.demo} className="text-blue-600 hover:underline">
            Live demo →
          </Link>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Source →
          </a>
        )}
      </div>
    </article>
  );
}