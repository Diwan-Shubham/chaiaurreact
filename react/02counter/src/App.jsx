import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  //  let counter = 15
  const addValue = () => {
    console.log("clicked", Math.random());

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 2);
  };
  const reduceVal=()=>{
    if(counter===0)
      {
        alert("the value cannot be decreased")
      }else{
        counter=counter-1;
        setCounter(counter)
      }
  }
  return (
    <>
      <h1> Chai aur React</h1>
      <h2> Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reduceVal}>Remove value</button>
    </>
  );
}

export default App;
