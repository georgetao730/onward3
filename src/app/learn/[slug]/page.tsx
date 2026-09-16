import Link from "next/link";

export default async function LearnPlaceholder({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const title = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return <main className="lesson-placeholder"><Link className="logo" href="/roadmap">← Onward3</Link><div><p className="eyebrow">LESSON ROUTE RESERVED</p><h1>{title}</h1><p>This lesson is next on the build path. The roadmap is ready; the complete learning experience will be added here.</p><Link className="primary-button" href="/roadmap">Back to roadmap →</Link></div></main>;
}
