import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", college: "", role: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", college: "", role: "", message: "" });
  };

  return (
    <main className="page">
      <div className="contact-layout">
        <div className="contact-left">
          <h1 className="contact-title">
            Let's get you on the list
          </h1>
          <p className="contact-sub">
            StackMate is in early development. If you're a student who'd actually use this — or wants to help build it — drop your details. We'll reach out when your college goes live.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon">📬</div>
              <span>hello@stackmate.in (coming soon)</span>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🏫</div>
              <span>Available for any Indian college with a .ac.in domain</span>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🛠️</div>
              <span>Looking for early testers and contributors</span>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">⚡</div>
              <span>Built solo — response might take a day or two</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-title">Join the waitlist</div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Arjun Mehta"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">College email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="you@college.ac.in"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">College name</label>
                <input
                  className="form-input"
                  type="text"
                  name="college"
                  placeholder="VIT Vellore"
                  value={form.college}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">I am a...</label>
                <select
                  className="form-select"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                >
                  <option value="">Select one</option>
                  <option value="student">Student (want to use it)</option>
                  <option value="developer">Student dev (want to contribute)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">What skill would you swap? (optional)</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="e.g. I'd offer DSA help in exchange for someone teaching me Figma..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">
              Join waitlist →
            </button>

            <div className={`success-msg ${submitted ? "show" : ""}`}>
              You're on the list! We'll reach out when your college goes live 🎉
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
