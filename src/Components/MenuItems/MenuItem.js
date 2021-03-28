import './MenuItem.css'
import castle from '../../Images/disneyCastle.png'
import chef from '../../Images/restarants.png'
import list from '../../Images/list.png'
import snacks from '../../Images/snacks.png'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'

export const MenuItem = ({ img, desc }) => {
    const { state, dispatch } = useContext(AppContext)
    const handleClick = () => {
        dispatch({ type: desc })
    }

    return (
        <div onClick={handleClick} className={'menuItem'}>
            <img src={img} />
            <p>{desc}</p>
        </div>
    )

}

const MenuItems = () => {
    return (

        <div className={'menu-con'}>
            <Link to="/checklist">
                <MenuItem desc={"Pre-Check List"} img={list} />
            </Link>
            <Link to="/snacks">
                <MenuItem desc={"Snacks"} img={snacks} />
            </Link>
            <Link to="/rides">
                <MenuItem desc={"Rides"} img={castle} />
            </Link>
            <Link to="/restarants">
                <MenuItem desc={"Restarants"} img={chef} />
            </Link>
        </div>


    )
}

export default MenuItems