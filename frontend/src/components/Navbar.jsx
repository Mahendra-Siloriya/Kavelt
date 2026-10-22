
import { useState } from 'react';

export default function Navbar({ onOrderClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleOrderClick = () => {
    closeMenu();
    onOrderClick?.();
  };

  return (
    <>
      <header className="main-header">
        <div className="header-inner">
          <nav className="nav-left">
            <a href="/#about">About Us</a>
            <a href="/#products" className="active">
              Products
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <a href="/#home" className="brand-logo">
            <div className="logo-box">KAVELT</div>
            <div className="logo-subtitle">PREMIUM WATER</div>
          </a>

          <nav className="nav-right">
            <a href="/#contact" className="contact-link">
              Contact Us
            </a>

            <button
              type="button"
              className="order-btn"
              onClick={handleOrderClick}
            >
              <span>Order Now</span>
              <span aria-hidden="true">→</span>
            </button>
          </nav>
        </div>
      </header>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/#about" onClick={closeMenu}>
          About Us
        </a>
        <a href="/#products" onClick={closeMenu}>
          Products
        </a>
        <a href="/#presence" onClick={closeMenu}>
          Presence
        </a>
        <a href="/#quality" onClick={closeMenu}>
          Quality Standards
        </a>
        <a href="/#contact" onClick={closeMenu}>
          Contact Us
        </a>

        <button
          type="button"
          className="order-btn mobile-order-btn"
          onClick={handleOrderClick}
        >
          <span>Order Now</span>
          <span aria-hidden="true">→</span>
        </button>
      </nav>
    </>
  );
}
