import { User } from "../../NavBar/Users/User";
import './Welcome.css';
import leftArrow from '../../../Images/arrow-right.svg';
import { useContext, useState } from "react";
import { AppContext } from "../../../App";




const LoginUser =({name})=>{
    console.log(name)
    return(
        <div className={` login-user ${name}`}>

        </div>
    )
}
const Welcome =()=>{

    const {state,dispatch}=useContext(AppContext)
    const classNames=['Justin','Monique','Gloria','Bianaca'];
    const [currentImage,setCurretImage]= useState(classNames[0]);
    const [index,setIndex]= useState(0);

    const handleClick =()=>{
        console.log(currentImage)
        setIndex(index=>index +1)
        
        setCurretImage(classNames[index%classNames.length])
    }

    const saveUser =()=>{

        dispatch({type:'setCurrentUser', payload:currentImage})
        localStorage.setItem('user',currentImage)
    }

return(
    <div className={'welcome-scr'} >
        <h1>Who are you?</h1>
        <div className={'user-con'}>
        <img src={leftArrow}/>
           <LoginUser name={currentImage}/>
           <img onClick={handleClick} src={leftArrow}/>
           <p>{currentImage}</p>
        </div>
        <button onClick={saveUser} > Its me!</button>
    </div>
)
}

export default Welcome;