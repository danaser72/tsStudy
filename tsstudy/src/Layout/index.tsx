import React, { Fragment, useState } from "react";
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
import { Container, Box, styled } from "@mui/material";
//import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Layout = () => {
  /**사이드바 오픈 여부 */
  const [open, setOpen] = useState(false);
  /** 사이드바 열기 */
  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Header fnOpen={openSidebar} />
      <Sidebar open={open} fnOpen={openSidebar} />
      <Container component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
