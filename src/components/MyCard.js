import axios from "axios";

export default function MyCard({ secret, index, btnClick }) {

  function handleEdition(e) {
    e.preventDefault();
    // I don't need to make any call to my API here, I just need
    // to redirect (in the front end) to my edit-secret page, where
    // I'm going to make two things:
    //   1) Get the secret given the index, in order to show it in 
    //      the placeholder.
    //   2) Post request with the updated secret.

    // window.location.href = `/api/edit-secret/${index}`;
    window.location.assign(`/app/edit-secret/${index}`);
  }

  function handleDeletion(e) {
    e.preventDefault();
    axios.get(`/api/delete/${index}`)
      .then((res) => {
      console.log(res.data);
      //window.location.assign("/api/my-secrets");
      // It works with window location but it refreshes the hole page
      // So I add the change of the status of "click" here because I
      // want the status to change AFTER the database has been updated
      btnClick(); // => This is my useEffect trigger
      // If I call the function in the button itself, the status of
      // "click" will trigger the useEffect function in home before
      // the database has change so it won't update the secrets in the
      // first re-render
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
            //onClick={btnClick}
            // If I call the function here, the status of "click"
            // will trigger the useEffect function in home BEFORE
            // the database has change so it won't update the secrets
            // in the first re-render
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