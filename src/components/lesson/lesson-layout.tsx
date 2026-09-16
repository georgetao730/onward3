"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { LessonContent, QuizQuestion } from "@/content/lessons/types";
import { saveLessonComplete, useLessonComplete } from "@/lib/lesson-progress";

function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const score = questions.filter(q => answers[q.id] === q.answer).length;
  return <div className="lesson-quiz">{questions.map((q, index) => <fieldset key={q.id}>
    <legend><span>0{index + 1}</span> {q.prompt}</legend>
    {q.options.map((option, i) => <label key={option} className={answers[q.id] === i ? "selected" : ""}><input type="radio" name={q.id} checked={answers[q.id] === i} onChange={() => setAnswers({ ...answers, [q.id]: i })} />{option}</label>)}
    <div aria-live="polite">{answers[q.id] !== undefined && <p className="lesson-feedback"><strong>{answers[q.id] === q.answer ? "Correct." : "Try again."}</strong> {q.explanation}</p>}</div>
  </fieldset>)}<p aria-live="polite">{score} / {questions.length} understood. You can change any answer.</p><button className="lesson-button" onClick={() => setAnswers({})}>Reset quiz</button></div>;
}

export function LessonLayout({ lesson }: { lesson: LessonContent }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const complete = useLessonComplete(lesson.slug);
  useEffect(() => {
    const update = () => {
      const content = document.getElementById("lesson-content");
      if (!content) return;
      const top = content.getBoundingClientRect().top + window.scrollY;
      const distance = content.offsetHeight - window.innerHeight;
      setProgress(Math.round(Math.min(100, Math.max(0, (window.scrollY - top) / Math.max(1, distance) * 100))));
    };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div className="lesson-page">
    <a className="lesson-skip" href="#lesson-content">Skip to lesson</a>
    <header className="roadmap-nav"><Link className="logo" href="/">Onward3</Link><Link className="lesson-back" href="/roadmap">← Learning roadmap</Link></header>
    <div className="lesson-grid"><aside className="lesson-sidebar"><p className="eyebrow">FOUNDATIONS / {lesson.number}</p><nav aria-label="Lesson contents">{lesson.sections.map((s, i) => <a key={s.id} href={`#${s.id}`}><span>{String(i + 1).padStart(2, "0")}</span>{s.title}</a>)}<a href="#quiz"><span>{String(lesson.sections.length + 1).padStart(2, "0")}</span>Quick quiz</a><a href="#complete"><span>{String(lesson.sections.length + 2).padStart(2, "0")}</span>Complete lesson</a></nav><label htmlFor="reading-progress">Reading progress · {progress}%</label><progress id="reading-progress" max={100} value={progress} /><p>{complete ? "✓ Lesson completed" : "Your next step onchain."}</p></aside>
    <main id="lesson-content" className="lesson-content"><div className="lesson-hero"><p className="eyebrow">LESSON {lesson.number} · {lesson.duration} · FOUNDATION</p><h1>{lesson.title}</h1><p className="lesson-subtitle">{lesson.subtitle}</p><div className="lesson-goal">{lesson.objective}</div><a className="primary-button" href={`#${lesson.sections[0].id}`}>Explore the shift ↓</a></div>
    {lesson.sections.map((s, i) => <section className="lesson-section" id={s.id} key={s.id} aria-labelledby={`${s.id}-title`}><p className="eyebrow">CONCEPT {String(i + 1).padStart(2, "0")}</p><h2 id={`${s.id}-title`}>{s.title}</h2>{s.content}</section>)}
    <section className="lesson-section" id="quiz"><p className="eyebrow">CHECK YOUR MENTAL MODEL</p><h2>Three decisions. Your turn.</h2><Quiz questions={lesson.quiz} /></section>
    <section className="lesson-section lesson-finish" id="complete"><p className="eyebrow">ONE STEP FORWARD</p><h2>{complete ? "Lesson completed." : "Make this your foundation."}</h2><p>Completion is saved in this browser. Quiz answers are for practice; you can revisit this lesson anytime.</p><button className="primary-button" disabled={complete} onClick={() => setMessage(saveLessonComplete(lesson.slug) ? "Saved. Your roadmap now shows this lesson as completed." : "Your browser blocked storage. Progress was not saved. Allow local storage and try again.")}>{complete ? "✓ Lesson completed" : "Complete Lesson"}</button><p role="status">{message}</p></section>
    <nav className="lesson-pagination" aria-label="Lesson navigation"><Link href={lesson.previous ? `/learn/${lesson.previous.slug}` : "/roadmap"}>← {lesson.previous?.title ?? "Back to roadmap"}</Link>{lesson.next && (lesson.next.available ? <Link href={`/learn/${lesson.next.slug}`}>Next: {lesson.next.title} →</Link> : <span>Next: {lesson.next.title}<small>Coming soon</small></span>)}</nav>
    </main></div></div>;
}
