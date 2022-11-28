import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Secrets from "./components/Secrets";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MySecrets from "./components/MySecrets";
import Edit from "./components/Edit";
import Submit from "./components/Submit";


function App() {
  console.log('localStorage.getItem("session"):');
  console.log(JSON.parse(localStorage.getItem("session")));

  localStorage.setItem(
    "session",
    JSON.parse(localStorage.getItem("session")) ? true : false
  );

  const [click, setClick] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    console.log("***useEffect hook from home executed***");
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
    window.location.assign("/api/home");
  }

  const session = JSON.parse(localStorage.getItem("session"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/api/home"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/login"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Login btnClick={btnClick} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/register"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/secrets"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Secrets users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/my-secrets"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <MySecrets user={loggedUser} btnClick={btnClick} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/edit-secret/:index"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Edit user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/delete/:index"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <h1>Request to the front, not to the API</h1>
                <h3>Secret was not deleted</h3>
                <Footer />
              </>
            }
          />
          <Route
            path="/api/my-profile"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Profile user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/submit"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <Submit />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/about"
            element={
              <>
                <Navbar loggedIn={session} logOut={logOut} />
                <About />
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
