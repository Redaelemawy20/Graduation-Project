import React from "react";
import styled from "styled-components";
import Header from "../../Home_Page/Header2";
import navLinks from "../../Home_Page/NavlinksObj";
export default function Postgraduateresults() {
  // console.log(btn);
  

  function getResault() {
    return <div className="Shape">Alaa</div>;
  }
  return (
    
    <PostgraduateresultsStyle>
      <Header navLinks={navLinks} />
      <div className="Title">
        <h1>Postgraduate Results</h1>
      </div>
      <div className="contentt">
        <form>
          <label>Sitting number</label>
          <input
            type="text"
            placeholder="Enter Sittin number"
            onChange={(event) => {
              var btn = document.getElementById("search");
              let lengthInput = event.target.value.length;
              if (
                lengthInput === null ||
                lengthInput == " " ||
                lengthInput == 0
              ) {
                btn.style.opacity = ".8";
              } else {
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";
              }
            }}
          ></input>
          <button id="search"  >
          
            Search
          </button>
        </form>

        <div className="resault">
          { 
            //const bttn=document.getElementById('search');
            //bttn.addEventListener('click',()=>{
             // console.log('Alaa Ayaad')
            //})
          }
        </div>
      </div>
    </PostgraduateresultsStyle>
  );
}
const PostgraduateresultsStyle = styled.div`
  .contentt {
    min-width: 280px;
  }
  form {
    width: 500px;
    position: absolute;
    left: 50%;
    top: 68%;
    transform: translate(-50%, -50%);
    min-width: 280px;
    display: block;
    padding: 50px 0;
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-width: 270px;
  }
  form > * {
    width: 90%;
    margin: 0 5%;
    font-size: 1.1rem;
  }
  label {
    padding: 15px 0 5px;
    color: #f6852b;
  }
  input[type="text"] {
    border: 2px solid #f6852b;
    padding: 5px;
    outline: none;
  }
  #search {
    margin: 40px 5%;
    padding: 8px 0;
    background-color: #f6852b;
    border: none;
    color: white;
    opacity: 0.8;
    cursor: not-allowed;
  }
  button,
  input {
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    form {
      width: 90%;
    }
  }
  @media (max-width: 450px) {
    .contentt {
      width: 100%;
    }
    form {
      width: 90%;
    }
  }
`;
