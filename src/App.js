import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import MainContainer from './Components/Body/MainContainer/MainContainer';
import Hero from './Components/Hero/Hero';
import ListContainer from './Components/List/ListContainer';
import React, { useContext, useReducer } from 'react';
import reducer from './Reducers/reducer';
import store from './Store/store';
import { Route, Router, Switch, } from 'react-router';
import Rides from './Components/Pages/Rides/rides';
import Snacks from './Components/Pages/Snacks/Snacks';
import Restarants from './Components/Pages/Restarants/Restarants';
import Footer from './Components/Footer/Footer';
import Dialog from './Components/Dialog/dialog';
import Welcome from './Components/Pages/Welcome/Welcome';

export const AppContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, store)

  const getApp =()=>{
    return(
      <>
      <Navbar  />
      {state.showDialog &&<Dialog  classname={state.currentPage} desc={state.currentPage}/>}
      {/* <Dialog  classname={state.currentPage} desc={state.currentPage}/> */}
      <Switch>
      <Route exact path='/' component={Hero} />
        <Route path='/home' component={Hero} />
        <Route path='/rides' component={Rides} />
        <Route path='/restarants' component={Restarants} />
        <Route path='/snacks' component={Snacks} />
        <Route path='/checklist' component={ListContainer} />
      </Switch>
      <Footer/>
      </>

    )
  }
  return (
    <AppContext.Provider value={{ state, dispatch }}>

      <div className="App">
      {localStorage.getItem('user') === null &&<Welcome/>}
        {localStorage.getItem('user') !== null &&getApp()}
      </div>
     

    </AppContext.Provider>
  );
}

export default App;
