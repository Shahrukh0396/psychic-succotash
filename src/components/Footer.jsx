import { Link } from "react-router-dom";
import { brand, nav, services } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>Headquarters</h3>
          <p>
            Karachi — HQ
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
        </div>
        <div>
          <h3>Speak to us</h3>
          <p>
            <a href={brand.phoneHref}>{brand.phone}</a>
            <br />
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <br />
            <a href={brand.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </p>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services we offer</h3>
          <ul>
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} 24/7 Marketing Solutions. All rights reserved.</p>
        <p>
          {brand.email} · {brand.phone}
        </p>
      </div>
      <div className="wrap powered-by">
        <a href="https://linton-tech.com" target="_blank" rel="noreferrer">
          <span className="powered-mark" aria-hidden="true">
            LT
          </span>
          <span>
            Powered by <strong>Linton Tech LLC</strong>
          </span>
        </a>
      </div>
    </footer>
  );
}
