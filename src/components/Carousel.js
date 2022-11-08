import Card from "./Card"

export default function Carousel ({secrets}) {
    return (
      <div
        id="secretsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-interval="4000"
        onClick="location.href='/secrets'"
      >
        <div className="carousel-inner w-75 mx-auto">
        {secrets.map((secret, i) => {
          return (
            <div
              className={`carousel-item text-capitalize px-1   
              ${i === 0 && "active"} 
              ${
                i % 2 === 0 ? 
                "text-color-1" : 
                "text-color-2"
              }`}
              key={i}
            >
              <Card secret={secret} />
            </div>
          );
        })
        }

        </div>
      </div>
    );
}

