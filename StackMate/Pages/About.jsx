const values = [
  { title: "Anonymous first", text: "Your name and photo stay hidden until both sides agree to connect. No cold rejections, no social pressure." },
  { title: "Campus-only trust", text: "StackMate only works within your college. You're swapping with people who share your campus, your syllabus, your pressures." },
  { title: "Equal exchange", text: "No one is doing a favour. Every match is mutual — you both need something the other has. That makes it feel fair." },
  { title: "No money, ever", text: "Skills are the currency here. We believe students shouldn't pay to learn from each other." },
];

const techStack = ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "Supabase Auth", "Supabase Realtime", "Vercel", "Railway"];

export default function About() {
  return (
    <main className="page">
      <section className="about-hero">
        <div className="about-tag">About StackMate</div>
        <h1 className="about-title">
          Built because asking for help felt weird
        </h1>
        <p className="about-intro">
          StackMate started from a simple frustration — every college has students who are brilliant at something and struggling with something else. But there was no good way to connect them. Asking friends felt like owing a favour. Hiring tutors was expensive. So we built the thing in between.
        </p>
      </section>

      <div className="about-grid">
        <div className="about-card accent-orange">
          <div className="about-card-icon">🔥</div>
          <div className="about-card-title">The problem we're solving</div>
          <div className="about-card-text">
            Skills exist all over campus but stay invisible. The person who can explain DSA in simple Hindi is two floors above you. The Figma wizard who'd trade for some Python help is in the next hostel block. StackMate makes that visible — safely and anonymously.
          </div>
        </div>
        <div className="about-card accent-green">
          <div className="about-card-icon">💡</div>
          <div className="about-card-title">Why it works differently</div>
          <div className="about-card-text">
            When you sign up with your college email, you're automatically placed in your college's private community. IIT Delhi students only see IIT Delhi students. VIT students only see VIT students. One platform, many invisible walls — like Discord servers but for your campus.
          </div>
        </div>
      </div>

      <section className="values-section">
        <h2 className="section-title">What we believe</h2>
        <p className="section-sub">The principles behind every design decision.</p>
        <div className="values-list">
          {values.map((v, i) => (
            <div key={i} className="value-row">
              <div className="value-num">0{i + 1}</div>
              <div>
                <div className="value-title">{v.title}</div>
                <div className="value-text">{v.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="builder-section">
        <div className="builder-title">Built by a student, for students</div>
        <p className="builder-text">
          This is a fullstack project built with a completely free stack. No funding, no team, no startup pitch. Just a real problem and a working solution. The multi-tenant architecture means any college in India can use it the moment their first student signs up — no manual onboarding needed.
        </p>
        <div className="tech-pills">
          {techStack.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
