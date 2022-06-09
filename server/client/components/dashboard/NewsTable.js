import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import searchInTable from "../../../util/searchInTable";
import TableBody from "./TableBody";
import TableEntries from "./TableEntries";

import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import { paginate } from "../../../util/paginate";
import Pagination from "../common/pagination";
const NewsTable = ({ news }) => {
  const listOfNews = news;
  const [state, setState] = useState(news);
  const [pagination, setPage] = useState({
    currentPage: 1,
    pageSize: 2,
  });

  const columns = [
    "title",
    "auther",
    "content",
    "category",
    "createdAt",
    "show",
  ];
  const navigate = useNavigate();
  useEffect(() => {
    setState(news);
  }, [news]);

  const rows = state.map((item, index) => {
    const userName = item.User ? item.User.name : "";
    const category = item.NewsCategory ? item.NewsCategory.name : "-";
    state[index].userName = userName;
    state[index].category = category;

    return {
      ...item,
      title: (
        <>
          <span className="flag">
            <img width={50} src={`/files?file=${item.mainImage}`} alt="" />
          </span>
          <a className="text-reset">{item.title} </a>
        </>
      ),
      content: <div className="content">{item.content}</div>,
      auther: (
        <Link to={`/dashboard/users/${item.User.id}/view`}>{userName}</Link>
      ),
      category: item.NewsCategory ? item.NewsCategory.name : "-",
      show: item.show ? "visible" : "hidden",
    };
  });
  function onUpdate(id) {
    navigate(`/dashboard/news/${id}/edit`);
  }
  const getRows = (rows) => {
    return paginate(rows, pagination.currentPage, pagination.pageSize);
  };
  const actions = { value: [{ name: "Update", handler: onUpdate }] };
  const onSearch = (event) => {
    const { value } = event.target;
    setPage({ ...pagination, currentPage: 1 });
    setState(searchInTable(value, listOfNews));
  };
  const handlePageChange = (page) => {
    setPage({ ...pagination, currentPage: page });
  };
  const handlePageSizeChange = (size) => {
    if (!size) size = 1;
    setPage({ currentPage: 1, pageSize: size });
  };
  return (
    <Div className="card-body border-bottom py-3">
      <div className="d-flex mb-3">
        <TableEntries
          value={pagination.pageSize}
          onChange={handlePageSizeChange}
          label="users"
        />
        <TableSearch onSearch={onSearch} />
      </div>

      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap datatable">
          <TableHeader columns={columns.concat("actions")} />
          <TableBody columns={columns} rows={getRows(rows)} actions={actions} />
        </table>
        <Pagination
          itemsCount={state.length}
          currentPage={pagination.currentPage}
          pageSize={pagination.pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </Div>
  );
};
const Div = styled.div`
  table td {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export default NewsTable;
