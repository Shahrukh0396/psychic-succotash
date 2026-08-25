import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1>Page not found</h1>
        <p>That URL is not on this site.</p>
        <Link className="btn" to="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
