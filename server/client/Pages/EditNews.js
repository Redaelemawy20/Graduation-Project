import React, { useEffect, useState } from "react";
import NewsForm from "../components/dashboard/NewsForm";
import { useParams } from "react-router-dom";
import httpService from "../../services/httpService";
import DataLoad from "../components/common/DataLoad";
import { toast } from "react-toastify";
const EditNews = (props) => {
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
  const handleSubmit = async (payload) => {
    payload.append("id", id);
    try {
      const response = await httpService.put(`/news/${id}/update`, payload);
      toast.success("updated sucessfully");
    } catch (error) {
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("falid to update try agian !!");

      throw error;
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
