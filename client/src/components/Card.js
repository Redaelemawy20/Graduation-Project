import React from 'react'
import './card.css'
import aa from './Images/aa.jpg'

//import React, { Component } from 'react'

export default function Card() {
    return (
        <div className='cardss'>
         <div className="card">
        <img src={aa} alt=""></img>
        <h2>Dr.Adel Moubark</h2>
        <p>Manager of Menoufia University</p>
        </div>
        <div className="card" id='mid'>
        <img src={aa} alt=""></img>
        <h2>Alaa Ayaad</h2>
        <p>Manager of Menoufia University</p>
        </div>
        <div className="card">
        <img src={aa} alt=""></img>
        <h2>Alaa Ayaad</h2>
        <p>Manager of Menoufia University</p>
        </div>
        </div>
        
        
    )
}
