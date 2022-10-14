import axios from 'axios'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Header, Footer, MenuLoad,} from './webpageDisplay'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';

export default function App(){

  const[page, setPage] = useState('Home');
  const[menuState, setMenuSate] = useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => setMenuSate(response.data));
  }, []);

  let sections = ["Breakfast", "Brunch", "Appetizer", "Lunch", "Dinner", "Side", "Dessert"];
  let loading = menuState ? 'Menu is loaded' : "Please Wait, Menu is loading";
  return(
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top mb-3">
            <div className="container-fluid">
                <a href='#' onClick={() => setPage('Home')} className="navbar-brand">The Boorant</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  {sections.map( (item, index) => <li key={index} className="nav-item">
                      <a className="nav-link" href='#' onClick={() =>setPage(item)}>{item}</a>
                    </li>)}
                  </ul>
                </div>
            </div>
        </nav>
        <MenuLoad menu={menuState} page={page} />
        
    </div>  //} Final Div
  )
}

function Space(){
  return(
    <div>
  
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <Header />
    <App />
    <Space />
    <Footer />
  </React.StrictMode>
);
