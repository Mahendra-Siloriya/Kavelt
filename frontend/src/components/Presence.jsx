
const columns = {
  left: [
    {
      number: '3+',
      label: <>Years of<br />Experience</>,
      image: '/assets/presence/years.png',
      imageClass: 'img-pos-1',
      className: 'aspect-1-37',
    },
    {
      number: '50,000+',
      label: 'Clients',
      image: '/assets/presence/client.png',
      imageClass: 'img-pos-2',
      className: 'aspect-0-97',
    },
  ],
  center: [
    {
      number: '5+',
      label: 'Distributors',
      image: '/assets/presence/distributer.png',
      imageClass: 'img-pos-center',
    },
  ],
  right: [
    {
      number: '500+',
      label: <>Retail Outlets &<br />Hotels</>,
      image: '/assets/presence/Retails.png',
      imageClass: 'img-pos-4',
      className: 'aspect-1-37 text-right-card',
    },
    {
      number: '10+',
      label: <>Delivery<br />Vehicles</>,
      image: '/assets/presence/production.png',
      imageClass: 'img-pos-5',
      className: 'aspect-0-97',
    },
  ],
};

function PresenceCard({ item, tall = false }) {
  return (
    <article className={`card-presence ${item.className || ''} ${tall ? 'card-tall' : ''}`}>
      <div className="card-num">{item.number}</div>
      <div className="card-label">{item.label}</div>
      <img
        src={item.image}
        alt=""
        className={item.imageClass}
        loading="lazy"
      />
    </article>
  );
}

export default function Presence() {
  return (
    <section className="presence-section" id="presence">
      <div className="presence-header">
        <p className="presence-eyebrow">OUR NETWORK</p>
        <h2>Indore Presence</h2>
      </div>

      <div className="grid-presence-container">
        <div className="presence-col">
          {columns.left.map((item) => (
            <PresenceCard key={item.number + item.image} item={item} />
          ))}
        </div>

        <div className="presence-col presence-col-center">
          <PresenceCard item={columns.center[0]} tall />
        </div>

        <div className="presence-col">
          {columns.right.map((item) => (
            <PresenceCard key={item.number + item.image} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
