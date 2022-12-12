import axios from "axios";

export default function AdminCard({ user, secret, index, btnClick }) {

  function handleEdition(e) {
    e.preventDefault();
    window.location.assign(`/admin-edit/${index}?userid=${user._id}`);
  }

  function handleDeletion(e) {
    e.preventDefault();
    axios.get(`/api/admin-delete/${index}?userid=${user._id}`)
      .then((res) => {
      //   console.log("res.data:");
      // console.log(res.data); //Empty
      btnClick();
    });
  }

  return (
    <div className="card bg-dark h-100 mx-auto">
      <div className="card-body my-cards d-flex align-items-center justify-content-center">
        <h5
          className="card-title contract"
          onMouseEnter={(e) => window["showSecret"](e)}
          onMouseLeave={(e) => window["hideSecret"](e)}
        >
          {secret}
        </h5>
        {/* Delete Button */}
        <form onSubmit={handleDeletion}>
          <button
            className="btn btn-outline-danger btn-sm delete"
            title="Delete"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </form>
        {/* Edit Button */}
        <form onSubmit={handleEdition}>
          <button className="btn btn-outline-warning btn-sm edit" title="Edit">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </form>
      </div>
    </div>
  );
}