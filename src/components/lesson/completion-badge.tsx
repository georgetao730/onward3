"use client";
import { useLessonComplete } from "@/lib/lesson-progress";
export function CompletionBadge({ slug, fallback }: { slug: string; fallback: string }) {
  const complete = useLessonComplete(slug);
  return <span className={`node-status ${complete ? "is-complete" : ""}`}>{complete ? "✓ Completed" : fallback}</span>;
}
