import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { nav } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="logo" to="/" onClick={() => setOpen(false)}>
          24/7 <span>MS</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {nav.map((item) => (
            <div className="nav-item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <strong>{item.label}</strong>
                <small>{item.sub}</small>
              </NavLink>
              {item.children ? (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link key={child.to} to={child.to} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link className="btn" to="/contact" onClick={() => setOpen(false)}>
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
