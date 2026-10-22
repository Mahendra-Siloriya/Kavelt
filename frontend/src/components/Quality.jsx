
const qualityFeatures = [
  {
    icon: '/assets/Quality_image/11.png',
    alt: '11-Stage Purification',
    width: 73,
    height: 56,
    title: '5-Stage Purification',
    description:
      'Every drop passes through an advanced 11-stage purification process, including multi-media filtration, reverse osmosis, ozonation, and UV sterilization for safe and consistent drinking water.',
  },
  {
    icon: '/assets/Quality_image/2.png',
    alt: '121 Quality Checks',
    width: 50,
    height: 63,
    title: '20+ Quality Checks',
    description:
      'Each batch undergoes 20+ rigorous quality checks across our manufacturing and laboratory systems to ensure the same trusted standard in every bottle.',
  },
  {
    icon: '/assets/Quality_image/3.png',
    alt: 'Zero Discharge',
    width: 60,
    height: 60,
    title: 'Zero Discharge',
    description:
      'Our zero-discharge facilities recover, treat, and reuse process water, helping reduce environmental impact and support responsible manufacturing.',
  },
  {
    icon: '/assets/Quality_image/4.png',
    alt: 'Integrated Operations',
    width: 60,
    height: 60,
    title: 'Integrated Operations',
    description:
      'From preform moulding to filling and packaging, our integrated operations ensure complete quality control and supply consistency.',
  },
  {
    icon: '/assets/Quality_image/5.png',
    alt: 'Green Manufacturing',
    width: 60,
    height: 60,
    title: 'Green Manufacturing',
    description:
      'Energy-efficient processes, recyclable packaging initiatives, and responsible water management help us manufacture with a lower environmental footprint.',
  },
  {
    icon: '/assets/Quality_image/6.png',
    alt: 'Hygienic Filling Systems',
    width: 60,
    height: 60,
    title: 'Hygienic Filling Systems',
    description:
      'Fully automated process with zero human touch operate in a controlled hygienic environment to maintain purity from production to packaging.manufacturing.',
  },
];

export default function Quality() {
  return (
    <section className="quality-section" id="quality">
      <div className="quality-card-box">
        <div className="quality-header-grid">
          <div className="quality-title-col">
            <h2 className="quality-main-heading">
              Impeccable
              <br />
              <span className="red-highlight">Quality</span>
              <br />
              Standards <span className="red-highlight">&gt;</span>
            </h2>
          </div>

          <div className="quality-desc-col">
            <p className="quality-desc-primary">
              Every drop of Kavelt Water is tried and tested rigorously
              for the safety of our loved ones.
            </p>

            <p className="quality-desc-secondary">
              We follow the best practices for manufacturing and comply
              with international safety, hygiene, and quality standards
              to deliver products that are safe, durable, and of the
              highest excellence.
            </p>
          </div>
        </div>

        <div className="quality-hero-wrapper">
          <img
            src="/assets/Quality_image/quality_image.jpg"
            alt="Kavelt Water quality and manufacturing"
            className="quality-hero-img"
            loading="lazy"
          />
        </div>

        <div className="quality-steps-grid">
          {qualityFeatures.map((feature) => (
            <article className="quality-step-item" key={feature.title}>
              <div className="step-header">
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  className="step-icon"
                  loading="lazy"
                />

                <h3 className="step-title">{feature.title}</h3>
              </div>

              <p className="step-text">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
