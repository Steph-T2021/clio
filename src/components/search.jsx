import React from 'react'

function search() {
    return (
        <div className="search">
            <form className="search__form">
                <input type="text" placeholder="Search..." name="search"></input>
                <button className="search__btn">Submit</button>
            </form>
            
        </div>
    )
}

export default search;
