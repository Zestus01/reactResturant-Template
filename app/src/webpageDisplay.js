// This fille will hold the functions that are displaying the webpage things 
import React from 'react'


function LogoImg (){
    return (
        <img src={require("./img/ghost.png")} alt='Ghost Logo' style={{height: 20 + 'vh', width: 20 +'vh'}} className='img-fluid col-6 img-thumbnail'></img>
    )
}

export function MenuLoad(props){
    let menuItems = props.menu.filter( (item) => { 
        return item['category']['title'] === props.page;
    });
    return(
        <>
            {menuItems.map((item) => <card className='container col-6'> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.description} - {item.price}</p> 
            </card>)}
        </>
    )
}


function Title (){
    return(
        <h1 className='col-6 text-muted display-3'>Ghost Boorant</h1>
    )
}

export function Header(){
    return(
        <div className='container row col-12 d-flex mt-4 mb-5'style={{height: 10 + 'vh'}}>
            <LogoImg />
            <Title />
        </div>
    )
}


export function Footer(){
    return(
        <footer className='container-fluid col-12 row mt-5 d-flex bg-secondary'>
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
