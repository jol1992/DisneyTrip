import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../App'
import './NavBar.css'
import Users, { User } from './Users/User';
const Navbar = () => {
    const { dispatch, state } = useContext(AppContext);
    const ref = useRef(null);
    const [sticky, setSticky] = useState(false);
    const [initalLoad,]=useState(true)
    useEffect(
        () => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }, []
    )

    const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 0)

    }

    const getClassName =()=>{
        switch(state.showUsers){
            case true:
                return 'slide-out';
            case false:
                return 'slide-in';
            default:
                return 'hide';
        }
    }

    return (
        <div className={sticky ? 'nav-bar-con' : 'nav-bar-con ghost'}>
            <div className={'nav-wrapper'}>
                <Link to="/home">
                    <h3 onClick={() => dispatch({ type: 'home' })}>Disney</h3>
                </Link>
                <User name={state.currentUser} />
            </div>
            <Users  initLoad={initalLoad} className={getClassName()} />
        </div>
    )
}

export default Navbar