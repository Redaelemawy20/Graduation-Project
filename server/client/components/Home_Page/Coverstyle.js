import styled from "styled-components";
export default styled.div`
:root {
  --blue: #147499;
  --white: #ffffff;
  --orange: #f6852b;
  --dr-Orange: #ff8c00;
}
/* body {
  margin: 0;
  padding: 0;
}
/** {
  box-sizing: border-box;
} */
 
  height: 85vh;
  min-width: 280px;

 .cover {
  width: 100%;
  height: 85vh;
}
.cover #vid {
  position: relative;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.cover .trans--text {
  position: absolute;
  top: 85%;
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
  padding: 0.3em 0.6em;
  font-size: 2rem;
  font-weight: 600;
  width: 300px;
  font-style: italic;
}
 .cover .trans--text .organize a {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
}
 .cover .trans--text .organize .right--Move {
  padding-left: 0.2em;

  font-size: 2rem;
  font-weight: 600;
}
#text {
  width: 100%;
  border-radius: 6px;
  color: var(--orange);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.2em 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
}
 .cover .trans--text #text:hover .right--Move .iicon {
  animation-name: Arrow--Right;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 3;
}

@media (max-width: 1024px) {
   .cover .trans--text .organize {
    font-size: 1.3rem;

    width: 205px;
  }
   .cover .trans--text .organize .right--Move {
    font-size: 1.5rem;
  }
}
@media (max-width: 600px) {
  .cover #vid {
    width: 100%;
    height: 100%;
  }
  .cover {
    width: 100%;
    height: 60vh;
  }
   .cover .trans--text {
    padding-right: 0;
  }
   .cover .trans--text .organize {
    font-size: 1rem;
    max-width: 165px;
    padding-right: 0;
    text-align: center;
    margin-right: 15px;
  }
   .cover .trans--text {
    top: 82%;
  }
  #text {
    padding: 0.4em 0;
  }
   .cover .trans--text .organize .right--Move {
    font-size: 1.2rem;
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
@keyframes Arrow--Right {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(20px);
  }
}`;
