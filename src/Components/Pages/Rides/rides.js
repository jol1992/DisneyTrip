import { useContext, useEffect, useState } from "react"
// import Select from "react-select/src/Select";
import Header from "../../Body/MainContainer/Header/Header"
import epcot from '../../../Images/epcot.PNG'
import ak from '../../../Images/ak.PNG'
import mk from '../../../Images/mk.PNG'
import hs from '../../../Images/hs.PNG'
import { MenuItem } from "../../MenuItems/MenuItem"
import './rides.css'
import Dialog from "../../Dialog/dialog"
import { AppContext } from "../../../App"

const Ride = ({desc,classname }) =>{
    const {state,dispatch}=useContext(AppContext);
    const handleClick =()=>{
        const dialog={
            className:classname,
            desc:desc,

        }
        dispatch({type:'showDialog', payload:dialog})
    }
   return( <div onClick={handleClick} className={' menuItem ride-con'}>
       <div className={classname+" parkImg"}>
        <label>{desc}</label>
        </div>
      
    </div>
   )
}


const Rides = () => {
    const [refresh, setRefresh] = useState(1);
    const [epcotRides, setEpcotRides] = useState([]);
    const [mkRides, setMkRides] = useState([]);
    const [akRides, setAkRides] = useState([]);
    const [hsRides, setHsRides] = useState([]);
    const [userPicks, setUserPicks] = useState([]);


    useEffect(
        () => {
            // getUserPick()

        },[]
    )

    const getUserPick =() =>{
        fetch("http://localhost:3001/").
        then(res => {
              
           return res.json()   
        })
        .then(data =>{
            setUserPicks(data[0].name)
            console.log(data[0].name)
        })

    }

    const getRides=(url,rides )=>{
        if(rides.length === 0){
            console.log("Fetching")
        fetch(url).then(
            res => res.json()
        ).then(data => data.forEach(element => { 
            rides.push(<option value={element.short_name}>{element.short_name}</option>)
        }))
    }else{
        console.log(rides)
    }
    }





    return (
        <div  className={"main-ride-con"}>
           <Header desc={"Rides"} />
           {/* <label>userPicks :{userPicks}</label> */}
           <div className={'menu-con'}>
           
            <Ride  classname={'hollywoodStudio'} desc={"Hollywood Studios"} list={hsRides} img={hs}/>
            <Ride  classname={'magicKingdom'} desc={"Magic Kingdom"} list={mkRides} img={mk}/>
            <Ride  classname={'animalKingdom'} desc={"Animal Kingdom"} list={akRides} img={ak}/>
            <Ride classname={'epcot'} desc={"Epcot"} list={epcotRides} img={epcot}/>
            
            </div>
        </div>
    )
}

export default Rides