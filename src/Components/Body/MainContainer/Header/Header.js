import { useEffect, useState } from "react";

const Header = ({desc})=>{

    const [className,setClassName]=useState("");

    useEffect(()=>{
        getClass()
    })
    const getClass=()=>{
        switch(desc){
            case 'Rides':
                setClassName('list-intro rides')
                break;
            case 'Restarants':
                setClassName('list-intro restarant')
                break;
            case 'Snacks':
                setClassName('list-intro snacks')
                break;
            case 'Pre-Check List':
                setClassName('list-intro check-list')
                break;
        }
        
    }


    return(
        <div className={className}>
            <p>{desc}</p>
        </div>
    )

}
export default Header