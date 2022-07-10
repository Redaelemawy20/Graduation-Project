import React from 'react'
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
export default function OrganizationalStructureTemplete(props) {
  return (
    <OrganizationalStructureTempleteStyle>
        <div className="Title">
        <h1>Organizational Structure</h1>
      </div>
      <div className="content">
      {
        props.data.text?
        props.data.text.map(item=>{
          {console.log(item)}
          return(
          <h3>
      <span className='links--icon'>
        <BsFillPersonFill/>
      </span>
      {item}
      </h3>)
      
      }
        ): ""
      }
      
        <img
          src={props.data.img}
          alt="Organizational structure image"
          className="image--content"
        />
      </div>
    </OrganizationalStructureTempleteStyle>
  )
}
const OrganizationalStructureTempleteStyle = styled.div`
  .image--content {
    width: 100%;
    height:auto;
    object-fit: fill;
    min-height:400px ;
  }
`;
