import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonLayout } from "@/components/lesson/lesson-layout";
import { getLesson, lessons, plannedLessons } from "@/content/lessons";

export function generateStaticParams() {
  return [...Object.keys(lessons), ...Object.keys(plannedLessons)].map(slug => ({ slug }));
}
export async function generateMetadata({ params }: PageProps<"/learn/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: `${lesson?.title ?? (Object.hasOwn(plannedLessons, slug) ? plannedLessons[slug] : "Lesson not found")} | Onward3`, description: lesson?.subtitle };
}
export default async function LearnPage({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (lesson) return <LessonLayout key={slug} lesson={lesson} />;
  if (!Object.hasOwn(plannedLessons, slug)) notFound();
  return <main className="lesson-placeholder"><Link className="logo" href="/roadmap">← Onward3</Link><div><p className="eyebrow">COMING SOON</p><h1>{plannedLessons[slug]}</h1><p>This lesson is on the build path. Start with the first concept while we build the next step.</p><Link className="primary-button" href="/learn/what-is-web3">Explore the first lesson →</Link><p><Link href="/roadmap">← Back to roadmap</Link></p></div></main>;
}
