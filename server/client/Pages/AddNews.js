import React from "react";
import NewsForm from "../components/dashboard/NewsForm";
import httpService from "../../services/httpService";

function AddNews() {
  const handleSubmit = async (payload, deletedFiles) => {
    try {
      const response = await httpService
        .post("/news/create", payload)
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return <NewsForm onSave={handleSubmit} />;
}

export default AddNews;
