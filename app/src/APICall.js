import axios from 'axios'

const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
const breakfestItems = [];
const lunchItems = [];
const appItems = [];
const dessertItems = [];
const sideItems = [];
const brunchItems = [];
const dinnerItems = [];
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
}



export {getAPIData, dinnerItems, lunchItems, brunchItems, sideItems, dessertItems, appItems, breakfestItems}
