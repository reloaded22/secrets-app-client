import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Edit ({ loggedIn, user }) {

  if (!loggedIn) window.location.assign("/login");

  // In this component I'm going to make two things:
  //   1) Get the secret given the index, in order to show it in
  //      the placeholder.
  //   2) Post request with the updated secret.
  ///////////////////////////////////////////////////////////////
  let errMsg = "";
  const { index } = useParams();
  const secret = user.secrets ? user.secrets[index] : "";

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
      index,
      secret: updatedSecret.value,
    }
    axios
      .post("/api/submit-update", data)
      .then((res) => {
        // console.log(
        //   "Response from post /api/submit-update:"
        // );
        // console.log(res.data);
        if (res.data.message === "Secret updated successfully")
          window.location.assign("/my-secrets");
        else errMsg = "There was an error updating secret, please try again";
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-fluid py-5 text-center">
      <i className="fas fa-key fa-6x"></i>
      <h1 className="display-3">Secrets</h1>
      <p className="secret-text">Edit your secret</p>
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