/* eslint-disable no-undef */
import React from "react";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../Home_Page/Nav.css";
import Navstyle from "../Home_Page/Navstyle";
import "../Home_Page/Common.css";
import { Link, Route } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

export default function NavSectors(props) {
    /**************Destructing of routes********* */
    const{listName,cliick,ficon,licon,style}=props.item;
    let dropdown=null;
    if(props.item.dropdown){
    dropdown=props.item.dropdown;
    console.log(dropdown);
  }
    
    //const
    const [Drop, setDrop] = useState({
        // about: false,
        // admin: false,
        // staff: false,
        // faculities: false,
        // sciresearch: false,
        // student: false,
        // egyuniversities: false,
        // media: false,
      });
    
  return (
         
          <li id="Admins" className="Main--list">
            <a
              onClick={() =>setDrop({ ...Drop, admin: !Drop.admin })}
              aria-controls="example-collapse-Admin"
              data-target="#example-collapse-Admin"
              data-toggle="collapse"
              aria-expanded={Drop.admin}
            >
              {listName}
              
              <span id="down">
                {licon}
              </span>
            </a>
            <Collapse in={Drop.admin}>
              <div className="Drop--Down--Add" id="example-collapse-Admin">
                <div className="admins--form">
                  <ul className="In--Unor">
                  { dropdown ? dropdown.map(item=>
                    
                     <li>
                      {item}
                    </li>
                  ) : ""
                   
                  }
                  </ul>
                </div>
              </div>
            </Collapse>
            </li>
          

  )
}
