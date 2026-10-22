import About from '../components/About';
import Presence from '../components/Presence';
import Quality from '../components/Quality';
import Footer from '../components/Footer';

const products = [
  {
    name: 'Kavelt Water 200 ML',
    pack: 'Pack of 48',
    image: '/assets/producat_image/200ml.jpeg',
  },
  {
    name: 'Kavelt Water 500 ML',
    pack: 'Pack of 24',
    image: '/assets/producat_image/500ml.png',
  },
  {
    name: 'Kavelt Water 1 Liter',
    pack: 'Pack of 12',
    image: '/assets/producat_image/1L (2).png',
  },
  {
    name: 'Kavelt Water 2 Liter',
    pack: 'Pack of 6',
    image: '/assets/producat_image/2L.jpg',
  },
  {
    name: 'Kavelt Water 5 Litres',
    pack: 'Family Pack',
    image: '/assets/producat_image/6L.jpeg',
  },
  {
    name: 'Kavelt Water 20 Litres',
    pack: 'Bubble Jar',
    image: '/assets/producat_image/20L.jpeg',
  },
];

export default function Home() {
  return (
    <main>
        
      <section className="hero" id="home">
        <div className="hero-background" />
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span>PURE WATER.</span>
              <span>MADE FOR <strong>INDORE.</strong></span>
            </h1>
            <p className="hero-subtitle">
              Indore&apos;s Trusted Water Brand
            </p>
            <div className="hero-underline" />
          </div>

          <div className="hero-product">
            <img
              src="/assets/home_image.png"
              alt="Kavelt Water Bottles"
            />
          </div>
        </div>
      </section>

      <About />

      <section className="products-section" id="products">
        <div className="products-container">
          <div className="products-top-header">
            <div className="products-title">
              <h2>
                <span>Find the</span>{' '}
                <span className="js-shine text-red">perfect bottle</span>{' '}
                <span>for every</span>{' '}
                <span className="js-shine text-red">occasion.</span>
              </h2>
            </div>

            <div className="products-subtitle">
              <p>
                Whether you&apos;re on the move, at work, at home, or
                serving guests, Kavelt offers thoughtfully designed
                pack sizes to suit every lifestyle and hydration need.
              </p>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article className="product-item-card" key={product.name}>
                <div className="product-img-holder">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="pack-size">({product.pack})</span>
                  <a href="/order" className="enquire-btn">
                    ENQUIRE
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Presence />

      <Quality />

    </main>
  );
}
