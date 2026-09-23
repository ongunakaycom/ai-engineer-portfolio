import Link from "next/link";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
  { href: "/chat", label: "Chat" },
];

export function Nav() {
  return (
    <nav className="border-b sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          {profile.name}
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-gray-600 hover:text-black transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}