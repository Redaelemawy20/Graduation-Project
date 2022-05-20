import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import searchInTable from "../../../util/searchInTable";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
const NewsTable = ({ news }) => {
  const listOfNews = news;
  const [state, setState] = useState(news);
  const columns = ["title", "auther", "content", "createdAt", "status"];
  const navigate = useNavigate();
  const rows = state.map((item) => {
    return {
      ...item,
      title: (
        <>
          <span className="flag">
            <img src={`/files?file=${item.mainImage}`} alt="" />
          </span>
          <a className="text-reset">{item.title} </a>
        </>
      ),
      content: <div className="content">{item.content}</div>,
    };
  });
  function onUpdate(id) {
    navigate(`/dashboard/news/${id}/edit`);
  }
  const actions = { value: [{ name: "Update", handler: onUpdate }] };
  const onSearch = (event) => {
    const { value } = event.target;
    setState(searchInTable(value, listOfNews));
  };
  return (
    <Div className="card-body border-bottom py-3">
      <div className="d-flex mb-3">
        <TableEntries />
        <TableSearch onSearch={onSearch} />
      </div>

      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <TableHeader columns={columns.concat("actions")} />
          <TableBody columns={columns} rows={rows} actions={actions} />
        </table>
        <TableFooter />
      </div>
    </Div>
  );
};
const Div = styled.div`
  table .content {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export default NewsTable;
