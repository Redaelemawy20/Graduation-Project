import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrivalImg from '../Images/Arrival.jpg'
import {GiAirplaneArrival} from 'react-icons/gi'

export default function ImmigrantsDepartment() {
  return (
    <ImmigrantsDepartmentStyle>
        <div className='cont--all'>
            <div className='icon-view'>
                <GiAirplaneArrival/>
            </div>
            <div className='text--btn'>
        <h2>Arrivals Management</h2>
        <Link to='/'>Discover</Link>
        </div>
        </div>
    </ImmigrantsDepartmentStyle>
  )
}
const ImmigrantsDepartmentStyle=styled.div`
width: 100%;

/* background-color: #eee; */
padding: 50px 0;
.cont--all{
    width: 850px;
margin: 50px auto;
padding: 20px;
border-radius: 10px;
display: flex;
flex-direction: column;
position: relative;
align-items: center;
}
.icon-view{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 3rem;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: absolute;
    top: -60px;
    z-index: 0;
    background-color: #eee;
    color: #f6852b;
    }   

.text--btn{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 20px;
    z-index: 1;
    background-color: #eee;
    height: 250px;
    
}
.view--img,.text--btn{
    border-radius: 30px;
}
a{
    text-decoration: none;
    font-size: 1.5rem;
    font-weight:700;
    padding: .3em 1em;
    border-radius: 30px;
    color: white;
    background-color: #f6852b;
    position: absolute;
    margin-top: 100px;
    right: 100px;
}
h2{
    color: white; 
    position: absolute;
    left: 80px;
    margin-bottom: 100px; 
    color: #f6852b;
}
`
