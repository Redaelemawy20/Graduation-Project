import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header.js";
import { MdOutlineDateRange } from "react-icons/md";
import httpService from "../../../services/httpService.js";
import DataLoad from "../common/DataLoad.js";
import Nav from "./Nav.js";
function Newsdynamic(props) {
  const headText = {
    fName: "Menofia",
    lName: "University",
  };
  let intial_data = null;
  if (props.data) intial_data = props.data.feed;
  const { id } = useParams();

  const [data, setData] = useState(intial_data);

  useEffect(async () => {
    let result = [];
    try {
      const { data } = await httpService.get(`/news/${id}/edit`);
      setData(data.feed);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data ? (
    <>
      <Header text={headText} />
      <Nav/>
      <Singlenews>
        <div className="slide--news">
          <img
            src={`${data.mainImage.perview}`}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <div className="title--news">
            <p>{data.title}</p>
          </div>
        </div>
        <div className="news--details">
          <p className="date--news">
            <MdOutlineDateRange id="date-icon" />
            {data.createdAt}
          </p>
        </div>
        <div className="content-news">
          <p>{data.content}</p>
        </div>
      </Singlenews>
    </>
  ) : (
    <DataLoad />
  );
}
async function loadData(store, params = null) {
  let result = [];
  try {
    result = await httpService.get(`/news/${params.id}/edit`);
  } catch (error) {
    console.log("an error has occured");
  }

  return { data: result.data };
}
export default { element: <Newsdynamic/>, loadData };
const Singlenews = styled.div`
  .slide--news {
    width: 70%;
    height: 500px;
    position: relative;
    box-sizing: content-box;
    margin: 30px auto;
    display: flex;
    justify-content: center;
  }
  .title--news {
    width: 80%;
    margin: auto;
    position: absolute;
    top: 425px;
    background-color: #ddd;
    padding: 1rem;
    border-radius: 10px;
    height: 150px;
  }
  .title--news p {
    width: 100%;
    font-size: 1.3rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100%;
    line-height: 1.4;
    
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .news--details {
    margin: 100px auto 0 auto;
    width: 70%;
  }
  .news--details .date--news {
    display: flex;
    align-items: center;
    font-size: 1rem;
    background-color: #ddd;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }
  .content-news {
    padding-top: 20px;
    width: 80%;
    margin: 20px auto;
    border-top: 2px solid #ddd;
    font-size: 1.1rem;
  }
  #date-icon {
    margin-inline-end: 4px;
  }
  @media (max-width: 1024px) {
    .slide--news {
      width: 96%;
      min-width: 280px;
    }
    .news--details,
    .content-news {
      width: 92%;
      min-width: 280px;
    }
  }
`;
