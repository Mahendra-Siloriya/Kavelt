
const products = [
  '200 ML Bottle',
  '500 ML Bottle',
  '1 Liter Bottle',
  '2 Liter Bottle',
  '5 Liter Bottle',
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
          <h3>Company Offices</h3>
          <h5>Manufacturing By</h5>
          <p>FSSAI Lic.No.:1425105000293</p>
          <p>Address: 44/1/7 Lasudiya Parmar Sanwer Indore, Sawer,Indore, Madhya Pradesh,453771</p>
          <h5>Market By</h5>
          <p>FSSAI Lic.No.:21422850005685</p>
          <p>Address: Bangali Square Indore (M.P) 452001</p>
    
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Indore, Madhya Pradesh, India</p>
          <p >Phone: +91 7771063876</p>
          <p >Email: kavelt99@gmail.com</p>
          
      <div className="footer-column social_link">
        <h3>Follow Us</h3>
        
          <div className="social-icons-row">
            <a href="https://www.instagram.com/kavelt_india?srtk=MTFld3VueDRyZG0ybg==" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://youtube.com/@kaveltindia?si=M3bCUtz0qkL6d_3n/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="https://x.com/officialkavelt" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/in/kavelt-kavelt-35648443b/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
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
