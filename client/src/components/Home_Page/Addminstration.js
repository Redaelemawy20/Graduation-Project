import React from 'react'
import Cards from './Cards'
import './Addinstrations.css'
import aa from '../Images/aa.jpg'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Addminstration() {
    const items=[
        {id:1,title:'Dr.Adel Moubark',content:'Manager of Menoufia University',img:aa}
    ]
    return (
        <div className="Addmins" id='Add'>
        <div className='container'>
        <div className='cards'>
        <Cards items={items} />
       
        
        </div>
        </div>
        </div>
    )
}
