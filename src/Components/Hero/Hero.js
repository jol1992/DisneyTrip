import MainContainer from '../Body/MainContainer/MainContainer'
import MenuItems from '../MenuItems/MenuItem'
import './Hero.css'

const Hero =() =>{

    const daysLeft = Math.trunc((new Date("5/27/2021").getTime() - new Date())/(1000 *3600 *24))

    return(
        <>
        <div className={'Hero'}>
            <div>
            <h1><p>Disney</p> Vacation 2021</h1>
            <p>{daysLeft} days left</p>
            </div>
            
        </div>
        <MenuItems />
        </>
    )
}

export default Hero