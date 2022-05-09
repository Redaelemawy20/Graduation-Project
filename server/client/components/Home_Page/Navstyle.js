import styled from "styled-components";
export default styled.section`
  :root {
    --blue: #147499;
    --white: #ffffff;
    --orange: #f6852b;
    --backGround: rgba(20, 116, 153, 0.5);
  }
  width: 100%;
    height: 65px;
    z-index: 2;
    color: var(--white);
    min-width: 280px;
  a {
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
  }
  .lock--Icon:hover,
  #Show:hover {
    color: var(--orange);
    /*background-color: var(--orange);*/
    cursor: pointer;
  }
   
   
  
  /**bars icon in large screen **/
  #Show {
    display: none;
  }
   .un--list {
    width: 100%;
    height: 102%;
    background-color: var(--blue);
    display: flex;
  }
 .un--list ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0 1%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
   .un--list ul li {
    width: 100%;
    height: 100%;
    font-size: 1.07rem;
    font-weight: 500;
    /* display: flex;
  align-items: center;
  justify-content: center; */
    position: relative;
    /* flex-direction: column; */
  }
   .un--list ul .Main--list {
    font-weight: 600;
    padding: 0.2em 0;
  }
   .un--list ul .Main--list a {
    padding: 0 0.2em;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*******Down Arrow Animation*******/
   .un--list ul .Main--list:hover a #down .downIcon {
    animation-name: Down;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
    animation-iteration-count: 3;
  }
   .un--list .Bar--Icon {
    display: none;
  }

   .un--list .Maa--Ul > li:hover {
    background-color: var(--orange);
    transition: 0.5s;
  }

   .un--list li .Drop--Down--Add {
    position: absolute;
    top: 65px;
    left: -2px;
    z-index: 1;
    width: 250px;
    background-color: #cccbc6;
    /* padding: .4em 0; */
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 1rem;
  }

   .un--list li .Drop--Down--Add .admins--form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    transition: 0.3s;
  }
   .un--list li .Drop--Down--Add .In--Unor {
    flex-direction: column;
  }
   .un--list li .Drop--Down--Add .In--Unor li {
    justify-content: flex-start;
    font-size: 0.95rem;
    padding: 0 0.5em;
  }
   .un--list li .Drop--Down--Add .In--Unor li:not(:last-child) a {
    border-bottom: 2px solid var(--orange);
  }
   .un--list li .Drop--Down--Add .In--Unor li a {
    width: 100%;
    padding: 0.5vw 0;
    line-height: 1;
  }
   .un--list li .Drop--Down--Add ul a:hover {
    color: var(--orange);
    /* padding-inline-start: 5px; */
    transform: scale(1.03);
    transition: 0.5s;
  }
  .un--list ul .Main--list a .downIcon {
    padding: 0 0.3em;
  }
  /******first Element****/

 .un--list .Maa--Ul #Admins #example-collapse-Admin {
    width: 23vw;
    left: 0;
  }

 .un--list .Maa--Ul #Digital-Trans #example-collapse-Digital-Trans,

 .un--list .Maa--Ul #Arriv--Manage #example-collapse-Arrive--Manage {
    left: -155px;
  }

  /*large Screens >1000px*/
  @media (min-width: 1001px) {
  
   .un--list li .Drop--Down--Add {
      display: none;
    }
  
   .un--list .Maa--Ul > li:hover .Drop--Down--Add {
      display: flex;
    }
  
   .un--list ul .Main--list a {
      height: 100%;
      line-height: 1.2;
    }

  
   .un--list #Media:hover .Drop--Down--Add {
      display: flex;
      background-color: rgba(221, 221, 221, 0.7);
      width: 13vw;
    }
  
   .un--list ul .Main--list:not(:first-child) {
      border-left: 2px solid var(--white);
    }
  
   .un--list ul .Main--list:first-child {
      border-left: 2px solid var(--white);
    }
  
   .un--list ul .Main--list:last-child {
      border-right: 2px solid var(--white);
    }
  }
  /******Daily_News*****/

 #News {
    display: none;
  }

 .un--list .close--Icon {
    display: none;
  }
  @media (max-width: 1286px) {
  
   .un--list ul .Main--list {
      font-size: 1rem;
    }
  
   .un--list li .Drop--Down--Add .In--Unor li a {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1170px) {
  
   .un--list ul .Main--list {
      font-size: 0.9rem;
    }
  }

  /**mimi Screens < 1000px**/
  @media (max-width: 1000px) {
  
      display:flex;
      justify-content: flex-end;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      height: 40px;
    

    /*Icon show*/
    #Show {
      display: flex;
      padding-right: 1em;
      margin: auto 0;
      font-size: 1.5rem;
      color: var(--blue);
    }
  
   .un--list {
      position: fixed;
      width: 80%;
      height: auto;
      z-index: 3;
      flex-direction: column;
      padding: 1em;
      background-color: var(--backGround);
      margin-top: 40px;
      min-width: 235px;
    }
  
   .un--list .Maa--Ul #Admins #example-collapse-Admin {
      width: 100%;
    }
  
   .un--list .close--Icon {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      justify-content: flex-end;
      padding-right: 2%;
      order: 1;
      padding-bottom: 1em;
      position: relative;
    }
  
   #News {
      display: flex;
      color: var(--blue);
      padding-right: 1em;
      animation: daily--news;
      animation-duration: 7s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      margin: auto 0;
    }
  
   .un--list .Maa--Ul {
      flex-direction: column;
      order: 2;
      overflow-y: auto;
      justify-content: space-between;

    }
  
   .un--list ul li {
      font-size: 1rem;
      height: auto;
      padding: 0.6em 0;
    }
  
   .un--list ul li a {
      width: 100%;
      text-align: center;
      padding: 0.8em 0;
    }
  
   .un--list ul li a:hover {
      color: var(--orange);
    }
  
   .un--list .Maa--Ul > li:hover {
      background-color: transparent;
    }
  
   .un--list li .Drop--Down--Add {
      position: initial;
      border-radius: 5px;
    }
  
   .un--list li .Drop--Down--Add,
  
   .un--list #Media:hover .Drop--Down--Add {
      width: 100%;
    }
     .un--list ul .Main--list{
      padding: 1em 0;
    
  }
    /**Toogle of nav bar**/
    #visable {
      transform: translateX(0);
      transition: 0.5s linear;
    }
    #unvisable {
      transform: translateX(100%);
      transition: 0.5s linear;
    }
  }
  @media (max-width: 900px) {
  
   .un--list li .Drop--Down--Add .In--Unor li {
      font-size: 0.69rem;
    }
  }

  /**Animation of daily news**/
  @keyframes daily--news {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-80vw);
    }
  }
  @keyframes Down {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(6px);
    }
  }
`;
