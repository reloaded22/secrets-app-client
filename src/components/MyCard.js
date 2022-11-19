
export default function MyCard ({secret, index, getIndex}) {

  function showSecret(e) {
    e.target.classList.remove("contract");
  }
  function hideSecret(e) {
    e.target.classList.add("contract");
  }

    return (
      <div className="card bg-dark h-100 mx-auto">
        <div className="card-body my-cards d-flex align-items-center justify-content-center">
          <h5
            className="card-title contract"
            onMouseEnter={(e) => showSecret(e)}
            onMouseLeave={(e) => hideSecret(e)}
          >
            {secret}
          </h5>
          <form action="/api/delete" method="post">
            <button
              className="btn btn-outline-danger btn-sm delete"
              name="index"
              value={index}
              title="Delete"
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </form>
          <form action={`/api/edit-secret/${index}`} method="get">
            <button
              className="btn btn-outline-warning btn-sm edit"
              // name="index"
              // value = {index}
              title="Edit"
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </form>
        </div>
      </div>
    );
}