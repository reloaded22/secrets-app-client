import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secrets from "./components/Secrets";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MySecrets from "./components/MySecrets";


function App() {

  useEffect(() => {
    // Set the logged user from the local storage:
    const userLocal = localStorage.getItem("user");
    setLoggedUser(JSON.parse(userLocal));
    // Set the logged in state from the local storage:
    const loggedInLocal = localStorage.getItem("isLoggedIn");
    setLoggedIn(loggedInLocal);
  }, []);

  function logOut(val) {
    setLoggedIn(val);
    localStorage.clear();
  }
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/home")
      .then((res) => {
        //console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  },[])

const [loggedIn, setLoggedIn] = useState(false);
const [loggedUser, setLoggedUser] = useState({});

function userData(data) {
  // Set the logged user:
  setLoggedUser(data.user);
  localStorage.setItem("user", JSON.stringify(data.user));

  // Set the state of the user:
  setLoggedIn(data.loggedIn);
  localStorage.setItem("isLoggedIn", data.loggedIn);
};



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/api/home"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/login"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
                <Login userData={(data) => userData(data)} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/register"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/secrets"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
                <Secrets users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/my-secrets"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
                <MySecrets user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/my-profile"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
                <Profile user={loggedUser} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/about"
            element={
              <>
                <Navbar loggedIn={loggedIn} logOut={(val) => logOut(val)} />
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
