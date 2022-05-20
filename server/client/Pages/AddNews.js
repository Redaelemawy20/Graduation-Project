import React from "react";
import NewsForm from "../components/dashboard/NewsForm";
import httpService from "../../services/httpService";
import { toast } from "react-toastify";

function AddNews() {
  const handleSubmit = async (payload, deletedFiles) => {
    try {
      const response = await httpService.post("/news/create", payload);
      toast.success("added successfully!!");
    } catch (error) {
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("falid to add try agian !!");
      throw error;
    }
  };
  return <NewsForm onSave={handleSubmit} />;
}

export default AddNews;
