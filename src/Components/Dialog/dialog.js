import './dialog.css'
import '../Pages/Rides/rides.css'
const Dialog =({desc,handleClick,classname}) =>{
    return(
        <div className={'dialog'}>
            <div className={'modal'}>
                <div className={classname+" parkImg "}></div>
               <p>{desc}</p>
               <input/>
               <button onClick={handleClick}>Ok</button>
            </div>
        </div>
    )
}

export default Dialog