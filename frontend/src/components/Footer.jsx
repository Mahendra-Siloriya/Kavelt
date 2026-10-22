
const products = [
  '200 ML Bottle',
  '500 ML Bottle',
  '1 Liter Bottle',
  '2 Liter Bottle',
  '6 Liter Bottle',
  '20 Liter Jar',
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/#home" className="footer-logo">
            KAVELT
          </a>

          <p className="footer-tagline">PURE WATER. MADE FOR INDORE.</p>

          <p className="footer-description">
            Refreshing hydration for homes, businesses and communities.
            Discover Kavelt packaged drinking water.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/#home">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#products">Our Products</a>
          <a href="/#presence">Our Presence</a>
          <a href="/#quality">Quality Standards</a>
        </div>

        <div className="footer-column">
          <h3>Our Products</h3>
          {products.map((product) => (
            <a href="/#products" key={product}>
              {product}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Indore, Madhya Pradesh, India</p>
          <p >Phone: +91 7771063876</p>
          <p >Email: kavelt99@gmail.com</p>
          
            <div className="footer-column">
            <h3>Follow Us</h3>
            <a
                href="https://www.instagram.com/kavelt_india?srtk=MTFld3VueDRyZG0ybg=="
                target="_blank"
                rel="noreferrer"
            >
                Instagram ↗
            </a>

            <a
                href="https://youtube.com/@kaveltindia?si=M3bCUtz0qkL6d_3n/"
                target="_blank"
                rel="noreferrer"
            >
                YouTube ↗
            </a>
            </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kavelt Water. All rights reserved.</p>
        <a href="/#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
