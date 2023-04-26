import { useState } from "react";

const AddFrom = ({arr, setArr}) => {

    const[inputValue, setInputValue] = useState('');

    const buttonClickHandler = (event) => {

        if(inputValue !== ''){
            setArr([...arr, inputValue]);
        }else {
            console.log("el input esta vacio!");
        }

        setInputValue('');
    }

    const inputChangeHandler = (event) => {
       setInputValue(event.target.value);
    }

  return (
    <>
        <input type="text" 
            value={inputValue}
            onChange={inputChangeHandler}>
        </input>

        <button onClick={buttonClickHandler}>Agregar valor</button>
    </>
  )
}

export default AddFrom