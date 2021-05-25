import React from 'react'
import './banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="banner-content">
                <h1 className='title'>Money Heist</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <p className="discription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
        </div>
    )
}

export default Banner
