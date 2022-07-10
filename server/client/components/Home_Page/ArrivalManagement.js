import React from "react";
import Header from "../Home_Page/Header2";
import navLinks from "../Home_Page/NavlinksObj";
import Cover from "../Home_Page/Cover";
import bb from "../../components/Images/dig.jpg";
import Footer from "../Home_Page/Footer.jsx";
import styled from "styled-components";
export default function ArrivalManagement() {
  const videos = [
    {
      name: "Media college",
      url: "https://www.youtube.com/embed/DwgWMFF4bFY",
    },
    {
      name: "Pharmacy college",
      url: "https://www.youtube.com/embed/zjf7Ml2u2Fc",
    },
    {
      name: "Applied Health Science Technology",
      url: "https://www.youtube.com/embed/OvtxNCFU1ZE",
    },
    {
      name: "Agriculture college",
      url: "https://www.youtube.com/embed/JovvlOcryUI",
    },
    {
      name: "Arts college",
      url: "https://www.youtube.com/embed/cAsvuBnQsF4",
    },
    {
      name: "Nursing college",
      url: "https://www.youtube.com/embed/eIu11gYd3bE",
    },
    {
      name: " Medicine college",
      url: "https://www.youtube.com/embed/W4xWepYkKqo",
    },
    {
      name: "Dentistry college",
      url: "https://www.youtube.com/embed/8gQXbssU3og",
    },
    {
      name: "Engineering college",
      url: "https://www.youtube.com/embed/-E0d9pwjLKY",
    },
    {
      name: "Artificial Intelligence college",
      url: "https://www.youtube.com/embed/jO2aZuPUBRY",
    },
    {
      name: "Electronic Engineerin college",
      url: "https://www.youtube.com/embed/iofy_m02et0",
    },
    {
      name: "Science college",
      url: "https://www.youtube.com/embed/6bwCr-qL_R4",
    },
    {
      name: " Quality Education college",
      url: "https://www.youtube.com/embed/IWvnJDsG1MY",
    },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <Cover />
      <div className="Title">
        <h1>Videos About Colleges</h1>
      </div>
      <ArrivalManagementStyle>
        <div className="videos--college">
          {videos.map((item) => {
            return (
              <div className="element">
                <iframe
                  src={`${item.url}`}
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
        <div className="channel">
          <a href="https://www.youtube.com/channel/UC4ijYK8MsbVvZoaLNIY11lA/featured">
            Youtube Channel
          </a>
        </div>
      </ArrivalManagementStyle>

      <Footer />
    </>
  );
}
const ArrivalManagementStyle = styled.div`
  .videos--college {
    display: grid;
    width: 90%;
    margin: 3rem auto 2rem auto;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
  }
  h3 {
    margin: 1rem 0;
    color: #f6852b;
  }
  iframe {
    height: 200px;
    width: 100%;
  }
  .element {
    margin: 2rem 1rem;
    padding: 0.5rem;
    background-color: #ddd;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-width: 240px;
  }
  .channel {
    width: 90%;
    margin: auto;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    padding: 1em 2em;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    background-color: #f6852b;
    margin-bottom: 3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:4px ;
  }
  a:hover{
    opacity:.8 ;
  }
  @media (max-width: 1400px) {
    .videos--college {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 1023px) {
    .videos--college {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 700px) {
    .videos--college {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 340px) {
    .videos--college {
      width: 98%;
    }
    iframe {
      max-width: 270px;
    }
  }
`;
