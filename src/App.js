import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secrets from "./components/Secrets";
import About from "./components/About";


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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/api"
            element={
              <>
                <Navbar loggedIn={true} />
                <Home users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/secrets"
            element={
              <>
                <Navbar loggedIn={true} />
                <Secrets users={users} />
                <Footer />
              </>
            }
          />
          <Route
            path="/api/about"
            element={
              <>
                <Navbar loggedIn={true} />
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
