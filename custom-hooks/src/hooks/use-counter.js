import { useState, useEffect } from "react";

// use is used as prefix infront of variable to denote it is a custom hook
//use is a must
const useCounter = (forwards=true) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(forwards){
            
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;