# Lesson authoring

Sprint 3 introduces a typed TSX content pipeline (the MDX-equivalent option in Issue #3). Content lives in `src/content/lessons`, separate from routing and reusable UI. No MDX parser, database, or wallet dependency is needed.

To add a lesson:

1. Export a `LessonContent` object from a new TSX file with a stable slug, title, subtitle, objective, number, duration, ordered sections, and quiz questions. Section IDs must be unique anchor-safe strings; quiz IDs must be unique, and answer indexes must reference an option.
2. Register it in `src/content/lessons/index.ts` and remove its planned placeholder entry.
3. Set previous/next descriptors. Set `available: true` only when the next lesson exists. The first lesson links back to the roadmap; unpublished next lessons show “Coming soon”.
4. Reuse `Analogy` and `CodeBlock`, and place concept-specific client interactions in separate components. Keep explanations in the content module.
5. Update the corresponding roadmap metadata and validate the new route.

`LessonLayout` provides a table of contents, reading progress, quiz feedback/reset, completion, and navigation. Server-rendered content is passed through the client layout as React nodes. `generateStaticParams` builds registered and planned routes; unknown slugs return 404.

## Progress behavior

Reading progress tracks the current scroll position and is separate from completion. Completion is voluntary, not quiz-gated. The key `onward3:lesson:<slug>:completed` stores `true` in localStorage. A same-tab custom event and browser storage events update subscribers. Storage exceptions show a retryable message, never a false success. Clearing site data clears progress. Quiz answers reset on a fresh visit and are not persisted.

## Validation

Run `npm run lint` and `npm run build`. In environments that forbid Turbopack's internal subprocess ports, use `npm run build -- --webpack` for the production build, then `npm run start`.

Browser checks for the first lesson:

- Switch Web2/Web3/Compare and inspect each architecture step; activate buttons using Enter.
- Answer each storage scenario, including wrong answers followed by corrections.
- Switch the game shutdown scenario in both directions.
- Try incorrect quiz choices, correct all three, and reset.
- Complete, reload, and visit Roadmap; verify the completed badge. Check another open tab updates too.
- Deny localStorage writes and verify the retryable failure message.
- At 320px and 390px, check no document overflow; the comparison table/code have local scrolling.
- Follow section anchors, check progress, and visit an unknown slug (404).

No authentication, real wallet connection, Wallet Playground, or database is part of this sprint.
