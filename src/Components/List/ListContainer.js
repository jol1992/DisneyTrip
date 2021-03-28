import { useEffect, useState } from 'react';
import './ListContainer.css'
import ListItem from './ListItem'
import mickey from '../../Images/SorcererMickey.jpg'
import Header from '../Body/MainContainer/Header/Header';
const ListContainer =()=>{

    const [newItem,setNewItem]=useState();
    const [items,setItems]=useState(["Tickets", "Car","Hotel"]);

    const handleClick =()=>{
        setItems([...items,newItem])
        
    }

    
    return(
        <div className={'list-con'}>

            <Header desc={"Pre-Check List"}/>
        <div className={'list-items'}>  
        <ul> {
             items.map(
                (item) =>(
                    
                    <ListItem desc={item}/>
                )
             )
            }
    
        </ul>
        </div> 
        <div className={'input-con'}>
            <input onChange={e=>setNewItem(e.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </div>
        </div>
    )
}
export default ListContainer;