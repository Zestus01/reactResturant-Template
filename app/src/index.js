import axios from 'axios'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Header, Footer, MenuLoad, AppetizerLoad, BreakfestLoad, BrunchLoad, SideLoad, DinnerLoad, LunchLoad, DessertLoad,} from './webpageDisplay'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';

export default function App(){

  const[page, setPage] = React.useState('home');
  const[menuState, setMenuSate] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => setMenuSate(response.data));
  }, []);

  if(menuState === null){
    return(
      <div> Please wait, loading our menu........</div>
    )
  }
  return(
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top mb-3">
            <div className="container-fluid">
                <a className="navbar-brand">Boorant</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>setPage('Breakfast')}>Breakfest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>setPage('Brunch')}>Brunch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setPage('Appetizer')}>Appetizers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setPage('Lunch')}>Lunch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setPage('Dinner')}>Dinner</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>setPage('Side')}>Sides</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() =>setPage('Dessert')}>Desserts</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <MenuLoad menu={menuState} page={page} />
        {/* {page === 'breakfest' && <BreakfestLoad menu={menuState} />}
        {page === 'brunch' && <BrunchLoad menu={menuState} />}
        {page === 'lunch' && <LunchLoad menu={menuState} />}
        {page === 'dinner' && <DinnerLoad menu={menuState} />}
        {page === 'sides' && <SideLoad menu={menuState} />}
        {page === 'desserts' && <DessertLoad menu={menuState} />}
        {page === 'app' && <AppetizerLoad menu={menuState} />} */}
    </div>  //} Final Div
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
