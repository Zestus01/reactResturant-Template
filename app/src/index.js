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

async function getAPIData(){
    try {
        const response = await axios.get(url);
        parseData(response);
        return menuData; 
    }
    catch(error){
        console.log('Error on getting the data');
    }
}

async function parseData(response){
  console.log('hello');
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
        }
    }
    menuData = [breakfestItems, brunchItems, lunchItems, appItems, dinnerItems, sideItems, dessertItems];
    console.log(breakfestItems);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//
  
   <React.StrictMode>
    <Header />
    <Footer />
    
  </React.StrictMode>
);
