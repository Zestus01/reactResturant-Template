import axios from 'axios'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Header, Footer,} from './webpageDisplay'

const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
let breakfestItems = [];
let lunchItems = [];
let appItems = [];
let dessertItems = [];
let sideItems = [];
let brunchItems = [];
let dinnerItems = [];
let menuData = [];

export default function App(){
  const[menuState, setMenuSate] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      for(let obj of response.data){
        switch(obj['category']['title']){
          case 'Dinner':
            dinnerItems.push(obj);
            break;
            case 'Appetizer':
                  appItems.push(obj);
                  break;
              case 'Breakfest':
                  breakfestItems.push(obj);
                  break;
              case 'Lunch':
                  lunchItems.push(obj);
                  break;
              case 'Side':
                  sideItems.push(obj);
                  break;
              case 'Brunch':
                  brunchItems.push(obj);
                  break;
              case 'Dessert':
                  dessertItems.push(obj);
                  break;
          };
        }
      setMenuSate([appItems, breakfestItems, brunchItems, lunchItems, dinnerItems, sideItems, dessertItems]);
    });
  });
  if(!menuState){
    return "Nothing"
  }
  return(
    <div>
      <h1>Menu items</h1>
      {menuState[3].map( (item) => <> <h2>{item.title}</h2>  <p className='text-muted'>{item.description}</p> </> )}
    </div>
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
