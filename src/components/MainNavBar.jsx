import React from 'react';
import Button from "./Button";
import arrow from "../assets/icons/arrow.svg";

function MainNavBar() {
    return (
        <div className="main-nav">
    
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Show results for</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Law firms "/><i  className="fa fa-chevron" src={arrow} alt="arrow"/>
            </div>  
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Area of Practice</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Family Law  "/><i className="fa fa-chevron" src={arrow} alt="arrow"/>
            </div>      
                <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Area of Specialization</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Specialization"/><i className="fa fa-chevron" src={arrow} alt="arrow"/>
                </div> 
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Location</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Vancouver,BC"/><i className="fa fa-chevron" src={arrow} alt="arrow"/>
            </div> 
            <Button text="Search" className="main-nav__search" />
        </div>
    )
}

export default MainNavBar
