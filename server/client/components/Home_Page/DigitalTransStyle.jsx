import styled from "styled-components";
export default styled.section`
width: 100%;
margin-top: 30px;

.resize {
  width: 100%;
  height: 450px;
  //background-image: url(../Images/dig.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.resize .digital-transformation {
  width: 100%;
  height: 100%;
  background-color: rgba(19, 19, 19, 0.3);
}
h1 {
  padding: 45px 0;
  text-align: center;
  color: #ddd;
  min-width: 280px;
  margin: 0;
  display: none;
}
h1 + div {
  display: none;
}
.links a {
  text-decoration: none;
  color: #ddd;
  margin-top: 2em;
  font-size: 1.2rem;
}
.links:hover {
  transform: scale(1.1);
}
 .services {
  padding: 45px 0;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  margin: auto;
}

.resize .digital-transformation .services > div {
  padding: 0.5em 1em;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 .services > div .digital-icon {
  font-size: 7rem;
 
}
a{
  color:#ddd;;
}
.cap-ani {
  animation-name: move--up;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  display: block;
}
.sec-ani {
  animation-name: move--up;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  /* animation-delay: 1s; */
  display: block;
}
@keyframes move--up {
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@media (max-width:630px){
   .services{
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
    height: 80%;
  }
  .resize{
    height: auto;
  }
}
@media (max-width:460px){
  height: fit-content;
   .services{
    grid-template-columns: repeat(1,1fr);
  }
}
`;
