import { useState } from "react";
import { brand } from "../data.js";

export default function LeadForm({ dark = true, idPrefix = "lead" }) {
  const [status, setStatus] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Project brief from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus("Got it. We’ll come back with a next step — usually the same day.");
    form.reset();
  }

  return (
    <form className={`lead-form${dark ? " hero-form" : " light-form"}`} onSubmit={onSubmit}>
      <div className="form-row">
        <input id={`${idPrefix}-name`} name="name" placeholder="Your Name" autoComplete="name" required />
        <input id={`${idPrefix}-phone`} name="phone" placeholder="Phone No" autoComplete="tel" required />
      </div>
      <input id={`${idPrefix}-email`} name="email" type="email" placeholder="Your Email" autoComplete="email" required />
      <textarea id={`${idPrefix}-message`} name="message" rows="5" placeholder="Your message" required />
      <button className="btn" type="submit">
        Submit
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
