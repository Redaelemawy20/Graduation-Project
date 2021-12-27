import React from 'react'
import Header from './Header'
import './Cover.css'
import  Home from './Videos/Home.MOV';
import M2 from './Videos/M2.mp4'
export default function cover() {
    return (
        <div className='view'>
        <Header/>
        <header class="header block--skewed-right hero">
            <div className='cover'>
         
         <video autoPlay loop muted id='vid'>
             <source src={M2} type="video/mp4"/>
           
         </video>
         </div>
         </header>
         {/*<!--<div className="know">
         <h3>The beacon of knowledge in the heart of the delta</h3>
         </div>-->*/}
        </div>
        
        
    )
}
