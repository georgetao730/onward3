import type { ReactNode } from "react";
export type QuizQuestion = { id: string; prompt: string; options: string[]; answer: number; explanation: string };
export type LessonContent = {
  slug: string; title: string; subtitle: string; objective: string; number: string; duration: string;
  sections: { id: string; title: string; content: ReactNode }[];
  quiz: QuizQuestion[];
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string; available: boolean };
};
