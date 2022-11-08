import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";


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
      <Navbar loggedIn={false} />
      <Home users={users} />
      <Footer />
    </>
  );
}

export default App;
