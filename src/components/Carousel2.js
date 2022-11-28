import Carousel from 'react-bootstrap/Carousel';
import Card from "./Card";

export default function Carousel2 ({secrets}) {
    return (
      <>
        <Carousel indicators={false} className="w-75 mx-auto">
          {secrets.map((secret, i) => {
            return (
              <Carousel.Item
                className={`text-capitalize px-1   
              ${i === 0 && "active"} 
              ${i % 2 === 0 ? "text-color-1" : "text-color-2"}`}
                key={i}
              >
                <div
                  onClick={() =>
                      window.location.assign("/app/secrets")
                  }
                >
                  <Card secret={secret} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
}

