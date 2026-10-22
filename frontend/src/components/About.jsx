
import { useState, useEffect } from 'react';


const slides = [
  {
    image: '/assets/cards_image/distributer.jpeg',
    alt: 'Kavelt water distribution network',
  },
  {
    image: '/assets/cards_image/office.jpeg',
    alt: 'Kavelt office',
  },
  {
    image: '/assets/cards_image/retailer.jpeg',
    alt: 'Kavelt retail partners',
  },
  {
    image: '/assets/cards_image/kavelt_hai_tou_trust_hai.jpeg',
    alt: 'Kavelt water brand',
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
    }, []);

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      (current + 1) % slides.length
    );
  };

  return (
    <section className="trusted-section" id="about">
      <div className="trusted-container">
        <div className="trusted-top-content">
          <h2 className="trusted-heading">
            <span className="js-shine">Indore&apos;s Trusted</span>
            <span className="text-gray">Premium</span>
            <span className="text-gray">Water Brand</span>
          </h2>

          <p className="trusted-desc">
            With over 3 years of experience in the beverage industry, we are bringing a fresh approach to bottled water distribution in Indore. As a growing startup, we are committed to delivering safe, clean, and quality drinking water with reliable service. Our focus is on customer satisfaction, responsible distribution, and making pure drinking water accessible to every household and business.
          </p>
        </div>

        <div className="trusted-carousel-wrapper">
          <div className="carousel-arrows">
            <button
              className="arrow-btn"
              onClick={previous}
              aria-label="Previous slide"
            >
              &larr;
            </button>

            <button
              className="arrow-btn"
              onClick={next}
              aria-label="Next slide"
            >
              &rarr;
            </button>
          </div>

          <div className="carousel-stage">
            {slides.map((slide, index) => {
              let diff = index - activeIndex;

              if (diff > slides.length / 2) diff -= slides.length;
              if (diff < -slides.length / 2) diff += slides.length;

              return (
                <div
                  key={slide.image}
                  className="product-card"
                  style={{
                        transform: `translate(-50%, 0) translateX(${diff * 58}%) scale(${diff === 0 ? 1 : 0.75})`,opacity: Math.abs(diff) <= 1 ? 1 : 0,
                    zIndex: diff === 0 ? 3 : 1,
                  }}
                  aria-hidden={Math.abs(diff) > 1}
                >
                  <div className="card-image-box">
                    <img src={slide.image} alt={slide.alt} loading="lazy" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
