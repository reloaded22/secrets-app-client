import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secrets from "./components/Secrets";
import About from "./components/About";
import Login from "./components/Login";


function App() {

  
  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get("/api")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  },[])

const [loggedIn, setLoggedIn] = useState(false);

function isLoggedIn(val) {
  setLoggedIn(val);
};


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/api"
            element={
              <>
                <Navbar loggedIn={loggedIn} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/login"
            element={
              <>
                <Navbar loggedIn={loggedIn} />
                <Login isLoggedIn={(val)=>isLoggedIn(val)}/>
                <Footer />
              </>
            }
          />
          <Route
            path="/api/register"
            element={
              <>
                <Navbar loggedIn={loggedIn} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/secrets"
            element={
              <>
                <Navbar loggedIn={loggedIn} />
                <Secrets users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/about"
            element={
              <>
                <Navbar loggedIn={loggedIn} />
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
