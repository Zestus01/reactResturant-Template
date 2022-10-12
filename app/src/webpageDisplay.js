// This fille will hold the functions that are displaying the webpage things 
import React from 'react'


function LogoImg (){
    return (
        <img src="img/ghost.png" alt='Ghost Logo'></img>
    )
}

function Title (){
    return(
        <h1 className='text-muted display-3'>Ghost Boorant</h1>
    )
}

export function Header(){
    return(
        <div className='d-flex row'>
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