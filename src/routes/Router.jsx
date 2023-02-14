import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "../pages/Users";

function Router(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
