// This fille will hold the functions that are displaying the webpage things 
import React from 'react'


function LogoImg (){
    return (
        <img src="./img/ghost.png" alt='Ghost Logo'></img>
    )
}

export function MenuLoad(props){
    console.log(props.page);
    let menuItems = props.menu.filter( (item) => { 
        return item['category']['title'] === props.page;
    });
    console.log(menuItems);
    return(
        <>
            {menuItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function BrunchLoad(props){
    let brunchItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Brunch';
    });
    return(
        <>
            {brunchItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function BreakfestLoad(props){
    let breakfestItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Breakfast';
    });
    return(
        <>
            {breakfestItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function DinnerLoad(props){
    let dinnerItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Dinner';
    });
    return(
        <>
            {dinnerItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function SideLoad(props){
    let sideItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Side';
    });
    return(
        <>
            {sideItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function LunchLoad(props){
    let lunchItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Lunch';
    });
    return(
        <>
            {lunchItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function AppetizerLoad(props){
    let appItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Appetizer';
    });
    return(
        <>
            {appItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

export function DessertLoad(props){
    let dessertItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Dessert';
    });
    return(
        <>
            {dessertItems.map((item) => <> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </>)}
        </>
    )
}

function Title (){
    return(
        <h1 className='text-muted display-3'>Ghost Boorant</h1>
    )
}

export function Header(){
    return(
        <div className='row d-flex mt-4'style={{height: 10 + 'vh'}}>
            <LogoImg />
            <Title />
        </div>
    )
}


export function Footer(){
    return(
        <footer className='row d-flex bg-secondary justify-content-end'>
            <p>The Address is 3125 Spooksville <br></br>Spookcentral California 66666</p>
        </footer>
    )
}
// function Navbar(){
//     return(
//     <div>
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top mb-3">
//             <div className="container-fluid">
//                 <a className="navbar-brand">Boorant</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//                 <div className="collapse navbar-collapse" id="collapsibleNavbar">
//                     <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <a className="nav-link" href='#'>Breakfest</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Lunch</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Dinner</a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//         </nav>
//     </div>
//     )
// }
