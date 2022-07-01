import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { GrLogin } from "react-icons/gr";
export default function Navigator() {
  const [Open, setOpen] = useState(false);
  // const [Drop, setDrop] = useState(true);
  const navigate = useNavigate();

  let navigator = [
    {
      name: "Home",
      icon: <FaHome />,
      url: "/",
      dropDown: true,
      list: [
        {
          name: "Alaa",
          url: "/UniversityPresident",
        },
        {
          name: "Ayaad",
          url: "/",
        },
        {
          name:'Amin',
          url:'/'
        },
        {
          name:'Atia',
          url:'/'
        }
      ],
    },
    {
      name: "Second",
      icon: <GrLogin />,
      url: "/UniversityPresident",
      dropDown: false,
    },
  ];
  return (
    <NavigatorStyle
      onMouseOver={() => {
        setOpen(!Open);
      }}
      onMouseOut={() => {
        setOpen(!Open);
      }}
      style={
        Open
          ? { width: "260px", transition: ".5s" }
          : { width: "60px", transition: ".5s" }
      }
    >
      <div className="navigator">
        <div>
          {navigator.map((item, index) => {
            return (
              <>
                <a
                  className="List--One"
                  onClick={() => {
                    if (!item.dropDown) navigate(item.url);
                    else {
                    }
                  }}
                  data-bs-toggle="collapse"
                  href={item.dropDown ? "#drop".concat(index) : item.url}
                  // role="button"
                  aria-expanded="false"
                  aria-controls={"drop".concat(index)}
                >
                  <span className="Icon--navigator">{item.icon}</span>
                  <p
                    style={
                      Open
                        ? { opcity: "1", transition: ".5s" }
                        : { opacity: "0" }
                    }
                    className='Text--navigator'
                  >
                    {item.name}
                    {item.dropDown ? <BsChevronDown /> : ""}
                  </p>
                </a>
                {item.dropDown ? (
                  <div className="collapse" id={"drop".concat(index)}>
                    <div
                      //className="card card-body"
                      style={!Open ? { display: "none" } : {}}
                    >
                      <ul>
                        {item.list.map((item) => {
                          return(
                            <li className="dropDown">
                          <Link to={`${item.url}`}>{item.name}</Link>
                          </li>
                          )
                          
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </NavigatorStyle>
  );
}
const NavigatorStyle = styled.div`
  height: 333px;
  background-color: rgb(221, 221, 221);
  position: fixed;
  top: 200px;
  left: 5px;
  border-radius: 10px;
  padding: 10px;
  z-index: 999;

  .btn {
    //position: absolute;
    left: 300px;
  }
  //ul
  div {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  li {
    cursor: pointer;
    padding-inline-start:.5em;
    border-inline-start:2px solid #206bc4;
    position:relative ;
    height:25px;
  }
  li:last-child{
    border:none;
    padding-top:0;
  }
  li:last-child a{
    left:0px;
    top:-3px;
  }
  p{
    margin:0 0 0 0.4em;
  }
  a{
    width:100%;
    margin: 0.2em 0;
  }
  li>a{
    border:2px solid #206bc4;
    border-end-start-radius:20px 20px;
    border-bottom:none;
    border-top:none ;
    border-inline-end:none ;
    padding-inline-start:10px;
    position:absolute;
    left:-2px ;

  }
  a:hover{
    text-decoration:none;
    opacity:.8 ;
  }
  ul{
    padding:0;
    margin:.2em 0em .2em 4em ;
  }
  
  svg {
    width: 40px;
  }
  .List--One {
    display: flex;
    align-items: baseline;
    height: 30px;
    font-size: 1rem;
    max-width: 250px;
    margin: 0.2em 0;
    //justify-content: space-evenly ;
  }
  .Icon--navigator {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-inline-start: 2px solid #f6852b;
    border-bottom: 2px solid #f6852b;
  }
  .Text--navigator {
    width: 200px;
    font-weight: 500;
    height: auto;
    line-height: 0.9;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-inline-start: 10px;
  }
  
  .dropDown {
    width: 100%;
    text-align: start;
    font-size: 0.81rem;
    font-weight: 300;
    padding: 0.2em;
    padding-inline-start:0;
    cursor: pointer;
  }
  .Rotate {
    transform: rotate(180deg);
    transition: 0.4s;
  }
`;
