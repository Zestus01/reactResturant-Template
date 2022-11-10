// This fille will hold the functions that are displaying the webpage things 
import React from 'react'


function LogoImg (){
    return (
        <img src={require("./img/ghost.png")} alt='Ghost Logo' style={{height: 10 + 'vh', width: 10 +'vh'}} className='img-fluid col-6 img-thumbnail'></img>
    )
}
// Responsible for posting the necessary menu Items
export function MenuLoad(props){
    if(props.page === 'Home' || props.menu === null){
        return (
            <Homepage menu={props.menu}/>
        )
    }
    // Filters the menu items for what page got selected
    let menuItems = props.menu.filter( (item) => { 
        return item['category_id']['title'] === props.page;
    });
    // Runs through the filtered menuItems and "maps" over them putting them into HTML
    return(
        <div className='row'>
            {menuItems.map((item, index) => <div className='card container-fluid col-12 col-sm-4'> 
                <h4 className='fw-bold text-warning display-6'>{item.title}</h4>
                <p className='text-muted h4'>{item.price}</p>
                <button className="btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target={"#menuItem" + index} aria-expanded="false" aria-controls={"menuItem" + index}>
                    Description
                </button>
                <div className="collapse" id={"menuItem" + index}>
                    <div className="card card-body">
                        {item.description}
                    </div>
                </div>
            </div>) }
        </div>
    )
}
// Information for the base Home page, short description of the resturant
function Homepage(){
    return(
        <div>
            <h4 className='fw-bold text-warning display-6'> THE BOORANT</h4>
            <p className='h4'>A great resuturant that is actually located behind a Wallmart.
            We use revolutionary technology known as <strong>Dumpster Fires</strong> to cook our food. 
            We use the freshest ingredients that we find in the dumpster. 
            Our chefs are particularly proud of the robust menu they are able to create from this range.
            Allow us to take your tastebuds across a vast range of flavors, ranging from exotic with our Le Cigarette (our cooks favorite)
            to homey with a classic grilled cheese. Located behind a Wallmart near you!!
            </p>
        </div>
    )
}

function Title (){
    return(
        <h1 className='col-6 text-muted display-3'>Ghost Boorant</h1>
    )
}
// Creates the header, necessary spacing and things
export function Header(){
    return(
        <div className='container row col-12 d-flex mt-4 mb-5'style={{height: 10 + 'vh'}}>
            <div className='mt-3 mb-3'></div>
            <LogoImg />
            <Title />
        </div>
    )
}

// Contains the information for the bottom rendering
export function Footer(){
    return(
        <footer className='container-fluid col-12 row mt-5 d-flex bg-secondary'>
            <iframe 
                src="https://maps.google.com/maps?q=4051%20Nicholasville%20Rd,%20Lexington,%20KY%2040503&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className='pt-3 fluid' width='100%' height='300px'  
                style={{border:"0"}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <p>Open anytime your stomach grumbles</p>
            <p>The Address is 3125 Spooksville <br></br>Spookcentral California 66666</p>
        </footer>
    )
}
