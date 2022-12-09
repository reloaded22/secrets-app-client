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
        console.log("Current user:");
        console.log(user);
        setLoggedUser(user);
        setUsers(users);

        console.log("loggedIn:");
        console.log(loggedIn);
        localStorage.setItem("session", loggedIn);
      })
      .catch((err) => console.error(err));
  }, [click]);

  function btnClick() {
    click ? setClick(false) : setClick(true);
  }

  function logOut() {
    localStorage.clear();
    window.location.assign("/app/home");
  }

  const session = JSON.parse(localStorage.getItem("session"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/app/home"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/login"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Login loggedIn={session} btnClick={btnClick} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/register"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Register loggedIn={session} users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/secrets"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Secrets users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/my-secrets"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <MySecrets
                  loggedIn={session}
                  user={loggedUser}
                  btnClick={btnClick}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/edit-secret/:index"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Edit loggedIn={session} user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/my-profile"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Profile loggedIn={session} user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/submit"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Submit loggedIn={session} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/about"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/admin"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Admin loggedIn={session} users={users} btnClick={btnClick} />
                <Footer />
              </>
            }
          />
          <Route
            path="/app/admin-edit/:index"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <AdminEdit loggedIn={session} users={users} />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
