import React from "react";
import axios from "axios";
import NewsForm from "../components/dashboard/NewsForm";
function AddNews() {
  const handleSubmit = async (payload, deletedFiles) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/admin/news/create",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <NewsForm onSave={handleSubmit} />;
}

export default AddNews;
