import React from 'react';
import Button from "./Button";

function MainNavBar(props) {
    return (
        <div className="main-nav">
    
            {/* <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Show results for</label>
                <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Law Firms "></input>
                <img className="main-nav__logo" src={props.rightArrow} alt="down arrow" />
            </div>   */}
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Show results for</label>
                <button type="button" className="main-nav__forminput">Law Firms <img className="main-nav__arrow" src={props.rightArrow} alt="down arrow" /></button>
                {/* <img className="main-nav__logo" src={props.rightArrow} alt="down arrow" /> */}
            </div>  

            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Area of Practice</label>
                {/* <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Family Law   V"></input> */}
                <button type="button" className="main-nav__forminput">Family Law <img className="main-nav__arrow" src={props.rightArrow} alt="down arrow" /></button>
            </div>      
                <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Area of Specialization</label>
                <button type="button" className="main-nav__forminput">Specialization <img className="main-nav__arrow" src={props.rightArrow} alt="down arrow" /></button>
                {/* <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Specialization   V"></input> */}
                </div> 
            <div className="main-nav__container">
                <label htmlFor="comment" className="main-nav__formlabel">Location</label>
                <button type="button" className="main-nav__forminput">Vancouver, BC <img className="main-nav__city" src={props.location} alt="city location pin" /></button>
                {/* <input id="comment" className="main-nav__forminput" name="main-nav__description" placeholder="Vancouver,BC   V"></input> */}
            </div> 
            <Button text="Search" className="main-nav__search" />
        </div>
    )
}

export default MainNavBar
