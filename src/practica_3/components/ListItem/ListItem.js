import { useState } from "react";

const ListItem = ({item, index, onDelete, onEdit}) => {
    
    const[newItem, setNewitem] = useState(item);

    const inputChangeHandler = (event) => 
    {
        setNewitem(event.target.value);
    }

    let content = null;
    
    if (isNaN(Number(item))) {
        content = (
            <>
                <input type="text" value={newItem} onChange={inputChangeHandler}></input>
                <button onClick={onEdit.bind(null,index,newItem)}>Editar</button>
            </>

        )
    } else {
        content = (
            <>
                {   
                    Math.floor(item) % 2 === 0 
                    ? <li>{item} "par"</li> 
                    : <li>{item} "impar"</li>  
                } 
                
            </>
        )
    }
 

    return ( 
        <div>
            {content}
            {/* <button onClick={() => {onDelete(index)}}>Eliminar</button>  mala practica*/}
            <button onClick={onDelete.bind(null, index)}>Eliminar</button>
        </div>

    )

}

export default ListItem