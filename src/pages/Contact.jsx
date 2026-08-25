import LeadForm from "../components/LeadForm.jsx";
import { brand } from "../data.js";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Contact us</h1>
          <p>Tell us the channel, the budget range, and the number that actually matters.</p>
        </div>
      </section>
      <section className="section contact-page">
        <div className="wrap contact-grid">
          <div>
            <h2>Talk strategy with an expert</h2>
            <p>
              We reply with a clear next step — not a 40-page deck. Phone, WhatsApp, or the form
              all reach the same desk.
            </p>
            <p>
              <strong style={{ color: "var(--ink)" }}>Headquarters</strong>
              <br />
              {brand.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <a href={brand.mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </p>
            <p>
              <strong style={{ color: "var(--ink)" }}>Speak to us</strong>
              <br />
              <a href={brand.phoneHref}>{brand.phone}</a>
            </p>
            <p>
              <strong style={{ color: "var(--ink)" }}>Email</strong>
              <br />
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </p>
            <p>
              <strong style={{ color: "var(--ink)" }}>WhatsApp</strong>
              <br />
              <a href={brand.whatsapp} target="_blank" rel="noreferrer">
                Start a chat
              </a>
            </p>
          </div>
          <LeadForm dark={false} idPrefix="contact" />
        </div>
      </section>
    </>
  );
}
