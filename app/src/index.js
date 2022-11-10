import axios from 'axios'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Header, Footer, MenuLoad,} from './webpageDisplay'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// URL for the API data
const URL = 'https://8000-zestus01-realbackendbis-ss48wra6ug0.ws-us75.gitpod.io';
// Main functionality of the webpage, responsible for creating the navbar, getting data, and passing it
export default function App(){
  const[page, setPage] = useState('Home');
  const[menuState, setMenuSate] = useState(null);
  React.useEffect(() => {
    axios.get(URL).then((response) => setMenuSate(response.data));
    
  }, []);
  // Creates the sections for posting the navigation links. 
  let sections = ["Breakfast", "Brunch", "Appetizer", "Lunch", "Dinner", "Side", "Dessert"];
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
// Helper function for spacing.
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
