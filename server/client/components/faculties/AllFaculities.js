import React from 'react'
import Header from '../Home_Page/Header'
import Nav from '../Home_Page/Nav'
import faculitiesObj from './faculitiesObj'
import { Link } from 'react-router-dom'
import FaculitesSectionStyle from './FaculitesSectionStyle.jsx'
export default function AllFaculities() {
    const homeText={
        fName:'Menofia',
        lName:'University'
    }
  return (
      <>
      <Header text={homeText}/>
      <Nav/>
      <FaculitesSectionStyle>
      <div className="Title" id='All--faculites-title'>
        <h1>Menofia University Faculties</h1>
      </div>
      <div className="faculties--container--All" id="facus-num">
          {faculitiesObj.map((item, index) => {
            let img = item.logo;
            let name = item.name;
            let date = item.since;
            let view = item.view;
            let id = item.id;
            return (
              <div className="faculty">
                <div className="logo">
                  <img src={img} alt="faculity image" />
                </div>
                <div className="view">
                  <img src={view} alt="faculity image" />
                  <Link to={`/faculity/${id}`}>
                    <h5>{name}</h5>
                  </Link>
                  <h6>Since {date}</h6>
                </div>
              </div>
              
            );
          })}
        </div>
        </FaculitesSectionStyle>
      </>)
}
