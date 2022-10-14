// This fille will hold the functions that are displaying the webpage things 
import React from 'react'


function LogoImg (){
    return (
        <img src={require("./img/ghost.png")} alt='Ghost Logo' style={{height: 10 + 'vh', width: 10 +'vh'}} className='img-fluid col-6 img-thumbnail'></img>
    )
}

export function MenuLoad(props){

    if(props.page === 'Home'){
        return (
            <Homepage menu={props.menu}/>
        )
    }
    if(props.menu === null){
        return (
            <Homepage menu={props.menu}/>
        )
    }
    let menuItems = props.menu.filter( (item) => { 
        return item['category']['title'] === props.page;
    });
    // menuItems = menuItems.map((item) => {
    //     if(item.description.length > 40){
    //         item.description = item.description.slice(0,40) + '...'
    //     }
    //     return item;
    // });
    return(
        <div className='row'>
            {menuItems.map((item, index) => <div className='card container-fluid col-12 col-sm-4'> 
                <h4 className='fw-bold display-3 text-warning'>{item.title}</h4>
                <p className='text-muted display-5'>{item.price}</p>
                <button class="btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target={"#menuItem" + index} aria-expanded="false" aria-controls={"menuItem" + index}>
                    Description of food
                </button>
                <div class="collapse" id={"menuItem" + index}>
                    <div class="card card-body">
                        {item.description}
                    </div>
                </div>
            </div>) }
        </div>
    )
}

function Homepage(){
    return(
        <div>
            <h4 className='fw-bold display-3 text-warning'> THE BOORANT</h4>
            <p className='display-5'>A great resuturant that is actually located in the behind a Wallmart.
            We use revolutionary technology known as <strong>Dumpster Fires</strong> to cook our food. 
            We use the freshest ingredients that we find in the dumpster. 
            Our chefs are particularly proud of the robust menu they are able to create
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
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus"
                className='pt-3 fluid' width='100%' height='300px'  
                style={{border:"0"}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <p>The Address is 3125 Spooksville <br></br>Spookcentral California 66666</p>
        </footer>
    )
}
