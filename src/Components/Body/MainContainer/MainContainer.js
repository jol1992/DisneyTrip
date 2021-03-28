import MenuItems from '../../MenuItems/MenuItem'
import './MainContainer.css'

import ListContainer from '../../List/ListContainer'
import { useContext } from 'react'
import { AppContext } from '../../../App'
import Rides from '../../Pages/Rides/rides'
import Restarants from '../../Pages/Restarants/Restarants'
import Snacks from '../../Pages/Snacks/Snacks'
import { Route, Router, Switch } from 'react-router'

const MainContainer = () => {
    const { state, dispatch } = useContext(AppContext);
    console.log(state)
    return (
        <Switch>
        
          {/* {state.currentPage == "home" && <Hero />} */}
          <div className={'main-con'}>
              
                {state.currentPage == 'Pre-Check List' && <ListContainer />}
                {state.currentPage == 'home' && <MenuItems />}
                {state.currentPage == 'Rides' && <Rides />}
                {state.currentPage == "Restarants" && <Restarants />}
                {state.currentPage == "Snacks" && <Snacks />}
                </div>
          
        </Switch>
           
                
    )
}
export default MainContainer