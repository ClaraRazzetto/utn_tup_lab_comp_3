import { useState } from 'react';
import AddFrom from './components/AddForm/AddFrom';
import ListItem from './components/ListItem/ListItem';

export default function Practica3 () {
    
    //Defino un array como state
    const [arr, setArr] = useState([]);

    //Debo eliminar el item seleccionado
    const buttonDeleteHandler = (index) => {
        var modifiedArr = [...arr];
        modifiedArr.splice(index,1);
        setArr([...modifiedArr]);
    }

    const buttonEditHandler = (index, newItem) => {
        var modifiedArr = [...arr];
        modifiedArr.splice(index,1,newItem);
        setArr([...modifiedArr]);
    }

    return (
        <div>
            <h3>Práctica 3</h3>
            
            {/* Formulario envio el array y su estado*/}
            <AddFrom 
                arr={arr}
                setArr={setArr}
            />

            {/* Renderizo cada item del array en pantalla */}
            <ul>
                {
                    arr.map((item, index) => (
                        // Listo los items dependiendo de como parsean numerico o string
                        //Agrego un button eliminar item y editar item
                        <ListItem 
                            key={index}
                            //Envio el item
                            item={item}
                            //Envio el indice para eliminar/editar
                            index={index}
                            //Envio el handler para eliminar
                            onDelete={buttonDeleteHandler}
                            //Envio handler para editar
                            onEdit={buttonEditHandler}
                        />
                    ))
                }
            </ul>
        
        </div>
    );
}