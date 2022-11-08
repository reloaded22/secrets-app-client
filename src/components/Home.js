import Card from "./Card";

export default function Home ({users}) {


    return (
      <div className="container-fluid pt-5 text-center">
        <i className="fas fa-key fa-6x"></i>
        <h1 className="display-3">Secrets</h1>
        <p className="lead">Don't keep your secrets, share them anonymously!</p>
        <hr />
        <div
          id="secretsCarousel"
          className="carousel slide border border-dark"
          data-bs-ride="carousel"
          data-bs-pause="false"
          data-bs-interval="4000"
        >
          <div className="carousel-inner w-75 mx-auto">
            <div
              className="carousel-item text-capitalize text-color-1 px-1"
              key={Math.floor(Math.random() * 999)}
            >
              <img src="https://picsum.photos/200/300" alt="anything"/>
            </div>
          </div>
        </div>
      </div>
    );
}