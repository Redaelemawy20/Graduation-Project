import styled from "styled-components";
export default styled.div`
padding: 1rem 0;
  position: relative;
  min-width: 280px;
  a{
    text-decoration:none;
    padding-top:2px;
  }
  .controls {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .controls span {
    position: absolute;
    z-index: 3;
    font-size: 1.6rem;
  }
  #left {
    left: 40px;
    //display: none;
  }
  #right {
    right: 40px;
  }
  .faculties--cont {
    width: 1150px;
    overflow: hidden;
    margin: 5rem auto;
    display: grid;
    height: 210px;

    /* grid-template-columns: repeat(9, 1fr); */
  }
  .faculties--container--All{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin: auto;
    row-gap:60px;
    column-gap:30px;
    width: 1245px;
    justify-content:center ;
    margin-top:50px;
    animation-name:All--faculities--Animation;
    animation-timing-function:ease;
    animation-duration:2s;
    animation-iteration-count:1;
    
  }
  #All--faculites-title h1{
    margin-top:50px;
      font-size:1.5rem ;
  }
  .faculty {
    text-align: center;
    width: 270px;
    margin: 0 10px;
    background-color: #ddd;
    border-radius: 5px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
   .faculty .view {
    width: 100%;
  }
 .faculty .logo {
    position: absolute;
    top: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
  }
  .faculty .logo img {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 50%;
  }
   .faculty img {
    width: 100%;
    height: 150px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  @media (max-width: 1245px) {
    .faculties--cont,.faculties--container--All {
      width: 880px;
    }
    .faculties--container--All{
    grid-template-columns:repeat(3,1fr) ;
    }
  }
  @media (max-width: 973px) {
    .faculties--cont ,.faculties--container--All{
      width: 580px;
    }
    .faculties--container--All{
        grid-template-columns:repeat(2,1fr) ;
    }
  }
  @media (max-width: 673px) {
    .faculties--cont ,.faculties--container--All {
      width: 280px;
    }
    .faculties--container--All{
        grid-template-columns:repeat(1,1fr) ;
    }
    .faculties--cont .faculty {
      width: 270px;
    }
  }
  .move {
    /* transform: translateX(-1100px); */
    transition: 15s;
  }
  .left {
    /* transform: translateX(-1050px); */
    transition: 1s;
  }
  //probably
  .right {
    transition: 1s;
  }
  @keyframes All--faculities--Animation{
      0%{
        transform: translateX(-100px);
        opacity:0;
      }
      50%{
          /* transform:translateX(-105px); */
          opacity:.5 ;
      }
      100%{
          transform: translateX(0);
          opacity:1;
      }
  }
`