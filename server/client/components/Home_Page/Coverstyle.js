import styled from "styled-components";
export default styled.div`
  :root {
    --blue: #147499;
    --white: #ffffff;
    --orange: #f6852b;
    --dr-Orange: #ff8c00;
  }
  
  height: 85vh;
  min-width: 280px;

  .cover {
    width: 100%;
    height: 85vh;
  }
  /**slider**/
  .carousel-control-next,
.carousel-control-prev {
  margin: 250px 0;
  
}
.carousel-control-prev-icon ,
.carousel-control-next-icon{
  background-color: black;
}
.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  
  filter: invert(0) grayscale(500);
}
.carousel-caption h5,.carousel-caption p{
  color: white;
}
.carousel-indicators button{
  background-color: white;

}
.carousel-dark .carousel-indicators [data-bs-target] {
     background-color: white; 
}
  .cover .trans--text {
    position: absolute;
    top: 94%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-right: 2em;
    animation-name: ani--text;
    animation-duration: 3s;
    animation-timing-function: linear;
    z-index: 2;
    min-width: 280px;
  }
  .cover .Social {
    position: fixed;
    top: 45%;
    width: 40px;
    z-index: 2;
  }
  .cover .trans--text .organize {
    margin: 0.3em 0.6em;
    font-size: 2rem;
    font-weight: 600;
    width: 150px;
    position: relative;
    font-style: italic;
  }

  .cover .trans--text .organize a {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-decoration: none;
  }
  .cover .trans--text .organize .tool--tip {
    position: absolute;
    width: 100%;
    top: -50px;
    background-color: #212529;
    border-radius: 3px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .cover .trans--text .organize .tool--tip a {
    font-size: 1rem;
    color: var(--orange);
    padding: 0.5em;
  }
  /* .cover .trans--text .organize .right--Move {
    padding-left: 0.2em;
    font-size: 2rem;
    font-weight: 600;
  } */
  #text {
    width: 100%;
    height: 70px;
    border-radius: 6px;
    background-color: var(--orange);
    /* background-color: rgba(255, 255, 255, 0.7); */
    padding: 0.1em 0.4em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  #text img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cover .trans--text #text:hover .tool--tip {
    opacity: 1;
  }
  /* .tool--tip:hover{
    border:1px solid var(---orange) ;
  } */
  /* .cover .trans--text #text:hover .right--Move .iicon {
    animation-name: Arrow--Right;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 3;
  } */
  /***********not work********/

  @media (max-width: 1024px) {
    .cover .trans--text {
      /* top: 85%; */
      padding-right: 0;
    }
    .cover .trans--text .organize {
      font-size: 1.3rem;
      width: 100px;
    }
    #text {
      height: 50px;
    }
  }
  @media (max-width: 901px) {
    .cover .trans--text {
    top: 91%;
    }
  }
  @media (max-width: 750px) {
    .cover .trans--text .organize {
      font-size: 1rem;
      padding-right: 0;
      text-align: center;
      width: 70px;
    }
    #text {
      height: 40px;
      padding: 0 .2em;
    }
    .tool--tip {
      top: -40px !important;
    }
    .tool--tip a {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width:680px){
    .cover .trans--text {
    top:89% !important;
    }
  }
  @media (max-width: 400px) {
    /* .cover .trans--text {
      top: 82%;
    } */
    .cover .trans--text .organize {
      width: 50px;
    }
    #text {
      height: 30px;
    }
    .tool--tip {
      top: -30px !important;
    }
    .tool--tip a {
      font-size: 0.6rem !important;
    }
  }
  @keyframes ani--text {
    0% {
      transform: translateY(-8em);
      opacity: 0.4;
    }
    30% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0em);
      opacity: 1;
    }
  }
`;
