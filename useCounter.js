import { useState } from "react";

export const useCounter=(inicialValue)=>{

    const [counter, setCounter] = useState(inicialValue)

    const increment=(value=1)=>{
// console.log(value)
        setCounter(counter+value);
    }
    const decrement=(value=1)=>{
        if(counter<=0) return
        // console.log(value)
        setCounter(counter-value);
        
    }
    const reset=()=>{
        setCounter(inicialValue);
    }

return{
    counter,
    increment,
    decrement,
    reset,
}

}