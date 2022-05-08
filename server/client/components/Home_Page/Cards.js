//import React, { useEffect } from "react";
import React from "react";
import "./card.css";
import './Cover.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-router-dom";
export default function Cards(props) {
  console.log(props.items)
  const{id,title,date,img,content}=props.item
  
  return (
    <div className="arrange--news">
    
    <div className="news--card">
    <Link to='/news'>
    <img src={img} />
    </Link>
      
      <div className="news--text">
      <h4><Link to='/news'>{title}</Link></h4>
      <p>
       {content}
      </p>
      <h6>Publiched in: {date}</h6>
      <Link to='/news' id="explore">Explor<HiOutlineArrowNarrowRight className="icon"/></Link>
      </div>
      </div>
    </div>
  );
}
