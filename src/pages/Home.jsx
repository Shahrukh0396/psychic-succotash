import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm.jsx";
import { brand, clients, faqs, reviews, rotating, services, work } from "../data.js";
import { useState } from "react";

function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <article className="faq-item" key={item.q}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            {item.q}
            <span>{open === index ? "–" : "+"}</span>
          </button>
          {open === index ? <div>{item.a}</div> : null}
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>
              Digital Marketing Agency
              <br />
              That Never Clocks Out
            </h1>
            <p>
              {brand.name} is a local team for paid search, social, ad networks, and the software
              that keeps it all accountable. We believe in the craft of marketing and the discipline
              of sales — watched around the clock, not just during office hours.
            </p>
            <div className="hero-actions">
              <Link className="btn" to="/work">
                Our portfolio
              </Link>
              <a className="btn" href={brand.phoneHref}>
                Call now
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="awards">
        <div className="wrap">
          <h2>Platforms we run — every hour the auction is open</h2>
          <p>Certified-style coverage across the channels that actually spend.</p>
          <div className="badge-row">
            <div className="badge">
              Google Ads
              <small>Search · Shopping · PMax</small>
            </div>
            <div className="badge">
              Meta
              <small>Blueprint-ready ops</small>
            </div>
            <div className="badge">
              TikTok
              <small>Performance creative</small>
            </div>
            <div className="badge">
              Microsoft Ads
              <small>Search &amp; audience</small>
            </div>
          </div>
          <Link className="btn" to="/about">
            See how we work
          </Link>
        </div>
      </section>

      <section className="marquee-block">
        <div className="wrap">
          <h2>
            Let&apos;s {rotating.join(" | ")}{" "}
            <span>your brand together</span>
          </h2>
          <p>
            You need a desk that can be both a creative engine and a performance engine.
            That is the job — not a slide about it.
          </p>
        </div>
      </section>

      <section className="clients">
        <div className="wrap logo-wall">
          {clients.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <header className="section-head center">
            <h2>Services across ads, social, networks, and software</h2>
            <p>
              Specialized channels plus the software that makes them honest. Pick one, or run the
              full stack.
            </p>
          </header>
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

      <section className="cta-band">
        <div className="wrap">
          <h2>Campaigns stalling overnight? Let&apos;s fix that.</h2>
          <p>
            Low leads usually mean missed targeting, tired creative, or tracking that cannot see
            the sale. We tighten the system until the right people convert.
          </p>
          <Link className="btn" to="/contact">
            Talk strategy
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Why an always-on digital marketing agency?</h2>
            <p>
              Your prospects are searching, scrolling, and comparing after dinner. A shop that only
              works bank hours is leaving money on the table — and letting broken campaigns run
              overnight.
            </p>
          </div>
          <ul className="why-list">
            <li>
              <strong>Social media marketing</strong>
              Prospects are already on Meta, TikTok, and LinkedIn. SSM is a sales channel, not a
              side project.
            </li>
            <li>
              <strong>PPC / search</strong>
              B2B and high-intent local work still starts on Google. We keep you present when they
              type the query.
            </li>
            <li>
              <strong>Ad networks</strong>
              Display and programmatic catch people after the search. Frequency and placements are
              managed, not hoped for.
            </li>
            <li>
              <strong>Software</strong>
              Tracking, pages, and dashboards so media and sales argue from the same numbers.
            </li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <header className="section-head center">
            <h2>Words from the desk next door</h2>
            <p>The kind of feedback we work to earn — straight, specific, no fluff.</p>
          </header>
          <div className="reviews">
            {reviews.map((review) => (
              <blockquote className="review" key={review.name}>
                <p>“{review.text}”</p>
                <cite>{review.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <header className="section-head center">
            <h2>Selected work</h2>
            <p>A sample of the problems we are hired to solve.</p>
          </header>
          <div className="work-grid">
            {work.slice(0, 3).map((item) => (
              <article className="work-card" key={item.title}>
                <div className="tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.industry}</p>
                <p className="result">{item.result}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link className="btn" to="/work">
              Our portfolio
            </Link>
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <header className="section-head center">
            <h2>Frequently asked questions</h2>
          </header>
          <FaqList />
        </div>
      </section>
    </>
  );
}
