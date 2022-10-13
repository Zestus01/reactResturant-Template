// This fille will hold the functions that are displaying the webpage things 
import React from 'react'


function LogoImg (){
    return (
        <img src="./img/ghost.png" alt='Ghost Logo'></img>
    )
}

export function BrunchLoad(props){
    let brunchItems = props.menu.filter( (item) => { 
        return item['category']['title'] === 'Brunch';
    });
    console.log(brunchItems);
}

export function BreakfestLoad(props){

}

export function DinnerLoad(props){

}

export function SideLoad(props){

}

export function LunchLoad(props){

}

export function AppetizerLoad(props){

}

export function DessertLoad(props){

}

function Title (){
    return(
        <h1 className='text-muted display-3'>Ghost Boorant</h1>
    )
}

export function Header(){
    return(
        <div className='row d-flex'style={{height: 10 + 'vh'}}>
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
