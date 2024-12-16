import React, { Fragment } from "react";
/**
 * [Outlet]
 *  - react-router-dom에서, 중첩 라우팅을 할 수 있도록 해주는 컴포넌트
 *  - 부모 경로와 일치하는 자식 경로를 렌더링하거나, 없
 *  - Outlet : react-router-dom에서, 중첩 라우팅을 할 수 있도록 해주는 컴포넌트
 */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
