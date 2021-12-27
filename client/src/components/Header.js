import React from 'react'
import './Header.css'
import logo from './Images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Lamp from './Images/lamp.png'
export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
            <div className='logo'>
            <img src={logo} alt="logo"/>
            <p>Menoufia<br/>University</p>
             </div>
            <div className='unorder'>
            <div className='Caption--Ul'>
            <p>The beacon of knowledge in the heart of the delta
            <img src={Lamp} alt='Lamp'/></p>
            <ul className="mainul">
            <li><a href="#"><FontAwesomeIcon  icon={faFacebookF}/></a></li>
            <li><a href="#"><FontAwesomeIcon  icon={faInstagram}/></a></li> 
            <li><a href="#"><FontAwesomeIcon  icon={faLinkedinIn}/></a></li> 
            <li><a href="#"><FontAwesomeIcon  icon={faEnvelope}/></a></li>
            <li><a href="#"><FontAwesomeIcon  icon={faTwitter}/></a></li>
            </ul>
            
            </div>
            
            <div className='bars'>
            <FontAwesomeIcon  icon={faBars}/>
            </div>
            </div>
            </div>
            <section className='nav'>
            <div className='un--list'>
            <ul className='Maa--Ul'>
                <li id='Admins'>
                <a>Adminstration <FontAwesomeIcon icon={faAngleDown}/></a>
                <div className='Drop--Down--Add'><div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>

                
                </div></li>
                
                <li id='About'><a>About <FontAwesomeIcon  icon={faAngleDown}>

                </FontAwesomeIcon></a>
                <div className='Drop--Down--Add'><div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                    
                </div></li>
                <li id='Stf--Mem'><a>Staff Members <FontAwesomeIcon  icon={faAngleDown}></FontAwesomeIcon></a>
                <div className='Drop--Down--Add'>
                <div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                </div></li>
                <li id='Facs'><a>Faculties <FontAwesomeIcon  icon={faAngleDown}></FontAwesomeIcon></a>
                <div className='Drop--Down--Add'>
                <div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                </div></li>
                <li id='Sci--Res'>
                <a>Scientific Research <FontAwesomeIcon  icon={faAngleDown}></FontAwesomeIcon></a>
                <div className='Drop--Down--Add'>
                <div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                </div></li>
                <li id='Stu'>
                <a>Students <FontAwesomeIcon  icon={faAngleDown}></FontAwesomeIcon></a>
                <div className='Drop--Down--Add'>
                <div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                </div></li>
                <li id='Egy--Uni'>
                <a>Egyptian Universities <FontAwesomeIcon  icon={faAngleDown}></FontAwesomeIcon></a>
                <div className='Drop--Down--Add'>
                <div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                </div></li>
                <li id='Media'><a>Media <FontAwesomeIcon  icon={faAngleDown}></FontAwesomeIcon></a>
                <div className='Drop--Down--Add'>
                <div className='admins--form'>
                <ul className='In--Unor'>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                <li><a href='#'>MF President Sector</a></li>
                </ul>
                </div>
                </div></li>
            </ul>
             
            </div>
            
            </section>
        </div>
    );
}
