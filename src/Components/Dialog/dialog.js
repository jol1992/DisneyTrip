import './dialog.css'
import '../Pages/Rides/rides.css'
import { useContext } from 'react'
import { AppContext } from '../../App'
const Dialog =() =>{
    const {state,dispatch}=useContext(AppContext)
    const handleClick =()=>{
        dispatch({type:'showDialog'})
    }
    
    return(
        <div className={'dialog'}>
            <div className={'modal'}>
                <div className={state.dialog.className+" parkImg "}></div>
               <p>{state.dialog.desc}</p>
               <select value={state.dialog.rides}/>
               <button onClick={handleClick}>Ok</button>
            </div>
        </div>
    )
}

export default Dialog