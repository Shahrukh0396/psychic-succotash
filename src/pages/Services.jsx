import { Link } from "react-router-dom";
import { services } from "../data.js";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Services</h1>
          <p>360° coverage of the channels we actually operate — plus the software underneath.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" key={service.slug} to={`/services/${service.slug}`}>
                <div className="num">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
