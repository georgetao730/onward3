import Link from "next/link";
import { CompletionBadge } from "@/components/lesson/completion-badge";

type Lesson = {
  number: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  level: string;
  status: "Start here" | "Core" | "Explore" | "Up next";
  mentalModel: string;
  prerequisites: string[];
  branch?: "bitcoin" | "ethereum";
};

const lessons: Lesson[] = [
  { number: "01", title: "What Really Changes from Web2 to Web3?", slug: "what-is-web3", description: "A new way to organize identity, assets, and shared application state.", duration: "18 min", level: "Foundation", status: "Start here", mentalModel: "Platform-controlled state vs shared, verifiable state.", prerequisites: [] },
  { number: "02", title: "Blockchain", slug: "blockchain", description: "How a shared, append-only state machine reaches agreement.", duration: "18 min", level: "Foundation", status: "Core", mentalModel: "A distributed database with consensus built into the write path.", prerequisites: ["01 What is Web3?"] },
  { number: "03", title: "Bitcoin", slug: "bitcoin", description: "Digital scarcity, UTXOs, and the origin of programmable money.", duration: "16 min", level: "Context", status: "Explore", mentalModel: "Cash-like outputs, not rows in an account ledger.", prerequisites: ["02 Blockchain"], branch: "bitcoin" },
  { number: "04", title: "Ethereum", slug: "ethereum", description: "A programmable blockchain and global execution environment.", duration: "20 min", level: "Foundation", status: "Core", mentalModel: "A shared runtime where application state is public and replicated.", prerequisites: ["02 Blockchain"], branch: "ethereum" },
  { number: "05", title: "Accounts", slug: "accounts", description: "Addresses, externally owned accounts, and contract accounts.", duration: "14 min", level: "Foundation", status: "Up next", mentalModel: "An address identifies an account; it is not a username or a wallet app.", prerequisites: ["04 Ethereum"] },
  { number: "06", title: "Wallet & Keys", slug: "wallet-and-keys", description: "Keys, signatures, and the software that helps you use them safely.", duration: "22 min", level: "Foundation", status: "Up next", mentalModel: "A wallet is an identity-and-signing client, not a bank account.", prerequisites: ["05 Accounts"] },
  { number: "07", title: "Transactions", slug: "transactions", description: "Signed requests that change state, from creation to confirmation.", duration: "19 min", level: "Core", status: "Up next", mentalModel: "Like an API write request, except the user authorizes it and the network executes it.", prerequisites: ["06 Wallet & Keys"] },
  { number: "08", title: "Gas", slug: "gas", description: "Why computation has a cost and how execution limits work.", duration: "14 min", level: "Core", status: "Up next", mentalModel: "Metered compute for a global runtime—not a product surcharge.", prerequisites: ["07 Transactions"] },
  { number: "09", title: "Smart Contracts", slug: "smart-contracts", description: "Deterministic programs that live with their state onchain.", duration: "24 min", level: "Core", status: "Up next", mentalModel: "Backend logic with immutable deployment, public state, and no trusted operator.", prerequisites: ["08 Gas"] },
  { number: "10", title: "EVM", slug: "evm", description: "The virtual machine that makes Ethereum programs portable and verifiable.", duration: "23 min", level: "Core", status: "Up next", mentalModel: "A constrained JVM-like runtime replicated by every validating node.", prerequisites: ["09 Smart Contracts"] },
];

function Arrow() { return <span aria-hidden="true">→</span>; }

export default function RoadmapPage() {
  return (
    <main className="roadmap-page">
      <header className="roadmap-nav">
        <Link className="logo" href="/">Onward3</Link>
        <nav aria-label="Primary navigation"><Link className="active" href="/roadmap">Roadmap</Link><a href="#how-it-works">How it works</a><a href="https://github.com/georgetao730/onward3" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
        <Link className="roadmap-start" href="/learn/what-is-web3">Start at 01 <Arrow /></Link>
      </header>

      <section className="roadmap-hero">
        <p className="eyebrow">V0.1 LEARNING PATH</p>
        <h1>Learn the system<br />before the syntax.</h1>
        <p className="roadmap-intro">A dependency-first route through Web3 for developers who already understand how software is built. Each stop translates a new primitive into a useful Web2 mental model.</p>
        <div className="roadmap-meta"><span><b>10</b> foundation concepts</span><span><b>~3h</b> focused learning</span><span><b>1</b> build path ahead</span></div>
      </section>

      <section className="path-section" aria-labelledby="path-title">
        <div className="section-heading"><div><p className="eyebrow">THE PATH</p><h2 id="path-title">Follow the dependencies.</h2></div><p>Start with shared state, take the Bitcoin detour when you want its historical model, then stay on Ethereum through to the EVM.</p></div>
        <div className="legend" aria-label="Lesson status legend"><span className="legend-start">● Start here</span><span className="legend-core">● Core path</span><span className="legend-explore">● Optional context</span><span className="legend-next">● Up next</span></div>
        <div className="roadmap-flow">
          <div className="flow-line flow-line-main" aria-hidden="true" />
          <div className="flow-line flow-line-branch" aria-hidden="true" />
          <div className="lesson-stack">
            {lessons.map((lesson) => <LessonCard lesson={lesson} key={lesson.slug} />)}
          </div>
          <Link className="build-card" href="/learn/build"><span>FINAL MILESTONE</span><strong>Build</strong><p>Use the primitives together in a small onchain app.</p><i>Ready after EVM <Arrow /></i></Link>
        </div>
      </section>

      <section className="mental-model-section" id="how-it-works">
        <div><p className="eyebrow">THE ONWARD3 DIFFERENCE</p><h2>New primitives.<br />Familiar anchors.</h2></div>
        <div className="model-copy"><p>You do not need to unlearn Web2. You need a precise map of what changes when the network, not your server, owns execution and state.</p><div className="model-grid"><span><b>Blockchain</b>Distributed database</span><span><b>Wallet</b>Identity + signing client</span><span><b>Smart contract</b>Backend logic, with different guarantees</span><span><b>EVM</b>Shared runtime / JVM mental model</span></div></div>
      </section>

      <footer className="roadmap-footer"><Link className="logo" href="/">Onward3</Link><p>Web3, explained for builders.</p><Link href="/learn/what-is-web3">Begin the first concept <Arrow /></Link></footer>
    </main>
  );
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  return <Link href={`/learn/${lesson.slug}`} className={`roadmap-node ${lesson.status.toLowerCase().replaceAll(" ", "-")} ${lesson.branch ?? ""}`}>
    <div className="node-top"><span className="node-number">{lesson.number}</span><CompletionBadge slug={lesson.slug} fallback={lesson.status} /></div>
    <h3>{lesson.title}</h3><p>{lesson.description}</p>
    <div className="node-info"><span>{lesson.duration}</span><span>{lesson.level}</span></div>
    <div className="mental-model"><b>WEB2 MENTAL MODEL</b><span>{lesson.mentalModel}</span></div>
    <div className="prerequisites">{lesson.prerequisites.length ? <>Requires {lesson.prerequisites.join(" · ")}</> : <>Your entry point</>}</div>
    <i className="node-arrow" aria-hidden="true">→</i>
  </Link>;
}
