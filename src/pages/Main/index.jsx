import React from "react";
import { Content, Navbar, Sidebar } from "../../components";


const Main = () => {
  return (
    <div className="flex flex-wrap h-screen">
      <Sidebar />
      <div className="w-10/12">
        <Navbar />
        <Content/>
      </div>
    </div>
  );
};

export default Main;
