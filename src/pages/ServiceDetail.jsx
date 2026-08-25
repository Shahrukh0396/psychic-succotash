import { Link, Navigate, useParams } from "react-router-dom";
import { services } from "../data.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="tag" style={{ color: "#f1b4b4", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {service.number} · Service
          </p>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>How we run it</h2>
            <p>{service.body}</p>
            <Link className="btn" to="/contact">
              Start this service
            </Link>
          </div>
          <ul className="why-list">
            {service.points.map((point) => (
              <li key={point}>
                <strong>{point}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
