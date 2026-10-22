
const skylineImage = '/assets/footer/footer_page1.png';

export default function Marquee() {
  return (
    <div className="marquee-outer" aria-label="Indore city skyline">
      <div className="marquee-track">
        {[1, 2].map((group) => (
          <div
            className="marquee-group"
            key={group}
            aria-hidden={group === 2}
          >
            {Array.from({ length: 4 }, (_, index) => (
              <img
                key={index}
                src={skylineImage}
                alt={group === 1 && index === 0 ? 'Indore skyline illustration' : ''}
                className="skyline-img"
                draggable="false"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
