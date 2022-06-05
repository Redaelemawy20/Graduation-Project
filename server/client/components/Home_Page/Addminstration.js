import React, { useEffect } from "react";
import Cards from "./Cards";
import "./Statics.css";
//import "./Addinstrations.css";
import Newsstyle from "./Newsstyle.jsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Addminstration({ news }) {
  const items = news.slice(0, 3);
  return (
    // <section className="news">
    <Newsstyle>
      <div className="Title">
        <h1>Latest News</h1>
      </div>

      <div className="Addmins" id="Add">
        {items.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
      <div className="all--news">
        <Link to="/allnews">All News</Link>
      </div>
    </Newsstyle>
  );
}

export default Addminstration;
