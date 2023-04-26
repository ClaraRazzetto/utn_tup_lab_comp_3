
const ListItem = ({item, index, onDelete}) => {
    
    let content = null;
    
    if (isNaN(Number(item))) {
        content = (
            <>
                <input type="text" value={item}></input>
            </>

        )
    } else {
        content = (
            <>
                {   
                    Math.floor(item) % 2 === 0 
                    ? <li>{item} "par"</li> 
                    : <li> {item} "impar"</li>  
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