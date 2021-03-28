import { useContext } from "react"
import { AppContext } from "../../../App";

export const User=({name})=>{

    const {state,dispatch} =useContext(AppContext);
    const handleClick =()=>{
        dispatch({type:'showUsers'})
        dispatch({type:'setCurrentUser', payload:name})

        localStorage.setItem('user',name)
    }
    return(
        <div onClick={()=> handleClick()} className={`profilePic ${name}`}>
            <p>{name}</p>
        </div>
    )
}

const Users= ({className})=>{
    const {state,dispatch} =useContext(AppContext);
    return(
        <div className={`Users-con ${className}` }>
            <User name={'Justin'}/>
            <User name={'Monique'}/>
            <User name={'Gloria'}/>
            <User name={'Bianaca'}/>
        </div>
        
    )
}
export default Users;

