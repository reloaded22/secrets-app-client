import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {users.map((user, i)=>{
            return (
              <li key={i}>{user.alias}</li>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
