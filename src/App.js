import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
      <Navbar loggedIn={false}/>
{/*       <h1>Migrating from EJS to React</h1>
        <ul>
          {users.map((user, i)=>{
            return (
              <li key={i}>
              {user.alias}: {user.username}
              </li>
            )
          })}
        </ul> */}
      <Home users={users}/>

    </>
  );
}

export default App;
