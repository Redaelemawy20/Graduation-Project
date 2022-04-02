import React from 'react'
import "./Virtual.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWalking} from '@fortawesome/free-solid-svg-icons'
export default function Virtual() {
    return (
        <div className='Virtual'>
        <div className="container">
        <h1 >
            Take tour in our university-
            <FontAwesomeIcon  icon={faWalking}></FontAwesomeIcon>
            
        </h1>
        <div className='btn'>
        <button id='btn'>let's Go!</button>
        </div>
        </div>
       
       


            
        </div>
    )
}
