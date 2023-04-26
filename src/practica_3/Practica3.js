import { useState } from 'react';
import AddFrom from './components/AddForm/AddFrom';
import ListItem from './components/ListItem/ListItem';

export default function Practica3 () {
    
    const [arr, setArr] = useState([]);

    const buttonDeleteHandler = (index) => {

    }
   

    return (
        <div>
            <h3>Práctica 3</h3>
            <AddFrom 
                arr={arr}
                setArr={setArr}
            />
            <ul>
                {
                    arr.map((item, index) => (
                        <ListItem 
                            key={index}
                            item={item}
                            index={index}
                            onDelete={buttonDeleteHandler}
                        />
                    ))
                }
            </ul>
        </div>
    );
}