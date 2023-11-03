import React, { useState } from "react";
import Todolists from "./Todolists";

const App = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([]);

  const textInserted = (event) => {
    setInput(event.target.value);
  };

  const showValue = () => {
    setDisplay((oldItems) => {
      return [...oldItems, input];
    });

    setInput("");
  };

  const deleteItems = (id)=>{
    setDisplay((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items"
            value={input} onChange={textInserted} />
          <button onClick={showValue}>+</button>

          <ol>
            {/* <li>{display}</li> */}
            {display.map((itemval, index) => {
              return <Todolists 
              key={index} 
              id={index} 
              text={itemval}
              onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
};

export default App;