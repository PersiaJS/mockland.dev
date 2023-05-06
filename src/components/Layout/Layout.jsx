import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "../Header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth={"100wh"} minHeight={"100vh"} padding={0}>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
