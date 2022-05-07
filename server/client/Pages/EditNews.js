import React, { useEffect, useState } from "react";
import NewsForm from "../components/dashboard/NewsForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditNews = (props) => {
  console.log("props", props);
  // let intial_data = null;
  // if (props.data) intial_data = props.data.feed;
  const { id } = useParams();
  const [data, setData] = useState(props.data.feed);
  useEffect(async () => {
    let result = [];
    console.log("excuting", id);
    try {
      result = await axios.get(`http://localhost:3000/admin/news/${id}/edit`);
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
      const response = await axios({
        method: "put",
        url: `http://localhost:3000/admin/news/${id}/update`,
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((result) => {
        console.log(result.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return data ? (
    <NewsForm data={data} onSave={handleSubmit} />
  ) : (
    <div>Loading</div>
  );
};
async function loadData(store, params = null) {
  console.log("RRinvoked**");
  let result = [];
  try {
    result = await axios.get(
      `http://localhost:3000/admin/news/${params.id}/edit`
    );
  } catch (error) {
    console.log("an error has occured");
  }

  return { data: result.data };
}
export default { element: <EditNews />, loadData };
