import axios from "axios";
import { useState } from "react";

export default function Register() {

  const [regError, setRegError] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    const { alias, username, password } = e.target;
    const data = {
      alias: alias.value,
      username: username.value,
      password: password.value
    }
    axios.post("/api/register", data)
      .then((res)=>{
        console.log("Console log the data received from post /api/register:");
        console.log(res.data);

        // Set the register error
        if (!res.data.regError) window.location.assign("/api/login");
        else setRegError(res.data.regError);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container pt-5">
      <h1 className="d-flex justify-content-center">Register</h1>
      <h6 className="d-flex justify-content-center text-danger small">
        {regError}
      </h6>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="alias">Alias</label>
                  <input
                    id="alias"
                    type="text"
                    className="form-control"
                    name="alias"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-dark mt-3 col-4">
                    Register
                  </button>
                  <a
                    className="btn btn-warning mt-3 col-4"
                    href="/api"
                    role="button"
                  >
                    Go Back
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
