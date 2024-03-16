import React, { Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "../routers/routers";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        {routes.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
