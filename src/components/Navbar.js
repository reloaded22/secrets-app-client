import axios from "axios";

export default function Navbar({loggedIn, logOut}) {

    //console.log(loggedIn);

    function reqLogOut () {
      axios
      .get("/api/logout")
      .then(res => {
        //console.log(res.data);
        logOut(res.data.loggedIn);
      })
      .catch(err => console.error(err));
    }

    return (
      <header className="py-3 bg-dark text-white">
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="/app/home"
            className="text-white text-decoration-none col-3 col-lg-2"
          >
            <i className="fas fa-key fa-2x ms-3"></i>
          </a>

          <ul className="nav">
            <li>
              <a href="/app/home" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/app/secrets" className="nav-link px-2 text-white">
                Secrets
              </a>
            </li>
            <li>
              <a href="/app/about" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <div className="col-3 col-lg-2 text-center">
            {!loggedIn ? (
              <>
                <a
                  className="btn btn-outline-light btn-sm w-75"
                  href="/app/login"
                  role="button"
                >
                  Login
                </a>
                <a
                  className="btn btn-warning btn-sm mt-1 w-75"
                  href="/app/register"
                  role="button"
                >
                  Sign-up
                </a>
              </>
            ) : (
              <>
                <div className="dropdown">
                  {/* eslint-disable-next-line */}
                  <a
                    href="#"
                    className="d-block text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-secret-512.png"
                      alt="mdo"
                      width="40"
                      height="40"
                      className="rounded-circle bg-white"
                    />
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="/app/submit">
                        New secret...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/app/my-secrets">
                        My Secrets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/app/my-profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={reqLogOut}>
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    );
}

