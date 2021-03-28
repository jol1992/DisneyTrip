import { useEffect } from "react"
import Header from "../../Body/MainContainer/Header/Header"

const Restarants = ()=>{

    useEffect(
        ()=>{
            fetch('').then(
                res =>res.json()
            ).then(data => data.forEach(element => {
            
            }))
        }
    )

    return(
        <Header desc={"Restarants"}/>
    )
}
export default Restarants