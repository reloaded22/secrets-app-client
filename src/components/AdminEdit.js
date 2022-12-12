import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function AdminEdit ({ loggedIn, users }) {

  if (!loggedIn) window.location.assign("/login");

  const { search } = useLocation();

  const query = new URLSearchParams(search);

  const userId = query.get("userid");

  // console.log(userId);

  // console.log(users);

  const user = users.find(user => user._id === userId);

  // console.log(user);

  let errMsg = "";
  const { index } = useParams();
  let secret = "";
  if (user) { // If I omit this, user.secrets will throw an error
              // in the 1st render and "users" won't be received
    secret = user.secrets && user.secrets[index];
  }

  const [editionInput, setEditionInput] = useState(secret);

  useEffect(() => {
    setEditionInput(secret);
  }, [secret]); // If I don't add secret, it won't work because on the
  // first render (mount) it won't detect the user

  function handleEdition(e) {
    setEditionInput(e.target.value);
  }

  function updateSecret(e) {
    e.preventDefault();
    const { updatedSecret } = e.target;
    const data = {
      user,
      index,
      secret: updatedSecret.value,
    }
    axios
      .post("/api/admin-update", data)
      .then((res) => {
        // console.log(
        //   "Response from post /api/admin-update:"
        // );
        // console.log(res.data);
        if (res.data.message === "Secret updated successfully")
          window.location.assign("/admin");
        else errMsg = "There was an error updating secret, please try again";
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-fluid py-5 text-center">
      <i className="fas fa-key fa-6x"></i>
      <h1 className="display-3">Secrets - Admin</h1>
      <p className="secret-text">Edit this secret</p>
      <h6 className="d-flex justify-content-center text-danger small">
        {errMsg}
      </h6>

      <form onSubmit={updateSecret}>
        <div className="form-group">
          <input
            type="text"
            className="form-control text-center w-75 mx-auto"
            name="updatedSecret"
            value={editionInput}
            onChange={handleEdition}
            maxLength="500"
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3">
          Update
        </button>
      </form>
    </div>
  );
}