import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-engineer-portfolio.vercel.app"),
  title: {
    default: `${profile.name} — AI/LLM Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "AI engineer",
    "LLM developer",
    "RAG",
    "LangChain",
    "agentic AI",
    "MCP",
    "fine-tuning",
    "Ongun Akay",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  openGraph: {
    title: `${profile.name} — AI/LLM Engineer`,
    description: profile.tagline,
    url: profile.website,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/LLM Engineer`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.website,
    email: profile.email,
    jobTitle: profile.title,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: profile.knowsAbout,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Nav />
        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
        <footer className="border-t mt-24 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js + AI SDK.
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}