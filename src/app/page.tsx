const lessons = [
  ["1", "Web3", "Overview"], ["2", "Blockchain", "How it works"], ["3", "Bitcoin", "Digital money"], ["4", "Ethereum", "Smart contracts"], ["5", "Wallet", "Your identity"],
  ["6", "Transactions", "Move value"], ["7", "Gas", "Transaction fees"], ["8", "Smart contracts", "Build onchain"], ["9", "EVM", "Under the hood"], ["10", "DeFi", "Real applications"],
];
const benefits = [
  ["⌁", "Web2 analogies", "Complex concepts explained with real-world engineering analogies."],
  ["‹›", "Interactive playgrounds", "Learn by doing with hands-on demos and experiments."],
  ["◇", "Build real projects", "Apply what you learn in practical onchain projects."],
];
function Arrow() { return <span aria-hidden="true">→</span>; }
function Github() { return <span className="github-mark" aria-hidden="true">◖</span>; }

export default function Home() {
  return <main className="site-shell" id="top">
    <header className="browser-frame">
      <div className="browser-chrome"><div className="traffic"><i /><i /><i /></div><div className="address">▣&nbsp;&nbsp; onward3.dev</div></div>
      <nav className="nav"><a className="logo" href="#top">Onward3</a><div className="nav-links"><a href="#roadmap">Roadmap</a><a href="#learn">Learn</a><a href="#playground">Playground</a><a href="#about">About</a></div><div className="nav-end"><a aria-label="GitHub" href="https://github.com/georgetao730/onward3" target="_blank" rel="noreferrer"><Github /></a><a className="small-button" href="#roadmap">Get started</a></div></nav>
      <section className="hero">
        <div className="hero-copy"><span className="pill">From Web2 Developer to Web3 Builder</span><h1>Learn Web3<br />by <em>Building.</em></h1><p>Onward3 is an interactive Web3 learning platform for Web2 developers. Learn from first principles through visual explanations, interactive playgrounds and real projects.</p><div className="hero-actions"><a className="primary-button" href="#roadmap">Start learning <Arrow /></a><a className="secondary-button" href="https://github.com/georgetao730/onward3" target="_blank" rel="noreferrer"><Github /> View on GitHub</a></div></div>
        <div className="hero-orbit" aria-label="Web3 learning topics"><div className="glow" /><div className="orbit ring-one" /><div className="orbit ring-two" /><div className="topic bitcoin"><b>₿</b><div><strong>Bitcoin</strong><span>Digital money</span></div></div><div className="topic ethereum"><b>♦</b><div><strong>Ethereum</strong><span>Smart contracts</span></div></div><div className="topic wallet"><b>▣</b><div><strong>Wallet</strong><span>Your identity</span></div></div><div className="topic apps"><b>▤</b><div><strong>Onchain apps</strong><span>Build the future</span></div></div><div className="builder"><div className="builder-hair" /><div className="builder-face"><i /><i /><b /></div><div className="builder-shirt" /></div></div>
      </section>
      <section className="roadmap-card" id="roadmap"><div className="roadmap-head"><div><h2>Your path onchain</h2><p>A structured learning journey from fundamentals to real projects.</p></div><a href="#learn">View full roadmap <Arrow /></a></div><div className="lesson-track">{lessons.map(([number, title, detail]) => <a href="#learn" className="lesson" key={number}><b>{number}</b><strong>{title}</strong><span>{detail}</span></a>)}</div></section>
      <section className="benefit-grid" id="learn">{benefits.map(([icon, title, text], index) => <article className={`benefit benefit-${index}`} key={title}><b>{icon}</b><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
      <section className="playground-card" id="playground"><div><span className="pill">Learn by doing</span><h2>Try the first<br />playground.</h2><p>See how keys, addresses, and signatures connect before you connect a wallet to an app.</p><a className="primary-button" href="#playground">Open Wallet Playground <Arrow /></a></div><div className="wallet-window"><div className="window-bar"><span /><span /><span /><b>wallet.playground</b></div><h3>Wallet Playground</h3><div className="tabs"><b>Generate</b><span>Sign</span><span>Send</span></div><label>Ethereum address</label><code>0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code><button>Generate new wallet</button></div></section>
      <footer id="about"><a className="logo" href="#top">Onward3</a><p>Web3, explained for builders.</p><a href="#top">Back to top ↑</a></footer>
    </header>
  </main>;
}
