import React, { useEffect, useState } from "react";
import NewsForm from "../components/dashboard/NewsForm";
import { useParams } from "react-router-dom";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
const EditNews = (props) => {
  console.log("props", props.data);
  let intial_data = null;
  if (props.data) intial_data = props.data.feed;
  const { id } = useParams();
  const [data, setData] = useState(intial_data);
  useEffect(async () => {
    let result = [];
    console.log("excuting", id);
    try {
      result = await httpService.get(`/news/${id}/edit`);
      setData(result.data.feed);
    } catch (error) {
      console.log(error);
    }
    return () => {
      console.log("deleted");
    };
  }, []);
  useEffect(() => {
    console.log("state updated");
  }, [data]);
  const handleSubmit = async (payload) => {
    payload.append("id", id);
    try {
      const response = await httpService
        .put(`/news/${id}/update`, payload)
        .then((result) => {
          console.log(result.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return data ? <NewsForm data={data} onSave={handleSubmit} /> : <DataLoad />;
};
async function loadData(store, params = null) {
  let result = [];
  try {
    result = await httpService.get(`/news/${params.id}/edit`);
  } catch (error) {
    console.log("an error has occured");
  }

  return { data: result.data };
}
export default { element: <EditNews />, loadData };
