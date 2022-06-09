import React from "react";
import styled from "styled-components";
import Header2 from "../../Home_Page/Header2";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import Footer from "../../Home_Page/Footer.jsx";
import { AiOutlineSlack } from "react-icons/ai";
import "../../../App.css";
import translate from "../../../../translate";
export default function TextPages(props) {
  //const arrayProps=Array.from(props.text)
  const { Title, lines, names } = props.text;
  //console.log(props);
  const navLinks = [
    {
      name: "Home",
      url: "/",
      active: true,
      dropDown: false,
      icon: <FaHome />,
    },
  ];
  const langs = translate("__langs");
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll("p");
    const contentparagraph =
      document.getElementsByClassName("content--paragraph");
    const iconStartLine = document.getElementsByClassName("Icon--Line");
    const arrayIcons = Array.from(iconStartLine);
    arrayIcons.forEach((item, index) => {
      // for (let i = 0; i < arrayIcons.length; i++) {
      setTimeout(() => {
        item.classList.add("rotate--Icon");
      }, index * 1000);
      //}
    });
    const arrayContent = Array.from(contentparagraph);
    arrayContent.forEach((item) => {
      setTimeout(() => item.classList.add("move"), 500);
    });
    const arrayElements = Array.from(elements);
    setTimeout(() => contentparagraph.classList.add("move"), 500);
    for (let i = 0; i < arrayElements.length; i++) {
      setTimeout(() => arrayElements[i].classList.add("move"), i * 1000);
    }
  }, []);
  return (
    <>
      <Header2 navLinks={navLinks} langs={langs} />
      <TextPagesStyle>
        <div className="content-paragraph">
          {/* {admistrationOffice.map((item, index) => { */}
          {/* return ( */}

          <div className="Title">{Title}</div>
          <div className="content--paragraph" id="content">
            {lines.map((item) => {
              return (
                <p>
                  <div className="start--line--icon">
                    <AiOutlineSlack className="Icon--Line" />
                  </div>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="Editby--names">
          {names.map((item) => {
            return <div className=" display--persons">{item}</div>;
          })}
        </div>
      </TextPagesStyle>
      <Footer />
    </>
  );
}
const TextPagesStyle = styled.div`
  margin: 50px 0;
  .content--paragraph,
  .Editby--names {
    width: 80%;
    margin: 50px auto;
    padding: 50px;
  }
  .content--paragraph {
    border-radius: 10px;
    color: gray;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  .move {
    animation-name: paragraph--Animation;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    opacity: 1;
  }
  .person--Icon {
    margin-inline-end: 4px;
    color: #f6852b;
  }
  /* .display--persons{
    display:flex ;
  } */
  p {
    opacity: 0;
    display: flex;
    font-size: 0.95rem;
    font-weight: 400;
  }
  .start--line--icon {
    color: #f6852b;
    margin: 4px;
  }
  .rotate--Icon {
    transform: rotate(720deg);
    transition: 5s;
    transition-timing-function: ease;
  }
  span {
    color: gray;
    margin-top: 30px;
    display: flex;
    font-size: 0.95rem;
    color: #f6852b;
    align-items: center;
  }
  h3 {
    display: flex;
    align-items: center;
    margin-top: 0.4em;
  }
  @media (max-width: 450px) {
    .content--paragraph,
    .Editby--names {
      width: 90%;
      padding: 25px 15px;
    }
  }
  @keyframes paragraph--Animation {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
