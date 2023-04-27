import { useState } from "react";

export default function Practica3 () {
    //Defino un array como state
    const [array, setArray] = useState ([])

    //Leo el valor del input y lo meto en un state
    const [inputValue, setInputValue] = useState("");

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    //Declaro el handler del boton    
    const buttonClickHandler = (event) => {
        event.preventDefault();
        
        //Verfico que el valor del input no este vacio
        if(inputValue !== ""){
            //Agrego el valor al array
            
            /*  Esta es una opción:
                Tengo que crear una copia primero para modificarla 
                xq el estado de react es inmutable (no se puede cambiar)
                debo cambiarlo usando el set

                const arr = [...array];
                arr.push(inputValue);
                setArray(arr); 
            */

            setArray([...array, inputValue]);
            
            //Limpio el input
            setInputValue('');

        }else{
            console.log("vacio");
        }
    }

    console.log(array);

    return (
        <div>
            <h3>Práctica 3</h3>
            {/* Agrego un input */}
            <input type="text" 
                value={inputValue} 
                onChange={inputChangeHandler}
            />
            {/* Agrego un button */}
            <button onClick ={buttonClickHandler}>
                Agregar texto
            </button>
            
        </div>
    );
}