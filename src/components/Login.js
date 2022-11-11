import { useState } from "react";
import axios from "axios";

export default function Login({ isLoggedIn }) {
  const [loggedInError, setLoggedInError] = useState("");

  function reqLogin(e) {
    e.preventDefault();
    const { username, password } = e.target;
    console.log(username);
    console.log(password);
    const user = {
      username: username.value,
      password: password.value,
    };
    axios
      .post("/api/login", user)
      .then((res) => {
        console.log(res.data);

        // set the state of the user
        isLoggedIn(res.data.loggedIn);
        setLoggedInError(res.data.loginError);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container pt-5">
      <h1 className="d-flex justify-content-center">Login</h1>
      <h6 className="d-flex justify-content-center text-danger small">
        {loggedInError}
      </h6>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => reqLogin(e)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-dark mt-3 col-4" type="submit">
                    Login
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
