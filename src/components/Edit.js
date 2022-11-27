import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Edit () {

  //console.log("*** Index ***");
  const {index} = useParams();
  //console.log(index);

  const [editInput, setEditInput] = useState(""); 

  useEffect(() => {
    axios
      .post("/api/edit-secret", { index: index })
      .then((res) => {
        console.log("***res.data:***");
        console.log(res.data);
        const { secret } = res.data;
        console.log(secret);
        setEditInput(secret);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [index]) // When including "index" in the dependency array,
  //             The "react hook useeffect has a missing dependency"
  //             error dissapears.


  function handleEdition (e) {
    setEditInput(e.target.value);
  };

  function updateSecret(e) {
    e.preventDefault();
    const { index, secret } = e.target;
    console.log(index);
    console.log(secret);
    const data = {
      index: index.value,
      secret: secret.value,
    };
    axios
      .post("/api/submit-update", data)
      .then((res) => {
        console.log(
          "Console log the data received from post /api/submit-update:"
        );
        console.log(res.data);
        window.location.assign(res.data.redirect);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-fluid py-5 text-center">
      <i className="fas fa-key fa-6x"></i>
      <h1 className="display-3">Secrets</h1>
      <p className="secret-text">Edit your secret</p>

      <form onSubmit={updateSecret}>
        <div className="form-group">
          <input
            type="text"
            className="form-control text-center w-75 mx-auto"
            name="secret"
            value={editInput}
            onChange={handleEdition}
            maxLength="500"
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark mt-3"
          name="index"
          value={index}
        >
          Update
        </button>
      </form>
    </div>
  );
}