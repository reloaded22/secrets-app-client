
export default function EmptyCard() {

  return (
    <div className="card bg-secondary h-100 mx-auto">
      <div className="card-body d-flex align-items-center justify-content-center">
        <h5
          className="card-title"
        >
          {"<Empty>"}
        </h5>
      </div>
    </div>
  );
}
