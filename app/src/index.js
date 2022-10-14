import axios from 'axios'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Header, Footer, MenuLoad,} from './webpageDisplay'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';

export default function App(){

  const[page, setPage] = useState('home');
  const[menuState, setMenuSate] = useState(null);
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
                <a href='#' className="navbar-brand">The Boorant</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() =>setPage('Breakfast')}>Breakfest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() =>setPage('Brunch')}>Brunch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() => setPage('Appetizer')}>Appetizers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() => setPage('Lunch')}>Lunch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() => setPage('Dinner')}>Dinner</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() =>setPage('Side')}>Sides</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#' onClick={() =>setPage('Dessert')}>Desserts</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <MenuLoad menu={menuState} page={page} />
        
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
