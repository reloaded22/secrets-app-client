
export default function Card ({secret}) {
    return (
      <>
        <div className="card bg-dark h-100 mx-auto" title="Anonymous Secret">
          <div className="card-body all-cards d-flex justify-content-center align-items-center">
            <h5 className="card-title contract">{secret}</h5>
          </div>
        </div>
      </>
    );
}