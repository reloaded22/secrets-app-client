
export default function Card ({secret}) {

  function showSecret(e) {
    e.target.classList.remove("contract");
  }
  function hideSecret(e) {
    e.target.classList.add("contract");
  }

  return (
    <>
      <div
        id="carousel-card"
        className="card bg-dark h-100 mx-auto"
        title="Anonymous Secret"
      >
        <div className="card-body all-cards d-flex justify-content-center align-items-center">
          <h5
            className="card-title contract"
            onMouseEnter={(e) => showSecret(e)}
            onMouseLeave={(e) => hideSecret(e)}
          >
            {secret}
          </h5>
        </div>
      </div>
    </>
  );
}