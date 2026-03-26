const matches = [
  { initials: "RK", av: "av1", name: "Riya K. — 2nd year CSE", offer: "Figma", want: "DSA", featured: true },
  { initials: "AM", av: "av2", name: "Arjun M. — 3rd year IT", offer: "DSA", want: "React" },
  { initials: "PS", av: "av3", name: "Priya S. — Final year", offer: "React", want: "ML basics" },
  { initials: "VT", av: "av4", name: "Vivek T. — 2nd year ECE", offer: "Python", want: "Figma" },
];

const steps = [
  { icon: "✉️", title: "Sign up with college email", desc: "Your .ac.in email auto-detects your college. No manual setup." },
  { icon: "🃏", title: "Post your skill swap", desc: "List what you can teach and what you want to learn." },
  { icon: "🤝", title: "Get matched", desc: "Mutual match only — both sides must want what the other offers." },
  { icon: "📅", title: "Schedule & swap", desc: "Pick a time, do the session, rate each other. That's it." },
];

export default function Home({ setPage }) {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">
            🎓 For college students only
          </div>
          <h1 className="hero-title">
            Trade skills,<br />
            not <span>money</span>
          </h1>
          <p className="hero-sub">
            Your campus is full of people who know what you don't — and need what you know. StackMate connects you anonymously for skill swaps. Zero cost, zero awkwardness.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setPage("contact")}>
              Join the waitlist →
            </button>
            <button className="btn-secondary" onClick={() => setPage("about")}>
              How it works
            </button>
          </div>
        </div>

        <div className="hero-right">
          {matches.map((m, i) => (
            <div key={i} className={`match-card ${m.featured ? "featured" : ""}`}>
              <div className={`match-avatar ${m.av}`}>{m.initials}</div>
              <div className="match-info">
                <div className="match-name">{m.name}</div>
                <div className="match-skills">
                  <span className="skill-pill pill-offer">offers {m.offer}</span>
                  <span className="skill-pill pill-want">wants {m.want}</span>
                </div>
              </div>
              {m.featured && <div className="match-badge">matched!</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="stats-row">
        <div className="stat-card">
          <div className="stat-num">0₹</div>
          <div className="stat-label">Cost to use, ever</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">2-way</div>
          <div className="stat-label">Mutual matches only</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">Auto</div>
          <div className="stat-label">Any college, self-onboards</div>
        </div>
      </section>

      <section>
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Four steps. No friction.</p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <div className="step-num">{i + 1}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
