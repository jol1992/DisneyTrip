import { useEffect, useState } from 'react'
import MainContainer from '../Body/MainContainer/MainContainer'
import MenuItems from '../MenuItems/MenuItem'
import './Hero.css'

const Hero =() =>{

    // const daysLeft = Math.trunc((new Date("5/27/2021").getTime() - new Date())/(1000 *3600 *24))
    const [days,setDays] =useState(0);
    const [hours,setHours] =useState(0);
    const [minutes,setMinutes] =useState(0);
    const [seconds,setSeconds] =useState(0);

    useEffect(
        ()=>{
            startTimer();
        },[]
    )


    const startTimer =()=>{
        setInterval(countDown,1000)
    }

    const countDown =()=>{
        const dayOfTrip=new Date("5/26/2021").getTime();
        const today =new Date().getTime();
        const difference =  dayOfTrip - today

        
        
        setSeconds(Math.floor((difference / 1000) % 60));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        

    }

    return(
        <>
        <div className={'Hero'}>
            <div>
            <h1><p>Disney</p> Vacation 2021</h1>
            <p><span>{days}</span> days <span>{hours}</span> hrs <span>{minutes}</span> mins  <span>{seconds}</span>sec left</p>
            </div>
            
        </div>
        <MenuItems />
        </>
    )
}

export default Hero