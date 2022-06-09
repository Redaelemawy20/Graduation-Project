import React, { useEffect, useState } from "react";
import NewsForm from "../components/dashboard/NewsForm";
import httpService from "../../services/httpService";
import { toast } from "react-toastify";
import DataLoad from "../components/common/DataLoad";

function AddNews({ data }) {
  const [newsCategories, setNewsCategories] = useState(null);
  useEffect(async () => {
    const { data } = await getNewsCategories();
    setNewsCategories(data.newsCategories);
    console.log(data);
  }, [data]);
  const handleSubmit = async (payload, deletedFiles) => {
    try {
      await httpService.post("/news/create", payload);
      toast.success("added successfully!!");
    } catch (error) {
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("falid to add try agian !!");
      throw error;
    }
  };
  return newsCategories ? (
    <NewsForm newsCategories={newsCategories} onSave={handleSubmit} />
  ) : (
    <DataLoad />
  );
}

async function getNewsCategories() {
  const { data } = await httpService.get("/news/create");
  return { data };
}

function loadData() {
  return getNewsCategories();
}

export default { element: <AddNews />, loadData };
