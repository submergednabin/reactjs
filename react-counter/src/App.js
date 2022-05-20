import React, { useState, useEffect } from "react";

function App() {
  const data = [
    {
      id: 1,
      title: "hello 1",
      content: "lorem ipsum is false",
    },
    {
      id: 2,
      title: "hello 2",
      content: "lorem ipsum is false 2",
    },
    {
      id: 3,
      title: "hello 3",
      content: "lorem ipsum is false 3",
    },
  ];
  const[counter, setCounter] = useState(0);

  const addCounter = () =>{
    setCounter(counter + 1);
  }
  const subCounter = () =>{
    setCounter(counter - 1);
  }
  const resetCounter = () =>{
    setCounter(0);
  }
  const check = counter == data.length - 1 ? true:false
  const checkPrev = counter==0?true:false
  return (
    <>
      <h1>Counter</h1>
     <div className="container">
      <p>Counter: {counter}</p>
      <p>Data: {data.length-1}</p>
      <p>{data.length>counter?data[counter].id :"No id"}</p>
      <p>{data[counter].title}</p>
      <p>{data[counter].content}</p>
     <button className="btn btn-primary" onClick={resetCounter} disabled={checkPrev}>Reset counter</button>
      <button className="btn btn-primary" onClick={subCounter} disabled={checkPrev}>Sub Counter</button>
      <button className="btn btn-primary" onClick={addCounter } disabled={check && true}>Add counter</button>
     </div>
    </>
  );
}

export default App;
