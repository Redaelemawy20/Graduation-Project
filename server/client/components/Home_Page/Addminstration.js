import React, { useEffect } from "react";
import Cards from "./Cards";
import "./Statics.css";
import "./Addinstrations.css";
import Newsstyle from "./Newsstyle.jsx";
import { connect } from "react-redux";

function Addminstration({ data }) {
  // console.log(data);
  // useEffect(() => {

  // }, [])
  console.log(data);
  const items = data.news.slice(0, 3);
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
    </Newsstyle>
  );
}
function mapStateToProps({ news }) {
  return { data: news };
}
const Element = connect(mapStateToProps, null)(Addminstration);
export default Element;
