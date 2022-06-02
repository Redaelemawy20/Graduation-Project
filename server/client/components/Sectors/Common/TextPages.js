import React from "react";
import styled from "styled-components";
import Header2 from "../../Home_Page/Header2";
import { useEffect,useState } from "react";
export default function TextPages() {
  const admistrationOffice = [
    {
      //id:1,
      //name:'Adminstration Office',
      Title: "Adminstration Office",
      //paragraphs: [{ line1: "Alaa" }, { line2: "Ayaad" }],
      line1:
        "Reviewing the e-mail of the post office, Prof. Dr. / the president of the university, from complaints, grievances, decisions, regulations and legal decisions to indicate the official post offices. This has led to saving time and effort. The decision is in accordance with the correct provisions of the law.",
      line2:
        "Reviewing all work related to the financial affairs of the university administration and its faculties (purchasing, stores) and requesting bonuses, financial reinforcements for some of the university’s authorities, and ensuring the extent to which this corresponds to the laws, regulations and decisions regulating them, before submitting them to the competent authority for approval, and proposing the appropriate legal opinion on it prior to approval.",
      line3:
        "Reviewing all the affairs of the faculty members of the university's colleges and institutes, which are presented to Mr. Prof. Dr. / the president of the university.",
    },
  ];
  //const [opacity,setOpacity]=useState(0)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const elements = document.querySelectorAll("p");
      //const height=window.pageYOffset;
      const arrayElements = Array.from(elements);
      let count=0;
      //arrayElements.style.opacity='0'
      for (let i = 1; i <= arrayElements.length; i++) {
        
        for (let j = 0; j < i; j++) {
          
          arrayElements[j].style.animationDelay = `${count-(3*arrayElements.length)}s`;
          //arrayElements[j].style.opacity=`${opacity}`;
          arrayElements[j].classList.add('move')
          arrayElements[j].style.opacity='0';
          //arrayElements[j].style.opacity='1'
            //arrayElements[j].style.opacity=1
          
         
          count++;
          // arrayElements[j].style.opacity='1'
        }
        //arrayElements[i].style.opacity='1'
        // if(arrayElements[i]&&height>=(i+1*10)){
        // arrayElements[0].classList.add('move')
        //}
        // if(arrayElements[i]&&height>=i+2*10){
        //   arrayElements[1].classList.add('move')
        // }
        // if(arrayElements[i]&&height>=i+3*10){
        //   arrayElements[2].classList.add('move')

        // }
        // if(arrayElements[i]&&height>=i+4*10){
        //   arrayElements[3].classList.add('move')
        // }
      }
      //console.log(arrayElements,height)
    });
  }, []);
  return (
    <>
      <Header2 />
      <TextPagesStyle>
        <div className="content-paragraph">
          {admistrationOffice.map((item, index) => {
            return (
              <>
                <div className="Title">{item.Title}</div>
                <div className="content--paragraph">
                  <p>{item.line1}</p>
                  <p>{item.line2}</p>
                  <p>{item.line3}</p>
                  <p>{item.line1}</p>
                  <p>{item.line2}</p>
                  <p>{item.line3}</p>
                  <p>the end</p>
                </div>
              </>
            );
          })}
        </div>
      </TextPagesStyle>
    </>
  );
}
const TextPagesStyle = styled.div`
  margin: 50px 0;
  .content--paragraph {
    width: 80%;
    margin: 50px auto;
    padding: 50px;
    background-color: #eee;
  }
  .move {
    animation-name: paragraph--Animation;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    opacity: 1 !important;
  }
   /* p {
    opacity:0!important;
  }   */
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
