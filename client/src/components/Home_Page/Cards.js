import React, { useEffect } from "react";

import "./card.css";
export default function Cards(props) {
  //const{img,date,title}=props.item;

  useEffect(() => {
    const item = props.item;
    const { img } = item;
    console.log(img);
  
  }, []);
  return (
    <div className="cardss">
      {/*<div className="card">
      <img src={img} alt=""></img>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
    {/*<div className="card" id="mid">
      <img src={aa} alt=""></img>
      <h2>Alaa Ayaad</h2>
      <p>Manager of Menoufia University</p>
    </div>*/}
    </div>
  );
}
