import React, { useEffect, useState } from "react";
import { getData } from "../actions.js";
import { connect } from "react-redux";
import DataLoad from "../components/common/DataLoad.js";
import NewsTable from "../components/dashboard/NewsTable.js";

const News = ({ data, getData }) => {
  const listOfNews = data ? data.news : false;
  useEffect(() => {
    getData();
  }, []);

  return listOfNews ? <NewsTable news={listOfNews} /> : <DataLoad />;
};

function mapStateToProps({ news, app }) {
  return { data: news, app };
}
function loadData(store) {
  return store.dispatch(getData());
}

const Element = connect(mapStateToProps, { getData })(News);
export default {
  element: <Element />,
  loadData,
};
