export default function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => setPage("home")}>
        <span className="logo-dot"></span>
        StackMate
      </div>
      <div className="navbar-links">
        {["home", "about", "contact"].map((p) => (
          <button
            key={p}
            className={`nav-link ${page === p ? "active" : ""}`}
            onClick={() => setPage(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
