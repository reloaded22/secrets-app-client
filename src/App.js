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
  
  //const isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;

  const [click, setClick] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/home")
      .then((res) => {
        const { users, user, loggedIn } = res.data;
        setUsers(users);
        console.log(
          `I'm getting the req.isAuthenticated status on my React app on every re-render, Status: ${loggedIn}`
        );
        setLoggedIn(loggedIn);
        //localStorage.setItem("isLoggedIn", loggedIn);
        console.log("Current user:");
        console.log(user);
        setLoggedUser(user);
      })
      .catch((err) => console.error(err));
  }, [click]);

  function loginClick() {
    console.log("loginClick activated");
    click ? setClick(false) : setClick(true);
  }

  function logOut(val) {
    localStorage.clear();
    // Set the login state:
    setLoggedIn(val);
  }

  const [editSecretIndex, setEditSecretIndex] = useState(0);

  console.log("editSecretIndex (initially):");
  console.log(editSecretIndex);

  function getEditSecretIndex (index, loggedIn, logOut) {
    console.log("***getEditSecretIndex called***");
    setEditSecretIndex(index)
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/api/home"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/login"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Login loginClick={loginClick} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/register"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/secrets"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Secrets users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/my-secrets"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <MySecrets user={loggedUser} getIndex={getEditSecretIndex} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/edit-secret/:index"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Edit />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/my-profile"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Profile user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/submit"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
                <Submit />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/about"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={logOut} />
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
