import React from 'react'
import './navbar.css';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
function NavBar() {
    (window).scroll(()=>{
        var scroll = (window).scrollTop();
        if(scroll >=0){
          '.navbar-container'.addClass("scrolled")
        }else{
          '.navbar-container'.removeClass("scrolled")
        }
      })
    return (
        <div className='navbar-container'>
            <div className="nav-left">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" />
                </div>
                <div className="navigation">
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">Tv Shows</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">Movies</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">Recently Added</a>
                        </li>
                        <li className="nav-li">
                            <a href="" className="nav-link">My List</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-right">
                <div className="search">
                    <BiSearch />
                </div>
                <div className="notification">
                    <IoMdNotificationsOutline/>
                </div>
                <div className="profile">
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Profile" />
                </div>
            </div>
        </div>
    )
}

export default NavBar
