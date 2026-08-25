import { Link } from "react-router-dom";
import { brand, services } from "../data.js";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>About 24/7 Marketing Solutions</h1>
          <p>
            A local digital marketing desk built for businesses that cannot afford campaigns that
            sleep.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>The night shift is the product.</h2>
            <p>
              Most agencies are creative shops with a media login. We are an operations team that
              happens to run ads — PPC, social, networks — and the software that proves they
              worked.
            </p>
            <p>
              The name is literal. Someone is watching pacing, pixels, and creative fatigue when
              the rest of the market has gone home.
            </p>
            <Link className="btn" to="/contact">
              Start a project
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <b>24/7</b>
              Monitoring window for live accounts
            </div>
            <div className="stat">
              <b>4</b>
              Core engines: PPC, SSM, networks, software
            </div>
            <div className="stat">
              <b>Same day</b>
              Typical first reply on a new brief
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <header className="section-head">
            <h2>What we actually do</h2>
            <p>
              From high-intent search to paid social, then the plumbing: tracking, pages, and
              reporting your sales team will open.
            </p>
          </header>
          <div className="service-grid">
            {services.slice(0, 4).map((service) => (
              <Link className="service-card" key={service.slug} to={`/services/${service.slug}`}>
                <div className="num">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Talk strategy with an expert</h2>
          <p>Call {brand.phone} or send the brief. We will tell you what to run first.</p>
          <Link className="btn" to="/contact">
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
