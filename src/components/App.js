import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Secrets from "./Secrets";
import About from "./About";
import Login from "./Login";
import Profile from "./Profile";
import MySecrets from "./MySecrets";
import Edit from "./Edit";
import Submit from "./Submit";
import Register from "./Register";
import Admin from "./Admin";
import AdminEdit from "./AdminEdit";


function App() {
  // console.log('localStorage.getItem("session"):');
  // console.log(JSON.parse(localStorage.getItem("session")));

  localStorage.setItem(
    "session",
    JSON.parse(localStorage.getItem("session")) ? true : false
  );

  const [click, setClick] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/home")
      .then((res) => {
        const { users, user, loggedIn } = res.data;
        // console.log("Current user:");
        // console.log(user);
        setLoggedUser(user);
        setUsers(users);

        // console.log("loggedIn:");
        // console.log(loggedIn);
        localStorage.setItem("session", loggedIn);
      })
      .catch((err) => console.error(err));
  }, [click]);

  function btnClick() {
    click ? setClick(false) : setClick(true);
  }

  function logOut() {
    localStorage.clear();
    window.location.assign("/");
  }

  const session = JSON.parse(localStorage.getItem("session"));

  return (
    <>
      <Navbar loggedIn={session} logOut={logOut} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route
            path="/login"
            element={<Login loggedIn={session} btnClick={btnClick} />}
          />
          <Route
            path="/register"
            element={<Register loggedIn={session} users={users} />}
          />
          <Route path="/secrets" element={<Secrets users={users} />} />
          <Route
            path="/my-secrets"
            element={
              <MySecrets
                loggedIn={session}
                user={loggedUser}
                btnClick={btnClick}
              />
            }
          />
          <Route
            path="/edit-secret/:index"
            element={<Edit loggedIn={session} user={loggedUser} />}
          />
          <Route
            path="/my-profile"
            element={<Profile loggedIn={session} user={loggedUser} />}
          />
          <Route path="/submit" element={<Submit loggedIn={session} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin"
            element={
              <Admin loggedIn={session} users={users} btnClick={btnClick} />
            }
          />
          <Route
            path="/admin-edit/:index"
            element={<AdminEdit loggedIn={session} users={users} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
