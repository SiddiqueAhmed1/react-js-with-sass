import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import React from "react";

const Layout = () => {
  return (
    <>
     
      <Topbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
