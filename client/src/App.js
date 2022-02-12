import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Tour from "./components/Pages/Tour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </>
  );
}

export default App;
