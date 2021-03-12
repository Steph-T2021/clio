import React from 'react';
import Button from "./Button";

function MainNavBar() {
    return (
        <div className="main-nav">
    
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Show results for</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Law firms   V"></input>
            </div>  
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Area of Practice</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Family Law   V"></input>
            </div>      
                <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Area of Specialization</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Specialization   V"></input>
                </div> 
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Location</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Vancouver,BC   V"></input>
            </div> 
            <Button text="Search" className="main-nav__search" />
        </div>
    )
}

export default MainNavBar
