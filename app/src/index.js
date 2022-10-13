import axios from 'axios'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Header, Footer,} from './webpageDisplay'
import "bootstrap/dist/css/bootstrap.min.css"

const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
let menuData = [];


export default function App(){

  const[page, setPage] = React.useState('home');
  const[menuState, setMenuSate] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      for(let obj of response.data){
        menuData.push(obj);
        }
      setMenuSate(menuData);
    });
  });


  return(
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top mb-3">
            <div className="container-fluid">
                <a className="navbar-brand">Boorant</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                {/* <div className="collapse navbar-collapse" id="collapsibleNavbar"> */}
                  <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={setPage('breakfest')}>Breakfest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={setPage('brunch')}>Brunch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={ setPage('lunch')}>Lunch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={setPage('dinner')}>Dinner</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={setPage('sides')}>Sides</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={setPage('desserts')}>Desserts</a>
                    </li>
                </ul>
                {/* </div> */}
            </div>
        </nav>
    </div>
  )
}

function MenuDisplay(props){
  if(props.page !='home'){ 
  let menuData =  props.data.filter( (item) => item['category']['title'] === props.page);
  }
  let pagaData = [];
  if(props.page === 'home'){
    return (
      <div>
        Please select a menu from the drop down
      </div>
    )
  } else {
      for(let item of menuData){
        pageData.push(<div>Hello</div>)
      }
    }
  
    return (pageData);
    
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <React.StrictMode>
    <Header />
    <App />
    <MenuDisplay page='home'/>
    <Footer />
  </React.StrictMode>
);
