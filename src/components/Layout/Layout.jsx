import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "../Header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Container display={"flex"} flexDirection={"column"} maxWidth={"100wh"} minHeight={"100vh"} padding={0}>
        <Header />
        {children}
      </Container>
    </>
  );
};

export default Layout;
