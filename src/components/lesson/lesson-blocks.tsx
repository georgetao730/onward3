import type { ReactNode } from "react";
export function Analogy({ children }: { children: ReactNode }) {
  return <aside className="lesson-analogy"><span className="eyebrow">WEB2 ANCHOR</span><div>{children}</div></aside>;
}
export function CodeBlock({ label, code }: { label: string; code: string }) {
  return <figure className="lesson-code"><figcaption>{label}</figcaption><pre tabIndex={0}><code>{code}</code></pre></figure>;
}
