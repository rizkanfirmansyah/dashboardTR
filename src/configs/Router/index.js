import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/dashboard" exact element={<Main />} />
        <Route path="/list" exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
