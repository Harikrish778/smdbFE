import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  const [success,setSuccess]=useState("")

  return (
    <>
      <nav className="navbar navbar-expand navbar-light" style={{backgroundColor:'black'}}>
        <a className="navbar-brand ms-4" href="">
          {' '}
        <i className="fa-solid fa-film text-warning me-2"></i>7
         <b className="text-light"> SMDB</b>
        </a>
      </nav>

      <div className="container-fluid bg-dark">
        <Add val={setSuccess}/>
        <List success={success}/>
      </div>
    </>
  );
}

export default App;