import React from "react";
import ReactDom from "react-dom";
import "./LatestNewsCard.css";
const cardInfo = [
  {
    img: "https://media.istockphoto.com/photos/sunrise-above-a-forest-on-a-foggy-morning-picture-id1284795077?s=612x612",
    date: "1/1/2022",
    title: "this is my university",
  },
  {
    img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
    date: "1/1/2021",
    title: "this is a tree",
  },
  {
    img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
    date: "1/1/2021",
    title: "this is a tree",
  },
  {
    img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
    date: "1/1/2021",
    title: "this is a tree",
  },
  {
    img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
    date: "1/1/2021",
    title: "this is a tree",
  },
  {
    img: "https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832",
    date: "1/1/2021",
    title: "this is a tree",
  },
];

const latestNewsCard = () => {
  return (
    <div>
      <section className="cardInformation">
        {cardInfo.map((card) => {
          const { img, date, title } = card;
          return <CardNews card={card}></CardNews>;
        })}
      </section>
    </div>
  );
};
const CardNews = (props) => {
  const { img, date, title } = props.card;
  return (
    <div className="innerCard">
      <img variant="top" src={img} alt="" style={{ width: "18rem" }} />

      <h4>{date}</h4>
      <p>{title}</p>
    </div>
  );
};

ReactDom.render(<latestNewsCard />, document.getElementById("root"));
export default latestNewsCard;

//  <div>
//       <img src={img} alt="" style={{ width: "100px" }} />
//       <h4>{date}</h4>
//       <p>{title}</p>
//     </div>
