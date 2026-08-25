import { Link } from "react-router-dom";
import { work } from "../data.js";

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Our portfolio</h1>
          <p>Selected problems we are hired to solve across PPC, social, networks, and software.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap work-grid">
          {work.map((item) => (
            <article className="work-card" key={item.title}>
              <div className="tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.industry}</p>
              <p className="result">{item.result}</p>
            </article>
          ))}
        </div>
        <p className="wrap" style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link className="btn" to="/contact">
            Discuss a similar brief
          </Link>
        </p>
      </section>
    </>
  );
}
