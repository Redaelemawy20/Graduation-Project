import React from "react";
import styled from "styled-components";
import { FaUniversity } from "react-icons/fa";
export default function Links() {
  const egyuni = [
    {
      name: "Mansoura",
      link: "https://www.mans.edu.eg",
    },
    {
      name: "Alexandria",
      link: "https://alexu.edu.eg/index.php/ar/",
    },
    {
      name: "Cairo",
      link: "https://cu.edu.eg/Home",
    },
    {
      name: "Ain Shams",
      link: "https://www.asu.edu.eg",
    },
    {
      name: "Tanta",
      link: "https://tanta.edu.eg",
    },
    {
      name: "Assiut",
      link: "https://www.aun.edu.eg/main/ar/home",
    },
    {
      name: "Fayoum",
      link: "https://www.fayoum.edu.eg/english/",
    },
    {
      name: "Benha",
      link: "https://bu.edu.eg/en/",
    },
    {
      name: "Zagazig",
      link: "http://www.zu.edu.eg/",
    },
    {
      name: "Suez Canal",
      link: "http://suez.edu.eg/en/",
    },
    {
      name: "Minya",
      link: "https://www.minia.edu.eg/Minia/",
    },
    {
      name: "Damanhour",
      link: "http://www.damanhour.edu.eg/En/Pages/Default.aspx",
    },
    {
      name: "Port Said",
      link: "http://psu.edu.eg/en/home-en/",
    },
    {
      name: "Sohag",
      link: "https://www.sohag-univ.edu.eg/ar/?page_id=20049&lang=en",
    },
    {
      name: "Beni Suef",
      link: "https://www.bsu.edu.eg/home.aspx?lang=en",
    },
    {
      name: "Helwan",
      link: "http://www.helwan.edu.eg/?page_id=34878&lang=en",
    },
    {
      name: "Kafr El-Sheikh",
      link: "https://kfs.edu.eg/engkfs/",
    },
    {
      name: "Damietta",
      link: "http://www.du.edu.eg/en/home.aspx",
    },
  ];

  return (
    <Linksstyle>
      <div className="Title">
        <h1>Egyptian Universities</h1>
      </div>
      <ul>
        {egyuni.map((item, index) => {
          let uniName = item.name;
          let uniLink = item.link;
          {
            /* console.log(uniName);//Mansora  */
          }
          return (
            <li key={index}>
              <a href={uniLink} target="_blank">
                <FaUniversity className="Uni--Icon"/> {uniName} University
              </a>
            </li>
          );
        })}
      </ul>
    </Linksstyle>
  );
}
const Linksstyle = styled.div`
  :root {
    --orange: #f6852b;
    --background: #263238;
  }
  background-color: #ddd;
  padding: 30px 0;
  a {
    color: black;
    text-decoration: none;
    line-height: 1;
    font-size: 1.1rem;
    padding: 2px;
  }
  .Uni--Icon{
    color:#f6852b ;
  }
  a:hover {
    /* color:var(--orange) ; */
    /* padding-inline-start: 5px; */
    border-bottom: 2px solid var(--orange);
    /* transform: scale(1.3); */
  }
  
  ul {
    margin: 0 auto;
    padding: 20px 0 10px 0;
    width: 84%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  li {
    line-height: 1.7;
    padding: 6px;
  }
  #vv {
    min-width: 450px;
  }
  @media (max-width: 1000px) {
    ul {
      width: 920px;
    }
    #vv {
      min-width: 60%;
    }
  }
  @media (max-width: 940px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
      width: 80%;
    }
  }
  @media (max-width: 590px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }
  }
`;
