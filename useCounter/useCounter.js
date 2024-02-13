import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue )

    const incremento = (value = 1) =>{
        setCounter((current) => current + value );
    }

    const decremento = (value = 1) =>{
        counter > 0 && setCounter( (current) => current - value);   
    }

    const reset = () =>{
        setCounter( initialValue );
    }

    return{
        counter,
        incremento,
        decremento,
        reset

    }
}