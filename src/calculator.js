import { useState } from "react";
import "./styles.css"


function Calculator(){
    const [result, setResult] = useState("");

    const handleClick= (click)=>{
        setResult(result.concat(click.target?.name));
    };

    const ac=()=>{
        setResult("");
    }

    const del=()=>{
        setResult(result.slice(0,-1));
    }

    const calc=()=>{
        setResult(eval(result).toString());
    }
    return(
        <div className="container">
            {/* <h3>CALCULATOR</h3> */}
            <div className="output">
                <input type="text" disabled value={result}></input>
                
            </div>
            <button onClick={ac}  className="span-two">AC</button>
            <button onClick={del} >DEL</button>
            <button onClick={handleClick} name="/" >/</button>
            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>
            <button onClick={handleClick} name="*">*</button>
            <button onClick={handleClick} name="4">4</button>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
            <button onClick={handleClick} name="-">-</button>
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button>
            <button onClick={handleClick} name="9">9</button>
            <button onClick={handleClick} name="+">+</button>
            <button onClick={handleClick} name=".">.</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={calc} className="span-two">=</button>
            </div>
        

    )
}

export default Calculator;