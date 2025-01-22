
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue]=useState("");
  const handle = (e)=>{

    setValue(value + e.target.innerHTML)

    if(e.target.innerHTML === "="){
      setValue(eval(value))
    }
    
    if(e.target.innerHTML === "AC"){
      setValue("")
    }else if(e.target.innerHTML === "DEL"){
      setValue(value.toString().slice(0, -1))
    }
  }


  return (
    <>
      <div className="main">
        <input type="text" placeholder="0" value={value} readOnly/>
        <div>
          <button onClick={handle}>AC</button>
          <button onClick={handle}>DEL</button>
          <button onClick={handle}>/</button>
          <button onClick={handle}>%</button>
        </div>
        <div>
          <button onClick={handle}>8</button>
          <button onClick={handle}>7</button>
          <button onClick={handle}>9</button>
          <button onClick={handle}>*</button>
        </div>
        <div>
          <button onClick={handle}>5</button>
          <button onClick={handle}>4</button>
          <button onClick={handle}>6</button>
          <button onClick={handle}>-</button>
        </div>
        <div>
          <button onClick={handle}>1</button>
          <button onClick={handle}>2</button>
          <button onClick={handle}>3</button>
          <button onClick={handle}>+</button>
        </div>
        <div>
          <button className="zero" onClick={handle}>0</button>
          <button onClick={handle}>.</button>
          <button onClick={handle}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
