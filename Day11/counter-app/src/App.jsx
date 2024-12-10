import { useState } from "react";
import "./App.css";
const App = () => {
  
  const[count,setCount]= useState(0);
  return <div className="count-app">
    <h1>Counter App</h1>
    <h1 className="count-disp">{ count }</h1>
    <br></br>
    <div className="count-body">
      <button className="count-btn"
      onClick={() =>{
        setCount(count+1);
      }}>
        Increment</button>
        <button className="count-btn"
      onClick={() =>{
        setCount(0);
      }}>
        Reset</button>
        <button className="count-btn"
      onClick={() =>{
        setCount(count-1);
      }}>
        decrement</button>
    </div>
    </div>
  
}

export default App;